import { PageHero } from "@/components/sections/PageHero/PageHero";
import { localeMeta, type Locale } from "@/config/i18n";
import { getPath, type PageRouteId } from "@/config/routes";
import { siteConfig } from "@/config/site";
import type { LegalSection } from "@/content/types";
import styles from "./LegalDocument.module.css";

type LegalDocumentProps = {
  locale: Locale;
  routeId: PageRouteId;
  title: string;
  updatedAt: string;
  updatedLabel: string;
  sections: LegalSection[];
};

export function LegalDocument({ locale, routeId, title, updatedAt, updatedLabel, sections }: LegalDocumentProps) {
  const formattedDate = new Intl.DateTimeFormat(localeMeta[locale].dateLocale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(updatedAt));

  return (
    <div className="container">
      <PageHero locale={locale} crumbs={[{ label: title, href: getPath(locale, routeId) }]} title={title}>
        <p className={styles.updated}>
          {updatedLabel}: <time dateTime={updatedAt}>{formattedDate}</time>
        </p>
      </PageHero>
      <article className={styles.document}>
        {sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.heading}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <p className={styles.contact}>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </p>
      </article>
    </div>
  );
}
