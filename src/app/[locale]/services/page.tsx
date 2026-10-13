import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps/ProcessSteps";
import { ServicesGrid } from "@/components/sections/ServicesGrid/ServicesGrid";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { serviceListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getServices } from "@/lib/services";
import styles from "./page.module.css";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "services", ...getContent(locale).pages.services.meta });
}

export default async function ServicesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const { pages, home } = getContent(locale);
  const page = pages.services;

  return (
    <>
      <JsonLd data={serviceListSchema(locale, getServices(locale))} />
      <div className="container">
        <PageHero
          locale={locale}
          crumbs={[{ label: page.meta.title, href: getPath(locale, "services") }]}
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className={styles.grid} aria-label={page.meta.title}>
          <ServicesGrid locale={locale} headingLevel="h2" />
        </section>
        <section className={styles.section} aria-labelledby="process-title">
          <div className={styles.head}>
            <SectionHeading id="process-title" eyebrow={home.process.eyebrow} title={home.process.title} />
          </div>
          <ProcessSteps steps={home.process.steps} />
        </section>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
