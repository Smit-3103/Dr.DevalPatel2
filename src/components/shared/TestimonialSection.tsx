import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function TestimonialSection({ card = false }: { card?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-x-0 top-24 mx-auto h-[520px] max-w-[900px] bg-[url('/images/patterns/dotted-map.png')] bg-contain bg-center bg-no-repeat opacity-20" />
      <div className="container relative">
        <SectionTitle
          eyebrow="Happy Patient"
          title={
            <>
              What Says Our <span className="text-slate-800">Patients</span>
            </>
          }
          className="mb-14"
        />
        <div className={`mx-auto max-w-[820px] text-center ${card ? "bg-white p-12 shadow-xl" : ""}`}>
          <div className="mb-7 flex justify-center -space-x-3">
            {["/images/doctors/doctor-4.jpg", "/images/doctors/doctor-5.jpg", "/images/doctors/doctor-6.jpg"].map(
              (image, index) => (
                <Image
                  key={image}
                  src={image}
                  alt={`Patient testimonial avatar ${index + 1}`}
                  width={74}
                  height={74}
                  className={`h-[66px] w-[66px] rounded-full border-4 border-white object-cover shadow-md ${
                    index === 0 ? "scale-110" : "opacity-70"
                  }`}
                />
              )
            )}
          </div>
          <Quote className="mx-auto -mb-2 h-7 w-7 text-slate-300" />
          <p className="mx-auto max-w-[700px] text-[15px] leading-8 text-slate-600">
            Medical Centre is a great place to get all of your medical needs. I came in for a
            check up and did not wait more than 5 minutes before I was seen. I can only imagine the
            type of service you get for more serious issues. Thanks!
          </p>
          <h3 className="mt-6 font-heading text-[19px] font-bold text-[var(--primary)]">Lara Croft</h3>
          <p className="text-[13px] text-slate-500">Restaurant Owner</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="slider-arrow" aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="h-1.5 w-7 rounded-full bg-[var(--primary)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
            <button className="slider-arrow" aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
