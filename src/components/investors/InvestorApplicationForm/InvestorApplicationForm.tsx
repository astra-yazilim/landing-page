"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import shared from "@/components/forms/ApplicationForm/ApplicationForm.module.css";
import { AgreementBox } from "@/components/forms/AgreementBox/AgreementBox";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import {
  employeeCountOptions,
  investmentBudgetOptions,
  investmentHorizonOptions,
  investmentStageOptions,
  investorAgreementVersion,
  investorTypeOptions,
  involvementOptions,
  previousInvestmentOptions,
} from "@/config/investors";
import { sectorOptions } from "@/config/sectors";
import { getPath } from "@/config/routes";
import { submitInvestorApplication } from "@/lib/investorApplication";
import {
  buildInvestorPayload,
  initialInvestorValues,
  investorFieldOrder,
  validateInvestorApplication,
  validateInvestorField,
  type InvestorErrors,
  type InvestorField,
  type InvestorFormValues,
} from "@/lib/investors";

type FormStatus = "idle" | "submitting" | "success" | "error";
type TextField = "fullName" | "corporateEmail" | "phone" | "city" | "title" | "profession" | "linkedinUrl"
  | "companyName" | "companyWebsite" | "referralSource" | "signatureName";
type SelectField = "sector" | "employeeCount" | "investorType" | "budgetRange" | "horizon" | "previousInvestments" | "involvement";
type MultiField = "preferredStages" | "interestAreas";

const textInputs: Record<TextField, { type: string; autoComplete?: string; inputMode?: "email" | "tel" | "url" }> = {
  fullName: { type: "text", autoComplete: "name" },
  corporateEmail: { type: "email", autoComplete: "email", inputMode: "email" },
  phone: { type: "tel", autoComplete: "tel", inputMode: "tel" },
  city: { type: "text", autoComplete: "address-level2" },
  title: { type: "text", autoComplete: "organization-title" },
  profession: { type: "text" },
  linkedinUrl: { type: "text", inputMode: "url" },
  companyName: { type: "text", autoComplete: "organization" },
  companyWebsite: { type: "text", inputMode: "url" },
  referralSource: { type: "text" },
  signatureName: { type: "text", autoComplete: "off" },
};

const selectOptions: Record<SelectField, readonly string[]> = {
  sector: sectorOptions,
  employeeCount: employeeCountOptions,
  investorType: investorTypeOptions,
  budgetRange: investmentBudgetOptions,
  horizon: investmentHorizonOptions,
  previousInvestments: previousInvestmentOptions,
  involvement: involvementOptions,
};

const multiOptions: Record<MultiField, readonly string[]> = {
  preferredStages: investmentStageOptions,
  interestAreas: sectorOptions,
};

