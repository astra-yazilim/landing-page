"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Button } from "@/components/ui/Button/Button";
import { getPath } from "@/config/routes";
import { seoConfig } from "@/config/seo";
import {
  clearAnalyticsCookies,
  openConsentEvent,
  readConsent,
  storeConsent,
  type ConsentChoice,
} from "@/lib/consent";
import styles from "./CookieConsent.module.css";

const measurementId = seoConfig.analytics.googleMeasurementId;
const analyticsEnabled = Boolean(measurementId) && process.env.NODE_ENV === "production";

export function CookieConsent() {
  const locale = useLocale();
  const { layout } = useContent();
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setChoice(stored);
    setIsOpen(stored === null);

    const open = () => setIsOpen(true);
    window.addEventListener(openConsentEvent, open);
    return () => window.removeEventListener(openConsentEvent, open);
  }, []);

  const decide = (next: ConsentChoice) => {
    storeConsent(next);
    setIsOpen(false);
    if (next === "denied" && choice === "granted") {
      clearAnalyticsCookies();
      window.location.reload();
      return;
    }
    setChoice(next);
  };

  return (
    <>
      {analyticsEnabled && choice === "granted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(measurementId)});`}
          </Script>
        </>
      ) : null}

      {isOpen ? (
        <section className={styles.banner} role="region" aria-label={layout.cookies.label}>
          <p className={styles.message}>
            {layout.cookies.message}{" "}
            <Link href={getPath(locale, "privacy")}>{layout.cookies.policyLink}</Link>
          </p>
          <div className={styles.actions}>
            <Button variant="glass" onClick={() => decide("denied")}>
              {layout.cookies.reject}
            </Button>
            <Button onClick={() => decide("granted")}>{layout.cookies.accept}</Button>
          </div>
        </section>
      ) : null}
    </>
  );
}
