"use client";

import type { ReactNode } from "react";
import { useLeadModal, type LeadDefaults } from "@/components/lead/LeadModal/LeadModal";
import { Button, type ButtonSize, type ButtonVariant } from "@/components/ui/Button/Button";
import type { IconName } from "@/components/ui/Icon/Icon";

type LeadButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  fullWidth?: boolean;
  className?: string;
  defaults?: LeadDefaults;
  onOpen?: () => void;
};

export function LeadButton({ children, defaults, onOpen, ...buttonProps }: LeadButtonProps) {
  const { openLeadModal } = useLeadModal();

  return (
    <Button
      {...buttonProps}
      onClick={() => {
        onOpen?.();
        openLeadModal(defaults);
      }}
    >
      {children}
    </Button>
  );
}
