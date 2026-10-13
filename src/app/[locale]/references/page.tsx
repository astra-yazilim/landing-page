import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase/ProjectsShowcase";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { getReferences } from "@/lib/catalog";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { projectListSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "projects", ...getContent(locale).pages.projects.meta });
}

export default async function ReferencesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const page = getContent(locale).pages.projects;

  return (
    <>
      <JsonLd data={projectListSchema(locale, getReferences(locale))} />
      <div className="container">
        <PageHero
          locale={locale}
          crumbs={[{ label: page.meta.title, href: getPath(locale, "projects") }]}
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className={styles.grid} aria-label={page.meta.title}>
          <ProjectsShowcase />
        </section>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
