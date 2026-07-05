"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/attorneys/", label: "Attorneys" },
  { href: "/wills/", label: "Wills" },
  { href: "/trusts/", label: "Trusts" },
  { href: "/real-estate-law/", label: "Real Estate" },
  { href: "/title-company/", label: "Title Company" },
  { href: "/milestone-complete/", label: "The Complete ✦", gold: true },
  { href: "/pricing/", label: "Pricing" },
  { href: "/faq/", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-navy">
        <div className="container-site flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 text-white no-underline shrink-0">
            <div className="flex flex-col">
              <span className="font-serif text-xl leading-none">Muroff, Milestone &amp; Milestone</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-semibold mt-0.5">
                Attorneys at Law
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  l.gold
                    ? "text-gold-light hover:text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                    : "text-white/70 hover:text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                }
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <span className="text-[11px] font-semibold text-white/50">EN | ES | RU | UA</span>
            <Link href="/schedule/" className="btn-gold !py-2.5 !px-6 !text-sm">
              Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer ml-auto"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white rounded" />
            <span className="block w-6 h-0.5 bg-white rounded" />
            <span className="block w-6 h-0.5 bg-white rounded" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-navy/95 backdrop-blur-xl flex flex-col items-center justify-center">
          <div className="text-center px-8 w-full max-w-sm">
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 text-white text-xl flex items-center justify-center mx-auto mb-12 border-none cursor-pointer"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-1 mb-10">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={
                    l.gold
                      ? "text-gold-light text-2xl font-serif py-3 border-b border-white/10 block hover:text-white transition-colors no-underline"
                      : "text-white text-2xl font-serif py-3 border-b border-white/10 block hover:text-gold-light transition-colors no-underline"
                  }
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="text-white text-2xl font-serif py-3 border-b border-white/10 block hover:text-gold-light transition-colors no-underline"
              >
                Contact
              </Link>
            </nav>
            <Link
              href="/schedule/"
              onClick={() => setOpen(false)}
              className="btn-gold w-full justify-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
