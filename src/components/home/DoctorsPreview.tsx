import Link from "next/link";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { doctors } from "@/lib/data";

export function DoctorsPreview({ count = 4 }: { count?: number }) {
  return (
    <section className="pattern-right bg-white py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Meet Our Experienced Team"
          title={
            <>
              Our Dedicated <span className="text-slate-200">Doctors Team.</span>
            </>
          }
          className="mb-14"
        />
        <div className={`grid gap-8 ${count <= 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {doctors.slice(0, count).map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.slug} />
          ))}
        </div>
        <p className="mt-10 text-center text-[13px] text-slate-500">
          Don&apos;t hesitate, contact us for better help and services.{" "}
          <Link href="/doctors" className="text-[var(--primary)]">
            Explore all Dr. Team
          </Link>
        </p>
      </div>
    </section>
  );
}
