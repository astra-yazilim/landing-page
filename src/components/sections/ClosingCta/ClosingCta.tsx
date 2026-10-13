import { Button } from "@/components/ui/Button/Button";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import type { Locale } from "@/config/i18n";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import styles from "./ClosingCta.module.css";

export function ClosingCta({ locale }: { locale: Locale }) {
  const { closingCta } = getContent(locale).home;

  return (
    <section className={styles.section} aria-labelledby="closing-cta-title">
      <div className="container">
        <Reveal>
          <div className={styles.band}>
            <div className={styles.copy}>
              <h2 id="closing-cta-title" className={styles.title}>
                {closingCta.title.lead} <span className={styles.accent}>{closingCta.title.accent}</span>
              </h2>
              <p className={styles.description}>{closingCta.description}</p>
            </div>
            <div className={styles.actions}>
              <Button href={getPath(locale, "contact")} size="lg" icon="arrowUpRight">
                {closingCta.primaryCta}
              </Button>
              <Button href={getPath(locale, "audit")} variant="glass" size="lg">
                {closingCta.secondaryCta}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
