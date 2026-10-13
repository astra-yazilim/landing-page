"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { localeMeta, locales, type Locale } from "@/config/i18n";
import { getPath, getRouteIdBySegment, getServicePath } from "@/config/routes";
import { getServiceBySlug, getServiceSlugs } from "@/lib/services";
import { cx } from "@/lib/text";
import styles from "./LanguageSwitcher.module.css";

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const { layout } = useContent();
  const [segment, slug] = useSelectedLayoutSegments();

  const getHref = (targetLocale: Locale) => {
    const routeId = getRouteIdBySegment(segment);
    if (!routeId) return getPath(targetLocale, "home");
    if (routeId === "services" && slug) {
      const service = getServiceBySlug(currentLocale, slug);
      return service
        ? getServicePath(targetLocale, getServiceSlugs(service.id)[targetLocale])
        : getPath(targetLocale, "services");
    }
    return getPath(targetLocale, routeId);
  };

  return (
    <nav className={styles.switcher} aria-label={layout.language.label}>
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getHref(locale)}
          hrefLang={locale}
          lang={locale}
          className={cx(styles.option, locale === currentLocale && styles.active)}
          aria-current={locale === currentLocale ? "true" : undefined}
          title={localeMeta[locale].name}
        >
          {localeMeta[locale].short}
        </Link>
      ))}
    </nav>
  );
}
