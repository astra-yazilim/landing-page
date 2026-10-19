export const productTypeOptions = ["web", "mobile", "ecommerce", "saas", "internal_tool", "ai", "other"] as const;

export const submissionStageOptions = ["idea", "designed", "in_development", "stalled", "live"] as const;

export const existingAssetOptions = [
  "requirements",
  "design",
  "source_code",
  "live_environment",
  "test_environment",
  "documentation",
] as const;

export const platformOptions = ["web", "ios", "android", "admin_panel", "desktop"] as const;

export const integrationOptions = ["payment", "erp", "marketplace", "cargo", "sms_email", "maps", "ai", "sso"] as const;

export const expectedUsersOptions = ["under_1k", "1k_10k", "10k_100k", "100k_plus"] as const;

export const projectBudgetOptions = ["under_100k", "100k_250k", "250k_500k", "500k_1m", "1m_plus", "undecided"] as const;

export const deliveryTimelineOptions = ["asap", "1_3_months", "3_6_months", "6_plus_months", "flexible"] as const;

export const fundingStatusOptions = ["self_funded", "seeking", "funded", "grant"] as const;

export const collaborationModelOptions = ["continue_existing", "build_from_scratch", "referral", "partnership"] as const;

export type ProductType = (typeof productTypeOptions)[number];
export type SubmissionStage = (typeof submissionStageOptions)[number];
export type ExistingAsset = (typeof existingAssetOptions)[number];
export type Platform = (typeof platformOptions)[number];
export type Integration = (typeof integrationOptions)[number];
export type ExpectedUsers = (typeof expectedUsersOptions)[number];
export type ProjectBudget = (typeof projectBudgetOptions)[number];
export type DeliveryTimeline = (typeof deliveryTimelineOptions)[number];
export type FundingStatus = (typeof fundingStatusOptions)[number];
export type CollaborationModel = (typeof collaborationModelOptions)[number];

export const stagesWithTechnicalDetails: readonly SubmissionStage[] = ["in_development", "stalled", "live"];

export const referralCommissionRate = 0.1;

export const projectAgreementVersion = "PIS-2026.1";
