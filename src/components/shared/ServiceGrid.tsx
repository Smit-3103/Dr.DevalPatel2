import {
  Ambulance,
  HeartPulse,
  Hospital,
  Microscope,
  Pill,
  Stethoscope
} from "lucide-react";
import { services } from "@/lib/data";

const serviceIcons = {
  heart: HeartPulse,
  operation: Stethoscope,
  pharmacy: Pill,
  ambulance: Ambulance,
  lab: Microscope,
  intensive: Hospital
};

export function ServiceGrid({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section className="hex-section bg-[#f7f7f7] py-24">
      <div className="container relative">
        {showTitle ? (
          <div className="mb-14 text-center">
            <p className="section-kicker">Departments</p>
            <h2 className="font-heading text-[34px] font-bold text-slate-800">
              We Care Our <span className="text-slate-200">Patients.</span>
            </h2>
          </div>
        ) : null}
        <div className="grid gap-x-16 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <article
                key={service.title}
                className="group text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="mx-auto mb-6 grid h-[82px] w-[82px] place-items-center rounded-full border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:border-[var(--primary)] group-hover:shadow-xl">
                  <Icon className="h-9 w-9 text-[var(--primary)]" strokeWidth={1.6} />
                </div>
                <h3 className="font-heading text-[21px] font-bold text-slate-800">{service.title}</h3>
                <p className="mx-auto mt-3 max-w-[290px] text-[14px] leading-7 text-slate-500">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
