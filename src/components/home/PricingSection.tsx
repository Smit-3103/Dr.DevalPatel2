import { Check } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const plans = [
  ["$299", "Primary Care"],
  ["$120", "Eye Care"],
  ["$150", "Urgent Checkup"],
  ["$100", "Blood Test"]
];

export function PricingSection() {
  return (
    <section className="hex-section bg-[#f8f9fb] py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Our Pricing"
          title={
            <>
              Pricing <span className="text-slate-200">Plan</span>
            </>
          }
          className="mb-14"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map(([price, name]) => (
            <article key={name} className="bg-white p-7 text-center shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
              <div className="mx-auto mb-6 bg-[#edf7ff] py-5">
                <p className="font-heading text-[28px] font-bold text-[var(--primary)]">{price}</p>
              </div>
              <h3 className="font-heading text-[22px] font-bold text-slate-800">{name}</h3>
              <ul className="my-7 space-y-3 text-left text-[14px] text-slate-500">
                {["Clinical consultation", "Detailed reporting", "Follow-up guidance", "Priority support"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-[var(--primary)]" /> {item}
                    </li>
                  )
                )}
              </ul>
              <button className="border border-[var(--primary)] px-5 py-2 font-heading text-sm font-bold text-[var(--primary)] transition hover:bg-[var(--primary)] hover:text-white">
                Select Plan
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
