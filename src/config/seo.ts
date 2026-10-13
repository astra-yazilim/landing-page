import type { PageRouteId } from "./routes";

export const seoConfig = {
  location: { regionCode: "TR-34", countryCode: "TR" },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
    yandex: process.env.YANDEX_SITE_VERIFICATION ?? "",
    bing: process.env.BING_SITE_VERIFICATION ?? "",
  },
  disallowedPaths: ["/api/"],
  aiCrawlers: [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot-Extended",
  ],
  llms: {
    primaryRoutes: ["services", "products", "projects", "pricing", "audit", "about", "contact"] as PageRouteId[],
    optionalRoutes: ["privacy", "terms"] as PageRouteId[],
  },
};
