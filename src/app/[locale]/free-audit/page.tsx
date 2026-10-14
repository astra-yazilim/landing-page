import type { Metadata } from "next";
import { AuditPanel } from "@/components/sections/AuditPanel/AuditPanel";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { pageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "audit", ...getContent(locale).pages.audit.meta });
}

export default async function AuditPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const page = getContent(locale).pages.audit;

  return (
    <>
      <JsonLd data={pageSchema(locale, "WebPage", "audit", page.meta)} />
      <div className="container">
        <PageHero locale={locale} crumbs={[{ label: page.meta.title, href: getPath(locale, "audit") }]} />
        <div className={styles.panel}>
          <AuditPanel locale={locale} headingLevel="h1" />
        </div>
        <section className={styles.section} aria-labelledby="audit-steps-title">
          <h2 id="audit-steps-title" className={styles.title}>
            {page.stepsTitle}
          </h2>
          <ProcessSteps steps={page.steps} />
        </section>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
