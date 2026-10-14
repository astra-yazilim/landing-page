import {
  cvExtensions,
  cvMaxBytes,
  developerAvailabilityIds,
  developerExperienceIds,
  developerSkillIds,
  developerWorkModelIds,
} from "@/config/developers";
import { isValidEmail, normalizeWebsiteUrl } from "@/lib/text";

export type DeveloperApplicationValues = {
  name: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  experience: string;
  skills: string[];
  otherSkills: string;
  linkedin: string;
  github: string;
  portfolio: string;
  workModels: string[];
  availability: string;
  rate: string;
  about: string;
  privacyConsent: boolean;
  agreementConsent: boolean;
};

export type DeveloperValidationKey =
  | "name"
  | "email"
  | "phone"
  | "title"
  | "experience"
  | "skills"
  | "linkedin"
  | "github"
  | "portfolio"
  | "cv"
  | "cvType"
  | "cvSize"
  | "workModels"
  | "availability"
  | "privacy"
  | "agreement";

export type DeveloperErrorField = Exclude<DeveloperValidationKey, "cvType" | "cvSize" | "privacy" | "agreement">
  | "privacyConsent"
  | "agreementConsent";

export type DeveloperErrors = Partial<Record<DeveloperErrorField, DeveloperValidationKey>>;

export const developerFieldLimits = {
  name: 120,
  email: 160,
  phone: 40,
  location: 80,
  title: 120,
  otherSkills: 300,
  linkedin: 300,
  github: 300,
  portfolio: 300,
  rate: 120,
  about: 3000,
} as const;

const includes = <T extends string>(list: readonly T[], value: string): value is T => list.includes(value as T);

export function normalizeProfileUrl(value: string, host?: string): string | null {
  const url = normalizeWebsiteUrl(value);
  if (!url || !host) return url;
  const hostname = new URL(url).hostname.replace(/^www\./, "");
  return hostname === host || hostname.endsWith(`.${host}`) ? url : null;
}

export function getCvError(file: { name: string; size: number } | null): DeveloperValidationKey | null {
  if (!file || file.size === 0) return "cv";
  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!includes(cvExtensions, extension)) return "cvType";
  if (file.size > cvMaxBytes) return "cvSize";
  return null;
}

export function validateDeveloperApplication(values: DeveloperApplicationValues): DeveloperErrors {
  const errors: DeveloperErrors = {};
  if (values.name.trim().length < 2) errors.name = "name";
  if (!isValidEmail(values.email)) errors.email = "email";
  if (values.phone.replace(/\D/g, "").length < 10) errors.phone = "phone";
  if (values.title.trim().length < 2) errors.title = "title";
  if (!includes(developerExperienceIds, values.experience)) errors.experience = "experience";
  if (values.skills.length === 0 || !values.skills.every((id) => includes(developerSkillIds, id))) {
    errors.skills = "skills";
  }
  if (!normalizeProfileUrl(values.linkedin, "linkedin.com")) errors.linkedin = "linkedin";
  if (values.github.trim() && !normalizeProfileUrl(values.github, "github.com")) errors.github = "github";
  if (values.portfolio.trim() && !normalizeProfileUrl(values.portfolio)) errors.portfolio = "portfolio";
  if (values.workModels.length === 0 || !values.workModels.every((id) => includes(developerWorkModelIds, id))) {
    errors.workModels = "workModels";
  }
  if (!includes(developerAvailabilityIds, values.availability)) errors.availability = "availability";
  if (!values.privacyConsent) errors.privacyConsent = "privacy";
  if (!values.agreementConsent) errors.agreementConsent = "agreement";
  return errors;
}
