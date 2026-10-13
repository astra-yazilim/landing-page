"use client";

import type { HTMLAttributes, PointerEvent } from "react";
import { cx } from "@/lib/text";
import styles from "./SpotlightCard.module.css";

type SpotlightCardProps = HTMLAttributes<HTMLDivElement> & {
  accent?: "emerald" | "indigo";
  highlighted?: boolean;
};

export function SpotlightCard({
  accent = "emerald",
  highlighted = false,
  className,
  children,
  ...props
}: SpotlightCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div
      className={cx(styles.card, styles[accent], highlighted && styles.highlighted, className)}
      onPointerMove={handlePointerMove}
      {...props}
    >
      {children}
    </div>
  );
}
