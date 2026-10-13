import type { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: seoConfig.disallowedPaths },
      { userAgent: seoConfig.aiCrawlers, allow: "/", disallow: seoConfig.disallowedPaths },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
