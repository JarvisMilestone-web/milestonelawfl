import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Real Estate Law — Muroff, Milestone & Milestone, P.A.",
  description:
    "Real estate law services in Broward and Miami-Dade: residential closings, commercial transactions, deed transfers, contract review, Lady Bird Deeds, and title examination.",
};

const services = [
  { title: "Residential Closings", desc: "Seamless closing coordination for home purchases and sales, ensuring all documents are properly executed and recorded." },
  { title: "Commercial Transactions", desc: "Legal support for commercial property purchases, sales, and leasing — protecting your business investments." },
  { title: "Deed Transfers", desc: "Quitclaim Deeds, Warranty Deeds, Gift Deeds — we handle all types of property title transfers with precision." },
  { title: "Lady Bird Deeds", desc: "Enhanced life estate deeds that allow property to pass to beneficiaries automatically upon death, avoiding probate." },
  { title: "Contract Review", desc: "Thorough review and negotiation of purchase agreements, lease contracts, and other real estate documents." },
  { title: "Title Examination", desc: "Comprehensive title searches to identify liens, encumbrances, and defects before you close on a property." },
];

export default function RealEstateLawPage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Real Estate Law</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Real Estate Law</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From residential closings to commercial transactions — comprehensive real estate legal services throughout Broward and Miami-Dade.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-ink/70 text-lg leading-relaxed">
              Whether you&apos;re buying your first home, selling commercial property, or transferring a deed to a family member, our attorneys bring decades of real estate expertise to every transaction. We handle matters throughout Broward and Miami-Dade counties, ensuring every detail is managed with care and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl text-navy mb-3">{s.title}</h3>
                <p className="text-ink/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream-warm rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl text-navy mb-6 text-center">Real Estate &amp; Deed Pricing</h3>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                ["Deed (QCD, Warranty, Gift)", "$325 + recording", "Stand-alone: $395 + recording"],
                ["Lady Bird Deed", "$350 + recording", "Stand-alone: $395 + recording"],
                ["Deed into Trust", "$400–$495 + recording", ""],
                ["Title Search", "$175 + client costs", ""],
              ].map(([name, price, note]) => (
                <div key={name} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-xl p-5 border border-black/5">
                  <div>
                    <p className="font-semibold text-navy">{name}</p>
                    {note && <p className="text-ink/50 text-sm">{note}</p>}
                  </div>
                  <p className="text-gold font-serif text-xl mt-2 sm:mt-0">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo section */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/family-6.png"
                alt="Family completing real estate closing with South Florida attorneys"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl text-navy font-serif mb-6">Closings Done Right</h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                Whether you&apos;re buying your first home or transferring property to the next generation, our attorneys ensure every closing is handled with precision, care, and full legal protection.
              </p>
              <p className="text-ink/70 leading-relaxed mb-6">
                With decades of experience in Broward and Miami-Dade real estate, we&apos;ve seen it all — and we&apos;re here to make sure your transaction goes smoothly from contract to keys.
              </p>
              <a href="/schedule/" className="btn-gold inline-block">Schedule Free Consultation</a>
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
