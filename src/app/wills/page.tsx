import type { Metadata } from "next";
import Link from "next/link";
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
  },
  {
    title: "Living Will",
    desc: "Specify your wishes for end-of-life medical care, ensuring your family and healthcare providers know your preferences when it matters most.",
  },
  {
    title: "Healthcare Surrogate Designation",
    desc: "Appoint a trusted person to make medical decisions on your behalf if you become unable to communicate your wishes.",
  },
  {
    title: "Durable Power of Attorney",
    desc: "Authorize a trusted individual to manage your financial and legal affairs, ensuring your interests are protected during incapacity.",
  },
  {
    title: "HIPAA Authorization",
    desc: "Grant designated individuals access to your protected health information, enabling them to coordinate your medical care seamlessly.",
  },
];

export default function WillsPage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Estate Planning</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Wills &amp; Estate Planning</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Comprehensive estate plans that protect your family, preserve your wishes, and provide peace of mind.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-ink/70 text-lg leading-relaxed">
              A complete estate plan is more than a will — it&apos;s a comprehensive set of legal documents that ensures your wishes are honored, your family is protected, and your assets pass smoothly to those you love. Florida requires two witnesses and notarization for self-proving wills — we handle every detail so you don&apos;t have to worry.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl text-navy text-center mb-10">What&apos;s Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {documents.map((d) => (
              <div key={d.title} className="bg-white rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl text-navy mb-3">{d.title}</h3>
                <p className="text-ink/60 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream-warm rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl text-navy mb-4">Estate Planning Packages</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-black/5">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Will Package</p>
                <p className="text-3xl font-serif text-navy">$750</p>
                <p className="text-ink/50 text-sm">Individual</p>
                <p className="text-ink/50 text-sm">$1,100 per couple</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-gold relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Full Estate Plan</p>
                <p className="text-3xl font-serif text-navy">$1,500</p>
                <p className="text-ink/50 text-sm">Individual</p>
                <p className="text-ink/50 text-sm">$2,000 per couple</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-black/5">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">Living Will Package</p>
                <p className="text-3xl font-serif text-navy">$450</p>
                <p className="text-ink/50 text-sm">Complete medical directives</p>
              </div>
            </div>
            <p className="text-ink/50 text-sm mb-4">All fees are flat-fee and quoted at your free consultation. No hourly billing on standard estate planning matters.</p>
            <Link href="/pricing/" className="btn-gold">View All Pricing</Link>
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
