import Image from "next/image";
import Link from "next/link";
import { Brain, FlaskConical, HeartPulse, Stethoscope } from "lucide-react";
import type { Department } from "@/lib/data";

const departmentIcon = {
  cardiology: HeartPulse,
  neurology: Brain,
  urology: Stethoscope,
  gynecological: HeartPulse,
  pediatrical: Stethoscope,
  laboratory: FlaskConical
};

export function DepartmentCard({ department }: { department: Department }) {
  const Icon =
    departmentIcon[department.slug as keyof typeof departmentIcon] ?? HeartPulse;

  return (
    <article className="group overflow-hidden bg-white p-2 shadow-[0_12px_35px_rgba(15,23,42,0.09)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(15,23,42,0.15)]">
      <Link href={`/departments/${department.slug}`} className="block overflow-hidden">
        <Image
          src={department.image}
          alt={department.title}
          width={420}
          height={285}
          className="h-[245px] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="relative px-5 pb-8 pt-7">
        <Icon className="mb-3 h-7 w-7 text-[var(--primary)]" strokeWidth={1.5} />
        <h2 className="font-heading text-[25px] font-bold text-slate-800">
          <Link href={`/departments/${department.slug}`} className="hover:text-[var(--primary)]">
            {department.title}
          </Link>
        </h2>
        <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-slate-500">
          {department.description}
        </p>
        <HeartPulse
          className="absolute -bottom-3 -right-3 h-28 w-28 text-slate-100"
          strokeWidth={1}
          aria-hidden="true"
        />
      </div>
    </article>
  );
}
