import {
  employeeCountOptions,
  freeEmailDomains,
  investmentBudgetOptions,
  investmentHorizonOptions,
  investmentStageOptions,
  investorAgreementVersion,
  investorTypeOptions,
  involvementOptions,
  previousInvestmentOptions,
  type EmployeeCount,
  type InvestmentBudget,
  type InvestmentHorizon,
  type InvestmentStage,
  type InvestorType,
  type Involvement,
  type PreviousInvestments,
} from "@/config/investors";
import { sectorOptions, type Sector } from "@/config/sectors";
import { fullNameMinLength, isSignatureMatch, phonePattern } from "@/lib/formValidation";
import { isValidEmail } from "@/lib/text";

export type InvestorFormValues = {
  fullName: string;
  corporateEmail: string;
  phone: string;
  city: string;
  title: string;
  profession: string;
  linkedinUrl: string;
  companyName: string;
  companyWebsite: string;
  sector: string;
  employeeCount: string;
  investorType: string;
  budgetRange: string;
  horizon: string;
  previousInvestments: string;
  involvement: string;
  referralSource: string;
  preferredStages: string[];
  interestAreas: string[];
  hasInvestorLicense: boolean;
  note: string;
  kvkkConsent: boolean;
  agreementAccepted: boolean;
  signatureName: string;
};

export type InvestorApplicationPayload = {
  fullName: string;
  corporateEmail: string;
  phone: string;
  city: string;
  title: string;
  profession: string;
  linkedinUrl: string;
  companyName: string;
  companyWebsite: string;
  sector: Sector;
  employeeCount: EmployeeCount;
  investorType: InvestorType;
  budgetRange: InvestmentBudget;
  horizon: InvestmentHorizon;
  preferredStages: InvestmentStage[];
  interestAreas: Sector[];
  previousInvestments: PreviousInvestments;
  involvement: Involvement;
  hasInvestorLicense: boolean;
  referralSource: string;
  note: string;
  kvkkConsent: true;
  agreement: { version: string; signerName: string; signedAt: string };
  status: "received";
  reviewerNote: "";
  createdAt: string;
};

export type InvestorField = keyof InvestorFormValues;

export type InvestorValidationKey =
  | "required"
  | "email"
  | "minLength"
  | "minSelection"
  | "corporateEmail"
  | "phone"
  | "signature"
  | "kvkk"
  | "agreement";

export type InvestorFieldError = { key: InvestorValidationKey; min?: number };

export type InvestorErrors = Partial<Record<InvestorField, InvestorFieldError>>;

export const initialInvestorValues: InvestorFormValues = {
  fullName: "",
  corporateEmail: "",
  phone: "",
  city: "",
  title: "",
  profession: "",
  linkedinUrl: "",
  companyName: "",
  companyWebsite: "",
  sector: "",
  employeeCount: "",
  investorType: "",
  budgetRange: "",
  horizon: "",
  previousInvestments: "",
  involvement: "",
  referralSource: "",
  preferredStages: [],
  interestAreas: [],
  hasInvestorLicense: false,
  note: "",
  kvkkConsent: false,
  agreementAccepted: false,
  signatureName: "",
};

const selectOptions: Partial<Record<InvestorField, readonly string[]>> = {
  sector: sectorOptions,
  employeeCount: employeeCountOptions,
  investorType: investorTypeOptions,
  budgetRange: investmentBudgetOptions,
  horizon: investmentHorizonOptions,
  previousInvestments: previousInvestmentOptions,
  involvement: involvementOptions,
};

const multiOptions: Partial<Record<InvestorField, readonly string[]>> = {
  preferredStages: investmentStageOptions,
  interestAreas: sectorOptions,
};

const requiredTextFields: InvestorField[] = ["phone", "title", "profession", "linkedinUrl", "companyName"];

export const investorFieldOrder = Object.keys(initialInvestorValues) as InvestorField[];

const isFreeEmail = (email: string) => {
  const address = email.trim().toLowerCase();
  return freeEmailDomains.some((domain) => address.endsWith(`@${domain}`));
};

export function validateInvestorField(field: InvestorField, values: InvestorFormValues): InvestorFieldError | null {
  const value = values[field];

  if (field === "fullName") {
    if (!values.fullName.trim()) return { key: "required" };
    if (values.fullName.trim().length < fullNameMinLength) return { key: "minLength", min: fullNameMinLength };
    return null;
  }
  if (field === "corporateEmail") {
    if (!values.corporateEmail.trim()) return { key: "required" };
    if (!isValidEmail(values.corporateEmail)) return { key: "email" };
    if (isFreeEmail(values.corporateEmail)) return { key: "corporateEmail" };
    return null;
  }
  if (field === "phone" && values.phone.trim() && !phonePattern.test(values.phone.trim())) return { key: "phone" };
  if (requiredTextFields.includes(field) && typeof value === "string" && !value.trim()) return { key: "required" };

  const options = selectOptions[field];
  if (options && !options.includes(value as string)) return { key: "required" };

  const multi = multiOptions[field];
  if (multi && Array.isArray(value) && (value.length === 0 || !value.every((item) => multi.includes(item)))) {
    return { key: "minSelection" };
  }

  if (field === "kvkkConsent" && !values.kvkkConsent) return { key: "kvkk" };
  if (field === "agreementAccepted" && !values.agreementAccepted) return { key: "agreement" };
  if (field === "signatureName") {
    if (!values.signatureName.trim()) return { key: "required" };
    if (!isSignatureMatch(values.signatureName, values.fullName)) return { key: "signature" };
  }
  return null;
}

export function validateInvestorApplication(values: InvestorFormValues): InvestorErrors {
  const errors: InvestorErrors = {};
  investorFieldOrder.forEach((field) => {
    const error = validateInvestorField(field, values);
    if (error) errors[field] = error;
  });
  return errors;
}

export function buildInvestorPayload(values: InvestorFormValues): InvestorApplicationPayload {
  const now = new Date().toISOString();
  return {
    fullName: values.fullName.trim(),
    corporateEmail: values.corporateEmail.trim(),
    phone: values.phone.trim(),
    city: values.city.trim(),
    title: values.title.trim(),
    profession: values.profession.trim(),
    linkedinUrl: values.linkedinUrl.trim(),
    companyName: values.companyName.trim(),
    companyWebsite: values.companyWebsite.trim(),
    sector: values.sector as Sector,
    employeeCount: values.employeeCount as EmployeeCount,
    investorType: values.investorType as InvestorType,
    budgetRange: values.budgetRange as InvestmentBudget,
    horizon: values.horizon as InvestmentHorizon,
    preferredStages: values.preferredStages as InvestmentStage[],
    interestAreas: values.interestAreas as Sector[],
    previousInvestments: values.previousInvestments as PreviousInvestments,
    involvement: values.involvement as Involvement,
    hasInvestorLicense: values.hasInvestorLicense,
    referralSource: values.referralSource.trim(),
    note: values.note.trim(),
    kvkkConsent: true,
    agreement: { version: investorAgreementVersion, signerName: values.signatureName.trim(), signedAt: now },
    status: "received",
    reviewerNote: "",
    createdAt: now,
  };
}
