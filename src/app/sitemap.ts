import type { MetadataRoute } from "next";
import { locales } from "@/config/i18n";
import type { RouteId } from "@/config/routes";
import { serviceCatalog } from "@/config/services";
import { absoluteUrl, getLanguageAlternates, getLocalizedPaths } from "@/lib/seo";
import { getServiceSlugs } from "@/lib/services";

type ChangeFrequency = "weekly" | "monthly" | "yearly";

const staticEntries: { routeId: RouteId; priority: number; changeFrequency: ChangeFrequency }[] = [
  { routeId: "home", priority: 1, changeFrequency: "weekly" },
  { routeId: "services", priority: 0.9, changeFrequency: "monthly" },
  { routeId: "products", priority: 0.9, changeFrequency: "monthly" },
  { routeId: "projects", priority: 0.8, changeFrequency: "monthly" },
  { routeId: "pricing", priority: 0.9, changeFrequency: "monthly" },
  { routeId: "audit", priority: 0.8, changeFrequency: "monthly" },
  { routeId: "contact", priority: 0.8, changeFrequency: "yearly" },
  { routeId: "about", priority: 0.6, changeFrequency: "yearly" },
  { routeId: "privacy", priority: 0.2, changeFrequency: "yearly" },
  { routeId: "terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const groups = [
    ...staticEntries.map((entry) => ({ ...entry, paths: getLocalizedPaths(entry.routeId) })),
    ...serviceCatalog.map((service) => ({
      priority: 0.8,
      changeFrequency: "monthly" as const,
      paths: getLocalizedPaths("services", getServiceSlugs(service.id)),
    })),
  ];

  return groups.flatMap((group) =>
    locales.map((locale) => ({
      url: absoluteUrl(group.paths[locale]),
      changeFrequency: group.changeFrequency,
      priority: group.priority,
      alternates: { languages: getLanguageAlternates(group.paths) },
    })),
  );
}
