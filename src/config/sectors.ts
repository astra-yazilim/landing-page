export const sectorOptions = [
  "ecommerce",
  "retail",
  "fintech",
  "saas",
  "health",
  "education",
  "logistics",
  "tourism",
  "manufacturing",
  "agriculture",
  "media",
  "real_estate",
  "energy",
  "other",
] as const;

export type Sector = (typeof sectorOptions)[number];
