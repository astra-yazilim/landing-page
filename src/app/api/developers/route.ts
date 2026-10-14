import { NextResponse } from "next/server";
import { defaultLocale, isLocale, type Locale } from "@/config/i18n";
import { getPath } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";
import { emailButton, emailLayout, escapeHtml, isEmailConfigured, postToWebhook, sendEmail } from "@/lib/delivery";
import {
  developerFieldLimits,
  getCvError,
  normalizeProfileUrl,
  validateDeveloperApplication,
  type DeveloperApplicationValues,
} from "@/lib/developers";
import { absoluteUrl } from "@/lib/seo";

const text = (form: FormData, key: keyof typeof developerFieldLimits) => {
  const value = form.get(key);
  return typeof value === "string" ? value.trim().slice(0, developerFieldLimits[key]) : "";
};

const list = (form: FormData, key: string) =>
  [...new Set(form.getAll(key).filter((value): value is string => typeof value === "string"))];

function renderTeamEmail(values: DeveloperApplicationValues, cvName: string) {
  const { form } = getContent(defaultLocale).pages.developers;
  const link = (url: string) => (url ? `<a href="${escapeHtml(url)}">${escapeHtml(url)}</a>` : "–");
  const rows: [string, string][] = [
    [form.fields.name.label, escapeHtml(values.name)],
    [form.fields.email.label, `<a href="mailto:${escapeHtml(values.email)}">${escapeHtml(values.email)}</a>`],
    [form.fields.phone.label, escapeHtml(values.phone)],
    [form.fields.location.label, escapeHtml(values.location) || "–"],
    [form.fields.title.label, escapeHtml(values.title)],
    [form.fields.experience.label, escapeHtml(form.experience[values.experience as keyof typeof form.experience])],
    [form.skillsLabel, escapeHtml(values.skills.map((id) => form.skills[id as keyof typeof form.skills]).join(", "))],
    [form.fields.otherSkills.label, escapeHtml(values.otherSkills) || "–"],
    [form.fields.linkedin.label, link(values.linkedin)],
    [form.fields.github.label, link(values.github)],
    [form.fields.portfolio.label, link(values.portfolio)],
    [
      form.workModelsLabel,
      escapeHtml(values.workModels.map((id) => form.workModels[id as keyof typeof form.workModels]).join(", ")),
    ],
    [form.fields.availability.label, escapeHtml(form.availability[values.availability as keyof typeof form.availability])],
    [form.fields.rate.label, escapeHtml(values.rate) || "–"],
    [form.cv.label, escapeHtml(cvName)],
  ];

  const table = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px 8px 0;border-bottom:1px solid #e2e8f0;font-size:13px;color:#64748b;vertical-align:top;white-space:nowrap;">${escapeHtml(label.replace(/\s*\*$/, ""))}</td>
          <td style="padding:8px 0;border-bottom:1px solid #e2e8f0;font-size:14px;">${value}</td>
        </tr>`,
    )
    .join("");

  const about = values.about
    ? `<p style="margin:24px 0 6px;font-size:13px;color:#64748b;">${escapeHtml(form.fields.about.label)}</p>
       <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-line;">${escapeHtml(values.about)}</p>`
    : "";

  return emailLayout(
    defaultLocale,
    `<h1 style="margin:10px 0 18px;font-size:22px;">${escapeHtml(form.email.teamSubject(values.name, values.title))}</h1>
     <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${table}</table>
     ${about}
     <p style="margin:24px 0 0;font-size:13px;color:#64748b;">${escapeHtml(form.email.teamCvNote)}</p>`,
  );
}

function renderApplicantEmail(values: DeveloperApplicationValues, locale: Locale) {
  const { form } = getContent(locale).pages.developers;
  return emailLayout(
    locale,
    `<h1 style="margin:10px 0 12px;font-size:22px;">${escapeHtml(form.email.applicantGreeting(values.name))}</h1>
     <p style="margin:0;font-size:15px;line-height:1.6;color:#475569;">${escapeHtml(form.email.applicantText)}</p>
     <p style="margin:28px 0 0;">${emailButton(absoluteUrl(getPath(locale, "developerAgreement")), form.email.agreementLink)}</p>`,
  );
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const trap = form.get("company");
  if (typeof trap === "string" && trap.trim()) {
    return NextResponse.json({ ok: true });
  }

  const requestedLocale = form.get("locale");
  const locale = typeof requestedLocale === "string" && isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const values: DeveloperApplicationValues = {
    name: text(form, "name"),
    email: text(form, "email"),
    phone: text(form, "phone"),
    location: text(form, "location"),
    title: text(form, "title"),
    experience: String(form.get("experience") ?? ""),
    skills: list(form, "skills"),
    otherSkills: text(form, "otherSkills"),
    linkedin: text(form, "linkedin"),
    github: text(form, "github"),
    portfolio: text(form, "portfolio"),
    workModels: list(form, "workModels"),
    availability: String(form.get("availability") ?? ""),
    rate: text(form, "rate"),
    about: text(form, "about"),
    privacyConsent: form.get("privacyConsent") === "true",
    agreementConsent: form.get("agreementConsent") === "true",
  };
  const cvEntry = form.get("cv");
  const cv = cvEntry instanceof File ? cvEntry : null;

  if (Object.keys(validateDeveloperApplication(values)).length > 0 || getCvError(cv) || !cv) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const application = {
    ...values,
    linkedin: normalizeProfileUrl(values.linkedin, "linkedin.com") ?? "",
    github: values.github ? (normalizeProfileUrl(values.github, "github.com") ?? "") : "",
    portfolio: values.portfolio ? (normalizeProfileUrl(values.portfolio) ?? "") : "",
  };
  const { developerAgreement } = getContent(locale).pages;
  const record = {
    type: "developer-application",
    status: "pending",
    source: "developer-application",
    locale,
    ...application,
    cvFileName: cv.name,
    consents: {
      privacyNotice: true,
      frameworkAgreement: true,
      agreementVersion: developerAgreement.updatedAt,
      acceptedAt: new Date().toISOString(),
    },
  };

  if (!isEmailConfigured()) {
    if (process.env.NODE_ENV === "production") {
      console.error("RESEND_API_KEY is not set; developer application could not be delivered.");
      return NextResponse.json({ error: "not_configured" }, { status: 503 });
    }
    console.info("[developer-application]", record);
    return NextResponse.json({ ok: true });
  }

  const { form: content } = getContent(defaultLocale).pages.developers;
  try {
    await sendEmail({
      to: process.env.DEVELOPER_APPLICATIONS_EMAIL ?? siteConfig.contact.email,
      subject: content.email.teamSubject(application.name, application.title),
      html: renderTeamEmail(application, cv.name),
      replyTo: application.email,
      attachments: [{ filename: cv.name, content: Buffer.from(await cv.arrayBuffer()).toString("base64") }],
    });
  } catch (error) {
    console.error("Developer application could not be delivered", error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  const followUps = await Promise.allSettled([
    postToWebhook(record),
    sendEmail({
      to: application.email,
      subject: getContent(locale).pages.developers.form.email.applicantSubject,
      html: renderApplicantEmail(application, locale),
    }),
  ]);
  followUps.forEach((outcome) => {
    if (outcome.status === "rejected") console.error("Developer application follow-up failed", outcome.reason);
  });

  return NextResponse.json({ ok: true });
}
