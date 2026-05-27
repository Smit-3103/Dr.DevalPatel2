import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogCategories, blogs, blogTags } from "@/lib/data";

export function BlogSidebar() {
  return (
    <aside className="space-y-9">
      <div className="sidebar-widget">
        <label className="relative block">
          <input className="form-field pr-12" placeholder="Search..." aria-label="Search blog" />
          <Search className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        </label>
      </div>
      <div className="sidebar-widget">
        <WidgetTitle>Categories</WidgetTitle>
        <ul className="divide-y divide-slate-100">
          {blogCategories().map((category) => (
            <li key={category.name}>
              <Link
                href="/blog"
                className="flex items-center justify-between py-3 text-[14px] text-slate-600 transition hover:text-[var(--primary)]"
              >
                <span>› {category.name}</span>
                <span>({String(category.count).padStart(2, "0")})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-widget">
        <WidgetTitle>Popular Posts</WidgetTitle>
        <div className="space-y-4">
          {blogs.slice(1, 4).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="grid grid-cols-[72px_1fr] gap-4">
              <Image src={post.image} alt={post.title} width={72} height={72} className="h-[72px] w-[72px] object-cover" />
              <span>
                <span className="block font-heading text-[15px] font-bold leading-5 text-slate-800">
                  {post.title}
                </span>
                <span className="mt-1 block text-[12px] text-[var(--primary)]">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="sidebar-widget">
        <WidgetTitle>Newsletter</WidgetTitle>
        <p className="mb-4 text-[14px] leading-7 text-slate-500">
          Enter your email address below to subscribe to our newsletter.
        </p>
        <input className="form-field mb-3" placeholder="Your email address..." aria-label="Newsletter email" />
        <button className="btn-primary w-full">Subscribe</button>
      </div>
      <div className="sidebar-widget">
        <WidgetTitle>Instagram</WidgetTitle>
        <div className="grid grid-cols-3 gap-2">
          {blogs.slice(0, 6).map((post) => (
            <Image
              key={post.slug}
              src={post.image}
              alt={post.title}
              width={82}
              height={82}
              className="h-[82px] w-full object-cover"
            />
          ))}
        </div>
      </div>
      <div className="sidebar-widget">
        <WidgetTitle>Tag Cloud</WidgetTitle>
        <div className="flex flex-wrap gap-2">
          {blogTags().map((tag) => (
            <Link
              href="/blog"
              key={tag}
              className="border border-slate-200 px-3 py-1.5 text-[13px] text-slate-500 transition hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

function WidgetTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 font-heading text-[22px] font-bold text-slate-800">{children}</h2>;
}
