import type { Metadata } from "next";
import {
  Building2,
  FileSearch,
  FileText,
  HeartHandshake,
  KeyRound,
  Search,
  Sparkles,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Real Estate Law — Muroff, Milestone & Milestone, P.A.",
  description:
    "Real estate law services in Broward and Miami-Dade: residential closings, commercial transactions, deed transfers, contract review, Lady Bird Deeds, and title examination.",
};

const services = [
  { title: "Residential Closings", desc: "Seamless closing coordination for home purchases and sales, ensuring all documents are properly executed and recorded.", Icon: KeyRound },
  { title: "Commercial Transactions", desc: "Legal support for commercial property purchases, sales, and leasing — protecting your business investments.", Icon: Building2 },
  { title: "Deed Transfers", desc: "Quitclaim Deeds, Warranty Deeds, Gift Deeds — we handle all types of property title transfers with precision.", Icon: FileText },
  { title: "Lady Bird Deeds", desc: "Enhanced life estate deeds that allow property to pass to beneficiaries automatically upon death, avoiding probate.", Icon: HeartHandshake },
  { title: "Contract Review", desc: "Thorough review and negotiation of purchase agreements, lease contracts, and other real estate documents.", Icon: FileSearch },
  { title: "Title Examination", desc: "Comprehensive title searches to identify liens, encumbrances, and defects before you close on a property.", Icon: Search },
];

export default function RealEstateLawPage() {
  return (
    <>
      {/* Page hero */}
      <section className="section-navy relative overflow-hidden py-24 md:py-28">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <span className="badge-gold mb-6">
            <Sparkles size={12} aria-hidden />
            Real Estate Law
          </span>
          <h1 className="font-serif text-4xl text-white md:text-6xl">Real Estate Law</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            From residential closings to commercial transactions — comprehensive real estate legal services throughout Broward and Miami-Dade.
          </p>
        </div>
      </section>

      {/* Intro + services */}
      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="lede">
              Whether you&apos;re buying your first home, selling commercial property, or transferring a deed to a family member, our attorneys bring decades of real estate expertise to every transaction. We handle matters throughout Broward and Miami-Dade counties, ensuring every detail is managed with care and precision.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, desc, Icon }) => (
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

      {/* Pricing — dark flagship section */}
      <section className="section-navy relative overflow-hidden py-24">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="font-serif text-3xl text-white md:text-4xl">Real Estate &amp; Deed Pricing</h3>
            <div className="mx-auto mt-6 hairline-gold w-24" />
          </div>

          <div className="mx-auto max-w-2xl space-y-4">
            {[
              ["Deed (QCD, Warranty, Gift)", "$325 + recording", "Stand-alone: $395 + recording"],
              ["Lady Bird Deed", "$350 + recording", "Stand-alone: $395 + recording"],
              ["Deed into Trust", "$400–$495 + recording", ""],
              ["Title Search", "$175 + client costs", ""],
            ].map(([name, price, note]) => (
              <div key={name} className="card-navy flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold text-white">{name}</p>
                  {note && <p className="mt-1 text-sm text-white/55">{note}</p>}
                </div>
                <p className="mt-3 shrink-0 font-serif text-xl text-gold-300 sm:mt-0 sm:pl-6">{price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo section */}
      <section className="bg-ivory-200 py-20 md:py-24">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold-500/25 shadow-card-hover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/family-6.png"
              alt="Family completing real estate closing with South Florida attorneys"
              className="h-auto w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl text-navy-800">Closings Done Right</h2>
            <div className="mt-6 hairline-gold w-24" />
            <p className="mt-6 leading-relaxed text-ink-500">
              Whether you&apos;re buying your first home or transferring property to the next generation, our attorneys ensure every closing is handled with precision, care, and full legal protection.
            </p>
            <p className="mt-4 leading-relaxed text-ink-500">
              With decades of experience in Broward and Miami-Dade real estate, we&apos;ve seen it all — and we&apos;re here to make sure your transaction goes smoothly from contract to keys.
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
            name: "Real Estate Law",
            provider: { "@type": "LegalService", name: "Muroff, Milestone & Milestone, P.A." },
            description: "Real estate law services including closings, deed transfers, contract review, and title examination.",
            areaServed: ["Broward County", "Miami-Dade County"],
          }),
        }}
      />
    </>
  );
}
