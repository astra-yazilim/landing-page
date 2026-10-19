"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { AgreementBox } from "@/components/forms/AgreementBox/AgreementBox";
import shared from "@/components/forms/ApplicationForm/ApplicationForm.module.css";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
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
  submissionStageOptions,
} from "@/config/projectApplications";
import { getPath } from "@/config/routes";
import { sectorOptions } from "@/config/sectors";
import { submitProjectApplication } from "@/lib/projectApplication";
import {
  buildProjectPayload,
  hasTechnicalDetails,
  initialProjectValues,
  isReferral,
  projectFieldOrder,
  validateProjectApplication,
  validateProjectField,
  type ProjectErrors,
  type ProjectField,
  type ProjectFormValues,
} from "@/lib/projectApplications";
import { cx } from "@/lib/text";
import styles from "./ProjectApplicationForm.module.css";

type FormStatus = "idle" | "submitting" | "success" | "error";
type TextField =
  | "fullName"
  | "email"
  | "phone"
  | "role"
  | "companyName"
  | "linkedinUrl"
  | "projectName"
  | "targetAudience"
  | "techStack"
  | "repositoryUrl"
  | "referralCompany"
  | "referralContact"
  | "referralEmail"
  | "referralRelationship"
  | "signatureName";
type TextAreaField = "summary" | "problem" | "stallReason" | "coreFeatures" | "technicalRequirements";
type SelectField = "productType" | "sector" | "stage" | "expectedUsers" | "budgetRange" | "timeline" | "fundingStatus";
type MultiField = "existingAssets" | "platforms" | "integrations";

const textInputs: Record<TextField, { type: string; autoComplete?: string; inputMode?: "email" | "tel" | "url" }> = {
  fullName: { type: "text", autoComplete: "name" },
  email: { type: "email", autoComplete: "email", inputMode: "email" },
  phone: { type: "tel", autoComplete: "tel", inputMode: "tel" },
  role: { type: "text", autoComplete: "organization-title" },
  companyName: { type: "text", autoComplete: "organization" },
  linkedinUrl: { type: "text", inputMode: "url" },
  projectName: { type: "text" },
  targetAudience: { type: "text" },
  techStack: { type: "text" },
  repositoryUrl: { type: "text", inputMode: "url" },
  referralCompany: { type: "text" },
  referralContact: { type: "text" },
  referralEmail: { type: "email", inputMode: "email" },
  referralRelationship: { type: "text" },
  signatureName: { type: "text", autoComplete: "off" },
};

const textAreaRows: Record<TextAreaField, number> = {
  summary: 3,
  problem: 2,
  stallReason: 2,
  coreFeatures: 4,
  technicalRequirements: 2,
};

const selectOptions: Record<SelectField, readonly string[]> = {
  productType: productTypeOptions,
  sector: sectorOptions,
  stage: submissionStageOptions,
  expectedUsers: expectedUsersOptions,
  budgetRange: projectBudgetOptions,
  timeline: deliveryTimelineOptions,
  fundingStatus: fundingStatusOptions,
};

const multiOptions: Record<MultiField, readonly string[]> = {
  existingAssets: existingAssetOptions,
  platforms: platformOptions,
  integrations: integrationOptions,
};

