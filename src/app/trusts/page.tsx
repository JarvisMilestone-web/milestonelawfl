import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Trusts & Asset Protection — Muroff, Milestone & Milestone, P.A.",
  description:
    "Revocable Living Trusts, pour-over wills, deeds of transfer — bypass probate and protect your legacy privately and efficiently in South Florida.",
};

const benefits = [
  { title: "Avoid Probate", desc: "Assets held in trust pass directly to beneficiaries — no court proceedings, no public records, no delays." },
  { title: "Privacy", desc: "Unlike wills, trusts are not filed with the court. Your family's financial details remain private." },
  { title: "Incapacity Planning", desc: "If you become incapacitated, your successor trustee manages your affairs seamlessly — no guardianship needed." },
  { title: "Flexibility", desc: "Revocable Living Trusts can be changed or revoked at any time during your lifetime as circumstances change." },
  { title: "Blended Family Protection", desc: "Trusts provide precise control over how assets are distributed among children from different relationships." },
  { title: "Cost Efficiency", desc: "While trusts cost more upfront, they typically save thousands in probate costs and delays for your heirs." },
];

export default function TrustsPage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Asset Protection</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Trusts &amp; Asset Protection</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Protect your legacy, avoid probate, and ensure your assets pass to your loved ones — privately and efficiently.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-ink/70 text-lg leading-relaxed">
              A Revocable Living Trust allows your estate to pass directly to beneficiaries without probate — privately, efficiently, and with minimal cost. Our trust packages include pour-over wills, deeds of transfer, and all supporting documents. We serve blended families, high-net-worth individuals, and everyone in between.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl text-navy text-center mb-10">Benefits of a Trust</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl text-navy mb-3">{b.title}</h3>
                <p className="text-ink/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream-warm rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl text-navy mb-6">Trust Packages</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-black/5">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Individual Trust</p>
                <p className="text-3xl font-serif text-navy">$2,000</p>
                <p className="text-ink/50 text-sm">With beneficiary trusts: $2,500</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-gold">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Couple — Joint Trust</p>
                <p className="text-3xl font-serif text-navy">$2,250</p>
                <p className="text-ink/50 text-sm">Shared trust for married couples</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-black/5">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Couple — Separate Trusts</p>
                <p className="text-3xl font-serif text-navy">$2,700</p>
                <p className="text-ink/50 text-sm">Individual trusts for each spouse</p>
              </div>
            </div>
            <p className="text-ink/50 text-sm mb-4">All fees are flat-fee and quoted at your free consultation.</p>
            <Link href="/pricing/" className="btn-gold">View All Pricing</Link>
          </div>
        </div>
      </section>

      
      {/* Photo section */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-navy font-serif mb-6">Protecting Your Family&apos;s Future Together</h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                A Revocable Living Trust is one of the most powerful tools available to Florida families. Assets held in trust pass directly to your beneficiaries — no probate, no court, no public record.
              </p>
              <p className="text-ink/70 leading-relaxed mb-6">
                Whether you have a blended family, own real estate, or simply want privacy and efficiency, our trust packages are comprehensive, flat-fee, and designed around your specific goals.
              </p>
              <a href="/schedule/" className="btn-gold inline-block">Schedule Free Consultation</a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/family-2.png"
                alt="Family discussing trust planning with South Florida attorneys"
                className="w-full h-auto object-cover"
              />
            </div>
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
