import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, MessageCircle, UserRound } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { BrandStrip } from "@/components/shared/BrandStrip";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHero } from "@/components/shared/PageHero";
import { blogs, getRelatedBlogs } from "@/lib/data";
import { absoluteUrl, breadcrumbSchema, faqSchema, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) return {};

  return {
    title: blog.seo.title,
    description: blog.seo.description,
    alternates: { canonical: `/blog/${blog.slug}` },
    openGraph: {
      title: blog.seo.title,
      description: blog.seo.description,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      images: [blog.image]
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo.title,
      description: blog.seo.description,
      images: [blog.image]
    }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) notFound();
  const related = getRelatedBlogs(blog);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    image: absoluteUrl(blog.image),
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: blog.author
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName
    },
    mainEntityOfPage: absoluteUrl(`/blog/${blog.slug}`)
  };

  return (
    <>
      <JsonLd
        data={[
          blogSchema,
          faqSchema(blog.FAQ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: blog.title, url: `/blog/${blog.slug}` }
          ])
        ]}
      />
      <PageHero title="Image Post" current="Blog" />
      <section className="bg-white py-24">
        <div className="container grid gap-12 lg:grid-cols-[1fr_330px]">
          <main>
            <article className="overflow-hidden bg-white shadow-[0_12px_45px_rgba(15,23,42,0.08)]">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={500}
                className="h-[410px] w-full object-cover"
                priority
              />
              <div className="p-8">
                <div className="mb-5 flex flex-wrap gap-5 text-[13px] text-slate-500">
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
                <h1 className="font-heading text-[30px] font-bold text-slate-800">{blog.title}</h1>
                <div className="mt-5 space-y-5 text-[15px] leading-8 text-slate-600">
                  {blog.content.slice(0, 1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <blockquote className="my-8 border-l-4 border-[var(--primary)] bg-slate-50 p-7 font-heading text-[17px] leading-8 text-slate-700">
                  It&apos;s a beautiful day in this neighborhood, a beautiful day for a neighbor.
                  Would you be mine could you be mine in a neighborly day in this beautiful
                  neighborhood.
                </blockquote>
                <p className="text-[15px] leading-8 text-slate-600">{blog.content[1]}</p>
                <div className="my-8 grid gap-7 md:grid-cols-[260px_1fr]">
                  <Image
                    src="/images/blog/blog-1.jpg"
                    alt="Doctor reviewing patient care"
                    width={260}
                    height={190}
                    className="h-[190px] w-full object-cover"
                  />
                  <p className="text-[15px] leading-8 text-slate-600">{blog.content[2]}</p>
                </div>
              </div>
            </article>
            <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Link href="/blog" key={tag} className="tag-pill">
                    {tag}
                  </Link>
                ))}
              </div>
              <div className="flex gap-2">
                {["f", "t", "s", "in"].map((item) => (
                  <a href="#" key={item} className="share-pill">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-10 grid gap-6 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] md:grid-cols-[150px_1fr]">
              <Image src="/images/blog/author.jpg" alt="Author Robert Theodore" width={150} height={150} className="h-[150px] w-[150px] object-cover" />
              <div>
                <p className="section-kicker">Author</p>
                <h2 className="font-heading text-[20px] font-bold text-slate-800">Robert Theodore</h2>
                <p className="mt-3 text-[14px] leading-7 text-slate-500">
                  Dynamically innovate resource and leveling customer service for state of the art
                  customer service circumstances occur.
                </p>
              </div>
            </div>
            <h2 className="mt-14 font-heading text-[28px] font-bold text-slate-800">Related News</h2>
            <div className="mt-7 grid gap-7 md:grid-cols-2">
              {related.map((item) => (
                <BlogCard key={item.slug} blog={item} compact />
              ))}
            </div>
            <section className="mt-16">
              <h2 className="font-heading text-[27px] font-bold text-slate-800">03 Comments</h2>
              <div className="mt-8 space-y-8">
                {["Steven Rich", "Donal Smith", "Rona Stowe"].map((name, index) => (
                  <article key={name} className={`border-b border-slate-100 pb-8 ${index === 1 ? "ml-14" : ""}`}>
                    <h3 className="font-heading text-[17px] font-bold text-slate-800">{name}</h3>
                    <p className="mt-1 text-[12px] uppercase text-slate-400">June 01, 2026</p>
                    <p className="mt-3 text-[14px] leading-7 text-slate-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet tempor
                      facilisis, ligula ut porta lobortis.
                    </p>
                    <button className="mt-2 text-[var(--primary)]">Reply</button>
                  </article>
                ))}
              </div>
            </section>
            <section className="mt-14">
              <h2 className="font-heading text-[27px] font-bold text-slate-800">Leave a Comment</h2>
              <form className="mt-7 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="form-field" placeholder="Name" />
                  <input className="form-field" placeholder="Email" />
                </div>
                <textarea className="form-field min-h-[160px] resize-none pt-4" placeholder="Your Comments" />
                <button className="btn-primary w-fit">Post Comment</button>
              </form>
            </section>
          </main>
          <BlogSidebar />
        </div>
      </section>
      <BrandStrip />
    </>
  );
}
