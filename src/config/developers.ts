export const developerSkillIds = [
  "ikas",
  "ticimax",
  "shopify",
  "woocommerce",
  "marketplace",
  "frontend",
  "backend",
  "mobile",
  "ai",
  "uiux",
  "seo",
  "devops",
] as const;

export const developerExperienceIds = ["0-1", "1-3", "3-5", "5-8", "8+"] as const;

export const developerWorkModelIds = ["task", "weekly", "monthly"] as const;

export const developerAvailabilityIds = ["lt10", "10-20", "20-40", "40+"] as const;

export type DeveloperSkillId = (typeof developerSkillIds)[number];
export type DeveloperExperienceId = (typeof developerExperienceIds)[number];
export type DeveloperWorkModelId = (typeof developerWorkModelIds)[number];
export type DeveloperAvailabilityId = (typeof developerAvailabilityIds)[number];

export const cvMaxBytes = 3 * 1024 * 1024;

export const cvExtensions = ["pdf", "doc", "docx"] as const;

export const cvAccept = cvExtensions.map((extension) => `.${extension}`).join(",");
