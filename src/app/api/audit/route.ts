import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/config/i18n";
import {
  auditCategoryIds,
  auditMetricIds,
  criticalScore,
  isAuditStrategy,
  type AuditCategoryId,
  type AuditIssue,
  type AuditResult,
} from "@/lib/audit";
import { signAuditResult } from "@/lib/auditReport";
import { normalizeWebsiteUrl } from "@/lib/text";

export const maxDuration = 60;

const pageSpeedEndpoint = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const requestTimeout = 55_000;
const maxOpportunities = 4;
const maxCauses = 3;
const passingAuditScore = 0.9;
const criticalAuditScore = criticalScore / 100;

type LighthouseAudit = {
  title?: string;
  score?: number | null;
  displayValue?: string;
  metricSavings?: Record<string, number>;
  details?: { type?: string; overallSavingsMs?: number };
};

type LighthouseAuditRef = { id: string; weight?: number; group?: string; acronym?: string };

type PageSpeedResponse = {
  lighthouseResult?: {
    categories?: Record<string, { score?: number | null; auditRefs?: LighthouseAuditRef[] }>;
    audits?: Record<string, LighthouseAudit>;
  };
};

const isFailing = (audit: LighthouseAudit | undefined, threshold: number): audit is LighthouseAudit =>
  Boolean(audit?.title) && typeof audit?.score === "number" && audit.score < threshold;

const describeCause = (audit: LighthouseAudit) => {
  const title = (audit.title ?? "").replaceAll("`", "");
  return audit.displayValue ? `${title} (${audit.displayValue})` : title;
};

const totalSavings = (audit: LighthouseAudit) =>
  Object.values(audit.metricSavings ?? {}).reduce((sum, value) => sum + value, 0);

function collectIssues(
  categories: NonNullable<NonNullable<PageSpeedResponse["lighthouseResult"]>["categories"]>,
  audits: Record<string, LighthouseAudit>,
): AuditIssue[] {
  const performanceRefs = categories.performance?.auditRefs ?? [];
  const performanceAudits = performanceRefs
    .filter((ref) => ref.group !== "metrics")
    .map((ref) => audits[ref.id])
    .filter((audit) => isFailing(audit, passingAuditScore));

  const causesBySavings = (savings: (audit: LighthouseAudit) => number) =>
    performanceAudits
      .filter((audit) => savings(audit) > 0)
      .sort((a, b) => savings(b) - savings(a))
      .slice(0, maxCauses)
      .map(describeCause);

  const performanceCauses = causesBySavings(totalSavings);

  const categoryCauses = (id: AuditCategoryId) =>
    id === "performance"
      ? performanceCauses
      : (categories[id]?.auditRefs ?? [])
          .filter((ref) => ref.group !== "hidden" && isFailing(audits[ref.id], criticalAuditScore))
          .sort((a, b) => (b.weight ?? 0) - (a.weight ?? 0))
          .slice(0, maxCauses)
          .map((ref) => describeCause(audits[ref.id]));

  const scoreIssues = auditCategoryIds.flatMap((id) => {
    const score = categories[id]?.score;
    if (typeof score !== "number" || Math.round(score * 100) >= criticalScore) return [];
    return [{ id, value: String(Math.round(score * 100)), causes: categoryCauses(id) }];
  });

  const metricIssues = auditMetricIds.flatMap((id) => {
    const audit = audits[id];
    if (!audit?.displayValue || !isFailing(audit, criticalAuditScore)) return [];
    const acronym = performanceRefs.find((ref) => ref.id === id)?.acronym ?? "";
    const causes = causesBySavings((item) => item.metricSavings?.[acronym] ?? 0);
    return [{ id, value: audit.displayValue, causes: causes.length > 0 ? causes : performanceCauses }];
  });

  return [...scoreIssues, ...metricIssues];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedLocale = searchParams.get("locale") ?? "";
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const targetUrl = normalizeWebsiteUrl(searchParams.get("url") ?? "");
  if (!targetUrl) {
    return NextResponse.json({ error: "invalid_url" }, { status: 400 });
  }
  const requestedStrategy = searchParams.get("strategy") ?? "";
  const strategy = isAuditStrategy(requestedStrategy) ? requestedStrategy : "mobile";

  const query = new URLSearchParams({ url: targetUrl, strategy, locale });
  auditCategoryIds.forEach((id) => query.append("category", id));
  if (process.env.PAGESPEED_API_KEY) query.set("key", process.env.PAGESPEED_API_KEY);

  try {
    const response = await fetch(`${pageSpeedEndpoint}?${query}`, {
      signal: AbortSignal.timeout(requestTimeout),
      cache: "no-store",
    });
    if (!response.ok) {
      return NextResponse.json({ error: "unavailable" }, { status: 502 });
    }

    const data = (await response.json()) as PageSpeedResponse;
    const categories = data.lighthouseResult?.categories;
    const audits = data.lighthouseResult?.audits;
    if (!categories || !audits) {
      return NextResponse.json({ error: "unavailable" }, { status: 502 });
    }

    const result: AuditResult = {
      url: targetUrl,
      strategy,
      measuredAt: Date.now(),
      scores: auditCategoryIds.flatMap((id) => {
        const score = categories[id]?.score;
        return typeof score === "number" ? [{ id, value: Math.round(score * 100) }] : [];
      }),
      metrics: auditMetricIds.flatMap((id) => {
        const value = audits[id]?.displayValue;
        return value ? [{ id, value, critical: isFailing(audits[id], criticalAuditScore) }] : [];
      }),
      opportunities: Object.values(audits)
        .filter(
          (audit) =>
            audit.details?.type === "opportunity" &&
            typeof audit.score === "number" &&
            audit.score < 0.9 &&
            Boolean(audit.title),
        )
        .sort((a, b) => (b.details?.overallSavingsMs ?? 0) - (a.details?.overallSavingsMs ?? 0))
        .slice(0, maxOpportunities)
        .map((audit) => audit.title as string),
      issues: collectIssues(categories, audits),
    };

    if (result.scores.length === 0) {
      return NextResponse.json({ error: "unavailable" }, { status: 502 });
    }

    return NextResponse.json(signAuditResult(result));
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}
