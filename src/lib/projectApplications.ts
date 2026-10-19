import {
  collaborationModelOptions,
  deliveryTimelineOptions,
  existingAssetOptions,
  expectedUsersOptions,
  fundingStatusOptions,
  integrationOptions,
  platformOptions,
  productTypeOptions,
  projectAgreementVersion,
  projectBudgetOptions,
  stagesWithTechnicalDetails,
  submissionStageOptions,
  type CollaborationModel,
  type DeliveryTimeline,
  type ExistingAsset,
  type ExpectedUsers,
  type FundingStatus,
  type Integration,
  type Platform,
  type ProductType,
  type ProjectBudget,
  type SubmissionStage,
} from "@/config/projectApplications";
import { sectorOptions, type Sector } from "@/config/sectors";
import { fullNameMinLength, isSignatureMatch, phonePattern } from "@/lib/formValidation";
import { isValidEmail } from "@/lib/text";

export type ProjectFormValues = {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  companyName: string;
  linkedinUrl: string;
  projectName: string;
  productType: string;
  sector: string;
  summary: string;
  problem: string;
  targetAudience: string;
  stage: string;
  completionPercent: string;
  existingAssets: string[];
  techStack: string;
  repositoryUrl: string;
  stallReason: string;
  platforms: string[];
  coreFeatures: string;
  integrations: string[];
  expectedUsers: string;
  technicalRequirements: string;
  budgetRange: string;
  timeline: string;
  fundingStatus: string;
  collaborationModel: string;
  referralCompany: string;
  referralContact: string;
  referralEmail: string;
  referralRelationship: string;
  kvkkConsent: boolean;
  ndaRequested: boolean;
  agreementAccepted: boolean;
  signatureName: string;
};

export type ProjectApplicationPayload = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  role: string;
  linkedinUrl: string;
  projectName: string;
  productType: ProductType;
  sector: Sector;
  summary: string;
  problem: string;
  targetAudience: string;
  stage: SubmissionStage;
  existingAssets: ExistingAsset[];
  completionPercent: number;
  techStack: string;
  repositoryUrl: string;
  stallReason: string;
  platforms: Platform[];
  coreFeatures: string;
  integrations: Integration[];
  expectedUsers: ExpectedUsers;
  technicalRequirements: string;
  budgetRange: ProjectBudget;
  timeline: DeliveryTimeline;
  fundingStatus: FundingStatus;
  collaborationModel: CollaborationModel;
  referral?: { companyName: string; contactName: string; contactEmail: string; relationship: string };
  kvkkConsent: true;
  ndaRequested: boolean;
  agreement: { version: string; signerName: string; signedAt: string };
  status: "received";
  reviewerNote: "";
  createdAt: string;
};

export type ProjectField = keyof ProjectFormValues;

export type ProjectValidationKey =
  | "required"
  | "email"
  | "minLength"
  | "minSelection"
  | "phone"
  | "percent"
  | "referral"
  | "signature"
  | "kvkk"
  | "agreement";

export type ProjectFieldError = { key: ProjectValidationKey; min?: number };

export type ProjectErrors = Partial<Record<ProjectField, ProjectFieldError>>;

export const initialProjectValues: ProjectFormValues = {
  fullName: "",
  email: "",
  phone: "",
  role: "",
  companyName: "",
  linkedinUrl: "",
  projectName: "",
  productType: "",
  sector: "",
  summary: "",
  problem: "",
  targetAudience: "",
  stage: "",
  completionPercent: "0",
  existingAssets: [],
  techStack: "",
  repositoryUrl: "",
  stallReason: "",
  platforms: [],
  coreFeatures: "",
  integrations: [],
  expectedUsers: "",
  technicalRequirements: "",
  budgetRange: "",
  timeline: "",
  fundingStatus: "",
  collaborationModel: "",
  referralCompany: "",
  referralContact: "",
  referralEmail: "",
  referralRelationship: "",
  kvkkConsent: false,
  ndaRequested: false,
  agreementAccepted: false,
  signatureName: "",
};

export const projectFieldOrder = Object.keys(initialProjectValues) as ProjectField[];

const minLengths: Partial<Record<ProjectField, number>> = {
  fullName: fullNameMinLength,
  projectName: 3,
  summary: 20,
  problem: 10,
  targetAudience: 5,
  coreFeatures: 10,
};

const requiredTextFields: ProjectField[] = ["role"];

const selectOptions: Partial<Record<ProjectField, readonly string[]>> = {
  productType: productTypeOptions,
  sector: sectorOptions,
  stage: submissionStageOptions,
  expectedUsers: expectedUsersOptions,
  budgetRange: projectBudgetOptions,
  timeline: deliveryTimelineOptions,
  fundingStatus: fundingStatusOptions,
  collaborationModel: collaborationModelOptions,
};

