export const siteConfig = {
  name: "Medicoz",
  legalName: "Medicoz Medical Solution",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://medicoz.example.com",
  description:
    "Medicoz is a modern clinic and hospital website for appointments, departments, physicians, health resources, and patient care.",
  phone: "+1-233-453-6789",
  email: "info@gmail.com",
  address: {
    street: "2130 Fulton Street",
    city: "San Diego",
    region: "CA",
    postalCode: "94117-1080",
    country: "USA"
  },
  coordinates: {
    latitude: 32.7157,
    longitude: -117.1611
  }
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function hospitalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalOrganization"],
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: absoluteUrl("/images/logo-schema.png"),
    image: absoluteUrl("/images/hero/slide-1.jpg"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00"
      }
    ],
    medicalSpecialty: [
      "Cardiology",
      "Neurology",
      "Pediatrics",
      "Urology",
      "Dentistry",
      "Radiology"
    ]
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}

export function faqSchema(faq: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
