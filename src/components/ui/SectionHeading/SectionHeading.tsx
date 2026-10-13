import type { ReactNode } from "react";
import type { Title } from "@/content/types";
import { cx } from "@/lib/text";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  title: Title | string;
  description?: string;
  align?: "start" | "center";
  as?: "h1" | "h2";
  id?: string;
  children?: ReactNode;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "start",
  as: Heading = "h2",
  id,
  children,
}: SectionHeadingProps) {
  const { lead, accent } = typeof title === "string" ? { lead: title, accent: undefined } : title;

  return (
    <div className={cx(styles.heading, styles[align])}>
      {eyebrow ? (
        <p className={styles.eyebrow}>
          {index ? (
            <>
              <span className={styles.index}>{index}</span>
              <span aria-hidden="true">/</span>
            </>
          ) : null}
          <span>{eyebrow}</span>
        </p>
      ) : null}
      <Heading id={id} className={cx(styles.title, Heading === "h1" && styles.pageTitle)}>
        {lead}
        {accent ? (
          <>
            {" "}
            <span className={styles.accent}>{accent}</span>
          </>
        ) : null}
      </Heading>
      {description ? <p className={styles.description}>{description}</p> : null}
      {children}
    </div>
  );
}
