"use client";

import { animate, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import type { PerformanceState } from "@/content/types";
import { cx } from "@/lib/text";
import styles from "./PerformanceToggle.module.css";

const ringRadius = 52;
const ringCircumference = 2 * Math.PI * ringRadius;
const autoSwitchDelay = 1600;

export function PerformanceToggle() {
  const { performance: performanceComparison } = useContent().home;
  const prefersReducedMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<PerformanceState["id"]>("before");
  const [displayScore, setDisplayScore] = useState<number>(performanceComparison.states[0].score);
  const hasInteracted = useRef(false);
  const previousScore = useRef<number>(performanceComparison.states[0].score);

  const activeState =
    performanceComparison.states.find((state) => state.id === activeId) ?? performanceComparison.states[0];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!hasInteracted.current) setActiveId("after");
    }, autoSwitchDelay);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayScore(activeState.score);
      previousScore.current = activeState.score;
      return;
    }
    const controls = animate(previousScore.current, activeState.score, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => setDisplayScore(Math.round(value)),
    });
    previousScore.current = activeState.score;
    return () => controls.stop();
  }, [activeState.score, prefersReducedMotion]);

  const select = (id: PerformanceState["id"]) => {
    hasInteracted.current = true;
    setActiveId(id);
  };

  return (
    <div className={cx(styles.panel, styles[activeId])}>
      <div className={styles.top}>
        <p className={styles.note}>{performanceComparison.eyebrow}</p>
        <div className={styles.toggle} role="group" aria-label={performanceComparison.title}>
          {performanceComparison.states.map((state) => (
            <button
              key={state.id}
              type="button"
              className={cx(styles.toggleButton, state.id === activeId && styles.toggleActive)}
              aria-pressed={state.id === activeId}
              onClick={() => select(state.id)}
            >
              {state.id === activeId ? (
                <motion.span
                  layoutId="performance-toggle-pill"
                  className={styles.togglePill}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              <span className={styles.toggleLabel}>{state.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.scoreRow}>
        <div className={styles.ring}>
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle className={styles.ringTrack} cx="60" cy="60" r={ringRadius} />
            <circle
              className={styles.ringValue}
              cx="60"
              cy="60"
              r={ringRadius}
              strokeDasharray={ringCircumference}
              strokeDashoffset={ringCircumference * (1 - activeState.score / 100)}
            />
          </svg>
          <span className={styles.score}>{displayScore}</span>
        </div>
        <p className={styles.caption} aria-live="polite">
          <span className={styles.captionLabel}>{activeState.label}</span>
          {activeState.caption}
        </p>
      </div>

      <dl className={styles.metrics}>
        {activeState.metrics.map((metric) => (
          <div key={metric.label} className={styles.metric} style={{ "--ratio": metric.ratio } as CSSProperties}>
            <dt>{metric.label}</dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
