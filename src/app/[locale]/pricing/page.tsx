import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { CreditEstimator } from "@/components/sections/CreditEstimator/CreditEstimator";
import { Faq } from "@/components/sections/Faq/Faq";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { PricingTabs } from "@/components/sections/PricingTabs/PricingTabs";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "pricing", ...getContent(locale).pages.pricing.meta });
}

export default async function PricingPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { pages, faq } = getContent(locale);
  const page = pages.pricing;

  return (
    <>
      <JsonLd data={faqSchema(faq.pricing)} />
      <div className="container">
        <PageHero
          locale={locale}
          crumbs={[{ label: page.meta.title, href: getPath(locale, "pricing") }]}
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />

        <section className={styles.tiers} aria-label={page.meta.title}>
          <PricingTabs headingLevel="h2" />
        </section>

        <section className={styles.section}>
          <Reveal>
            <CreditEstimator />
          </Reveal>
        </section>

        <section className={styles.faq} aria-labelledby="pricing-faq-title">
          <h2 id="pricing-faq-title" className={styles.faqTitle}>
            {page.faqTitle}
          </h2>
          <Faq items={faq.pricing} name="pricing-faq" />
        </section>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