export function ProjectApplicationForm({ idPrefix }: { idPrefix: string }) {
  const locale = useLocale();
  const { pages, forms } = useContent();
  const form = pages.projectApplication.form;
  const [values, setValues] = useState<ProjectFormValues>(initialProjectValues);
  const [errors, setErrors] = useState<ProjectErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [code, setCode] = useState<string | undefined>();

  const fieldId = (name: string) => `${idPrefix}-${name}`;
  const errorId = (name: ProjectField) => fieldId(`${name}-error`);
  const hintId = (name: ProjectField) => fieldId(`${name}-hint`);

  const checkField = (field: ProjectField, nextValues: ProjectFormValues = values) =>
    setErrors((current) => ({ ...current, [field]: validateProjectField(field, nextValues) ?? undefined }));

  const update = <Key extends ProjectField>(field: Key, value: ProjectFormValues[Key], validate = false) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (validate || errors[field]) checkField(field, nextValues);
  };

  const toggle = (field: MultiField, option: string) =>
    update(
      field,
      values[field].includes(option) ? values[field].filter((item) => item !== option) : [...values[field], option],
      true,
    );

  const optionLabel = (field: SelectField | MultiField, option: string) =>
    (field === "sector" ? forms.sectors : (form.options[field] as Record<string, string>))[option as never];

  const message = (field: ProjectField) => {
    const error = errors[field];
    if (!error) return null;
    return error.key === "minLength" ? form.validation.minLength(error.min ?? 0) : form.validation[error.key];
  };

  const errorMessage = (field: ProjectField) => {
    const text = message(field);
    return text ? (
      <p id={errorId(field)} className={shared.error}>
        {text}
      </p>
    ) : null;
  };

  const describedBy = (field: ProjectField, hasHint = false) =>
    [hasHint ? hintId(field) : "", errors[field] ? errorId(field) : ""].filter(Boolean).join(" ") || undefined;

  const fieldProps = (field: ProjectField, hasHint = false) => ({
    id: fieldId(field),
    name: field,
    onBlur: () => checkField(field),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": describedBy(field, hasHint),
  });

  const hint = (field: ProjectField, text?: string) =>
    text ? (
      <p id={hintId(field)} className={shared.hint}>
        {text}
      </p>
    ) : null;

  const textField = (field: TextField) => {
    const text = form.fields[field];
    return (
      <div className={shared.field}>
        <label htmlFor={fieldId(field)}>{text.label}</label>
        <input
          {...fieldProps(field, Boolean(text.hint))}
          {...textInputs[field]}
          placeholder={text.placeholder}
          value={values[field]}
          onChange={(event) => update(field, event.target.value)}
        />
        {hint(field, text.hint)}
        {errorMessage(field)}
      </div>
    );
  };

  const textAreaField = (field: TextAreaField) => {
    const text = form.fields[field];
    return (
      <div className={shared.field}>
        <label htmlFor={fieldId(field)}>{text.label}</label>
        <textarea
          {...fieldProps(field)}
          rows={textAreaRows[field]}
          placeholder={text.placeholder}
          value={values[field]}
          onChange={(event) => update(field, event.target.value)}
        />
        {errorMessage(field)}
      </div>
    );
  };

  const selectField = (field: SelectField) => (
    <div className={shared.field}>
      <label htmlFor={fieldId(field)}>{form.fields[field].label}</label>
      <div className={shared.selectWrap}>
        <select
          {...fieldProps(field)}
          value={values[field]}
          onChange={(event) => update(field, event.target.value, true)}
        >
          <option value="">{forms.selectPlaceholder}</option>
          {selectOptions[field].map((option) => (
            <option key={option} value={option}>
              {optionLabel(field, option)}
            </option>
          ))}
        </select>
        <Icon name="chevronDown" size={18} className={shared.selectIcon} />
      </div>
      {errorMessage(field)}
    </div>
  );

  const multiField = (field: MultiField) => (
    <fieldset
      id={fieldId(field)}
      tabIndex={-1}
      className={shared.chipGroup}
      aria-invalid={Boolean(errors[field])}
      aria-describedby={describedBy(field)}
    >
      <legend>{form.fields[field].label}</legend>
      <div className={shared.chips}>
        {multiOptions[field].map((option) => (
          <label key={option} className={shared.chip}>
            <input
              type="checkbox"
              name={field}
              value={option}
              checked={values[field].includes(option)}
              onChange={() => toggle(field, option)}
            />
            <span>{optionLabel(field, option)}</span>
          </label>
        ))}
      </div>
      {errorMessage(field)}
    </fieldset>
  );

  const checkboxField = (field: "kvkkConsent" | "ndaRequested" | "agreementAccepted", label: ReactNode) => (
    <div>
      <div className={shared.consent}>
        <input
          id={fieldId(field)}
          type="checkbox"
          checked={values[field]}
          onChange={(event) => update(field, event.target.checked, field !== "ndaRequested")}
          aria-invalid={Boolean(errors[field])}
          aria-describedby={describedBy(field)}
        />
        <label htmlFor={fieldId(field)}>{label}</label>
      </div>
      {errorMessage(field)}
    </div>
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateProjectApplication(values);
    setErrors(nextErrors);
    const firstError = projectFieldOrder.find((field) => nextErrors[field]);
    if (firstError) {
      const target =
        firstError === "collaborationModel"
          ? document.querySelector<HTMLInputElement>(`input[name="${fieldId(firstError)}"]`)
          : document.getElementById(fieldId(firstError));
      target?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const record = await submitProjectApplication(buildProjectPayload(values));
      setCode(record.code);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={shared.success} role="status">
        <span className={shared.successIcon}>
          <Icon name="check" size={28} />
        </span>
        <h2 className={shared.successTitle}>{form.successTitle}</h2>
        <p>{form.successText}</p>
        {code ? (
          <p className={styles.code}>
            {form.codeLabel}: <strong>{code}</strong>
          </p>
        ) : null}
      </div>
    );
  }

  const showTechnical = hasTechnicalDetails(values.stage);

  return (
    <form className={shared.form} onSubmit={handleSubmit} noValidate>
      <p className={shared.description}>{form.note}</p>

      <fieldset className={shared.group}>
        <legend>{form.groups.contact}</legend>
        <div className={shared.row}>
          {textField("fullName")}
          {textField("email")}
        </div>
        <div className={shared.row}>
          {textField("phone")}
          {textField("role")}
        </div>
        <div className={shared.row}>
          {textField("companyName")}
          {textField("linkedinUrl")}
        </div>
      </fieldset>

      <fieldset className={shared.group}>
        <legend>{form.groups.summary}</legend>
        {textField("projectName")}
        <div className={shared.row}>
          {selectField("productType")}
          {selectField("sector")}
        </div>
        {textAreaField("summary")}
        {textAreaField("problem")}
        {textField("targetAudience")}
      </fieldset>

      <fieldset className={shared.group}>
        <legend>{form.groups.status}</legend>
        <div className={shared.row}>
          {selectField("stage")}
          <div className={shared.field}>
            <label htmlFor={fieldId("completionPercent")}>{form.fields.completionPercent.label}</label>
            <input
              {...fieldProps("completionPercent", true)}
              type="number"
              inputMode="numeric"
              min={0}
              max={100}
              step={1}
              value={values.completionPercent}
              onChange={(event) => update("completionPercent", event.target.value)}
            />
            {hint("completionPercent", form.fields.completionPercent.hint)}
            {errorMessage("completionPercent")}
          </div>
        </div>
        {multiField("existingAssets")}
        {showTechnical ? (
          <>
            <div className={shared.row}>
              {textField("techStack")}
              {textField("repositoryUrl")}
            </div>
            {textAreaField("stallReason")}
          </>
        ) : null}
      </fieldset>

      <fieldset className={shared.group}>
        <legend>{form.groups.scope}</legend>
        {multiField("platforms")}
        {textAreaField("coreFeatures")}
        {multiField("integrations")}
        <div className={shared.row}>{selectField("expectedUsers")}</div>
        {textAreaField("technicalRequirements")}
      </fieldset>

      <fieldset className={shared.group}>
        <legend>{form.groups.budget}</legend>
        <div className={shared.row}>
          {selectField("budgetRange")}
          {selectField("timeline")}
        </div>
        <div className={shared.row}>{selectField("fundingStatus")}</div>
      </fieldset>

      <fieldset className={shared.group}>
        <legend>{form.groups.collaboration}</legend>
        <fieldset
          className={styles.models}
          aria-invalid={Boolean(errors.collaborationModel)}
          aria-describedby={describedBy("collaborationModel")}
        >
          <legend className={styles.modelsLegend}>{form.fields.collaborationModel.label}</legend>
          <div className={styles.modelGrid}>
            {collaborationModelOptions.map((option) => (
              <label key={option} className={cx(styles.model, values.collaborationModel === option && styles.modelActive)}>
                <input
                  type="radio"
                  name={fieldId("collaborationModel")}
                  value={option}
                  checked={values.collaborationModel === option}
                  onChange={() => update("collaborationModel", option, true)}
                  className={styles.modelInput}
                />
                <span className={styles.modelTitle}>{form.collaborationModels[option].title}</span>
                <span className={styles.modelText}>{form.collaborationModels[option].text}</span>
              </label>
            ))}
          </div>
          {errorMessage("collaborationModel")}
        </fieldset>

        {isReferral(values) ? (
          <div className={styles.referral}>
            <p className={styles.referralNotice}>
              <Icon name="handshake" size={18} />
              {form.referralNotice}
            </p>
            <div className={shared.row}>
              {textField("referralCompany")}
              {textField("referralContact")}
            </div>
            <div className={shared.row}>
              {textField("referralEmail")}
              {textField("referralRelationship")}
            </div>
          </div>
        ) : null}
      </fieldset>

      <fieldset className={shared.group}>
        <legend>{form.groups.consent}</legend>
        {checkboxField(
          "kvkkConsent",
          <>
            {form.kvkkConsent.before}
            <Link href={getPath(locale, "privacy")} target="_blank">
              {form.kvkkConsent.linkLabel}
            </Link>
            {form.kvkkConsent.after}
          </>,
        )}
        {checkboxField("ndaRequested", form.fields.ndaRequested.label)}
        <AgreementBox
          id={fieldId("agreement")}
          title={form.agreement.title}
          version={projectAgreementVersion}
          clauses={form.agreement.clauses}
        >
          {checkboxField("agreementAccepted", form.agreement.acceptLabel)}
          {textField("signatureName")}
        </AgreementBox>
      </fieldset>

      {status === "error" ? (
        <p className={shared.formError} role="alert">
          {form.errorText}
        </p>
      ) : null}

      <Button type="submit" size="lg" icon="send" fullWidth disabled={status === "submitting"}>
        {status === "submitting" ? form.submittingLabel : form.submitLabel}
      </Button>
    </form>
  );
}
