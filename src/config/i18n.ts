export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

export const localeMeta: Record<Locale, { short: string; name: string; ogLocale: string; dateLocale: string }> = {
  tr: { short: "TR", name: "Türkçe", ogLocale: "tr_TR", dateLocale: "tr-TR" },
  en: { short: "EN", name: "English", ogLocale: "en_US", dateLocale: "en-US" },
};
