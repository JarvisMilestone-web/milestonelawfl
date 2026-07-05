"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, Sparkles, X } from "lucide-react";

const navLinks = [
  { href: "/attorneys/", label: "Attorneys" },
  { href: "/wills/", label: "Wills" },
  { href: "/trusts/", label: "Trusts" },
  { href: "/real-estate-law/", label: "Real Estate" },
  { href: "/title-company/", label: "Title Company" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/faq/", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Utility bar */}
      <div className="bg-navy-950 text-white/80 text-xs">
        <div className="container-site flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-4 min-w-0">
            <a href="tel:+19544544522" className="flex items-center gap-1.5 hover:text-white transition-colors whitespace-nowrap no-underline text-white/80">
              <Phone size={12} aria-hidden />
              954.454.4522
            </a>
            <a href="tel:+13056822324" className="hidden sm:inline hover:text-white transition-colors whitespace-nowrap no-underline text-white/80">
              305.682.2324
            </a>
            <span className="hidden lg:inline text-white/50">Mon–Fri 9:00am–5:00pm · Evenings by appointment</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/50">EN | ES | RU | UA</span>
            <a href="https://milestonetitlefl.com" rel="noopener" className="hover:text-white transition-colors whitespace-nowrap no-underline text-white/80">
              Title Company: Milestone Title ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <header className="sticky top-0 z-50 bg-ivory-50/95 backdrop-blur border-b border-navy-900/5 shadow-header">
        <div className="container-site flex items-center justify-between gap-6 h-[4.4rem]">
          <Link href="/" className="group shrink-0 no-underline">
            <span className="block font-serif text-[1.3rem] leading-none text-navy-800 tracking-tight">
              Muroff, Milestone <span className="text-gold-500">&amp;</span> Milestone
            </span>
            <span className="block mt-1 text-[0.6rem] font-sans font-semibold uppercase tracking-[0.22em] text-ink-400 group-hover:text-gold-600 transition-colors">
              Attorneys at Law · Since 1980
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-ink-700 hover:bg-navy-900/5 hover:text-navy-800 text-sm font-medium px-3 py-2 rounded-full transition-colors whitespace-nowrap no-underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/milestone-complete/"
              title="The Milestone Complete — closing + estate plan + TrusteeClear free"
              className="flex items-center gap-1.5 rounded-full border border-gold-500/40 bg-gold-500/10 px-3.5 py-2 text-sm font-semibold text-gold-600 no-underline transition-colors hover:border-gold-500 hover:bg-gold-500/20"
            >
              <Sparkles size={13} aria-hidden />
              The Complete
            </Link>
            <Link href="/schedule/" className="btn-gold !py-2.5 !px-5 !text-sm">
              Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-[5px] p-2.5 rounded-full border border-navy-900/15 bg-transparent cursor-pointer ml-auto"
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-navy-800 rounded" />
            <span className="block w-5 h-0.5 bg-navy-800 rounded" />
            <span className="block w-5 h-0.5 bg-navy-800 rounded" />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-[999] section-navy backdrop-blur-xl flex flex-col items-center justify-center">
          <div className="text-center px-8 w-full max-w-sm">
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center mx-auto mb-10 border border-white/15 cursor-pointer"
              aria-label="Close menu"
            >
              <X size={18} aria-hidden />
            </button>
            <nav className="flex flex-col gap-1 mb-8">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white text-2xl font-serif py-2.5 border-b border-white/10 block hover:text-gold-300 transition-colors no-underline"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/milestone-complete/"
                onClick={() => setOpen(false)}
                className="text-gold-300 text-2xl font-serif py-2.5 border-b border-white/10 block hover:text-white transition-colors no-underline"
              >
                The Complete ✦
              </Link>
              <Link
                href="/contact/"
                onClick={() => setOpen(false)}
                className="text-white text-2xl font-serif py-2.5 border-b border-white/10 block hover:text-gold-300 transition-colors no-underline"
              >
                Contact
              </Link>
            </nav>
            <Link href="/schedule/" onClick={() => setOpen(false)} className="btn-gold w-full justify-center">
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
