export const employeeCountOptions = ["1_10", "11_50", "51_200", "201_1000", "1000_plus"] as const;

export const investorTypeOptions = ["individual", "corporate", "angel_network", "family_office", "fund"] as const;

export const investmentBudgetOptions = ["250k_1m", "1m_5m", "5m_20m", "20m_plus"] as const;

export const investmentHorizonOptions = ["under_1y", "1_3y", "3_5y", "5y_plus"] as const;

export const investmentStageOptions = ["idea", "mvp", "early_revenue", "growth"] as const;

export const previousInvestmentOptions = ["none", "1_3", "4_10", "10_plus"] as const;

export const involvementOptions = ["passive", "mentor", "active"] as const;

export type EmployeeCount = (typeof employeeCountOptions)[number];
export type InvestorType = (typeof investorTypeOptions)[number];
export type InvestmentBudget = (typeof investmentBudgetOptions)[number];
export type InvestmentHorizon = (typeof investmentHorizonOptions)[number];
export type InvestmentStage = (typeof investmentStageOptions)[number];
export type PreviousInvestments = (typeof previousInvestmentOptions)[number];
export type Involvement = (typeof involvementOptions)[number];

export const investorAgreementVersion = "YGS-2026.1";

export const freeEmailDomains = [
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "hotmail.com.tr",
  "outlook.com",
  "live.com",
  "yahoo.com",
  "yandex.com",
  "yandex.com.tr",
  "icloud.com",
  "mail.com",
  "protonmail.com",
];

