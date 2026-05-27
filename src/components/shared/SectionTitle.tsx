import { Activity } from "lucide-react";
import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  align = "center",
  className = ""
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? (
        <p className="mb-2 font-heading text-[12px] font-semibold uppercase tracking-[0.04em] text-slate-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-[30px] font-bold leading-tight text-slate-800 md:text-[38px]">
        {title}
      </h2>
      <div
        className={`mt-5 flex items-center gap-2 text-[var(--primary)] ${
          centered ? "justify-center" : ""
        }`}
        aria-hidden="true"
      >
        <span className="h-px w-7 bg-[var(--primary)]" />
        <Activity className="h-6 w-6" strokeWidth={2} />
        <span className="h-px w-7 bg-[var(--primary)]" />
      </div>
    </div>
  );
}
