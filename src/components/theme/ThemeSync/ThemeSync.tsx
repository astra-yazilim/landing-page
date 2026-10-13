"use client";

import { useLayoutEffect } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { themeStorageKey } from "@/config/site";

export function ThemeSync() {
  const locale = useLocale();

  useLayoutEffect(() => {
    try {
      const storedTheme = localStorage.getItem(themeStorageKey);
      if (storedTheme === "light" || storedTheme === "dark") {
        document.documentElement.dataset.theme = storedTheme;
      }
    } catch {}
  }, [locale]);

  return null;
}
