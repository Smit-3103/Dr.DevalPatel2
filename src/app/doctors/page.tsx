import type { Metadata } from "next";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { DentalTechnologyCta } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TestimonialSection } from "@/components/shared/TestimonialSection";
import { doctors } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dedicated Doctors | Medicoz Medical Solution",
  description: "Meet the dedicated doctor team at Medicoz Medical Solution and book an appointment with experienced specialists.",
  alternates: { canonical: "/doctors" }
};

export default function DoctorsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Doctors", url: "/doctors" }
        ])}
      />
      <PageHero title="Dedicated Doctors" current="Doctors" />
      <section className="bg-[#fafafa] py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor.slug} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] text-slate-500">
            Don&apos;t hesitate, contact us for better help and services.{" "}
            <a href="/contact" className="text-[var(--primary)]">
              Explore all Dr. Team
            </a>
          </p>
        </div>
      </section>
      <TestimonialSection card />
      <DentalTechnologyCta />
      <section className="hex-section bg-white py-24">
        <div className="container">
          <SectionTitle title="Doctor Time Table" className="mb-12" />
          <div className="mx-auto max-w-[880px] overflow-x-auto shadow-2xl">
            <table className="w-full min-w-[780px] border-collapse bg-white text-center font-heading text-[13px]">
              <thead>
                <tr className="bg-[var(--primary)] text-white">
                  {["Time Table", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                    (heading) => (
                      <th className="border border-white/20 px-5 py-5" key={heading}>
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {["08:00am", "10:00am", "11:00am", "11:30am", "12:00am", "01:00pm", "02:00pm"].map(
                  (time, row) => (
                    <tr key={time}>
                      <th className="bg-[var(--primary)] px-5 py-5 text-white">{time}</th>
                      {Array.from({ length: 7 }).map((_, col) => (
                        <td key={`${time}-${col}`} className="border border-slate-100 px-5 py-5 text-slate-500">
                          <strong className="block text-slate-800">
                            {["Dental Care", "Gynecology", "Orthopaedics", "Cardiology", "Medicine"][((row + col) % 5)]}
                          </strong>
                          8:00 am - 9:00 am
                          <br />
                          Room: 303
                        </td>
                      ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <BrandStrip />
    </>
  );
}
