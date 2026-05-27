import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { blogs, departments } from "@/lib/data";

export function Footer() {
  const latest = blogs.slice(0, 3);

  return (
    <footer className="relative bg-[var(--navy)] text-white">
      <div className="absolute inset-0 bg-[url('/images/background/page-title.jpg')] bg-cover bg-center opacity-[0.06]" />
      <div className="relative py-24">
        <div className="container grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1.25fr]">
          <div>
            <Logo inverse compact />
            <p className="mt-9 max-w-[330px] text-[14px] leading-8 text-white/85">
              Our Clinic has grown to provide a world class facility for the clinic advanced
              restorative.
            </p>
            <p className="mt-7 max-w-[330px] text-[14px] leading-8 text-white/85">
              We are among the most qualified implant providers in the AUS with over 30 years of
              quality training and experience.
            </p>
            <div className="mt-8 flex gap-3">
              {["f", "G+", "t", "s", "in"].map((item) => (
                <a
                  href="#"
                  key={item}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/50 font-heading text-[12px] transition hover:border-[var(--primary)] hover:bg-[var(--primary)]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <FooterTitle>Departments</FooterTitle>
            <ul className="space-y-4">
              {departments.slice(0, 6).map((department) => (
                <li key={department.slug}>
                  <Link
                    href={`/departments/${department.slug}`}
                    className="footer-link before:content-['+']"
                  >
                    {department.title.replace(" Department", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterTitle>Latest News</FooterTitle>
            <div className="space-y-5">
              {latest.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="grid grid-cols-[72px_1fr] gap-4"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px] object-cover"
                  />
                  <span>
                    <span className="block font-heading text-[15px] font-bold leading-5 text-white">
                      {post.title}
                    </span>
                    <span className="mt-1 block text-[13px] text-white/75">
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
          <div>
            <FooterTitle>Contact Us</FooterTitle>
            <ul className="space-y-6 text-[14px] leading-6 text-white/90">
              <li className="footer-contact">
                <MapPin />
                <span>
                  2130 Fulton Street San Diego
                  <br />
                  CA 94117-1080 USA
                </span>
              </li>
              <li className="footer-contact">
                <Phone />
                <span>
                  Mon to Fri : 08:30 - 18:00
                  <br />
                  <strong>+898 68679 575</strong>
                </span>
              </li>
              <li className="footer-contact">
                <Mail />
                <span>
                  Do you have a Question?
                  <br />
                  <strong>info@gmail.com</strong>
                </span>
              </li>
              <li className="footer-contact">
                <Clock3 />
                <span>
                  Mon - Sat 8.00 - 18.00
                  <br />
                  <strong>Sunday CLOSED</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative bg-[#0f76a9] py-5 text-[13px]">
        <div className="container flex flex-col gap-3 text-white md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2025 Bold Touch All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/services">Supplier</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="footer-title">
      {children}
      <span />
    </h2>
  );
}
