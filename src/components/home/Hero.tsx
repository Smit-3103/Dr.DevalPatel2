import Image from "next/image";
import { Building2, HeartPulse, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";

const features = [
  {
    title: "Quality & Safety",
    description: "Our hospital keeps patient safety and clean workflows at the center of every visit.",
    icon: ShieldCheck
  },
  {
    title: "Leading Technology",
    description: "Advanced diagnostics, digital records, and responsive clinical teams support faster care.",
    icon: HeartPulse
  },
  {
    title: "Experts by Experience",
    description: "Specialists coordinate across departments for clear decisions and dependable follow-up.",
    icon: Building2
  }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#eaf3f8]">
      <div className="absolute inset-0 bg-[url('/images/hero/slide-1.jpg')] bg-cover bg-center opacity-75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#eaf3f8] via-[#eaf3f8]/88 to-transparent" />
      <div className="container relative min-h-[590px]">
        <div className="max-w-[560px] py-28">
          <p className="font-heading text-[15px] font-bold text-[var(--primary)]">
            Welcome to our Total Health Care Solution
          </p>
          <h1 className="mt-3 font-heading text-[56px] font-bold leading-[1.03] text-slate-800 md:text-[66px]">
            We Take Care Our Patients Health
          </h1>
          <p className="mt-6 max-w-[500px] text-[16px] leading-8 text-slate-600">
            We provide the most full medical services, so every person could have the
            opportunity to receive qualitative medical help.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/services">Our Services</ButtonLink>
            <ButtonLink href="/contact" variant="light">
              Contact Now
            </ButtonLink>
          </div>
        </div>
        <button className="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 rounded bg-slate-500/40 text-white lg:block">
          ‹
        </button>
      </div>
      <div className="container relative -mt-16 pb-6">
        <div className="grid gap-7 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group bg-white px-8 py-8 shadow-[0_12px_35px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-2"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-slate-200 text-[var(--primary)]">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </span>
                  <h2 className="font-heading text-[23px] font-bold text-slate-800">{feature.title}</h2>
                </div>
                <p className="text-[14px] leading-7 text-slate-500">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
      <Image
        src="/images/doctors/doctor-1.jpg"
        alt=""
        width={1}
        height={1}
        className="hidden"
        priority
      />
    </section>
  );
}
