"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/shared/Logo";

const navItems = [
  { href: "/", label: "Home", hasMenu: true },
  { href: "/about", label: "About Us", hasMenu: true },
  { href: "/doctors", label: "Doctors", hasMenu: true },
  { href: "/departments", label: "Departments", hasMenu: true },
  { href: "/blog", label: "Blog", hasMenu: true },
  { href: "/contact", label: "Contact" }
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/about") return pathname === "/about";
  return pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-white lg:bg-transparent" aria-label="Primary navigation">
      <div className="container lg:grid lg:grid-cols-[238px_1fr]">
        <div className="flex min-h-[78px] items-center justify-between lg:hidden">
          <Logo compact />
          <button
            className="grid h-11 w-11 place-items-center rounded border border-slate-200 text-[var(--primary)]"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden bg-[#f7f7f7] lg:block" />
        <div className="hidden min-h-[58px] items-center justify-between bg-[var(--primary)] pl-12 lg:flex">
          <div className="flex h-full items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(pathname, item.href) ? "nav-link-active" : ""}`}
              >
                {item.label}
                {/* {item.hasMenu ? <ChevronDown className="h-3.5 w-3.5" /> : null} */}
              </Link>
            ))}
          </div>
          {/* <div className="flex h-full items-center">
            <Link href="/contact" className="relative grid h-[58px] w-[58px] place-items-center text-white">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute right-2 top-1.5 grid h-5 w-5 place-items-center rounded-full bg-[#171717] font-heading text-[11px]">
                3
              </span>
            </Link>
            <button className="mr-4 grid h-12 w-12 place-items-center rounded-full border border-white/45 text-white">
              <Search className="h-5 w-5" />
            </button>
          </div> */}
        </div>
        {open ? (
          <div className="border-t border-slate-100 pb-5 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-slate-100 py-4 font-heading text-sm font-bold uppercase ${
                  isActive(pathname, item.href) ? "text-[var(--primary)]" : "text-slate-700"
                }`}
              >
                {item.label}
                {item.hasMenu ? <ChevronDown className="h-4 w-4" /> : null}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
