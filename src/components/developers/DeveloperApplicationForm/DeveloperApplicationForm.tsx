"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import {
  cvAccept,
  developerAvailabilityIds,
  developerExperienceIds,
  developerSkillIds,
  developerWorkModelIds,
} from "@/config/developers";
import { getPath, type PageRouteId } from "@/config/routes";
import { siteConfig } from "@/config/site";
import {
  getCvError,
  validateDeveloperApplication,
  type DeveloperApplicationValues,
  type DeveloperErrorField,
  type DeveloperErrors,
} from "@/lib/developers";
import styles from "./DeveloperApplicationForm.module.css";

type FormStatus = "idle" | "submitting" | "success" | "error";
type TextField = Exclude<
  keyof DeveloperApplicationValues,
  "skills" | "workModels" | "privacyConsent" | "agreementConsent" | "experience" | "availability"
>;
type ListField = "skills" | "workModels";

const initialValues: DeveloperApplicationValues = {
  name: "",
  email: "",
  phone: "",
  location: "",
  title: "",
  experience: "",
  skills: [],
  otherSkills: "",
  linkedin: "",
  github: "",
  portfolio: "",
  workModels: [],
  availability: "",
  rate: "",
  about: "",
  privacyConsent: false,
  agreementConsent: false,
};

const textInputs: Partial<Record<TextField, { type: string; autoComplete?: string; inputMode?: "email" | "tel" | "url" }>> = {
  name: { type: "text", autoComplete: "name" },
  email: { type: "email", autoComplete: "email", inputMode: "email" },
  phone: { type: "tel", autoComplete: "tel", inputMode: "tel" },
  location: { type: "text", autoComplete: "address-level2" },
  title: { type: "text", autoComplete: "organization-title" },
  linkedin: { type: "text", inputMode: "url" },
  github: { type: "text", inputMode: "url" },
  portfolio: { type: "text", autoComplete: "url", inputMode: "url" },
  otherSkills: { type: "text" },
  rate: { type: "text" },
};

