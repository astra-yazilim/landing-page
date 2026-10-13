import type { MetadataRoute } from "next";
import { defaultLocale } from "@/config/i18n";
import { defaultTheme, siteConfig } from "@/config/site";
import { getContent } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  const { site } = getContent(defaultLocale);

  return {
    name: site.title,
    short_name: siteConfig.shortName,
    description: site.description,
    lang: defaultLocale,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.themeColor[defaultTheme],
    theme_color: siteConfig.themeColor[defaultTheme],
    icons: [{ src: siteConfig.favicon, sizes: "any", type: "image/svg+xml" }],
  };
}
