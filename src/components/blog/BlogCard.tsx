import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MessageCircle, UserRound } from "lucide-react";
import type { Blog } from "@/lib/data";

export function BlogCard({ blog, compact = false }: { blog: Blog; compact?: boolean }) {
  return (
    <article className="overflow-hidden rounded-[4px] bg-white shadow-[0_10px_35px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.14)]">
      <Link href={`/blog/${blog.slug}`} className="block overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={720}
          height={430}
          className={`w-full object-cover transition duration-700 hover:scale-105 ${
            compact ? "h-[230px]" : "h-[310px]"
          }`}
        />
      </Link>
      <div className={compact ? "p-6" : "p-7"}>
        <div className="mb-4 flex flex-wrap gap-4 text-[12px] text-slate-500">
          <span className="inline-flex items-center gap-1">
            <UserRound className="h-3.5 w-3.5 text-[var(--primary)]" /> Admin
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageCircle className="h-3.5 w-3.5 text-[var(--primary)]" /> Comments
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5 text-[var(--primary)]" />
            {new Date(blog.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "2-digit"
            })}
          </span>
        </div>
        <h2 className="font-heading text-[22px] font-bold leading-tight text-slate-800">
          <Link href={`/blog/${blog.slug}`} className="hover:text-[var(--primary)]">
            {blog.title}
          </Link>
        </h2>
        <p className="mt-3 text-[14px] leading-7 text-slate-500">{blog.description}</p>
        <Link href={`/blog/${blog.slug}`} className="btn-primary mt-5 inline-flex min-h-9 px-5 text-xs">
          Read More
        </Link>
      </div>
    </article>
  );
}
