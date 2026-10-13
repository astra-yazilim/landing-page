import type { IconName } from "@/components/ui/Icon/Icon";

export type ServiceAccent = "emerald" | "indigo";

export const serviceCatalog = [
  { id: "ecommerce", icon: "store", accent: "emerald", featured: true },
  { id: "web", icon: "gauge", accent: "indigo", featured: false },
  { id: "mobile", icon: "smartphone", accent: "emerald", featured: false },
  { id: "automation", icon: "workflow", accent: "indigo", featured: false },
  { id: "marketplace", icon: "cart", accent: "emerald", featured: false },
  { id: "ads", icon: "megaphone", accent: "indigo", featured: false },
  { id: "seo", icon: "trending", accent: "emerald", featured: false },
  { id: "creative", icon: "image", accent: "indigo", featured: false },
  { id: "analytics", icon: "pie", accent: "emerald", featured: false },
  { id: "hosting", icon: "cloud", accent: "indigo", featured: false },
] as const satisfies readonly { id: string; icon: IconName; accent: ServiceAccent; featured: boolean }[];

export type ServiceId = (typeof serviceCatalog)[number]["id"];

export const platforms = [
  "ikas",
  "Ticimax",
  "WooCommerce",
  "Next.js",
  "React Native",
  "Expo",
  "Vercel",
  "Cloudflare",
];
