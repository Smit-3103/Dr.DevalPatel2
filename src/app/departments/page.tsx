import type { Metadata } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DepartmentCard } from "@/components/departments/DepartmentCard";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { departments } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Departments | Medicoz Medical Solution",
  description: "Explore Medicoz hospital departments including cardiology, neurology, urology, gynecological care, pediatrics, and laboratory diagnostics.",
  alternates: { canonical: "/departments" }
};

export default function DepartmentsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Departments", url: "/departments" }
        ])}
      />
      <PageHero title="Departments" current="Departments" />
      <section className="pattern-left bg-[#fafafa] py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <DepartmentCard department={department} key={department.slug} />
            ))}
          </div>
          <div className="mt-16 flex justify-center gap-3">
            <button className="pager">
              <ChevronLeft className="h-5 w-5" />
            </button>
            {[1, 2, 3].map((item) => (
              <button className={`pager ${item === 2 ? "bg-[var(--primary)] text-white" : ""}`} key={item}>
                {item}
              </button>
            ))}
            <button className="pager">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      <BrandStrip />
    </>
  );
}
