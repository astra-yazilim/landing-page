"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Icon } from "@/components/ui/Icon/Icon";
import { defaultTheme, siteConfig, themeStorageKey, type Theme } from "@/config/site";
import styles from "./ThemeToggle.module.css";

const readTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

export function ThemeToggle() {
  const { layout } = useContent();
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  const toggle = () => {
    const nextTheme: Theme = readTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", siteConfig.themeColor[nextTheme]);
    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch {}
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={theme === "dark" ? layout.theme.switchToLight : layout.theme.switchToDark}
    >
      <Icon name="sun" size={18} className={styles.sun} />
      <Icon name="moon" size={18} className={styles.moon} />
    </button>
  );
}
