import Image from "next/image";
import { brandLogos } from "@/lib/data";

export function BrandStrip() {
  return (
    <section className="bg-white py-11">
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {brandLogos.map((logo, index) => (
            <div key={logo} className="flex justify-center">
              <Image
                src={logo}
                alt={`Medical partner logo ${index + 1}`}
                width={160}
                height={74}
                className="h-[64px] w-auto object-contain opacity-95 transition duration-300 hover:-translate-y-1 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
