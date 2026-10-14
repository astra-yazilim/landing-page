import { defaultLocale, type Locale } from "./i18n";

export const routeSegments = {
  home: "",
  services: "services",
  products: "products",
  projects: "references",
  templates: "templates",
  pricing: "pricing",
  audit: "free-audit",
  about: "about",
  contact: "contact",
  developers: "become-a-developer",
  developerAgreement: "developer-agreement",
  privacy: "privacy",
  terms: "terms",
} as const;

export type RouteId = keyof typeof routeSegments;
export type PageRouteId = Exclude<RouteId, "home">;

export const localizedSlugs: Record<Locale, Record<PageRouteId, string>> = {
  tr: {
    services: "hizmetler",
    products: "yazilim-urunleri",
    projects: "referanslar",
    templates: "hazir-tasarimlar",
    pricing: "fiyatlandirma",
    audit: "ucretsiz-analiz",
    about: "hakkimizda",
    contact: "iletisim",
    developers: "gelistirici-ol",
    developerAgreement: "gelistirici-sozlesmesi",
    privacy: "gizlilik",
    terms: "kullanim-kosullari",
  },
  en: {
    services: "services",
    products: "products",
    projects: "references",
    templates: "templates",
    pricing: "pricing",
    audit: "free-audit",
    about: "about",
    contact: "contact",
    developers: "become-a-developer",
    developerAgreement: "developer-agreement",
    privacy: "privacy",
    terms: "terms",
  },
};

export const pageRouteIds = Object.keys(localizedSlugs[defaultLocale]) as PageRouteId[];

export function getPath(locale: Locale, routeId: RouteId): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  if (routeId === "home") return prefix || "/";
  return `${prefix}/${localizedSlugs[locale][routeId]}`;
}

export const getServicePath = (locale: Locale, slug: string) => `${getPath(locale, "services")}/${slug}`;

export const getRouteIdBySegment = (segment: string | undefined): RouteId | null => {
  if (!segment) return "home";
  const match = pageRouteIds.find((routeId) => routeSegments[routeId] === segment);
  return match ?? null;
};

export const mainNavigation: PageRouteId[] = ["services", "products", "projects", "pricing", "about", "contact"];

export const footerNavigation: PageRouteId[] = [...mainNavigation, "audit", "developers"];

export const legalNavigation: PageRouteId[] = ["privacy", "terms", "contact"];
