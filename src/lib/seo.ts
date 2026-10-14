import type { Metadata } from "next";
import { defaultLocale, localeMeta, locales, type Locale } from "@/config/i18n";
import { getPath, getServicePath, type RouteId } from "@/config/routes";
import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { getContent } from "@/content";

type PageMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  routeId: RouteId;
  serviceSlugs?: Record<Locale, string>;
  keywords?: string[];
  absoluteTitle?: boolean;
};

export const absoluteUrl = (path = "/") => `${siteConfig.url}${path === "/" ? "" : path}`;

export function getLocalizedPaths(routeId: RouteId, serviceSlugs?: Record<Locale, string>) {
  return Object.fromEntries(
    locales.map((locale) => [
      locale,
      serviceSlugs ? getServicePath(locale, serviceSlugs[locale]) : getPath(locale, routeId),
    ]),
  ) as Record<Locale, string>;
}

export function getLanguageAlternates(paths: Record<Locale, string>) {
  return {
    ...Object.fromEntries(locales.map((locale) => [locale, absoluteUrl(paths[locale])])),
    "x-default": absoluteUrl(paths[defaultLocale]),
  };
}

export function buildMetadata({
  locale,
  title,
  description,
  routeId,
  serviceSlugs,
  keywords,
  absoluteTitle,
}: PageMetadataInput): Metadata {
  const paths = getLocalizedPaths(routeId, serviceSlugs);
  const url = absoluteUrl(paths[locale]);
  const ogImage = {
    url: absoluteUrl(seoConfig.ogImages[locale]),
    width: 1200,
    height: 630,
    alt: siteConfig.name,
    type: "image/jpeg",
  };
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? getContent(locale).site.keywords,
    alternates: { canonical: url, languages: getLanguageAlternates(paths) },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: localeMeta[locale].ogLocale,
      alternateLocale: locales.filter((item) => item !== locale).map((item) => localeMeta[item].ogLocale),
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage] },
  };
}
