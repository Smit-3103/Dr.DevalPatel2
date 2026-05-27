import { BlogCard } from "@/components/blog/BlogCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { blogs } from "@/lib/data";

export function NewsPreview() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <SectionTitle
          eyebrow="Our Blogs"
          title={
            <>
              Recent <span className="text-slate-200">Articles and News</span>
            </>
          }
          className="mb-14"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.slug} blog={blog} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
