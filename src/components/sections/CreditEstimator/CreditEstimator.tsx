"use client";

import { useId, useState, type CSSProperties } from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { LeadButton } from "@/components/lead/LeadButton/LeadButton";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard/SpotlightCard";
import { estimatorConfig, type TaskSizeId } from "@/config/pricing";
import { cx } from "@/lib/text";
import styles from "./CreditEstimator.module.css";

type CreditEstimatorProps = {
  index?: string;
};

export function CreditEstimator({ index }: CreditEstimatorProps) {
  const { pricing } = useContent();
  const { estimator } = pricing;
  const sliderId = useId();
  const { taskCount: taskRange, sizes } = estimatorConfig;
  const [taskCount, setTaskCount] = useState<number>(taskRange.initial);
  const [sizeId, setSizeId] = useState<TaskSizeId>(estimatorConfig.initialSizeId);

  const activeSize = sizes.find((size) => size.id === sizeId) ?? sizes[0];
  const credits = taskCount * activeSize.credits;
  const recommendation =
    estimatorConfig.recommendations.find((item) => credits <= item.maxCredits) ??
    estimatorConfig.recommendations[estimatorConfig.recommendations.length - 1];
  const recommendedTier = pricing.models.credits.tiers[recommendation.tierId];
  const progress = ((taskCount - taskRange.min) / (taskRange.max - taskRange.min)) * 100;

  return (
    <div className={styles.layout}>
      <div className={styles.controls}>
        <SectionHeading
          index={index}
          eyebrow={estimator.eyebrow}
          title={estimator.title}
          description={estimator.description}
        />

        <div className={styles.control}>
          <div className={styles.controlHead}>
            <label htmlFor={sliderId}>{estimator.taskCountLabel}</label>
            <output htmlFor={sliderId} className={styles.controlValue}>
              {taskCount}
            </output>
          </div>
          <input
            id={sliderId}
            className={styles.slider}
            type="range"
            min={taskRange.min}
            max={taskRange.max}
            step={taskRange.step}
            value={taskCount}
            onChange={(event) => setTaskCount(Number(event.target.value))}
            style={{ "--progress": `${progress}%` } as CSSProperties}
          />
          <div className={styles.sliderScale} aria-hidden="true">
            <span>{taskRange.min}</span>
            <span>{taskRange.max}</span>
          </div>
        </div>

        <fieldset className={styles.control}>
          <legend className={styles.legend}>{estimator.sizeLabel}</legend>
          <div className={styles.sizes}>
            {sizes.map((size) => (
              <label key={size.id} className={cx(styles.size, size.id === sizeId && styles.sizeActive)}>
                <input
                  type="radio"
                  name={`${sliderId}-size`}
                  value={size.id}
                  checked={size.id === sizeId}
                  onChange={() => setSizeId(size.id)}
                  className="visually-hidden"
                />
                <span className={styles.sizeLabel}>{estimator.sizes[size.id].label}</span>
                <span className={styles.sizeCredits}>
                  {size.credits} {estimator.unit}
                </span>
                <span className={styles.sizeExample}>{estimator.sizes[size.id].example}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <SpotlightCard accent="indigo" className={styles.result} aria-live="polite">
        <p className={styles.resultLabel}>{estimator.resultLabel}</p>
        <p className={styles.resultValue}>
          <span className={styles.resultNumber}>{credits}</span>
          <span className={styles.resultUnit}>{estimator.unit}</span>
        </p>
        <div className={styles.recommendation}>
          <span className={styles.recommendationLabel}>{estimator.recommendationLabel}</span>
          <span className={styles.recommendationName}>{recommendedTier.name}</span>
        </div>
        <LeadButton
          fullWidth
          icon="arrowRight"
          defaults={{
            source: "credit-estimator",
            message: estimator.inquiryMessage(taskCount, estimator.sizes[sizeId].label, credits),
          }}
        >
          {estimator.cta}
        </LeadButton>
        <p className={styles.disclaimer}>{estimator.disclaimer}</p>
      </SpotlightCard>
    </div>
  );
}
