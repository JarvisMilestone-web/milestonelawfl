import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeDollarSign,
  Gavel,
  HeartHandshake,
  Lock,
  RefreshCw,
  Sparkles,
  Users,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Trusts & Asset Protection — Muroff, Milestone & Milestone, P.A.",
  description:
    "Revocable Living Trusts, pour-over wills, deeds of transfer — bypass probate and protect your legacy privately and efficiently in South Florida.",
};

const benefits = [
  { title: "Avoid Probate", desc: "Assets held in trust pass directly to beneficiaries — no court proceedings, no public records, no delays.", Icon: Gavel },
  { title: "Privacy", desc: "Unlike wills, trusts are not filed with the court. Your family's financial details remain private.", Icon: Lock },
  { title: "Incapacity Planning", desc: "If you become incapacitated, your successor trustee manages your affairs seamlessly — no guardianship needed.", Icon: HeartHandshake },
  { title: "Flexibility", desc: "Revocable Living Trusts can be changed or revoked at any time during your lifetime as circumstances change.", Icon: RefreshCw },
  { title: "Blended Family Protection", desc: "Trusts provide precise control over how assets are distributed among children from different relationships.", Icon: Users },
  { title: "Cost Efficiency", desc: "While trusts cost more upfront, they typically save thousands in probate costs and delays for your heirs.", Icon: BadgeDollarSign },
];

export default function TrustsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-navy relative overflow-hidden py-24 md:py-28">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <span className="badge-gold mb-6">
            <Sparkles size={12} aria-hidden />
            Asset Protection
          </span>
          <h1 className="font-serif text-4xl text-white md:text-6xl">Trusts &amp; Asset Protection</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            Protect your legacy, avoid probate, and ensure your assets pass to your loved ones — privately and efficiently.
          </p>
        </div>
      </section>

      {/* Intro + benefits */}
      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="lede">
              A Revocable Living Trust allows your estate to pass directly to beneficiaries without probate — privately, efficiently, and with minimal cost. Our trust packages include pour-over wills, deeds of transfer, and all supporting documents. We serve blended families, high-net-worth individuals, and everyone in between.
            </p>
          </div>

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-4xl text-navy-800">Benefits of a Trust</h2>
            <div className="mx-auto mt-6 hairline-gold w-24" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, desc, Icon }) => (
              <div key={title} className="card card-hover p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-navy-800">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages — dark flagship section */}
      <section className="section-navy relative overflow-hidden py-24">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-serif text-3xl text-white md:text-4xl">Trust Packages</h3>
            <div className="mx-auto mt-6 hairline-gold w-24" />
          </div>

          <div className="mx-auto mb-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-navy p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Individual Trust</p>
              <p className="mt-3 font-serif text-4xl text-white">$2,000</p>
              <p className="mt-2 text-sm text-white/60">With beneficiary trusts: $2,500</p>
            </div>
            <div className="card-navy border-gold-500/60 p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Couple — Joint Trust</p>
              <p className="mt-3 font-serif text-4xl text-white">$2,250</p>
              <p className="mt-2 text-sm text-white/60">Shared trust for married couples</p>
            </div>
            <div className="card-navy p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Couple — Separate Trusts</p>
              <p className="mt-3 font-serif text-4xl text-white">$2,700</p>
              <p className="mt-2 text-sm text-white/60">Individual trusts for each spouse</p>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-6 text-sm text-white/55">All fees are flat-fee and quoted at your free consultation.</p>
            <Link href="/pricing/" className="btn-gold">View All Pricing</Link>
          </div>
        </div>
      </section>

      {/* Photo section */}
      <section className="bg-ivory-200 py-20 md:py-24">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-navy-800">Protecting Your Family&apos;s Future Together</h2>
            <div className="mt-6 hairline-gold w-24" />
            <p className="mt-6 leading-relaxed text-ink-500">
              A Revocable Living Trust is one of the most powerful tools available to Florida families. Assets held in trust pass directly to your beneficiaries — no probate, no court, no public record.
            </p>
            <p className="mt-4 leading-relaxed text-ink-500">
              Whether you have a blended family, own real estate, or simply want privacy and efficiency, our trust packages are comprehensive, flat-fee, and designed around your specific goals.
            </p>
            <a href="/schedule/" className="btn-gold mt-8">Schedule Free Consultation</a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gold-500/25 shadow-card-hover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/family-2.png"
              alt="Family discussing trust planning with South Florida attorneys"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Trusts & Asset Protection",
            provider: { "@type": "LegalService", name: "Muroff, Milestone & Milestone, P.A." },
            description: "Revocable Living Trusts, pour-over wills, deeds of transfer — bypass probate and protect your legacy.",
            areaServed: "South Florida",
          }),
        }}
      />
    </>
  );
}
