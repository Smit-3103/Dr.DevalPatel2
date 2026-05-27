import type { Metadata } from "next";
import { Open_Sans, Titillium_Web } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap"
});

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Medicoz Medical Solution",
    template: "%s | Medicoz"
  },
  description: siteConfig.description,
  keywords: [
    "hospital",
    "clinic",
    "medical departments",
    "doctor appointment",
    "healthcare",
    "Medicoz"
  ],
  authors: [{ name: "Medicoz Medical Solution" }],
  creator: "Medicoz Medical Solution",
  openGraph: {
    type: "website",
    siteName: "Medicoz",
    locale: "en_US",
    url: siteConfig.url,
    images: ["/images/hero/slide-1.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicoz Medical Solution",
    description: siteConfig.description,
    images: ["/images/hero/slide-1.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${titillium.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
