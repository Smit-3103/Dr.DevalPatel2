import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { doctors } from "@/lib/data";
import { absoluteUrl, breadcrumbSchema, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) return {};

  return {
    title: doctor.seo.title,
    description: doctor.seo.description,
    alternates: { canonical: `/doctors/${doctor.slug}` },
    openGraph: {
      title: doctor.seo.title,
      description: doctor.seo.description,
      images: [doctor.image]
    }
  };
}

export default async function DoctorDetailPage({ params }: Props) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) notFound();

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    image: absoluteUrl(doctor.image),
    description: doctor.description,
    medicalSpecialty: doctor.department,
    worksFor: {
      "@type": "Hospital",
      name: siteConfig.legalName,
      url: siteConfig.url
    },
    url: absoluteUrl(`/doctors/${doctor.slug}`)
  };

  return (
    <>
      <JsonLd
        data={[
          physicianSchema,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Doctors", url: "/doctors" },
            { name: doctor.name, url: `/doctors/${doctor.slug}` }
          ])
        ]}
      />
      <PageHero title="Dedicated Doctor" current="Doctors" />
      <section className="bg-[#fafafa] py-24">
        <div className="container grid gap-12 lg:grid-cols-[330px_1fr]">
          <aside>
            <div className="border-4 border-white bg-white shadow-xl">
              <Image
                src={doctor.image}
                alt={`${doctor.name}, ${doctor.specialization}`}
                width={330}
                height={500}
                className="h-[520px] w-full object-cover object-top"
              />
            </div>
            <div className="mt-10 bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
              <SectionTitle
                align="left"
                eyebrow="Timing"
                title={<span>Availability</span>}
                className="mb-6"
              />
              <p className="text-[14px] leading-7 text-slate-500">{doctor.availability}</p>
              <ul className="mt-7 divide-y divide-slate-100">
                {Object.entries(doctor.timings).map(([day, time]) => (
                  <li key={day} className="flex justify-between py-3 text-[14px] text-slate-500">
                    <span>{day}</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <div>
            <h1 className="font-heading text-[37px] font-bold text-slate-800">
              {doctor.name.split(" ")[0]}{" "}
              <span className="text-slate-200">{doctor.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="mt-2 font-heading text-[18px] text-[var(--primary)]">
              {doctor.education[0]}, {doctor.education[1]}
            </p>
            <p className="mt-8 max-w-[820px] text-[15px] leading-8 text-slate-600">{doctor.description}</p>
            <dl className="mt-8 grid gap-y-5 text-[15px] leading-7 text-slate-600 md:grid-cols-[175px_1fr]">
              <dt className="font-heading font-bold text-slate-900">Speciality</dt>
              <dd>{doctor.department}<br />Paediatric Medicine<br />Urology</dd>
              <dt className="font-heading font-bold text-slate-900">Education</dt>
              <dd>{doctor.education.join(", ")}</dd>
              <dt className="font-heading font-bold text-slate-900">Experience</dt>
              <dd>{doctor.experience}<br />Medical Corporation Professor, Institute Of Coast Private Hospital Campus</dd>
              <dt className="font-heading font-bold text-slate-900">Address</dt>
              <dd>Suite 27, Medical Centre, The Sunshine Coast Private Hospital, QLD 4556</dd>
              <dt className="font-heading font-bold text-slate-900">Timing</dt>
              <dd>{Object.entries(doctor.timings).map(([day, time]) => `${day}: ${time}`).join(" | ")}</dd>
              <dt className="font-heading font-bold text-slate-900">Phone</dt>
              <dd>+1-23-345-6789</dd>
              <dt className="font-heading font-bold text-slate-900">Email</dt>
              <dd>myemail@yourdomain.com</dd>
              <dt className="font-heading font-bold text-slate-900">Website</dt>
              <dd>www.yourdomain.com</dd>
            </dl>
            <div className="mt-12 border-t border-slate-200 pt-10">
              <SectionTitle
                align="left"
                eyebrow="Online Appointment"
                title={
                  <>
                    Make An <span className="text-slate-200">Appointment</span>
                  </>
                }
                className="mb-8"
              />
              <AppointmentForm compact />
            </div>
          </div>
        </div>
      </section>
      <section className="pattern-right bg-white py-24">
        <div className="container">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {doctors.slice(0, 4).map((item) => (
              <a href={`/doctors/${item.slug}`} key={item.slug} className="block overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={290}
                  height={390}
                  className="h-[390px] w-full object-cover object-top transition duration-700 hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <BrandStrip />
    </>
  );
}
