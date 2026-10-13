"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState, type KeyboardEvent } from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { LeadButton } from "@/components/lead/LeadButton/LeadButton";
import { Icon } from "@/components/ui/Icon/Icon";
import { SpotlightCard } from "@/components/ui/SpotlightCard/SpotlightCard";
import { highlightedTierId, pricingModelIds, pricingTierIds, type PricingModelId } from "@/config/pricing";
import { cx } from "@/lib/text";
import styles from "./PricingTabs.module.css";

type PricingTabsProps = {
  headingLevel?: "h2" | "h3";
};

export function PricingTabs({ headingLevel: Heading = "h3" }: PricingTabsProps) {
  const { pricing } = useContent();
  const baseId = useId();
  const [activeId, setActiveId] = useState<PricingModelId>(pricingModelIds[0]);
  const activeModel = pricing.models[activeId];

  const tabId = (id: string) => `${baseId}-tab-${id}`;
  const panelId = `${baseId}-panel`;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (pricingModelIds.indexOf(activeId) + offset + pricingModelIds.length) % pricingModelIds.length;
    const nextId = pricingModelIds[nextIndex];
    setActiveId(nextId);
    document.getElementById(tabId(nextId))?.focus();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.tabs} role="tablist" aria-label={pricing.tabsLabel} onKeyDown={handleKeyDown}>
          {pricingModelIds.map((modelId) => {
            const isActive = modelId === activeId;
            return (
              <button
                key={modelId}
                id={tabId(modelId)}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                className={cx(styles.tab, isActive && styles.tabActive)}
                onClick={() => setActiveId(modelId)}
              >
                {isActive ? (
                  <motion.span
                    layoutId={`${baseId}-pill`}
                    className={styles.tabPill}
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                ) : null}
                <span className={styles.tabLabel}>{pricing.models[modelId].label}</span>
              </button>
            );
          })}
        </div>
        <p className={styles.modelDescription} aria-live="polite">
          {activeModel.description}
        </p>
      </div>

      <div id={panelId} role="tabpanel" aria-labelledby={tabId(activeId)} className={styles.panel}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={activeId}
            className={styles.tiers}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {pricingTierIds.map((tierId) => {
              const tier = activeModel.tiers[tierId];
              const isHighlighted = tierId === highlightedTierId;

              return (
                <li key={tierId} className={styles.tierItem}>
                  <SpotlightCard highlighted={isHighlighted} className={styles.tier}>
                    <div className={styles.tierHead}>
                      <Heading className={styles.tierName}>{tier.name}</Heading>
                      {tier.badge ? <span className={styles.badge}>{tier.badge}</span> : null}
                    </div>
                    <div className={styles.priceBlock}>
                      <p className={styles.price}>{tier.price ?? pricing.fallbackPrice}</p>
                      <p className={styles.priceNote}>{tier.priceNote}</p>
                    </div>
                    <p className={styles.audience}>{tier.audience}</p>
                    <ul className={styles.features}>
                      {tier.features.map((feature) => (
                        <li key={feature}>
                          <Icon name="check" size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <LeadButton
                      variant={isHighlighted ? "primary" : "glass"}
                      icon="arrowUpRight"
                      fullWidth
                      className={styles.tierCta}
                      defaults={{
                        source: `pricing-${activeId}-${tierId}`,
                        message: pricing.inquiryMessage(tier.name, activeModel.label),
                      }}
                    >
                      {tier.cta}
                    </LeadButton>
                  </SpotlightCard>
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