export function InvestorApplicationForm({ idPrefix }: { idPrefix: string }) {
  const locale = useLocale();
  const { pages, forms } = useContent();
  const form = pages.investors.form;
  const [values, setValues] = useState<InvestorFormValues>(initialInvestorValues);
  const [errors, setErrors] = useState<InvestorErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const fieldId = (name: string) => `${idPrefix}-${name}`;
  const errorId = (name: InvestorField) => fieldId(`${name}-error`);
  const hintId = (name: InvestorField) => fieldId(`${name}-hint`);

  const checkField = (field: InvestorField, nextValues: InvestorFormValues = values) =>
    setErrors((current) => ({ ...current, [field]: validateInvestorField(field, nextValues) ?? undefined }));

  const update = <Key extends InvestorField>(field: Key, value: InvestorFormValues[Key], validate = false) => {
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

  const message = (field: InvestorField) => {
    const error = errors[field];
    if (!error) return null;
    return error.key === "minLength" ? form.validation.minLength(error.min ?? 0) : form.validation[error.key];
  };

  const errorMessage = (field: InvestorField) => {
    const text = message(field);
    return text ? (
      <p id={errorId(field)} className={shared.error}>
        {text}
      </p>
    ) : null;
  };

  const describedBy = (field: InvestorField, hasHint = false) =>
    [hasHint ? hintId(field) : "", errors[field] ? errorId(field) : ""].filter(Boolean).join(" ") || undefined;

  const textField = (field: TextField) => {
    const text = form.fields[field];
    return (
      <div className={shared.field}>
        <label htmlFor={fieldId(field)}>{text.label}</label>
        <input
          id={fieldId(field)}
          name={field}
          {...textInputs[field]}
          placeholder={text.placeholder}
          value={values[field]}
          onChange={(event) => update(field, event.target.value)}
          onBlur={() => checkField(field)}
          aria-invalid={Boolean(errors[field])}
          aria-describedby={describedBy(field, Boolean(text.hint))}
        />
        {text.hint ? (
          <p id={hintId(field)} className={shared.hint}>
            {text.hint}
          </p>
        ) : null}
        {errorMessage(field)}
      </div>
    );
  };

  const selectField = (field: SelectField) => (
    <div className={shared.field}>
      <label htmlFor={fieldId(field)}>{form.fields[field].label}</label>
      <div className={shared.selectWrap}>
        <select
          id={fieldId(field)}
          name={field}
          value={values[field]}
          onChange={(event) => update(field, event.target.value, true)}
          onBlur={() => checkField(field)}
          aria-invalid={Boolean(errors[field])}
          aria-describedby={describedBy(field)}
        >
          <option value="">{forms.selectPlaceholder}</option>
          {selectOptions[field].map((option) => (
            <option key={option} value={option}>
              {(field === "sector" ? forms.sectors : (form.options[field] as Record<string, string>))[option as never]}
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
            <span>{(field === "interestAreas" ? forms.sectors : form.options.preferredStages)[option as never]}</span>
          </label>
        ))}
      </div>
      {errorMessage(field)}
    </fieldset>
  );

  const checkboxField = (field: "hasInvestorLicense" | "kvkkConsent" | "agreementAccepted", label: ReactNode) => (
    <div>
      <div className={shared.consent}>
        <input
          id={fieldId(field)}
          type="checkbox"
          checked={values[field]}
          onChange={(event) => update(field, event.target.checked, field !== "hasInvestorLicense")}
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
    const nextErrors = validateInvestorApplication(values);
    setErrors(nextErrors);
    const firstError = investorFieldOrder.find((field) => nextErrors[field]);
    if (firstError) {
      document.getElementById(fieldId(firstError))?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitInvestorApplication(buildInvestorPayload(values));
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
      </div>
    );
  }

  return (
    <form className={shared.form} onSubmit={handleSubmit} noValidate>
      <p className={shared.description}>{form.note}</p>

      <fieldset className={shared.group}>
        <legend>{form.groups.personal}</legend>
        <div className={shared.row}>
          {textField("fullName")}
          {textField("corporateEmail")}
        </div>
        <div className={shared.row}>
          {textField("phone")}
          {textField("city")}
        </div>
        <div className={shared.row}>
          {textField("title")}
          {textField("profession")}
        </div>
        {textField("linkedinUrl")}
      </fieldset>

      <fieldset className={shared.group}>
        <legend>{form.groups.company}</legend>
        <div className={shared.row}>
          {textField("companyName")}
          {textField("companyWebsite")}
        </div>
        <div className={shared.row}>
          {selectField("sector")}
          {selectField("employeeCount")}
        </div>
      </fieldset>

      <fieldset className={shared.group}>
        <legend>{form.groups.profile}</legend>
        <div className={shared.row}>
          {selectField("investorType")}
          {selectField("budgetRange")}
        </div>
        <div className={shared.row}>
          {selectField("horizon")}
          {selectField("previousInvestments")}
        </div>
        <div className={shared.row}>
          {selectField("involvement")}
          {textField("referralSource")}
        </div>
        {multiField("preferredStages")}
        {multiField("interestAreas")}
        {checkboxField("hasInvestorLicense", form.fields.hasInvestorLicense.label)}
        <div className={shared.field}>
          <label htmlFor={fieldId("note")}>{form.fields.note.label}</label>
          <textarea
            id={fieldId("note")}
            name="note"
            rows={3}
            placeholder={form.fields.note.placeholder}
            value={values.note}
            onChange={(event) => update("note", event.target.value)}
          />
        </div>
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

        <AgreementBox
          id={fieldId("agreement")}
          title={form.agreement.title}
          version={investorAgreementVersion}
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
