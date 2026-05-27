import Image from "next/image";
import { Play } from "lucide-react";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function BlueAppointmentCta({ stats = true }: { stats?: boolean }) {
  return (
    <section className="relative overflow-visible bg-[var(--primary)]">
      <div className="absolute inset-0 opacity-10 hex-bg" />
      <div className="container relative min-h-[470px]">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_520px]">
          <div className="py-20 text-white">
            <p className="mb-3 font-heading text-[13px] font-semibold uppercase">
              Need a Doctor for Check-up?
            </p>
            <h2 className="max-w-[470px] font-heading text-[44px] font-bold leading-tight">
              Just Make an Appointment and You&apos;re Done!
            </h2>
            <p className="mt-7 font-heading text-[15px] font-semibold">Get Your Quote or Call:</p>
            <p className="mt-2 font-heading text-[31px] font-bold">(0080) 123-453-789</p>
            <ButtonLink href="/contact" variant="dark" className="mt-6">
              Get an Appointment
            </ButtonLink>
          </div>
          <div className="relative hidden h-[470px] lg:block">
            <Image
              src="/images/doctors/doctor-6.jpg"
              alt="Female doctor holding medical clipboard"
              fill
              className="object-contain object-bottom"
              sizes="520px"
            />
          </div>
        </div>
      </div>
      {stats ? (
        <div className="container relative">
          <div className="-mb-[70px]">
            <div className="h-[1px]" />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function DentalTechnologyCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-20 text-white">
      <div className="absolute inset-0 bg-[url('/images/background/blue-pattern.jpg')] bg-cover bg-center opacity-30" />
      <div className="container relative grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-heading text-[13px] font-semibold">We Employ The Latest Technology</p>
          <h2 className="mt-4 font-heading text-[38px] font-bold">We Ensure Safe Dental Surgery</h2>
          <ButtonLink href="/contact" variant="dark" className="mt-7">
            Take Appointment
          </ButtonLink>
        </div>
        <button
          className="group flex items-center gap-4 font-heading text-sm font-bold"
          aria-label="Watch clinic technology video"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-[var(--primary)] shadow-xl transition group-hover:scale-110">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
          Watch now
        </button>
      </div>
    </section>
  );
}
