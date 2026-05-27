import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutIntro } from "@/components/home/AboutIntro";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { NewsPreview } from "@/components/home/NewsPreview";
import { PricingSection } from "@/components/home/PricingSection";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { BlueAppointmentCta } from "@/components/shared/CtaBand";
import { JsonLd } from "@/components/shared/JsonLd";
import { ServiceGrid } from "@/components/shared/ServiceGrid";
import { StatsBand } from "@/components/shared/StatsBand";
import { TestimonialSection } from "@/components/shared/TestimonialSection";
import { hospitalSchema, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Medicoz Medical Solution | Clinic & Hospital Care",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Medicoz Medical Solution",
    description: siteConfig.description,
    url: "/",
    images: ["/images/hero/slide-1.jpg"]
  }
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={hospitalSchema()} />
      <Hero />
      <AboutIntro />
      <ServiceGrid />
      <DoctorsPreview />
      <BlueAppointmentCta />
      <div className="relative z-20 -mt-[70px] pb-8">
        <div className="container">
          <StatsBand />
        </div>
      </div>
      <TestimonialSection />
      <PricingSection />
      <NewsPreview />
      <BrandStrip />
    </>
  );
}
