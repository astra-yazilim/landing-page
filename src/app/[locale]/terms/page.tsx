import type { Metadata } from "next";
import { LegalDocument } from "@/components/sections/LegalDocument/LegalDocument";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "terms", ...getContent(locale).pages.terms.meta });
}

export default async function LegalPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const page = getContent(locale).pages.terms;

  return (
    <LegalDocument
      locale={locale}
      routeId="terms"
      title={page.meta.title}
      updatedAt={page.updatedAt}
      updatedLabel={page.updatedLabel}
      sections={page.sections}
    />
  );
}
