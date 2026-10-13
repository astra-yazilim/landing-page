import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta/ClosingCta";
import { PageHero } from "@/components/sections/PageHero/PageHero";
import { TemplatesShowcase } from "@/components/sections/TemplatesShowcase/TemplatesShowcase";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    ...buildMetadata({ locale, routeId: "templates", ...getContent(locale).pages.templates.meta }),
    robots: { index: false, follow: true },
  };
}

export default async function TemplatesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const page = getContent(locale).pages.templates;

  return (
    <>
      <div className="container">
        <PageHero
          locale={locale}
          crumbs={[{ label: page.meta.title, href: getPath(locale, "templates") }]}
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <section className={styles.showcase} aria-label={page.meta.title}>
          <TemplatesShowcase />
        </section>
      </div>
      <ClosingCta locale={locale} />
    </>
  );
}
