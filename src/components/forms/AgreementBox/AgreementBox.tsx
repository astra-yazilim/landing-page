"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { Icon } from "@/components/ui/Icon/Icon";
import styles from "./AgreementBox.module.css";

type AgreementBoxProps = {
  id: string;
  title: string;
  version: string;
  clauses: string[];
  children: ReactNode;
};

export function AgreementBox({ id, title, version, clauses, children }: AgreementBoxProps) {
  const { forms, layout } = useContent();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `${id}-title`;

  const close = () => dialogRef.current?.close();
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) close();
  };

  return (
    <div className={styles.agreement}>
      <div className={styles.agreementHead}>
        <p className={styles.agreementTitle}>{title}</p>
        <button type="button" className={styles.readLink} onClick={() => dialogRef.current?.showModal()}>
          {forms.agreementDialog.readLink}
        </button>
      </div>
      {children}

      <dialog ref={dialogRef} className={styles.dialog} aria-labelledby={titleId} onClick={handleBackdropClick}>
        <div className={styles.dialogPanel}>
          <button type="button" className={styles.close} onClick={close} aria-label={layout.common.closeLabel}>
            <Icon name="close" />
          </button>
          <h2 id={titleId} className={styles.dialogTitle}>
            {title}
          </h2>
          <p className={styles.version}>
            {forms.agreementDialog.versionLabel}: {version}
          </p>
          <ol className={styles.clauses}>
            {clauses.map((clause) => (
              <li key={clause}>{clause}</li>
            ))}
          </ol>
          <p className={styles.notice} role="note">
            <Icon name="shield" size={18} />
            {forms.agreementDialog.draftNotice}
          </p>
        </div>
      </dialog>
    </div>
  );
}
