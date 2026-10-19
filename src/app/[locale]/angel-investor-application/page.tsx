import type { Metadata } from "next";
import { ApplicationPageLayout } from "@/components/forms/ApplicationPageLayout/ApplicationPageLayout";
import { InvestorApplicationForm } from "@/components/investors/InvestorApplicationForm/InvestorApplicationForm";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { faqSchema, pageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "investors", ...getContent(locale).pages.investors.meta });
}

export default async function InvestorApplicationPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const page = getContent(locale).pages.investors;

  return (
    <div className="container">
      <JsonLd data={[pageSchema(locale, "WebPage", "investors", page.meta), faqSchema(page.faq)]} />
      <PageHero
        locale={locale}
        crumbs={[{ label: page.meta.title, href: getPath(locale, "investors") }]}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <ApplicationPageLayout id="investor" label={page.title} faqTitle={page.faqTitle} faq={page.faq}>
        <InvestorApplicationForm idPrefix="investor" />
      </ApplicationPageLayout>
    </div>
  );
}
