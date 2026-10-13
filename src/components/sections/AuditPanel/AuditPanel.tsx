import { AuditWidget } from "@/components/sections/AuditWidget/AuditWidget";
import { Icon } from "@/components/ui/Icon/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import type { Locale } from "@/config/i18n";
import { getContent } from "@/content";
import styles from "./AuditPanel.module.css";

type AuditPanelProps = {
  locale: Locale;
  index?: string;
  headingLevel?: "h1" | "h2";
  titleId?: string;
};

export function AuditPanel({ locale, index, headingLevel = "h2", titleId = "audit-title" }: AuditPanelProps) {
  const { audit } = getContent(locale).home;

  return (
    <div className={styles.panel}>
      <span className={styles.spark} aria-hidden="true">
        <Icon name="sparkles" size={22} />
      </span>
      <SectionHeading
        as={headingLevel}
        id={titleId}
        align="center"
        index={index}
        eyebrow={audit.eyebrow}
        title={audit.title}
        description={audit.description}
      />
      <AuditWidget />
    </div>
  );
}
