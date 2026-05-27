import { Building2, HeartPulse, ShieldCheck, UsersRound } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "4", icon: ShieldCheck },
  { label: "Medical Specialities", value: "75", icon: UsersRound },
  { label: "Medical Specialists", value: "110", icon: Building2 },
  { label: "Happy Patients", value: "1454", icon: HeartPulse }
];

export function StatsBand({ overlap = false }: { overlap?: boolean }) {
  return (
    <div
      className={`relative z-10 mx-auto max-w-[980px] bg-white shadow-[0_16px_45px_rgba(16,72,116,0.12)] ${
        overlap ? "-mt-20" : ""
      }`}
    >
      <div className="grid grid-cols-2 divide-x divide-slate-100 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="relative overflow-hidden px-5 py-9 text-center after:absolute after:-bottom-9 after:left-1/2 after:h-24 after:w-24 after:-translate-x-1/2 after:rounded-full after:bg-slate-100/50"
            >
              <Icon className="mx-auto mb-5 h-12 w-12 text-[var(--primary)]" strokeWidth={1.5} />
              <p className="relative z-10 font-heading text-[13px] text-slate-500">{item.label}</p>
              <p className="relative z-10 mt-2 font-heading text-[34px] font-bold text-slate-800">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
