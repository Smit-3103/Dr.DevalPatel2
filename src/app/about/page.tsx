import type { Metadata } from "next";
import { Clock3 } from "lucide-react";
import { AboutIntro } from "@/components/home/AboutIntro";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { EquipmentSection } from "@/components/home/EquipmentSection";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { DentalTechnologyCta } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { StatsBand } from "@/components/shared/StatsBand";
import { TestimonialSection } from "@/components/shared/TestimonialSection";
import { breadcrumbSchema, hospitalSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Medicoz Medical Solution",
  description: "Learn about Medicoz Medical Solution, our specialists, equipment, patient care standards, and appointment support.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          hospitalSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About", url: "/about" }
          ])
        ]}
      />
      <PageHero title="About Us" current="About" />
      <AboutIntro />
      <section className="bg-white py-8">
        <div className="container">
          <StatsBand />
        </div>
      </section>
      <section className="pattern-left bg-[#fafafa] py-24">
        <div className="container grid items-start gap-14 lg:grid-cols-2">
          <div className="bg-white p-8 shadow-[0_12px_45px_rgba(15,23,42,0.09)]">
            <AppointmentForm />
          </div>
          <div>
            <p className="section-kicker">Need a Doctor for Check-up?</p>
            <h2 className="font-heading text-[34px] font-bold leading-tight text-slate-800">
              Just Make an Appointment and You&apos;re Done!
            </h2>
            <p className="mt-5 font-heading text-[17px] text-slate-700">Get Your Quote or Call:</p>
            <p className="mt-1 font-heading text-[27px] font-bold text-slate-800">(0080) 123-453-789</p>
            <h3 className="mt-8 font-heading text-[28px] font-bold text-[var(--primary)]">Opening Hours</h3>
            <ul className="mt-5 max-w-[520px] divide-y divide-slate-200">
              {[
                ["Monday - Thursday", "08:00 - 20:00"],
                ["Friday", "09:00 - 19:00"],
                ["Saturday - Thursday", "09:00 - 18:00"],
                ["Sunday - Thursday", "09:00 - 18:00"]
              ].map(([day, time]) => (
                <li key={day} className="flex items-center justify-between py-4 text-[15px] text-slate-600">
                  <span className="inline-flex items-center gap-3">
                    <Clock3 className="h-4 w-4 text-[var(--primary)]" />
                    {day}
                  </span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <DoctorsPreview count={3} />
      <EquipmentSection />
      <TestimonialSection card />
      <DentalTechnologyCta />
      <BrandStrip />
    </>
  );
}