const multiOptions: Partial<Record<ProjectField, { options: readonly string[]; required: boolean }>> = {
  existingAssets: { options: existingAssetOptions, required: false },
  platforms: { options: platformOptions, required: true },
  integrations: { options: integrationOptions, required: false },
};

const requiredReferralFields: ProjectField[] = ["referralCompany", "referralContact", "referralEmail"];

export const hasTechnicalDetails = (stage: string) => stagesWithTechnicalDetails.includes(stage as SubmissionStage);

export const isReferral = (values: ProjectFormValues) => values.collaborationModel === "referral";

const isPercent = (value: string) => /^\d{1,3}$/.test(value.trim()) && Number(value) <= 100;

export function validateProjectField(field: ProjectField, values: ProjectFormValues): ProjectFieldError | null {
  const value = values[field];

  if (field === "email") {
    if (!values.email.trim()) return { key: "required" };
    return isValidEmail(values.email) ? null : { key: "email" };
  }
  if (field === "phone") {
    if (!values.phone.trim()) return { key: "required" };
    return phonePattern.test(values.phone.trim()) ? null : { key: "phone" };
  }

  const min = minLengths[field];
  if (min !== undefined && typeof value === "string") {
    if (!value.trim()) return { key: "required" };
    if (value.trim().length < min) return { key: "minLength", min };
    return null;
  }
  if (requiredTextFields.includes(field) && typeof value === "string" && !value.trim()) return { key: "required" };

  const options = selectOptions[field];
  if (options && !options.includes(value as string)) return { key: "required" };

  const multi = multiOptions[field];
  if (multi && Array.isArray(value)) {
    if (multi.required && value.length === 0) return { key: "minSelection" };
    if (!value.every((item) => multi.options.includes(item))) return { key: "minSelection" };
  }

  if (field === "completionPercent" && values.completionPercent.trim() && !isPercent(values.completionPercent)) {
    return { key: "percent" };
  }

  if (isReferral(values) && requiredReferralFields.includes(field) && typeof value === "string") {
    if (!value.trim()) return { key: "referral" };
    if (field === "referralEmail" && !isValidEmail(value)) return { key: "email" };
  }

  if (field === "kvkkConsent" && !values.kvkkConsent) return { key: "kvkk" };
  if (field === "agreementAccepted" && !values.agreementAccepted) return { key: "agreement" };
  if (field === "signatureName") {
    if (!values.signatureName.trim()) return { key: "required" };
    if (!isSignatureMatch(values.signatureName, values.fullName)) return { key: "signature" };
  }
  return null;
}

export function validateProjectApplication(values: ProjectFormValues): ProjectErrors {
  const errors: ProjectErrors = {};
  projectFieldOrder.forEach((field) => {
    const error = validateProjectField(field, values);
    if (error) errors[field] = error;
  });
  return errors;
}

export function buildProjectPayload(values: ProjectFormValues): ProjectApplicationPayload {
  const now = new Date().toISOString();
  const technical = hasTechnicalDetails(values.stage);
  return {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    companyName: values.companyName.trim(),
    role: values.role.trim(),
    linkedinUrl: values.linkedinUrl.trim(),
    projectName: values.projectName.trim(),
    productType: values.productType as ProductType,
    sector: values.sector as Sector,
    summary: values.summary.trim(),
    problem: values.problem.trim(),
    targetAudience: values.targetAudience.trim(),
    stage: values.stage as SubmissionStage,
    existingAssets: values.existingAssets as ExistingAsset[],
    completionPercent: values.completionPercent.trim() ? Number(values.completionPercent) : 0,
    techStack: technical ? values.techStack.trim() : "",
    repositoryUrl: technical ? values.repositoryUrl.trim() : "",
    stallReason: technical ? values.stallReason.trim() : "",
    platforms: values.platforms as Platform[],
    coreFeatures: values.coreFeatures
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .join("\n"),
    integrations: values.integrations as Integration[],
    expectedUsers: values.expectedUsers as ExpectedUsers,
    technicalRequirements: values.technicalRequirements.trim(),
    budgetRange: values.budgetRange as ProjectBudget,
    timeline: values.timeline as DeliveryTimeline,
    fundingStatus: values.fundingStatus as FundingStatus,
    collaborationModel: values.collaborationModel as CollaborationModel,
    ...(isReferral(values)
      ? {
          referral: {
            companyName: values.referralCompany.trim(),
            contactName: values.referralContact.trim(),
            contactEmail: values.referralEmail.trim(),
            relationship: values.referralRelationship.trim(),
          },
        }
      : {}),
    kvkkConsent: true,
    ndaRequested: values.ndaRequested,
    agreement: { version: projectAgreementVersion, signerName: values.signatureName.trim(), signedAt: now },
    status: "received",
    reviewerNote: "",
    createdAt: now,
  };
}
