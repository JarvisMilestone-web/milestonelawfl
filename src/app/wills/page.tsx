import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Wills & Estate Planning — Muroff, Milestone & Milestone, P.A.",
  description:
    "Comprehensive estate planning including Last Will & Testament, Living Will, Healthcare Surrogate, Durable Power of Attorney, and HIPAA Authorization in South Florida.",
};

const documents = [
  {
    title: "Last Will & Testament",
    desc: "Legally document how your assets should be distributed, name guardians for minor children, and appoint a personal representative to manage your estate.",
    Icon: ScrollText,
  },
  {
    title: "Living Will",
    desc: "Specify your wishes for end-of-life medical care, ensuring your family and healthcare providers know your preferences when it matters most.",
    Icon: HeartPulse,
  },
  {
    title: "Healthcare Surrogate Designation",
    desc: "Appoint a trusted person to make medical decisions on your behalf if you become unable to communicate your wishes.",
    Icon: Stethoscope,
  },
  {
    title: "Durable Power of Attorney",
    desc: "Authorize a trusted individual to manage your financial and legal affairs, ensuring your interests are protected during incapacity.",
    Icon: UserCheck,
  },
  {
    title: "HIPAA Authorization",
    desc: "Grant designated individuals access to your protected health information, enabling them to coordinate your medical care seamlessly.",
    Icon: ShieldCheck,
  },
];

export default function WillsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-navy relative overflow-hidden py-24 md:py-28">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <span className="badge-gold mb-6">
            <Sparkles size={12} aria-hidden />
            Estate Planning
          </span>
          <h1 className="font-serif text-4xl text-white md:text-6xl">Wills &amp; Estate Planning</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            Comprehensive estate plans that protect your family, preserve your wishes, and provide peace of mind.
          </p>
        </div>
      </section>

      {/* Intro + documents */}
      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="lede">
              A complete estate plan is more than a will — it&apos;s a comprehensive set of legal documents that ensures your wishes are honored, your family is protected, and your assets pass smoothly to those you love. Florida requires two witnesses and notarization for self-proving wills — we handle every detail so you don&apos;t have to worry.
            </p>
          </div>

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-4xl text-navy-800">What&apos;s Included</h2>
            <div className="mx-auto mt-6 hairline-gold w-24" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documents.map(({ title, desc, Icon }) => (
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
            <h3 className="font-serif text-3xl text-white md:text-4xl">Estate Planning Packages</h3>
            <div className="mx-auto mt-6 hairline-gold w-24" />
          </div>

          <div className="mx-auto mb-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="card-navy p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Will Package</p>
              <p className="mt-3 font-serif text-4xl text-white">$750</p>
              <p className="mt-2 text-sm text-white/60">Individual</p>
              <p className="text-sm text-white/60">$1,100 per couple</p>
            </div>
            <div className="card-navy relative border-gold-500/60 p-8 text-center">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900">Most Popular</span>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Full Estate Plan</p>
              <p className="mt-3 font-serif text-4xl text-white">$1,500</p>
              <p className="mt-2 text-sm text-white/60">Individual</p>
              <p className="text-sm text-white/60">$2,000 per couple</p>
            </div>
            <div className="card-navy p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Living Will Package</p>
              <p className="mt-3 font-serif text-4xl text-white">$450</p>
              <p className="mt-2 text-sm text-white/60">Complete medical directives</p>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-6 text-sm text-white/55">All fees are flat-fee and quoted at your free consultation. No hourly billing on standard estate planning matters.</p>
            <Link href="/pricing/" className="btn-gold">View All Pricing</Link>
          </div>
        </div>
      </section>

      {/* Photo section */}
      <section className="bg-ivory-200 py-20 md:py-24">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold-500/25 shadow-card-hover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/family-5.png"
              alt="Family reviewing estate planning documents with attorney"
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl text-navy-800">Florida Requires It Done Right</h2>
            <div className="mt-6 hairline-gold w-24" />
            <p className="mt-6 leading-relaxed text-ink-500">
              Florida law requires two witnesses and notarization for a will to be self-proving. An improperly executed will can be challenged — or worse, invalidated — leaving your family unprotected.
            </p>
            <p className="mt-4 leading-relaxed text-ink-500">
              Our attorneys handle every detail of the execution ceremony at our Hallandale Beach office, ensuring your documents meet all Florida statutory requirements.
            </p>
            <a href="/schedule/" className="btn-gold mt-8">Schedule Free Consultation</a>
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
            name: "Wills & Estate Planning",
            provider: { "@type": "LegalService", name: "Muroff, Milestone & Milestone, P.A." },
            description: "Comprehensive estate plans including Last Will & Testament, Living Will, Healthcare Surrogate, Durable Power of Attorney, and HIPAA Authorization.",
            areaServed: "South Florida",
          }),
        }}
      />
    </>
  );
}
