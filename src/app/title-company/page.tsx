import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Milestone Title — Full-Service Title Company | South Florida",
  description:
    "Milestone Title: over 20 years of full-service title insurance, title searches, closing coordination, and recording throughout South Florida.",
};

const services = [
  { title: "Title Insurance", desc: "Owner's and lender's title insurance policies that protect your investment from undiscovered claims, liens, and defects." },
  { title: "Title Searches", desc: "Comprehensive searches of public records to verify clear title and identify any issues before closing." },
  { title: "Closing Coordination", desc: "End-to-end closing management — from document preparation to funds disbursement and recording." },
  { title: "Recording Services", desc: "Accurate and timely recording of deeds, mortgages, and other documents with the county recorder's office." },
];

export default function TitleCompanyPage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Title Services</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Milestone Title</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Full-service title insurance and closing coordination — serving South Florida&apos;s real estate market for over 20 years.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-ink/70 text-lg leading-relaxed">
              Milestone Title has been a trusted name in South Florida real estate for over two decades. We provide full-service title insurance, comprehensive title searches, seamless closing coordination, and accurate recording — ensuring every property transfer is clean, protected, and properly documented.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl text-navy mb-3">{s.title}</h3>
                <p className="text-ink/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream-warm rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl text-navy mb-4">Why Choose Milestone Title?</h3>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                ["20+ Years", "Trusted experience in South Florida real estate"],
                ["Attorney-Owned", "Backed by the legal expertise of Muroff, Milestone & Milestone"],
                ["Full Service", "From search to closing to recording — we handle everything"],
              ].map(([title, desc]) => (
                <div key={title}>
                  <p className="text-2xl font-serif text-gold mb-2">{title}</p>
                  <p className="text-ink/60 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Need Title Services?" subtitle="Contact us for a quote on title insurance, title searches, or closing coordination." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Milestone Title",
            provider: { "@type": "LegalService", name: "Muroff, Milestone & Milestone, P.A." },
            description: "Full-service title insurance, title searches, closing coordination, and recording services.",
            areaServed: "South Florida",
          }),
        }}
      />
    </>
  );
}
