import Image from "next/image";
import { Play } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function AboutIntro({ reverse = false }: { reverse?: boolean }) {
  return (
    <section className="pattern-left relative overflow-hidden bg-white py-24">
      <div className="container relative grid items-center gap-16 lg:grid-cols-2">
        <div className={`relative min-h-[480px] ${reverse ? "lg:order-2" : ""}`}>
          <button
            className="absolute left-4 top-12 z-10 grid h-16 w-16 place-items-center rounded-full bg-white text-[var(--primary)] shadow-xl transition hover:scale-110"
            aria-label="Play hospital introduction video"
          >
            <Play className="ml-1 h-7 w-7 fill-current" />
          </button>
          <div className="absolute right-8 top-0 h-[390px] w-[390px] overflow-hidden rounded-[26px] border-[9px] border-white shadow-2xl hex-clip bg-white">
            <Image
              src="/images/about/about-collage-main.png"
              alt="Clinical lab research and medical specialist"
              fill
              className="object-cover"
              sizes="390px"
            />
          </div>
          <div className="absolute left-20 top-[205px] h-[205px] w-[230px] overflow-hidden rounded-[20px] border-[8px] border-white shadow-xl hex-clip bg-white">
            <Image
              src="/images/about/about-collage-small.png"
              alt="Doctor presenting patient care"
              fill
              className="object-cover"
              sizes="230px"
            />
          </div>
          <div className="absolute bottom-0 right-16 h-[155px] w-[170px] overflow-hidden rounded-[18px] border-[8px] border-white shadow-xl hex-clip bg-white">
            <Image
              src="/images/doctors/doctor-1.jpg"
              alt="Senior physician"
              fill
              className="object-cover object-top"
              sizes="170px"
            />
          </div>
        </div>
        <div>
          <SectionTitle
            align="left"
            eyebrow="Our Medical"
            title={
              <>
                We&apos;re setting Standards in{" "}
                <span className="text-slate-200">Research</span> what&apos;s more, Clinical Care.
              </>
            }
            className="mb-7"
          />
          <p className="text-[15px] leading-8 text-slate-600">
            We provide the most full medical services, so every person could have the opportunity
            to receive qualitative medical help.
          </p>
          <p className="mt-5 text-[15px] leading-8 text-slate-600">
            Our Clinic has grown to provide a world class facility for the treatment of tooth loss,
            dental cosmetics and more advanced restorative dentistry.
          </p>
          <div className="mt-8 flex items-center gap-7">
            <Image src="/images/about/signature.png" alt="Doctor signature" width={128} height={64} />
            <ButtonLink href="/about">More About</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
