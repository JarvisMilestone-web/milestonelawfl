import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

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

export default function PricingPage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Transparent Pricing</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Flat-Fee Pricing</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            No surprises, no hourly billing. All standard estate planning matters are quoted at your free consultation with a flat fee you can count on.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="space-y-16">
            {packages.map((pkg) => (
              <div key={pkg.category}>
                <h2 className="text-3xl text-navy mb-8">{pkg.category}</h2>
                <div className="space-y-3">
                  {pkg.items.map((item) => (
                    <div
                      key={item.name}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between rounded-xl p-5 border ${
                        "popular" in item && item.popular
                          ? "border-gold bg-gold/5"
                          : "border-black/5 bg-white"
                      }`}
                    >
                      <div>
                        <p className="font-semibold text-navy flex items-center gap-2">
                          {item.name}
                          {"popular" in item && item.popular && (
                            <span className="bg-gold text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                              Most Popular
                            </span>
                          )}
                        </p>
                        {"note" in item && item.note && (
                          <p className="text-ink/50 text-sm">{item.note}</p>
                        )}
                      </div>
                      <p className="text-gold font-serif text-2xl mt-2 sm:mt-0 whitespace-nowrap">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-cream-warm rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl text-navy mb-4">Hourly Rate</h3>
              <p className="text-4xl font-serif text-gold mb-4">$275/hr</p>
              <p className="text-ink/60 leading-relaxed">
                For non-flat-fee matters only — which are rare. The vast majority of our work is quoted as a flat fee at your free consultation.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-ink/50 text-sm mb-6">
              All fees are flat-fee and quoted at your free consultation. No hourly billing on standard estate planning matters.
            </p>
            <Link href="/schedule/" className="btn-gold">Schedule Your Free Consultation</Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
