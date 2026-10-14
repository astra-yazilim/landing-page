"use client";

import { useEffect, useState } from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Icon } from "@/components/ui/Icon/Icon";
import { defaultTheme, themeStorageKey, type Theme } from "@/config/site";
import { applyTheme } from "@/lib/theme";
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
    applyTheme(nextTheme);
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
