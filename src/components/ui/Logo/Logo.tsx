import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cx } from "@/lib/text";
import styles from "./Logo.module.css";
import { logoPaths, logoViewBox } from "./logoPaths";

type LogoProps = {
  href: string;
  label: string;
};

export function Logo({ href, label }: LogoProps) {
  return (
    <Link href={href} className={styles.logo} aria-label={`${siteConfig.name} — ${label}`}>
      <svg className={styles.graphic} viewBox={logoViewBox} aria-hidden="true" focusable="false">
        {logoPaths.map((path) => (
          <path key={path.d} d={path.d} className={cx(path.tone === "accent" ? styles.accent : styles.ink)} />
        ))}
      </svg>
    </Link>
  );
}
