"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher/LanguageSwitcher";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { LeadButton } from "@/components/lead/LeadButton/LeadButton";
import { ThemeToggle } from "@/components/theme/ThemeToggle/ThemeToggle";
import { Icon } from "@/components/ui/Icon/Icon";
import { Logo } from "@/components/ui/Logo/Logo";
import { getPath, mainNavigation, routeSegments, type PageRouteId } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cx } from "@/lib/text";
import styles from "./Header.module.css";

const drawerEase = [0.16, 1, 0.3, 1] as const;

export function Header() {
  const locale = useLocale();
  const { layout } = useContent();
  const segments = useSelectedLayoutSegments();
  const routeKey = segments.join("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [routeKey]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (routeId: PageRouteId) => segments[0] === routeSegments[routeId];
  const logo = <Logo href={getPath(locale, "home")} label={layout.nav.home} />;

  return (
    <header className={cx(styles.header, isScrolled && styles.scrolled)}>
      <div className={cx("container", styles.inner)}>
        {logo}

        <nav className={styles.nav} aria-label={layout.header.navLabel}>
          <ul className={styles.navList}>
            {mainNavigation.map((routeId) => (
              <li key={routeId}>
                <Link
                  href={getPath(locale, routeId)}
                  className={cx(styles.navLink, isActive(routeId) && styles.active)}
                  aria-current={isActive(routeId) ? "page" : undefined}
                >
                  {layout.nav[routeId]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.preferences}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <LeadButton
            variant="glass"
            icon="arrowUpRight"
            className={styles.desktopCta}
            defaults={{ source: "header" }}
          >
            {layout.header.cta}
          </LeadButton>
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
            aria-label={layout.header.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-drawer"
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              id="mobile-drawer"
              className={styles.drawer}
              role="dialog"
              aria-modal="true"
              aria-label={layout.header.mobileNavLabel}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: drawerEase }}
            >
              <div className={styles.drawerTop}>
                {logo}
                <button
                  type="button"
                  className={styles.menuButton}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={layout.header.closeMenu}
                  autoFocus
                >
                  <Icon name="close" size={22} />
                </button>
              </div>
              <nav aria-label={layout.header.mobileNavLabel}>
                <ul className={styles.drawerList}>
                  {mainNavigation.map((routeId, index) => (
                    <motion.li
                      key={routeId}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.05, duration: 0.4, ease: drawerEase }}
                    >
                      <Link
                        href={getPath(locale, routeId)}
                        className={cx(styles.drawerLink, isActive(routeId) && styles.active)}
                        aria-current={isActive(routeId) ? "page" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{layout.nav[routeId]}</span>
                        <Icon name="arrowUpRight" size={20} />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className={styles.drawerBottom}>
                <div className={styles.drawerPreferences}>
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>
                <LeadButton
                  size="lg"
                  fullWidth
                  defaults={{ source: "mobile-drawer" }}
                  onOpen={() => setIsMenuOpen(false)}
                >
                  {layout.header.cta}
                </LeadButton>
                <a className={styles.drawerMail} href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
