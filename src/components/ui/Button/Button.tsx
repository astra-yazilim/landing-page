import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon/Icon";
import { cx } from "@/lib/text";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "glass" | "ghost";
export type ButtonSize = "md" | "lg";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  fullWidth?: boolean;
  className?: string;
};

type LinkButtonProps = SharedProps & { href: string };
type NativeButtonProps = SharedProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", icon, fullWidth, className, ...rest } = props;
  const classNames = cx(styles.button, styles[variant], styles[size], fullWidth && styles.fullWidth, className);
  const content = (
    <>
      <span>{children}</span>
      {icon ? <Icon name={icon} size={18} className={styles.icon} /> : null}
    </>
  );

  if (typeof rest.href === "string") {
    return (
      <Link href={rest.href} className={classNames}>
        {content}
      </Link>
    );
  }

  const { href: _href, type = "button", ...buttonProps } = rest as NativeButtonProps;

  return (
    <button type={type} className={classNames} {...buttonProps}>
      {content}
    </button>
  );
}
