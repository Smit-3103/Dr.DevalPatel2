import Link from "next/link";
import { ChevronRight } from "lucide-react";

type PageHeroProps = {
  title: string;
  current: string;
};

export function PageHero({ title, current }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[url('/images/background/page-title.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/30" />
      <div className="container relative flex min-h-[215px] items-center justify-end py-14 text-right">
        <div>
          <h1 className="font-heading text-[42px] font-bold leading-none text-[var(--primary)] md:text-[52px]">
            {title}
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="mt-4 flex items-center justify-end gap-2 font-heading text-[18px] text-slate-800"
          >
            <Link href="/" className="transition-colors hover:text-[var(--primary)]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>{current}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
