"use client";

import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Button } from "@/components/ui/Button/Button";
import { getPath } from "@/config/routes";
import { cx } from "@/lib/text";
import styles from "./NotFoundView.module.css";

export function NotFoundView() {
  const locale = useLocale();
  const { notFound } = useContent().pages;

  return (
    <div className={cx("container", styles.wrapper)}>
      <p className={styles.code}>{notFound.code}</p>
      <h1 className={styles.title}>{notFound.title}</h1>
      <p className={styles.description}>{notFound.description}</p>
      <Button href={getPath(locale, "home")} size="lg" icon="arrowRight">
        {notFound.cta}
      </Button>
    </div>
  );
}
