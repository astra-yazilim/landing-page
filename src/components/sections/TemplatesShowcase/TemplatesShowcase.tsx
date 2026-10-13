"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useId, useMemo, useState } from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { LeadButton } from "@/components/lead/LeadButton/LeadButton";
import { Icon } from "@/components/ui/Icon/Icon";
import type { TemplateFeature } from "@/content/types";
import {
  templateCategories,
  templateFeatures,
  templatePageSize,
  templates,
  templateSource,
} from "@/lib/templates";
import { cx, normalizeText } from "@/lib/text";
import styles from "./TemplatesShowcase.module.css";

const cardEase = [0.16, 1, 0.3, 1] as const;

export function TemplatesShowcase() {
  const { pages, forms } = useContent();
  const page = pages.templates;
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [features, setFeatures] = useState<TemplateFeature[]>([]);
  const [visibleCount, setVisibleCount] = useState(templatePageSize);

  const getCategoryName = (slug: string) =>
    page.categories[slug] ?? templateCategories.find((item) => item.slug === slug)?.name ?? slug;

  const availableFeatures = useMemo(
    () => templateFeatures.filter((feature) => templates.some((template) => template.features.includes(feature))),
    [],
  );

  const filtered = useMemo(() => {
    const terms = normalizeText(query).split(" ").filter(Boolean);
    return templates.filter((template) => {
      if (category && !template.categories.includes(category)) return false;
      if (!features.every((feature) => template.features.includes(feature))) return false;
      if (terms.length === 0) return true;
      const haystack = normalizeText(
        [
          template.title,
          template.keywords,
          ...template.categories.flatMap((slug) => [
            page.categories[slug] ?? "",
            templateCategories.find((item) => item.slug === slug)?.name ?? "",
          ]),
          ...template.features.map((feature) => page.features[feature]),
        ].join(" "),
      );
      return terms.every((term) => haystack.includes(term));
    });
  }, [query, category, features, page]);

  const visible = filtered.slice(0, visibleCount);

  const resetPaging = () => setVisibleCount(templatePageSize);

  const toggleFeature = (feature: TemplateFeature) => {
    setFeatures((current) =>
      current.includes(feature) ? current.filter((item) => item !== feature) : [...current, feature],
    );
    resetPaging();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className={styles.toolbar}>
        <div className={styles.search}>
          <label htmlFor={searchId} className="visually-hidden">
            {page.searchLabel}
          </label>
          <Icon name="search" size={18} className={styles.searchIcon} />
          <input
            id={searchId}
            type="search"
            className={styles.searchInput}
            placeholder={page.searchPlaceholder}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              resetPaging();
            }}
          />
        </div>
        {availableFeatures.length > 0 ? (
          <div className={styles.features} role="group" aria-label={page.featureLabel}>
            {availableFeatures.map((feature) => (
              <button
                key={feature}
                type="button"
                className={cx(styles.chip, features.includes(feature) && styles.chipActive)}
                aria-pressed={features.includes(feature)}
                onClick={() => toggleFeature(feature)}
              >
                {page.features[feature]}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <div className={styles.categories} role="group" aria-label={page.categoryLabel}>
        {[{ slug: "", name: page.allLabel }, ...templateCategories].map((item) => (
          <button
            key={item.slug}
            type="button"
            className={cx(styles.chip, item.slug === category && styles.chipActive)}
            aria-pressed={item.slug === category}
            onClick={() => {
              setCategory(item.slug);
              resetPaging();
            }}
          >
            {item.slug ? getCategoryName(item.slug) : item.name}
          </button>
        ))}
      </div>

      <p className={styles.count} aria-live="polite">
        {page.resultCount(visible.length, filtered.length)}
      </p>

      {filtered.length === 0 ? <p className={styles.empty}>{page.emptyText}</p> : null}

      <ul className={styles.grid}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((template, index) => (
            <motion.li
              key={template.id}
              layout
              className={styles.item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: cardEase, delay: (index % templatePageSize) * 0.025 }}
            >
              <article className={styles.card}>
                <a
                  href={template.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={styles.preview}
                  aria-label={`${template.title} — ${page.previewLabel}`}
                >
                  <img
                    src={template.image}
                    alt=""
                    width={480}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className={styles.image}
                  />
                  <span className={styles.previewHint}>
                    {page.previewLabel}
                    <Icon name="external" size={15} />
                  </span>
                </a>
                <div className={styles.body}>
                  <h2 className={styles.title}>{template.title}</h2>
                  <p className={styles.meta}>{template.categories.map(getCategoryName).join(" · ")}</p>
                  {template.features.length > 0 ? (
                    <ul className={styles.tags}>
                      {template.features.map((feature) => (
                        <li key={feature}>{page.features[feature]}</li>
                      ))}
                    </ul>
                  ) : null}
                  <LeadButton
                    variant="glass"
                    fullWidth
                    className={styles.quote}
                    defaults={{
                      source: `template-${template.id}`,
                      service: forms.otherOption,
                      message: page.inquiryMessage(template.title),
                    }}
                  >
                    {page.quoteLabel}
                  </LeadButton>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {visibleCount < filtered.length ? (
        <div className={styles.more}>
          <button
            type="button"
            className={styles.moreButton}
            onClick={() => setVisibleCount((current) => current + templatePageSize)}
          >
            {page.moreLabel}
            <Icon name="chevronDown" size={18} />
          </button>
        </div>
      ) : null}

      <p className={styles.source}>{page.sourceNote(templateSource.name)}</p>
    </MotionConfig>
  );
}
