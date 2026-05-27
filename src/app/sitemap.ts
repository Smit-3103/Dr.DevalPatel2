import type { MetadataRoute } from "next";
import { blogs, departments, doctors } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/gallery",
    "/doctors",
    "/departments",
    "/blog",
    "/contact"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route || "/"),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...doctors.map((doctor) => ({
      url: absoluteUrl(`/doctors/${doctor.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...departments.map((department) => ({
      url: absoluteUrl(`/departments/${department.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    ...blogs.map((blog) => ({
      url: absoluteUrl(`/blog/${blog.slug}`),
      lastModified: new Date(blog.date),
      changeFrequency: "monthly" as const,
      priority: 0.65
    }))
  ];
}
