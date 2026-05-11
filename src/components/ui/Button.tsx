import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-lime-200/50 bg-[linear-gradient(135deg,#d9f99d_0%,#22d3ee_52%,#fb7185_100%)] text-zinc-950 shadow-lg shadow-cyan-500/20 hover:brightness-110",
  secondary:
    "border-cyan-300/25 bg-cyan-300/10 text-cyan-50 hover:border-lime-200/40 hover:bg-lime-200/10",
  ghost: "border-transparent bg-transparent text-zinc-300 hover:bg-cyan-300/10 hover:text-cyan-50",
};

const baseClasses =
  "inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <button className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
}) {
  return (
    <Link href={href} className={cn(baseClasses, variantClasses[variant], className)} {...props}>
      {children}
    </Link>
  );
}
