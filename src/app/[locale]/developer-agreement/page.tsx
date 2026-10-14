import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/LegalDocument/LegalDocument";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "developerAgreement", ...getContent(locale).pages.developerAgreement.meta });
}

export default async function DeveloperAgreementPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const page = getContent(locale).pages.developerAgreement;

  return (
    <LegalDocument
      locale={locale}
      routeId="developerAgreement"
      title={page.meta.title}
      updatedAt={page.updatedAt}
      updatedLabel={page.updatedLabel}
      sections={page.sections}
    />
  );
}
