import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard/SpotlightCard";
import type { Locale } from "@/config/i18n";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { cx } from "@/lib/text";
import styles from "./Comparison.module.css";

type ComparisonProps = {
  locale: Locale;
  index?: string;
};

export function Comparison({ locale, index }: ComparisonProps) {
  const { comparison } = getContent(locale).home;
  const { oldWay, newWay } = comparison;

  return (
    <section className={styles.section} aria-labelledby="comparison-title">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionHeading id="comparison-title" index={index} eyebrow={comparison.eyebrow} title={comparison.title} />
          <div className={styles.intro}>
            {comparison.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Button href={getPath(locale, "about")} variant="ghost" icon="arrowRight" className={styles.link}>
              {comparison.link}
            </Button>
          </div>
        </Reveal>

        <div className={styles.grid}>
          <Reveal>
            <article className={cx(styles.card, styles.oldCard)}>
              <h3 className={styles.label}>{oldWay.label}</h3>
              <ul className={styles.list}>
                {oldWay.items.map((item) => (
                  <li key={item}>
                    <Icon name="close" size={16} className={styles.marker} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard highlighted className={cx(styles.card, styles.newCard)}>
              <h3 className={styles.label}>{newWay.label}</h3>
              <ul className={styles.list}>
                {newWay.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={16} className={styles.marker} />
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>

        <ul className={styles.advantages}>
          {comparison.advantages.map((advantage, advantageIndex) => (
            <li key={advantage.title}>
              <Reveal delay={advantageIndex * 0.06} className={styles.advantage}>
                <Icon name={advantage.icon} size={24} className={styles.advantageIcon} />
                <div>
                  <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                  <p className={styles.advantageText}>{advantage.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
