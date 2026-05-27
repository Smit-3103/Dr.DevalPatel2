"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { galleryItems } from "@/lib/data";

const filters = ["All", "Cancer", "Detal Care", "Cardiology", "Dental", "Eye Care"];

export function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(6);

  const items = useMemo(() => {
    return filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="mb-16 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {filters.map((item) => (
            <button
              key={item}
              className={`font-heading text-[21px] transition ${
                filter === item
                  ? "border-b-2 border-[var(--primary)] text-[var(--primary)]"
                  : "text-slate-700 hover:text-[var(--primary)]"
              }`}
              onClick={() => {
                setFilter(item);
                setVisible(6);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mx-auto grid max-w-[1120px] gap-7 md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, visible).map((item, index) => (
            <article key={`${item.title}-${index}`} className="group relative h-[280px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
                sizes="(min-width: 1024px) 360px, 50vw"
              />
              <div className="absolute inset-0 grid place-items-center bg-[var(--primary)]/0 transition duration-300 group-hover:bg-[var(--primary)]/35">
                <span className="grid h-14 w-14 scale-75 place-items-center rounded-full bg-white text-[var(--primary)] opacity-0 shadow-xl transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <Search className="h-6 w-6" />
                </span>
              </div>
              {index === 1 && visible === 6 ? (
                <button
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-[#1d1d1f] px-11 py-5 font-heading text-[20px] font-bold text-white shadow-xl"
                  onClick={() => setVisible((value) => value + 3)}
                >
                  Load More
                </button>
              ) : null}
            </article>
          ))}
        </div>
        {visible < items.length ? (
          <div className="mt-12 text-center">
            <button className="btn-dark" onClick={() => setVisible((value) => value + 3)}>
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
