import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import type { LeadPayload } from "@/components/lead/ContactForm/ContactForm";
import { isValidEmail } from "@/lib/text";

const fieldLimits = { name: 120, email: 160, phone: 40, website: 300, service: 80, message: 4000, source: 80, locale: 5 };

const clean = (value: unknown, limit: number) => (typeof value === "string" ? value.trim().slice(0, limit) : "");

export async function POST(request: Request) {
  let body: Partial<LeadPayload> & { source?: string; locale?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, fieldLimits.name),
    email: clean(body.email, fieldLimits.email),
    phone: clean(body.phone, fieldLimits.phone),
    website: clean(body.website, fieldLimits.website),
    service: clean(body.service, fieldLimits.service),
    message: clean(body.message, fieldLimits.message),
    source: clean(body.source, fieldLimits.source),
    locale: clean(body.locale, fieldLimits.locale),
  };

  if (lead.name.length < 2 || !isValidEmail(lead.email) || body.consent !== true) {
    return NextResponse.json({ error: "validation" }, { status: 422 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      console.error("CONTACT_WEBHOOK_URL is not set; lead could not be delivered.");
      return NextResponse.json({ error: "not_configured" }, { status: 503 });
    }
    console.info("[lead]", lead);
    return NextResponse.json({ ok: true });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, site: siteConfig.name, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`Webhook responded with ${response.status}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead delivery failed", error);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }
}
