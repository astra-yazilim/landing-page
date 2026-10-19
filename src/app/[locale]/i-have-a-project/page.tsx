import type { Metadata } from "next";
import { ApplicationPageLayout } from "@/components/forms/ApplicationPageLayout/ApplicationPageLayout";
import { ProjectApplicationForm } from "@/components/projects/ProjectApplicationForm/ProjectApplicationForm";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { faqSchema, pageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, routeId: "projectApplication", ...getContent(locale).pages.projectApplication.meta });
}

export default async function ProjectApplicationPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const page = getContent(locale).pages.projectApplication;

  return (
    <div className="container">
      <JsonLd data={[pageSchema(locale, "WebPage", "projectApplication", page.meta), faqSchema(page.faq)]} />
      <PageHero
        locale={locale}
        crumbs={[{ label: page.meta.title, href: getPath(locale, "projectApplication") }]}
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
      />
      <ApplicationPageLayout id="project" label={page.title} faqTitle={page.faqTitle} faq={page.faq}>
        <ProjectApplicationForm idPrefix="project" />
      </ApplicationPageLayout>
    </div>
  );
}
