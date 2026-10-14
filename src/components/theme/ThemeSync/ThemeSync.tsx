"use client";

import { useEffect, useLayoutEffect } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { systemLightQuery } from "@/config/site";
import { applyTheme, getSystemTheme, readStoredTheme } from "@/lib/theme";

export function ThemeSync() {
  const locale = useLocale();

  useLayoutEffect(() => {
    applyTheme(readStoredTheme() ?? getSystemTheme());
  }, [locale]);

  useEffect(() => {
    const query = window.matchMedia(systemLightQuery);
    const followSystem = () => {
      if (!readStoredTheme()) applyTheme(getSystemTheme());
    };
    query.addEventListener("change", followSystem);
    return () => query.removeEventListener("change", followSystem);
  }, []);

  return null;
}
