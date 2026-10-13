"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { LeadButton } from "@/components/lead/LeadButton/LeadButton";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import type { AuditResult } from "@/lib/audit";
import { cx, normalizeWebsiteUrl } from "@/lib/text";
import styles from "./AuditWidget.module.css";

type AuditStatus = "idle" | "loading" | "result" | "unavailable";

const loadingStepInterval = 3500;

const scoreTone = (value: number) => (value >= 90 ? "good" : value >= 50 ? "average" : "poor");

const displayHost = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export function AuditWidget() {
  const locale = useLocale();
  const { home, forms } = useContent();
  const auditContent = home.audit;
  const loadingStepCount = auditContent.loadingSteps.length;
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<AuditStatus>("idle");
  const [inputError, setInputError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    if (status !== "loading") return;
    setLoadingStep(0);
    const timer = window.setInterval(
      () => setLoadingStep((step) => Math.min(step + 1, loadingStepCount - 1)),
      loadingStepInterval,
    );
    return () => window.clearInterval(timer);
  }, [status, loadingStepCount]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = normalizeWebsiteUrl(inputValue);
    if (!url) {
      setInputError(auditContent.invalidUrlMessage);
      return;
    }

    setInputError("");
    setSubmittedUrl(url);
    setStatus("loading");

    try {
      const response = await fetch(`/api/audit?url=${encodeURIComponent(url)}&locale=${locale}`);
      if (!response.ok) throw new Error("unavailable");
      setResult((await response.json()) as AuditResult);
      setStatus("result");
    } catch {
      setStatus("unavailable");
    }
  };

  const reset = () => {
    setStatus("idle");
    setResult(null);
  };

  const leadDefaults = { source: "audit-widget", website: submittedUrl, service: forms.auditOption };

  return (
    <div className={styles.widget}>
      {status === "idle" || status === "loading" ? (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label htmlFor={inputId} className="visually-hidden">
            {auditContent.inputLabel}
          </label>
          <div className={styles.inputRow}>
            <input
              id={inputId}
              className={styles.input}
              type="text"
              inputMode="url"
              autoComplete="url"
              autoCapitalize="none"
              spellCheck={false}
              placeholder={auditContent.inputPlaceholder}
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                setInputError("");
              }}
              disabled={status === "loading"}
              aria-invalid={Boolean(inputError)}
              aria-describedby={inputError ? errorId : undefined}
            />
            <Button type="submit" icon="arrowUpRight" disabled={status === "loading"} className={styles.submit}>
              {status === "loading" ? auditContent.loadingLabel : auditContent.submitLabel}
            </Button>
          </div>
          {inputError ? (
            <p id={errorId} className={styles.error} role="alert">
              {inputError}
            </p>
          ) : null}

          {status === "loading" ? (
            <ol className={styles.loading} aria-live="polite">
              {auditContent.loadingSteps.map((step, index) => (
                <li
                  key={step}
                  className={cx(
                    styles.loadingStep,
                    index < loadingStep && styles.stepDone,
                    index === loadingStep && styles.stepActive,
                  )}
                >
                  <span className={styles.stepIcon}>
                    <Icon name={index < loadingStep ? "check" : "loader"} size={14} />
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          ) : (
            <p className={styles.note}>{auditContent.note}</p>
          )}
        </form>
      ) : null}

      {status === "result" && result ? (
        <div className={styles.result} aria-live="polite">
          <div className={styles.resultHead}>
            <div>
              <p className={styles.resultTitle}>{auditContent.resultTitle}</p>
              <p className={styles.resultHost}>{displayHost(result.url)}</p>
            </div>
            <button type="button" className={styles.retry} onClick={reset}>
              <Icon name="retry" size={16} />
              {auditContent.retryLabel}
            </button>
          </div>

          <ul className={styles.scores}>
            {result.scores.map((score) => (
              <li key={score.id} className={cx(styles.score, styles[scoreTone(score.value)])}>
                <span className={styles.scoreValue}>{score.value}</span>
                <span className={styles.scoreLabel}>{auditContent.categories[score.id]}</span>
              </li>
            ))}
          </ul>

          {result.metrics.length > 0 ? (
            <dl className={styles.metrics}>
              {result.metrics.map((metric) => (
                <div key={metric.id} className={styles.metric}>
                  <dt>{auditContent.metrics[metric.id]}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {result.opportunities.length > 0 ? (
            <div className={styles.opportunities}>
              <p className={styles.opportunitiesTitle}>{auditContent.opportunitiesTitle}</p>
              <ul>
                {result.opportunities.map((item) => (
                  <li key={item}>
                    <Icon name="zap" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className={styles.resultFooter}>
            <LeadButton size="lg" icon="arrowRight" defaults={leadDefaults}>
              {auditContent.resultCta}
            </LeadButton>
            <p className={styles.source}>{auditContent.resultSource}</p>
          </div>
        </div>
      ) : null}

      {status === "unavailable" ? (
        <div className={styles.unavailable} role="status">
          <p className={styles.resultTitle}>{auditContent.unavailableTitle}</p>
          <p className={styles.unavailableText}>{auditContent.unavailableText}</p>
          <div className={styles.unavailableActions}>
            <LeadButton icon="arrowRight" defaults={leadDefaults}>
              {auditContent.resultCta}
            </LeadButton>
            <button type="button" className={styles.retry} onClick={reset}>
              <Icon name="retry" size={16} />
              {auditContent.retryLabel}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
