import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Chatbot } from "@/components/chat/Chatbot/Chatbot";
import { CookieConsent } from "@/components/consent/CookieConsent/CookieConsent";
import { LocaleProvider } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { LeadModalProvider } from "@/components/lead/LeadModal/LeadModal";
import { JsonLd } from "@/components/seo/JsonLd/JsonLd";
import { ThemeSync } from "@/components/theme/ThemeSync/ThemeSync";
import { seoConfig } from "@/config/seo";
import { defaultTheme, siteConfig, systemLightQuery, themeStorageKey } from "@/config/site";
import { getContent } from "@/content";
import { generateLocaleParams, resolveLocale, type LocaleParams } from "@/lib/params";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { cx } from "@/lib/text";
import "../globals.css";
import styles from "./layout.module.css";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const themeScript = `(function(){try{var t=null;try{t=localStorage.getItem(${JSON.stringify(themeStorageKey)});}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia(${JSON.stringify(systemLightQuery)}).matches?"light":"dark";}document.documentElement.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",${JSON.stringify(siteConfig.themeColor)}[t]);}catch(e){}})();`;

export const generateStaticParams = generateLocaleParams;

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { site } = getContent(locale);

  return {
    ...buildMetadata({
      locale,
      title: site.title,
      description: site.description,
      routeId: "home",
      absoluteTitle: true,
    }),
    metadataBase: new URL(siteConfig.url),
    title: { default: site.title, template: `%s | ${siteConfig.name}` },
    applicationName: siteConfig.name,
    icons: { icon: [{ url: siteConfig.favicon, type: "image/svg+xml" }] },
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.legalName,
    publisher: siteConfig.legalName,
    formatDetection: { telephone: false },
    category: "technology",
    verification: {
      ...(seoConfig.verification.google ? { google: seoConfig.verification.google } : {}),
      ...(seoConfig.verification.yandex ? { yandex: seoConfig.verification.yandex } : {}),
      ...(seoConfig.verification.bing ? { other: { "msvalidate.01": seoConfig.verification.bing } } : {}),
    },
    other: {
      "geo.region": seoConfig.location.regionCode,
      "geo.placename": site.city,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor[defaultTheme],
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = LocaleParams & { children: ReactNode };

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const locale = await resolveLocale(params);
  const { layout } = getContent(locale);

  return (
    <html
      lang={locale}
      data-theme={defaultTheme}
      data-scroll-behavior="smooth"
      className={cx(headingFont.variable, bodyFont.variable, monoFont.variable)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LocaleProvider locale={locale}>
          <ThemeSync />
          <a href="#main" className={styles.skipLink}>
            {layout.common.skipToContent}
          </a>
          <LeadModalProvider>
            <Header />
            <main id="main" className={styles.main}>
              {children}
            </main>
            <Footer locale={locale} />
            <Chatbot />
          </LeadModalProvider>
          <CookieConsent />
        </LocaleProvider>
        <JsonLd data={[organizationSchema(locale), websiteSchema(locale)]} />
      </body>
    </html>
  );
}
