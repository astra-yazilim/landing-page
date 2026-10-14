import { siteConfig, systemLightQuery, themeStorageKey, type Theme } from "@/config/site";

export function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(themeStorageKey);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

export const getSystemTheme = (): Theme => (window.matchMedia(systemLightQuery).matches ? "light" : "dark");

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", siteConfig.themeColor[theme]);
}
