import { LeadButton } from "@/components/lead/LeadButton/LeadButton";
import { PerformanceToggle } from "@/components/sections/PerformanceToggle/PerformanceToggle";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import type { Locale } from "@/config/i18n";
import { getPath } from "@/config/routes";
import { getContent } from "@/content";
import { cx } from "@/lib/text";
import styles from "./Hero.module.css";

export function Hero({ locale }: { locale: Locale }) {
  const { home, forms } = getContent(locale);
  const { hero } = home;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={cx("container", styles.inner)}>
        <div className={styles.copy}>
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{hero.badge}</span>
          </p>
          <h1 id="hero-title" className={styles.title}>
            {hero.title.lead} <span className={styles.accent}>{hero.title.accent}</span>
          </h1>
          <p className={styles.description}>{hero.description}</p>
          <div className={styles.actions}>
            <LeadButton size="lg" icon="arrowUpRight" defaults={{ source: "hero", service: forms.auditOption }}>
              {hero.primaryCta}
            </LeadButton>
            <Button href={getPath(locale, "pricing")} variant="ghost" icon="arrowRight" className={styles.textLink}>
              {hero.secondaryCta}
            </Button>
          </div>
          <ul className={styles.assurances}>
            {hero.assurances.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <PerformanceToggle />
        </div>
      </div>

      <div className={styles.platforms}>
        <div className={cx("container", styles.platformsInner)}>
          <p className={styles.platformsLabel}>{home.platformsLabel}</p>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              {[false, true].map((isCopy) => (
                <ul key={String(isCopy)} className={styles.platformList} aria-hidden={isCopy || undefined}>
                  {home.platforms.map((platform) => (
                    <li key={platform}>{platform}</li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
