import { siteConfig } from "@/config/site";

const resendEndpoint = "https://api.resend.com/emails";
const requestTimeout = 10_000;

export type EmailAttachment = { filename: string; content: string };

type Email = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: EmailAttachment[];
};

export const isEmailConfigured = () => Boolean(process.env.RESEND_API_KEY);

export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export async function sendEmail({ to, subject, html, replyTo, attachments }: Email) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not set");

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM ?? `${siteConfig.name} <${siteConfig.contact.email}>`,
      to: [to],
      reply_to: replyTo ?? siteConfig.contact.email,
      subject,
      html,
      ...(attachments?.length ? { attachments } : {}),
    }),
    signal: AbortSignal.timeout(requestTimeout),
  });
  if (!response.ok) throw new Error(`Resend responded with ${response.status}: ${await response.text()}`);
}

export async function postToWebhook(payload: Record<string, unknown>) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) throw new Error("CONTACT_WEBHOOK_URL is not set");

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, site: siteConfig.name, receivedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(requestTimeout),
  });
  if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
}

export const emailLayout = (locale: string, body: string) => `<!doctype html>
<html lang="${locale}">
  <body style="margin:0;padding:24px 12px;background:#f1f5f9;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a;">
    <div style="max-width:600px;margin:0 auto;padding:32px 28px;border-radius:16px;background:#ffffff;">
      <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#059669;">${escapeHtml(siteConfig.name)}</p>
      ${body}
    </div>
  </body>
</html>`;

export const emailButton = (href: string, label: string) =>
  `<a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 22px;border-radius:999px;background:#059669;color:#ffffff;font-weight:700;text-decoration:none;">${escapeHtml(label)}</a>`;
