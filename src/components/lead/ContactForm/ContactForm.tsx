"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import { useContent, useLocale } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { getPath } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { getServices } from "@/lib/services";
import { isValidEmail } from "@/lib/text";
import styles from "./ContactForm.module.css";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  website: string;
  service: string;
  message: string;
  consent: boolean;
  company: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";
type FormErrors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

type ContactFormProps = {
  idPrefix: string;
  source: string;
  defaults?: Partial<Pick<LeadPayload, "website" | "service" | "message">>;
  messageRequired?: boolean;
};

export function ContactForm({ idPrefix, source, defaults, messageRequired = true }: ContactFormProps) {
  const locale = useLocale();
  const { forms } = useContent();
  const { fields, validation } = forms;
  const serviceOptions = [
    ...getServices(locale).map((service) => service.shortTitle),
    forms.auditOption,
    forms.otherOption,
  ];
  const [values, setValues] = useState<LeadPayload>({
    name: "",
    email: "",
    phone: "",
    website: defaults?.website ?? "",
    service: defaults?.service ?? "",
    message: defaults?.message ?? "",
    consent: false,
    company: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const update = <Key extends keyof LeadPayload>(key: Key, value: LeadPayload[Key]) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = (): FormErrors => ({
    ...(values.name.trim().length < 2 ? { name: validation.name } : {}),
    ...(!isValidEmail(values.email) ? { email: validation.email } : {}),
    ...(messageRequired && values.message.trim().length < 5 ? { message: validation.message } : {}),
    ...(!values.consent ? { consent: validation.consent } : {}),
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source, locale }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.success} role="status">
        <span className={styles.successIcon}>
          <Icon name="check" size={26} />
        </span>
        <h3 className={styles.successTitle}>{forms.successTitle}</h3>
        <p>{forms.successText}</p>
      </div>
    );
  }

  const fieldId = (name: string) => `${idPrefix}-${name}`;

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={fieldId("name")}>{fields.name.label}</label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            placeholder={fields.name.placeholder}
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? fieldId("name-error") : undefined}
          />
          {errors.name ? (
            <p id={fieldId("name-error")} className={styles.error}>
              {errors.name}
            </p>
          ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor={fieldId("email")}>{fields.email.label}</label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={fields.email.placeholder}
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? fieldId("email-error") : undefined}
          />
          {errors.email ? (
            <p id={fieldId("email-error")} className={styles.error}>
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={fieldId("phone")}>{fields.phone.label}</label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={fields.phone.placeholder}
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor={fieldId("website")}>{fields.website.label}</label>
          <input
            id={fieldId("website")}
            name="website"
            type="text"
            autoComplete="url"
            inputMode="url"
            placeholder={fields.website.placeholder}
            value={values.website}
            onChange={(event) => update("website", event.target.value)}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={fieldId("service")}>{fields.service.label}</label>
        <div className={styles.selectWrap}>
          <select
            id={fieldId("service")}
            name="service"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
          >
            <option value="">{fields.service.placeholder}</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Icon name="chevronDown" size={18} className={styles.selectIcon} />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor={fieldId("message")}>{fields.message.label}</label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={4}
          placeholder={fields.message.placeholder}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? fieldId("message-error") : undefined}
        />
        {errors.message ? (
          <p id={fieldId("message-error")} className={styles.error}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className={styles.trap} aria-hidden="true">
        <label htmlFor={fieldId("company")}>{forms.trapLabel}</label>
        <input
          id={fieldId("company")}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <div className={styles.consent}>
        <input
          id={fieldId("consent")}
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={(event) => update("consent", event.target.checked)}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? fieldId("consent-error") : undefined}
        />
        <label htmlFor={fieldId("consent")}>
          {forms.consent.before}
          <Link href={getPath(locale, "privacy")} target="_blank">
            {forms.consent.linkLabel}
          </Link>
        </label>
      </div>
      {errors.consent ? (
        <p id={fieldId("consent-error")} className={styles.error}>
          {errors.consent}
        </p>
      ) : null}

      {status === "error" ? (
        <p className={styles.formError} role="alert">
          {forms.errorText}{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </p>
      ) : null}

      <Button type="submit" size="lg" icon="send" fullWidth disabled={status === "submitting"}>
        {status === "submitting" ? forms.submittingLabel : forms.submitLabel}
      </Button>
    </form>
  );
}
