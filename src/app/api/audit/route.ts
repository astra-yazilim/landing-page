import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/config/i18n";
import { auditCategoryIds, auditMetricIds, type AuditResult } from "@/lib/audit";
import { normalizeWebsiteUrl } from "@/lib/text";

export const maxDuration = 60;

const pageSpeedEndpoint = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
const requestTimeout = 55_000;
const maxOpportunities = 4;

type LighthouseAudit = {
  title?: string;
  score?: number | null;
  displayValue?: string;
  details?: { type?: string; overallSavingsMs?: number };
};

type PageSpeedResponse = {
  lighthouseResult?: {
    categories?: Record<string, { score?: number | null }>;
    audits?: Record<string, LighthouseAudit>;
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedLocale = searchParams.get("locale") ?? "";
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const targetUrl = normalizeWebsiteUrl(searchParams.get("url") ?? "");
  if (!targetUrl) {
    return NextResponse.json({ error: "invalid_url" }, { status: 400 });
  }

  const query = new URLSearchParams({ url: targetUrl, strategy: "mobile", locale });
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
      scores: auditCategoryIds.flatMap((id) => {
        const score = categories[id]?.score;
        return typeof score === "number" ? [{ id, value: Math.round(score * 100) }] : [];
      }),
      metrics: auditMetricIds.flatMap((id) => {
        const value = audits[id]?.displayValue;
        return value ? [{ id, value }] : [];
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
    };

    if (result.scores.length === 0) {
      return NextResponse.json({ error: "unavailable" }, { status: 502 });
    }

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}
