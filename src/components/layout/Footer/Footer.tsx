import Link from "next/link";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton/CookiePreferencesButton";
import { Button } from "@/components/ui/Button/Button";
import { Logo } from "@/components/ui/Logo/Logo";
import type { Locale } from "@/config/i18n";
import { footerNavigation, getPath, getServicePath, legalNavigation } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";
import { getServices } from "@/lib/services";
import { cx } from "@/lib/text";
import styles from "./Footer.module.css";

export function Footer({ locale }: { locale: Locale }) {
  const { layout, site } = getContent(locale);
  const isOpen = siteConfig.isAcceptingClients;

  return (
    <footer className={styles.footer}>
      <div className={cx("container", styles.top)}>
        <Logo href={getPath(locale, "home")} label={layout.nav.home} />
        <p className={cx(styles.status, !isOpen && styles.statusClosed)}>
          <span className={styles.statusDot} aria-hidden="true" />
          {isOpen ? site.availability.open : site.availability.closed}
        </p>
        <Button href={getPath(locale, "contact")} icon="arrowUpRight">
          {layout.footer.cta}
        </Button>
      </div>

      <div className={cx("container", styles.links)}>
        <p className={styles.tagline}>{site.tagline}</p>

        <nav aria-label={layout.footer.pagesTitle}>
          <h2 className={styles.columnTitle}>{layout.footer.pagesTitle}</h2>
          <ul className={styles.list}>
            {footerNavigation.map((routeId) => (
              <li key={routeId}>
                <Link href={getPath(locale, routeId)}>{layout.nav[routeId]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={layout.footer.servicesTitle}>
          <h2 className={styles.columnTitle}>{layout.footer.servicesTitle}</h2>
          <ul className={styles.list}>
            {getServices(locale).map((service) => (
              <li key={service.id}>
                <Link href={getServicePath(locale, service.slug)}>{service.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={cx("container", styles.bottom)}>
        <p>
          © {new Date("2013").getFullYear()} {siteConfig.legalName} · {site.region}. {layout.footer.rights}
        </p>
        <nav aria-label={layout.footer.legalLabel}>
          <ul className={styles.legal}>
            🇵🇸
            <li>
              <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            {legalNavigation.map((routeId) => (
              <li key={routeId}>
                <Link href={getPath(locale, routeId)}>{layout.nav[routeId]}</Link>
              </li>
            ))}
            <li>
              <CookiePreferencesButton label={layout.cookies.settings} className={styles.legalButton} />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
