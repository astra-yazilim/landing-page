import type { IconName } from "@/components/ui/Icon/Icon";
import type { ServiceAccent } from "@/config/services";

type ProductEntry = { id: string; icon: IconName; accent: ServiceAccent; image: string | null };

export const productCatalog = [
  { id: "stock", icon: "package", accent: "emerald", image: null },
  { id: "supply", icon: "truck", accent: "indigo", image: null },
  { id: "deposit", icon: "receipt", accent: "emerald", image: null },
  { id: "workflow", icon: "settings", accent: "indigo", image: null },
] as const satisfies readonly ProductEntry[];

export type ProductId = (typeof productCatalog)[number]["id"];
