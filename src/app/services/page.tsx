import type { Metadata } from "next";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { BlueAppointmentCta } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceGrid } from "@/components/shared/ServiceGrid";
import { StatsBand } from "@/components/shared/StatsBand";
import { TestimonialSection } from "@/components/shared/TestimonialSection";
import { breadcrumbSchema, hospitalSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | Medicoz Medical Solution",
  description: "Explore Medicoz medical services including health checks, operation theater care, pharmacy support, lab tests, ambulance support, and intensive care.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          hospitalSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" }
          ])
        ]}
      />
      <PageHero title="Services" current="Services" />
      <ServiceGrid showTitle={false} />
      <BlueAppointmentCta />
      <div className="relative z-20 -mt-[70px] pb-8">
        <div className="container">
          <StatsBand />
        </div>
      </div>
      <TestimonialSection />
      <BrandStrip />
    </>
  );
}
