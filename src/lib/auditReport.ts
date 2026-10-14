import { createHmac, timingSafeEqual } from "node:crypto";
import type { Locale } from "@/config/i18n";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { criticalScore, type AuditResult, type SignedAuditResult } from "@/lib/audit";
import { emailButton, emailLayout, escapeHtml } from "@/lib/delivery";
import { absoluteUrl } from "@/lib/seo";

const maxReportAge = 60 * 60 * 1000;

// Reports are signed so the e-mail endpoint only ever sends content this server measured itself.
const signingSecret = () =>
  process.env.RESEND_API_KEY ?? (process.env.NODE_ENV === "production" ? null : "development");

const sign = (result: AuditResult, secret: string) =>
  createHmac("sha256", secret).update(JSON.stringify(result)).digest("hex");

export function signAuditResult(result: AuditResult): SignedAuditResult {
  const secret = signingSecret();
  return secret ? { ...result, token: sign(result, secret) } : result;
}

export function verifyAuditResult(input: unknown): AuditResult | null {
  const secret = signingSecret();
  if (!secret || typeof input !== "object" || input === null) return null;

  const { token, ...result } = input as SignedAuditResult;
  if (typeof token !== "string") return null;

  const expected = Buffer.from(sign(result, secret));
  const received = Buffer.from(token);
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) return null;
  if (Date.now() - result.measuredAt > maxReportAge) return null;
  return result;
}

const scoreColor = (value: number) => (value >= 90 ? "#059669" : value >= criticalScore ? "#b45309" : "#b91c1c");

export const reportHost = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export function summarizeReports(reports: AuditResult[], locale: Locale) {
  const { audit } = getContent(locale).home;
  return reports
    .map(
      (report) =>
        `${audit.strategies[report.strategy]}: ${report.scores
          .map((score) => `${audit.categories[score.id]} ${score.value}`)
          .join(", ")}`,
    )
    .join(" | ");
}

export function renderReportEmail(reports: AuditResult[], locale: Locale) {
  const { audit } = getContent(locale).home;
  const labels = { ...audit.categories, ...audit.metrics };
  const host = reportHost(reports[0].url);
  const heading = "margin:28px 0 10px;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;";
  const cell = "padding:8px 0;border-bottom:1px solid #e2e8f0;font-size:14px;";

  const sections = reports
    .map((report) => {
      const scores = report.scores
        .map(
          (score) =>
            `<td style="padding:14px 8px;text-align:center;border:1px solid #e2e8f0;border-radius:8px;">
              <div style="font-size:28px;font-weight:800;color:${scoreColor(score.value)};">${score.value}</div>
              <div style="font-size:12px;color:#475569;">${escapeHtml(audit.categories[score.id])}</div>
            </td>`,
        )
        .join("");

      const metrics = report.metrics
        .map(
          (metric) =>
            `<tr>
              <td style="${cell}color:#475569;">${escapeHtml(audit.metrics[metric.id])}</td>
              <td style="${cell}text-align:right;font-weight:600;color:${metric.critical ? "#b91c1c" : "#0f172a"};">${escapeHtml(metric.value)}</td>
            </tr>`,
        )
        .join("");

      const issues = report.issues
        .map((issue) => {
          const causes =
            issue.causes.length > 0
              ? `<p style="margin:10px 0 4px;font-size:13px;color:#64748b;">${escapeHtml(audit.causesLabel)}</p>
                 <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.5;">${issue.causes
                   .map((cause) => `<li>${escapeHtml(cause)}</li>`)
                   .join("")}</ul>`
              : "";
          return `<div style="margin:0 0 12px;padding:14px 16px;border:1px solid #fecaca;border-radius:8px;background:#fef2f2;">
            <p style="margin:0 0 6px;font-weight:700;">${escapeHtml(labels[issue.id])} <span style="color:#b91c1c;">${escapeHtml(issue.value)}</span></p>
            <p style="margin:0;font-size:14px;line-height:1.55;">${escapeHtml(audit.explanations[issue.id])}</p>
            ${causes}
          </div>`;
        })
        .join("");

      const opportunities = report.opportunities.map((item) => `<li>${escapeHtml(item)}</li>`).join("");

      return `<h2 style="margin:36px 0 12px;font-size:20px;">${escapeHtml(audit.strategies[report.strategy])}</h2>
        <table role="presentation" width="100%" cellspacing="6" cellpadding="0"><tr>${scores}</tr></table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:12px;">${metrics}</table>
        ${issues ? `<p style="${heading}">${escapeHtml(audit.issuesTitle)}</p>${issues}` : ""}
        ${
          opportunities
            ? `<p style="${heading}">${escapeHtml(audit.opportunitiesTitle)}</p>
               <ul style="margin:0;padding-left:18px;font-size:14px;line-height:1.6;">${opportunities}</ul>`
            : ""
        }`;
    })
    .join("");

  const html = emailLayout(
    locale,
    `<h1 style="margin:10px 0 6px;font-size:24px;">${escapeHtml(audit.report.subject(host))}</h1>
      <p style="margin:0;font-size:15px;line-height:1.55;color:#475569;">${escapeHtml(audit.report.intro)}</p>
      ${sections}
      <p style="margin:36px 0 0;">${emailButton(absoluteUrl(getPath(locale, "contact")), audit.report.cta)}</p>
      <p style="margin:28px 0 0;font-size:12px;line-height:1.5;color:#94a3b8;">${escapeHtml(audit.resultSource)}<br />${escapeHtml(audit.report.footer)}</p>`,
  );

  return { subject: audit.report.subject(host), html };
}
