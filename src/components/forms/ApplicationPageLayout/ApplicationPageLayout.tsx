import type { ReactNode } from "react";
import { Faq } from "@/components/sections/Faq/Faq";
import type { FaqItem } from "@/content/types";
import styles from "./ApplicationPageLayout.module.css";

type ApplicationPageLayoutProps = {
  id: string;
  label: string;
  faqTitle: string;
  faq: FaqItem[];
  children: ReactNode;
};

export function ApplicationPageLayout({ id, label, faqTitle, faq, children }: ApplicationPageLayoutProps) {
  return (
    <div className={styles.layout}>
      <section className={styles.formCard} aria-label={label}>
        {children}
      </section>

      <section className={styles.faq} aria-labelledby={`${id}-faq-title`}>
        <h2 id={`${id}-faq-title`} className={styles.faqTitle}>
          {faqTitle}
        </h2>
        <Faq items={faq} name={`${id}-faq`} />
      </section>
    </div>
  );
}
