import { NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/config/i18n";
import { getContent } from "@/content";
import { auditStrategies, type AuditResult } from "@/lib/audit";
import { renderReportEmail, reportHost, summarizeReports, verifyAuditResult } from "@/lib/auditReport";
import { isEmailConfigured, postToWebhook, sendEmail } from "@/lib/delivery";
import { isValidEmail } from "@/lib/text";

const emailLimit = 160;

type ReportRequest = {
  email?: unknown;
  locale?: unknown;
  reports?: unknown;
  marketingConsent?: unknown;
  company?: unknown;
};

export async function POST(request: Request) {
  let body: ReportRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().slice(0, emailLimit) : "";
  const locale = typeof body.locale === "string" && isLocale(body.locale) ? body.locale : defaultLocale;
  const submitted = Array.isArray(body.reports) ? body.reports.slice(0, auditStrategies.length) : [];
  const verified = submitted.map(verifyAuditResult).filter((report): report is AuditResult => report !== null);
  const reports = auditStrategies.flatMap((strategy) => verified.find((report) => report.strategy === strategy) ?? []);

  if (!isValidEmail(email) || reports.length === 0 || reports.some((report) => report.url !== reports[0].url)) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const lead = {
    name: "",
    email,
    phone: "",
    website: reports[0].url,
    service: getContent(locale).forms.auditOption,
    message: summarizeReports(reports, locale),
    source: "audit-report",
    locale,
    marketingConsent: body.marketingConsent === true,
  };

  const { subject, html } = renderReportEmail(reports, locale);
  if (!isEmailConfigured()) {
    if (process.env.NODE_ENV === "production") {
      console.error("RESEND_API_KEY is not set; audit report could not be sent.");
      return NextResponse.json({ error: "not_configured" }, { status: 503 });
    }
    console.info("[audit-report]", lead);
    return NextResponse.json({ ok: true });
  }

  try {
    await sendEmail({ to: email, subject, html });
  } catch (error) {
    console.error(`Audit report for ${reportHost(reports[0].url)} could not be sent`, error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  try {
    await postToWebhook(lead);
  } catch (error) {
    console.error("Audit report lead could not be recorded", error, lead);
  }

  return NextResponse.json({ ok: true });
}
