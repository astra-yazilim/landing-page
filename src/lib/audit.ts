export const auditStrategies = ["mobile", "desktop"] as const;

export const auditCategoryIds = ["performance", "seo", "accessibility", "best-practices"] as const;

export const auditMetricIds = [
  "largest-contentful-paint",
  "first-contentful-paint",
  "total-blocking-time",
  "cumulative-layout-shift",
  "speed-index",
] as const;

export type AuditStrategy = (typeof auditStrategies)[number];
export type AuditCategoryId = (typeof auditCategoryIds)[number];
export type AuditMetricId = (typeof auditMetricIds)[number];

export const criticalScore = 50;

export const isAuditStrategy = (value: string): value is AuditStrategy =>
  auditStrategies.includes(value as AuditStrategy);

export type AuditIssue = {
  id: AuditCategoryId | AuditMetricId;
  value: string;
  causes: string[];
};

export type AuditResult = {
  url: string;
  strategy: AuditStrategy;
  measuredAt: number;
  scores: { id: AuditCategoryId; value: number }[];
  metrics: { id: AuditMetricId; value: string; critical: boolean }[];
  opportunities: string[];
  issues: AuditIssue[];
};

export type SignedAuditResult = AuditResult & { token?: string };
