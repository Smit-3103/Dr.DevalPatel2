import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Medicoz Medical Solution",
  description: "View Medicoz hospital gallery images for departments, diagnostics, clinical spaces, technology, and patient care.",
  alternates: { canonical: "/gallery" }
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" }
        ])}
      />
      <PageHero title="Gallery" current="Gallery" />
      <GalleryGrid />
      <BrandStrip />
    </>
  );
}
