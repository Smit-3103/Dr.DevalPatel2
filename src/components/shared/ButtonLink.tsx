import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const variants = {
    primary: "bg-[var(--primary)] text-white hover:bg-[var(--navy)]",
    dark: "bg-[#1d1d1f] text-white hover:bg-[var(--primary)]",
    light: "bg-white text-[var(--primary)] shadow-sm hover:bg-[var(--primary)] hover:text-white"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-[3px] px-7 font-heading text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
