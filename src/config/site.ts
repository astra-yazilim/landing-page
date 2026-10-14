export const siteConfig = {
  name: "Astra Yazılım",
  shortName: "Astra",
  legalName: "Astra Yazılım",
  logo: "/astra-yazilim-logo.svg",
  favicon: "/favicon.svg",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://astrayazilim.com.tr/").replace(/\/$/, ""),
  themeColor: { dark: "#0B0F17", light: "#F6F8FB" },
  contact: {
    email: "info@astrayazilim.com.tr",
    phone: "" as string,
    whatsapp: "" as string,
    country: "TR",
  },
  social: [] as { label: string; href: string }[],
  isAcceptingClients: true,
};

export const themeStorageKey = "theme";

export const systemLightQuery = "(prefers-color-scheme: light)";

export type Theme = "dark" | "light";

export const defaultTheme: Theme = "dark";
