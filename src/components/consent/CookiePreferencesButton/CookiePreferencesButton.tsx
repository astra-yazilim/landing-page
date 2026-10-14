"use client";

import { openConsentEvent } from "@/lib/consent";

export function CookiePreferencesButton({ label, className }: { label: string; className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(openConsentEvent))}>
      {label}
    </button>
  );
}
