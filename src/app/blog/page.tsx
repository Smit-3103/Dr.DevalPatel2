import type { Metadata } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { blogs } from "@/lib/data";
import { breadcrumbSchema } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog Standard | Medicoz Medical Solution",
  description: "Read Medicoz articles about medical procedures, prevention, patient care, dental health, cardiology, pediatrics, and hospital updates.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" }
        ])}
      />
      <PageHero title="Blog Standard" current="Blog" />
      <section className="bg-white py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_330px]">
          <main className="space-y-10">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
            <div className="flex justify-center gap-2 pt-4">
              <button className="pager">
                <ChevronLeft className="h-5 w-5" />
              </button>
              {[1, 2, 3].map((item) => (
                <button className={`pager ${item === 2 ? "bg-[var(--primary)] text-white" : ""}`} key={item}>
                  {item}
                </button>
              ))}
              <button className="pager">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </main>
          <BlogSidebar />
        </div>
      </section>
      <BrandStrip />
    </>
  );
}
