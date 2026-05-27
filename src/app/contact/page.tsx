import type { Metadata } from "next";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { breadcrumbSchema, hospitalSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Medicoz Medical Solution",
  description: "Contact Medicoz Medical Solution for appointments, clinic directions, phone support, and general patient inquiries.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          hospitalSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" }
          ])
        ]}
      />
      <PageHero title="Contact Us" current="Contact" />
      <section className="bg-white py-24">
        <div className="container">
          <div className="mx-auto h-[390px] max-w-[1140px] overflow-hidden border border-slate-200 shadow-sm">
            <div className="faux-map relative h-full">
              <div className="absolute left-1/2 top-9 w-[355px] -translate-x-1/2 bg-white p-6 shadow-2xl">
                <p className="mb-3 font-heading text-[18px] font-bold text-slate-700">Google</p>
                <p className="text-[15px] text-slate-700">This page can&apos;t load Google Maps correctly.</p>
                <div className="mt-5 flex items-center justify-between text-[12px] text-slate-500">
                  <span>Do you own this website?</span>
                  <button className="rounded border border-slate-200 px-4 py-2 text-[var(--primary)]">OK</button>
                </div>
              </div>
              <MapPin className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-blue-600 drop-shadow-lg" fill="currentColor" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f4f4f4] py-24">
        <div className="container">
          <SectionTitle
            eyebrow="Contact Now"
            title={
              <>
                Write us <span className="text-slate-200">a Message !</span>
              </>
            }
            className="mb-16"
          />
          <div className="mx-auto mb-14 grid max-w-[820px] gap-8 md:grid-cols-3">
            <ContactBlock
              icon={<MapPin />}
              title="Address"
              text={["185, Pickton Near Street,", "Los Angeles, USA"]}
            />
            <ContactBlock icon={<Smartphone />} title="Phone" text={["(+92) 313 888 000", "(+92) 313 999 000"]} />
            <ContactBlock icon={<Mail />} title="Email" text={["support@example.com", "support@example.com"]} />
          </div>
          <form className="mx-auto grid max-w-[950px] gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="grid gap-6">
                <input className="form-field bg-white" placeholder="Full Name *" />
                <input className="form-field bg-white" placeholder="Email Address *" />
                <input className="form-field bg-white" placeholder="Your Phone" />
              </div>
              <textarea className="form-field min-h-[214px] resize-none bg-white pt-4" placeholder="Message" />
            </div>
            <button className="btn-primary mx-auto px-10">Send Message</button>
          </form>
        </div>
      </section>
      <BrandStrip />
    </>
  );
}

function ContactBlock({
  icon,
  title,
  text
}: {
  icon: React.ReactNode;
  title: string;
  text: string[];
}) {
  return (
    <div className="flex items-start gap-5">
      <span className="mt-1 text-[var(--primary)] [&_svg]:h-10 [&_svg]:w-10 [&_svg]:stroke-[1.5]">
        {icon}
      </span>
      <div>
        <h2 className="font-heading text-[20px] font-bold text-slate-800">{title}</h2>
        <p className="mt-1 text-[14px] leading-7 text-slate-500">
          {text.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
