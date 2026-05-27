import Image from "next/image";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ButtonLink } from "@/components/shared/ButtonLink";

const bars = [
  ["CARDIO-ONCOLOGY", "55%"],
  ["HEART ASSESSMENT", "72%"],
  ["DENTAL SURGERY", "88%"],
  ["HEART ASSESSMENT", "78%"]
];

export function EquipmentSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute left-0 top-20 h-[360px] w-[32%] bg-[var(--primary)]" />
      <div className="container relative grid items-center gap-0 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative z-10 h-[460px] shadow-xl">
          <Image
            src="/images/about/equipment.jpg"
            alt="High end medical equipment and dental imaging"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 560px, 100vw"
          />
        </div>
        <div className="relative z-10 bg-white p-10 shadow-[0_15px_55px_rgba(15,23,42,0.12)] lg:p-14">
          <SectionTitle
            align="left"
            eyebrow="Best of the Best"
            title={
              <>
                High End <span className="text-slate-200">Equipments.</span>
              </>
            }
            className="mb-7"
          />
          <p className="text-[15px] leading-8 text-slate-600">
            Surgery of the respiratory tract is generally performed by specialists in
            cardiothoracic surgery or thoracic surgery through minor procedures.
          </p>
          <div className="mt-8 space-y-5">
            {bars.map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between font-heading text-[12px] font-bold text-slate-800">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-1.5 bg-slate-100">
                  <div className="h-full bg-[var(--primary)]" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
          <ButtonLink href="/services" variant="dark" className="mt-9">
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
