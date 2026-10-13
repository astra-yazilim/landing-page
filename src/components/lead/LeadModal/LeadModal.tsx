"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { useContent } from "@/components/i18n/LocaleProvider/LocaleProvider";
import { ContactForm, type LeadPayload } from "@/components/lead/ContactForm/ContactForm";
import { Icon } from "@/components/ui/Icon/Icon";
import styles from "./LeadModal.module.css";

export type LeadDefaults = Partial<Pick<LeadPayload, "website" | "service" | "message">> & {
  source?: string;
};

type LeadModalContextValue = {
  openLeadModal: (defaults?: LeadDefaults) => void;
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) throw new Error("useLeadModal must be used within LeadModalProvider");
  return context;
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const { forms, layout } = useContent();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [session, setSession] = useState<{ key: number; defaults: LeadDefaults }>({ key: 0, defaults: {} });

  const openLeadModal = useCallback((defaults: LeadDefaults = {}) => {
    setSession((current) => ({ key: current.key + 1, defaults }));
    dialogRef.current?.showModal();
  }, []);

  const closeLeadModal = () => dialogRef.current?.close();

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) closeLeadModal();
  };

  const value = useMemo(() => ({ openLeadModal }), [openLeadModal]);

  return (
    <LeadModalContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="lead-modal-title"
        onClick={handleBackdropClick}
      >
        <div className={styles.panel}>
          <button type="button" className={styles.close} onClick={closeLeadModal} aria-label={layout.common.closeLabel}>
            <Icon name="close" />
          </button>
          <header className={styles.header}>
            <h2 id="lead-modal-title" className={styles.title}>
              {forms.modalTitle}
            </h2>
            <p className={styles.description}>{forms.modalDescription}</p>
          </header>
          <ContactForm
            key={session.key}
            idPrefix="lead-modal"
            source={session.defaults.source ?? "lead-modal"}
            defaults={session.defaults}
            messageRequired={false}
          />
        </div>
      </dialog>
    </LeadModalContext.Provider>
  );
}
