import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "@/lib/data";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="group mx-auto w-full max-w-[330px] bg-white p-2 shadow-[0_12px_35px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
      <Link href={`/doctors/${doctor.slug}`} className="block overflow-hidden">
        <Image
          src={doctor.image}
          alt={`${doctor.name}, ${doctor.specialization}`}
          width={340}
          height={420}
          className="h-[370px] w-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="px-4 py-7 text-center">
        <h3 className="font-heading text-[20px] font-bold text-slate-800">
          <Link href={`/doctors/${doctor.slug}`} className="hover:text-[var(--primary)]">
            {doctor.name}
          </Link>
        </h3>
        <p className="mt-1 font-heading text-[13px] font-semibold text-[var(--primary)]">
          {doctor.specialization}
        </p>
      </div>
      <div className="h-1 w-0 bg-[var(--primary)] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}
