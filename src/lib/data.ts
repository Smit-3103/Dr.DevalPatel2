import blogsJson from "@/data/blogs.json";
import departmentsJson from "@/data/departments.json";
import doctorsJson from "@/data/doctors.json";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Seo = {
  title: string;
  description: string;
};

export type Blog = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  content: string[];
  FAQ: FaqItem[];
  seo: Seo;
  relatedPosts: string[];
};

export type Doctor = {
  name: string;
  slug: string;
  specialization: string;
  experience: string;
  image: string;
  education: string[];
  timings: Record<string, string>;
  description: string;
  socialLinks: Record<string, string>;
  department: string;
  availability: string;
  seo: Seo;
};

export type Department = {
  title: string;
  slug: string;
  image: string;
  description: string;
  treatments: string[];
  FAQ: FaqItem[];
  services: string[];
  seo: Seo;
};

export const blogs = blogsJson as unknown as Blog[];
export const doctors = doctorsJson as unknown as Doctor[];
export const departments = departmentsJson as unknown as Department[];

export const services = [
  {
    title: "Health Check",
    description:
      "We offer extensive medical procedures to outbound and inbound patients with attentive clinical support.",
    icon: "heart"
  },
  {
    title: "Operation Theater",
    description:
      "Modern operation theatres support safe procedures, sterile workflows, and responsive care teams.",
    icon: "operation"
  },
  {
    title: "Pharmacy Support",
    description:
      "Medication counseling, refill guidance, and dependable pharmacy support for every care plan.",
    icon: "pharmacy"
  },
  {
    title: "Ambulance Car",
    description:
      "Prompt ambulance support and coordinated transfer planning for urgent clinical needs.",
    icon: "ambulance"
  },
  {
    title: "Lab Tests",
    description:
      "Reliable specimen handling, fast reporting, and careful result review for better decisions.",
    icon: "lab"
  },
  {
    title: "Intensive Care",
    description:
      "High-attention monitoring and advanced clinical care for patients who need extra support.",
    icon: "intensive"
  }
];

export const galleryItems = [
  {
    title: "MRI Procedure",
    category: "Cancer",
    image: "/images/departments/mri.jpg"
  },
  {
    title: "Digital Diagnosis",
    category: "Cardiology",
    image: "/images/hero/slide-1.jpg"
  },
  {
    title: "Clinical Research",
    category: "Dental",
    image: "/images/about/about-collage-main.png"
  },
  {
    title: "Care Planning",
    category: "Eye Care",
    image: "/images/blog/blog-3.jpg"
  },
  {
    title: "Dental Care",
    category: "Dental",
    image: "/images/cta/dental-surgery.jpg"
  },
  {
    title: "Doctor Consultation",
    category: "Detal Care",
    image: "/images/departments/diagnostic.jpg"
  },
  {
    title: "Laboratory",
    category: "Cancer",
    image: "/images/departments/laboratory.jpg"
  },
  {
    title: "Operation Theater",
    category: "Cardiology",
    image: "/images/departments/operation.jpg"
  }
];

export const brandLogos = [
  "/images/clients/client-1.png",
  "/images/clients/client-2.png",
  "/images/clients/client-3.png",
  "/images/clients/client-4.png",
  "/images/clients/client-5.png"
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}

export function getDepartmentBySlug(slug: string) {
  return departments.find((department) => department.slug === slug);
}

export function getRelatedBlogs(blog: Blog) {
  return blog.relatedPosts
    .map((slug) => getBlogBySlug(slug))
    .filter((item): item is Blog => Boolean(item))
    .slice(0, 2);
}

export function blogCategories() {
  return Array.from(new Set(blogs.map((blog) => blog.category))).map((name) => ({
    name,
    count: blogs.filter((blog) => blog.category === name).length
  }));
}

export function blogTags() {
  return Array.from(new Set(blogs.flatMap((blog) => blog.tags)));
}
