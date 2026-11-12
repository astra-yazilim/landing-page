import type { PageRouteId } from "./routes";

/**
 * Geçici olarak yayından kaldırılan modüller.
 * İçerik ve kodlar yerinde duruyor; tekrar açmak için ilgili satırı listeden çıkarmanız yeterli.
 * Gizli rotalar menülerde, anasayfada, site haritasında ve gizlilik metninde görünmez; adresleri 404 döner.
 */
export const hiddenRoutes: readonly PageRouteId[] = ["developers", "developerAgreement", "investors"];

export const isRouteEnabled = (routeId: PageRouteId) => !hiddenRoutes.includes(routeId);
