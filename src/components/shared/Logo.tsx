import Link from "next/link";
import { HeartPulse } from "lucide-react";

type LogoProps = {
  inverse?: boolean;
  compact?: boolean;
};

export function Logo({ inverse = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${compact ? "" : "justify-center"}`}
      aria-label="Medicoz home"
    >
      <span
        className={`grid h-12 w-12 place-items-center rounded-full border-2 ${
          inverse
            ? "border-white/80 text-white"
            : "border-[var(--primary)] text-[var(--primary)]"
        }`}
      >
        <HeartPulse className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-heading text-[13px] font-semibold tracking-wide ${
            inverse ? "text-white/80" : "text-slate-500"
          }`}
        >
          Medical Solution
        </span>
        <span
          className={`block font-heading text-[31px] font-bold leading-[0.95] ${
            inverse ? "text-white" : "text-[var(--primary)]"
          }`}
        >
          Medicoz
        </span>
      </span>
    </Link>
  );
}
