import { Clock3, MapPin, PlusCircle } from "lucide-react";
import { Logo } from "@/components/shared/Logo";


export function Topbar() {
  return (
    <div className="hidden border-t-[6px] border-[var(--primary)] bg-white lg:block">
      <div className="container grid min-h-[112px] grid-cols-[238px_1fr]">
        <div className="flex items-center justify-center bg-[#f7f7f7]">
          <Logo />
        </div>
        <div className="flex items-center justify-between gap-8 pl-8">
          <div className="flex items-center gap-12">
            <div className="topbar-info">
              <PlusCircle className="topbar-info-icon" strokeWidth={1.6} />
              <span>
                234 Triumph, Los Angeles,
                <br />
                California, US
              </span>
            </div>
            <div className="topbar-info">
              <Clock3 className="topbar-info-icon" strokeWidth={1.6} />
              <span>
                Mon - Sat 8.00 - 18.00.
                <br />
                Sunday CLOSED
              </span>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-5 font-heading text-[14px] font-bold text-slate-500">
              {["f", "t", "s", "in"].map((item) => (
                <a key={item} href="#" className="transition-colors hover:text-[var(--primary)]">
                  {item}
                </a>
              ))}
            </div>
            <a
              href="/contact"
              className="rounded bg-[#1f1f21] px-10 py-4 font-heading text-[15px] font-bold text-white transition hover:bg-[var(--primary)]"
            >
              Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="sr-only">
        <MapPin />
      </div>
    </div>
  );
}