export function DeveloperApplicationForm({ idPrefix }: { idPrefix: string }) {
  const locale = useLocale();
  const { pages, forms } = useContent();
  const form = pages.developers.form;
  const [values, setValues] = useState<DeveloperApplicationValues>(initialValues);
  const [cv, setCv] = useState<File | null>(null);
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<DeveloperErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const fieldId = (name: string) => `${idPrefix}-${name}`;
  const errorId = (name: DeveloperErrorField) => fieldId(`${name}-error`);

  const update = <Key extends keyof DeveloperApplicationValues>(key: Key, value: DeveloperApplicationValues[Key]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const toggle = (key: ListField, id: string) =>
    update(key, values[key].includes(id) ? values[key].filter((item) => item !== id) : [...values[key], id]);

  const errorMessage = (name: DeveloperErrorField) => {
    const key = errors[name];
    return key ? (
      <p id={errorId(name)} className={styles.error}>
        {form.validation[key]}
      </p>
    ) : null;
  };

  const invalidProps = (name: DeveloperErrorField) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? errorId(name) : undefined,
  });

  const textField = (name: TextField) => (
    <div className={styles.field}>
      <label htmlFor={fieldId(name)}>{form.fields[name].label}</label>
      <input
        id={fieldId(name)}
        name={name}
        {...textInputs[name]}
        placeholder={form.fields[name].placeholder}
        value={values[name]}
        onChange={(event) => update(name, event.target.value)}
        {...(name in errorFieldNames ? invalidProps(name as DeveloperErrorField) : {})}
      />
      {name in errorFieldNames ? errorMessage(name as DeveloperErrorField) : null}
    </div>
  );

  const selectField = (name: "experience" | "availability", options: readonly string[], labels: Record<string, string>) => (
    <div className={styles.field}>
      <label htmlFor={fieldId(name)}>{form.fields[name].label}</label>
      <div className={styles.selectWrap}>
        <select
          id={fieldId(name)}
          name={name}
          value={values[name]}
          onChange={(event) => update(name, event.target.value)}
          {...invalidProps(name)}
        >
          <option value="">{form.fields[name].placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {labels[option]}
            </option>
          ))}
        </select>
        <Icon name="chevronDown" size={18} className={styles.selectIcon} />
      </div>
      {errorMessage(name)}
    </div>
  );

  const chipGroup = (name: ListField, legend: string, options: readonly string[], labels: Record<string, string>) => (
    <fieldset id={fieldId(name)} tabIndex={-1} className={styles.chipGroup} {...invalidProps(name)}>
      <legend>{legend}</legend>
      <div className={styles.chips}>
        {options.map((option) => (
          <label key={option} className={styles.chip}>
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={values[name].includes(option)}
              onChange={() => toggle(name, option)}
            />
            <span>{labels[option]}</span>
          </label>
        ))}
      </div>
      {errorMessage(name)}
    </fieldset>
  );

  const consent = (
    name: "privacyConsent" | "agreementConsent",
    text: { before: string; linkLabel: string; after: string },
    routeId: PageRouteId,
  ): ReactNode => (
    <div>
      <div className={styles.consent}>
        <input
          id={fieldId(name)}
          type="checkbox"
          checked={values[name]}
          onChange={(event) => update(name, event.target.checked)}
          {...invalidProps(name)}
        />
        <label htmlFor={fieldId(name)}>
          {text.before}
          <Link href={getPath(locale, routeId)} target="_blank">
            {text.linkLabel}
          </Link>
          {text.after}
        </label>
      </div>
      {errorMessage(name)}
    </div>
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateDeveloperApplication(values);
    const cvError = getCvError(cv);
    if (cvError) nextErrors.cv = cvError;
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(fieldId(firstError))?.focus();
      return;
    }

    const body = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) value.forEach((item) => body.append(key, item));
      else body.append(key, String(value));
    });
    if (cv) body.append("cv", cv);
    body.append("company", company);
    body.append("locale", locale);

    setStatus("submitting");
    try {
      const response = await fetch("/api/developers", { method: "POST", body });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="badgeCheck" size={28} />
        </span>
        <h3 className={styles.successTitle}>{form.successTitle}</h3>
        <p>{form.successText}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.description}>{form.description}</p>

      <fieldset className={styles.group}>
        <legend>{form.groups.personal}</legend>
        <div className={styles.row}>
          {textField("name")}
          {textField("email")}
        </div>
        <div className={styles.row}>
          {textField("phone")}
          {textField("location")}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend>{form.groups.profile}</legend>
        <div className={styles.row}>
          {textField("title")}
          {selectField("experience", developerExperienceIds, form.experience)}
        </div>
        {chipGroup("skills", form.skillsLabel, developerSkillIds, form.skills)}
        {textField("otherSkills")}
        <div className={styles.row}>
          {textField("linkedin")}
          {textField("github")}
        </div>
        {textField("portfolio")}
        <div className={styles.field}>
          <label htmlFor={fieldId("cv")}>{form.cv.label}</label>
          <input
            id={fieldId("cv")}
            name="cv"
            type="file"
            accept={cvAccept}
            className={styles.file}
            onChange={(event) => {
              setCv(event.target.files?.[0] ?? null);
              setErrors((current) => ({ ...current, cv: undefined }));
            }}
            {...invalidProps("cv")}
          />
          <p className={styles.hint}>{form.cv.hint}</p>
          {errorMessage("cv")}
        </div>
      </fieldset>

      <fieldset className={styles.group}>
        <legend>{form.groups.work}</legend>
        {chipGroup("workModels", form.workModelsLabel, developerWorkModelIds, form.workModels)}
        <div className={styles.row}>
          {selectField("availability", developerAvailabilityIds, form.availability)}
          {textField("rate")}
        </div>
        <div className={styles.field}>
          <label htmlFor={fieldId("about")}>{form.fields.about.label}</label>
          <textarea
            id={fieldId("about")}
            name="about"
            rows={4}
            placeholder={form.fields.about.placeholder}
            value={values.about}
            onChange={(event) => update("about", event.target.value)}
          />
        </div>
      </fieldset>

      <div className={styles.trap} aria-hidden="true">
        <label htmlFor={fieldId("company")}>{forms.trapLabel}</label>
        <input
          id={fieldId("company")}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      <fieldset className={styles.group}>
        <legend>{form.groups.consent}</legend>
        {consent("privacyConsent", form.privacyConsent, "privacy")}
        {consent("agreementConsent", form.agreementConsent, "developerAgreement")}
      </fieldset>

      {status === "error" ? (
        <p className={styles.formError} role="alert">
          {form.errorText} <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </p>
      ) : null}

      <Button type="submit" size="lg" icon="send" fullWidth disabled={status === "submitting"}>
        {status === "submitting" ? form.submittingLabel : form.submitLabel}
      </Button>
    </form>
  );
}

const errorFieldNames: Partial<Record<TextField, true>> = {
  name: true,
  email: true,
  phone: true,
  title: true,
  linkedin: true,
  github: true,
  portfolio: true,
};
