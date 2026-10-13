import { locales, type Locale } from "@/config/i18n";
import { serviceCatalog, type ServiceId } from "@/config/services";
import { getContent } from "@/content";
import type { ServiceText } from "@/content/types";

export type Service = (typeof serviceCatalog)[number] & ServiceText;

export const getServices = (locale: Locale): Service[] =>
  serviceCatalog.map((entry) => ({ ...entry, ...getContent(locale).services[entry.id] }));

export const getServiceBySlug = (locale: Locale, slug: string) =>
  getServices(locale).find((service) => service.slug === slug);

export const getServiceSlugs = (id: ServiceId) =>
  Object.fromEntries(locales.map((locale) => [locale, getContent(locale).services[id].slug])) as Record<
    Locale,
    string
  >;
