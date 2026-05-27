import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, FileText } from "lucide-react";
import { DepartmentCard } from "@/components/departments/DepartmentCard";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { departments } from "@/lib/data";
import { breadcrumbSchema, faqSchema } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return departments.map((department) => ({ slug: department.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);
  if (!department) return {};

  return {
    title: department.seo.title,
    description: department.seo.description,
    alternates: { canonical: `/departments/${department.slug}` },
    openGraph: {
      title: department.seo.title,
      description: department.seo.description,
      images: [department.image]
    }
  };
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);
  if (!department) notFound();
  const related = departments.filter((item) => item.slug !== department.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          faqSchema(department.FAQ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Departments", url: "/departments" },
            { name: department.title, url: `/departments/${department.slug}` }
          ])
        ]}
      />
      <PageHero title="Departments" current="Departments" />
      <section className="bg-white py-24">
        <div className="container grid gap-12 lg:grid-cols-[285px_1fr]">
          <aside className="space-y-9">
            <div className="bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
              <ul className="divide-y divide-slate-100 font-heading text-[15px]">
                <li>
                  <Link href="/departments" className="department-side-link">
                    All Departments
                  </Link>
                </li>
                {departments.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/departments/${item.slug}`}
                      className={`department-side-link ${
                        item.slug === department.slug ? "bg-[var(--primary)] text-white" : ""
                      }`}
                    >
                      {item.title.replace(" Department", "")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sidebar-widget">
              <h2 className="font-heading text-[20px] font-bold text-slate-800">Download Brochures</h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-500">
                Etiam tortor lorem, auctor ut orci ut, vehicula ultricies mauris.
              </p>
              <button className="btn-primary mt-5 w-full">
                <FileText className="mr-2 h-4 w-4" /> Info Company
              </button>
              <button className="btn-primary mt-3 w-full">
                <FileText className="mr-2 h-4 w-4" /> Brochure Newest
              </button>
            </div>
            <div className="sidebar-widget">
              <p className="section-kicker">Quick Contact</p>
              <h2 className="font-heading text-[20px] font-bold text-slate-800">Get Solution</h2>
              <p className="mt-4 text-[14px] leading-7 text-slate-500">
                Contact us at the Medicoz office nearest to you or submit a business inquiry online.
              </p>
              <Link href="/contact" className="btn-primary mt-5 inline-flex">
                Contact
              </Link>
            </div>
          </aside>
          <article>
            <Image
              src={department.image}
              alt={department.title}
              width={850}
              height={520}
              className="h-[440px] w-full object-cover"
              priority
            />
            <h1 className="mt-8 font-heading text-[34px] font-bold text-slate-800">
              Departments Of <span className="text-slate-200">{department.title.replace(" Department", "")}</span>
            </h1>
            <p className="mt-2 font-heading text-[16px] text-[var(--primary)]">
              ResoFus Alomar Treatment for Essential Tremor and Parkinson&apos;s Disease
            </p>
            <p className="mt-7 text-[15px] leading-8 text-slate-600">{department.description}</p>
            <p className="mt-5 text-[15px] leading-8 text-slate-600">
              Results combine focused imaging, experienced consultation, and careful follow-up.
              This precision approach lets patients receive clear guidance while protecting normal
              surrounding tissue and healthy routines.
            </p>
            <div className="mt-8 grid gap-7 md:grid-cols-[330px_1fr]">
              <Image
                src="/images/blog/blog-2.jpg"
                alt="Patient consultation"
                width={330}
                height={230}
                className="h-[230px] w-full object-cover"
              />
              <div>
                <p className="text-[15px] leading-8 text-slate-600">
                  Complete account of the systems and expound the actual teachings of the great
                  explorer of the truth, the master-builder of human happiness.
                </p>
                <ul className="mt-5 space-y-3 text-[15px] text-slate-600">
                  {department.treatments.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 text-[var(--primary)]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="mt-9 font-heading text-[25px] font-bold text-slate-800">
              Why Choose This Service
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-slate-600">
              Complete account of the systems and expound the actual teachings of the great
              explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,
              or avoids pleasure itself, because it is pleasure.
            </p>
            <div className="mt-8 border border-slate-200">
              <div className="flex border-b border-slate-200 font-heading text-[15px]">
                {["Precautions", "Intelligence", "Specializations"].map((item, index) => (
                  <button
                    key={item}
                    className={`border-r border-slate-200 px-7 py-4 ${
                      index === 0 ? "border-t-2 border-t-[var(--primary)] text-[var(--primary)]" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <p className="p-7 text-[15px] leading-8 text-slate-600">
                Suspendisse laoreet at nulla id auctor. Maecenas in dui cursus, lacinia nisl non,
                blandit lorem. Aliquam vel risus hendrerit, faucibus nisi a, porta sapien.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="pattern-left bg-[#fafafa] py-24">
        <div className="container">
          <div className="grid gap-7 md:grid-cols-3">
            {related.map((item) => (
              <DepartmentCard department={item} key={item.slug} />
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[var(--primary)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
          </div>
        </div>
      </section>
      <BrandStrip />
    </>
  );
}
