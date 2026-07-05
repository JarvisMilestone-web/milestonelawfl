import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { Clock3, FileText, House, ScrollText, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Muroff, Milestone & Milestone, P.A.",
  description:
    "Transparent flat-fee pricing for estate planning, wills, trusts, real estate, and deed services. No hourly billing on standard matters.",
};

const packages = [
  {
    category: "Estate Planning Packages",
    items: [
      { name: "Will Package — Individual", price: "$750" },
      { name: "Will Package — Couple (separate wills)", price: "$1,100" },
      { name: "Full Estate Plan — Individual", price: "$1,500", popular: true },
      { name: "Full Estate Plan — Couple", price: "$2,000" },
      { name: "Living Will Package", price: "$450" },
    ],
  },
  {
    category: "Trust Packages",
    items: [
      { name: "Trust Package — Individual", price: "$2,000" },
      { name: "Trust Package — Individual (with beneficiary trusts)", price: "$2,500" },
      { name: "Trust Package — Couple Joint", price: "$2,250" },
      { name: "Trust Package — Couple Separate", price: "$2,700" },
    ],
  },
  {
    category: "Stand-Alone Documents",
    items: [
      { name: "Last Will & Testament", price: "$595" },
      { name: "Revocable Living Trust — Individual", price: "$1,750" },
      { name: "Revocable Living Trust — Joint", price: "$2,000" },
      { name: "Power of Attorney", price: "$395", note: "$225 when added to a package" },
      { name: "Healthcare Power of Attorney", price: "$395", note: "$225 when added to a package" },
      { name: "Advanced Medical Directives / Living Will", price: "$295", note: "$225 when added to a package" },
    ],
  },
  {
    category: "Real Estate & Deeds",
    items: [
      { name: "Deed (QCD, Warranty, Gift)", price: "$325 + recording", note: "Stand-alone: $395 + recording" },
      { name: "Lady Bird Deed", price: "$350 + recording", note: "Stand-alone: $395 + recording" },
      { name: "Deed into Trust", price: "$400–$495 + recording" },
      { name: "Title Search", price: "$175 + client costs" },
    ],
  },
];

const categoryIcons = [ScrollText, ShieldCheck, FileText, House];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-navy relative overflow-hidden py-24 md:py-28">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <span className="badge-gold">Transparent Pricing</span>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl text-white">Flat-Fee Pricing</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            No surprises, no hourly billing. All standard estate planning matters are quoted at your free consultation with a flat fee you can count on.
          </p>
        </div>
      </section>

      {/* Fee schedule */}
      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="space-y-20">
            {packages.map((pkg, i) => {
              const Icon = categoryIcons[i];
              return (
                <div key={pkg.category}>
                  <div className="text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                      <Icon size={22} aria-hidden />
                    </span>
                    <h2 className="mt-5 font-serif text-3xl text-navy-800 md:text-4xl">{pkg.category}</h2>
                    <div className="mx-auto mt-6 hairline-gold w-24" />
                  </div>
                  <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
                    {pkg.items.map((item) => {
                      const popular = "popular" in item && item.popular;
                      return (
                        <div
                          key={item.name}
                          className={
                            popular
                              ? "card-navy border border-gold-500/40 p-8"
                              : "card card-hover p-8"
                          }
                        >
                          {popular && <span className="badge-gold mb-4">Most Popular</span>}
                          <p className={`font-semibold ${popular ? "text-white" : "text-navy-800"}`}>
                            {item.name}
                          </p>
                          <p className={`mt-4 font-serif text-4xl ${popular ? "text-gold-200" : "text-navy-800"}`}>
                            {item.price}
                          </p>
                          {"note" in item && item.note && (
                            <p className={`mt-3 text-sm ${popular ? "text-white/60" : "text-ink-400"}`}>
                              {item.note}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hourly rate */}
      <section className="bg-ivory-200 py-20 md:py-24">
        <div className="container-site">
          <div className="card mx-auto max-w-2xl p-8 text-center md:p-12">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
              <Clock3 size={22} aria-hidden />
            </span>
            <h3 className="mt-5 font-serif text-2xl text-navy-800">Hourly Rate</h3>
            <p className="mt-3 font-serif text-4xl text-navy-800">$275/hr</p>
            <div className="mx-auto mt-6 hairline-gold w-24" />
            <p className="mt-6 leading-relaxed text-ink-500">
              For non-flat-fee matters only — which are rare. The vast majority of our work is quoted as a flat fee at your free consultation.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-ink-400">
              All fees are flat-fee and quoted at your free consultation. No hourly billing on standard estate planning matters.
            </p>
            <div className="mt-6">
              <Link href="/schedule/" className="btn-gold">Schedule Your Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
