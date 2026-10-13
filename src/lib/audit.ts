export const auditCategoryIds = ["performance", "seo", "accessibility", "best-practices"] as const;

export const auditMetricIds = [
  "largest-contentful-paint",
  "first-contentful-paint",
  "total-blocking-time",
  "cumulative-layout-shift",
  "speed-index",
] as const;

export type AuditResult = {
  url: string;
  scores: { id: (typeof auditCategoryIds)[number]; value: number }[];
  metrics: { id: (typeof auditMetricIds)[number]; value: string }[];
  opportunities: string[];
};
