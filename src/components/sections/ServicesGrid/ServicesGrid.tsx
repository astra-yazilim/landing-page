import Link from "next/link";
import type { CSSProperties } from "react";
import { Icon } from "@/components/ui/Icon/Icon";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard/SpotlightCard";
import type { Locale } from "@/config/i18n";
import { getPath, getServicePath } from "@/config/routes";
import { getContent } from "@/content";
import { getServices, type Service } from "@/lib/services";
import { cx } from "@/lib/text";
import styles from "./ServicesGrid.module.css";

type ServicesGridProps = {
  locale: Locale;
  items?: Service[];
  headingLevel?: "h2" | "h3";
  bento?: boolean;
};

export function ServicesGrid({ locale, items, headingLevel: Heading = "h3", bento = true }: ServicesGridProps) {
  const { layout, home } = getContent(locale);
  const services = items ?? getServices(locale);
  const { tile } = home.services;
  const tileSpans = {
    "--tile-span-medium": 2 - ((services.length + 1) % 2),
    "--tile-span-large": 3 - (services.length % 3),
  } as CSSProperties;

  return (
    <ul className={styles.grid}>
      {services.map((service, index) => {
        const isFeatured = bento && service.featured;

        return (
          <li key={service.id} className={cx(styles.item, isFeatured && styles.featuredItem)}>
            <Reveal delay={(index % 3) * 0.07} className={styles.reveal}>
              <SpotlightCard
                accent={service.accent}
                className={cx(styles.card, styles[service.accent], isFeatured && styles.featured)}
              >
                <div className={styles.cardTop}>
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  <Icon name={service.icon} size={22} className={styles.icon} />
                </div>

                <div className={styles.body}>
                  <Heading className={styles.title}>
                    <Link href={getServicePath(locale, service.slug)} className={styles.link}>
                      {service.title}
                    </Link>
                  </Heading>
                  <p className={styles.summary}>{service.summary}</p>
                </div>

                {isFeatured ? (
                  <ul className={styles.highlights}>
                    {service.features.map((feature) => (
                      <li key={feature.title}>
                        <Icon name="check" size={16} />
                        {feature.title}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className={styles.cardBottom}>
                  <ul className={styles.tags}>
                    {service.tags.slice(0, isFeatured ? 6 : 3).map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <span className={styles.more} aria-hidden="true">
                    <span className={styles.moreLabel}>{layout.common.learnMore}</span>
                    <Icon name="arrowUpRight" size={18} />
                  </span>
                </div>
              </SpotlightCard>
            </Reveal>
          </li>
        );
      })}
      {bento ? (
        <li className={cx(styles.item, styles.tileItem)} style={tileSpans}>
          <Reveal className={styles.reveal}>
            <div className={styles.tile}>
              <div className={styles.body}>
                <p className={styles.tileTitle}>{tile.title}</p>
                <p className={styles.summary}>{tile.text}</p>
              </div>
              <Link href={getPath(locale, "contact")} className={styles.tileLink}>
                {tile.cta}
                <Icon name="arrowRight" size={18} />
              </Link>
            </div>
          </Reveal>
        </li>
      ) : null}
    </ul>
  );
}
