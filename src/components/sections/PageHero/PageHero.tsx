import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import type { Locale } from "@/config/i18n";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import type { Title } from "@/content/types";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  locale: Locale;
  crumbs: Crumb[];
  eyebrow?: string;
  title?: Title | string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ locale, crumbs, eyebrow, title, description, children }: PageHeroProps) {
  const { layout } = getContent(locale);

  return (
    <div className={styles.hero}>
      <JsonLd data={breadcrumbSchema(locale, crumbs)} />
      <nav aria-label={layout.common.breadcrumbLabel}>
        <ol className={styles.crumbs}>
          <li>
            <Link href={getPath(locale, "home")}>{layout.nav.home}</Link>
          </li>
          {crumbs.map((crumb, index) => (
            <li key={crumb.href}>
              {index === crumbs.length - 1 ? (
                <span aria-current="page">{crumb.label}</span>
              ) : (
                <Link href={crumb.href}>{crumb.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      {title ? (
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description}>
          {children}
        </SectionHeading>
      ) : (
        children
      )}
    </div>
  );
}
