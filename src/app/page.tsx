import Link from "next/link";
import CTABanner from "@/components/CTABanner";

const practiceAreas = [
  {
    title: "Wills & Estate Planning",
    desc: "Last Will & Testament, Living Will, Healthcare Surrogate, Durable Power of Attorney, and HIPAA Authorization — all handled with precision.",
    href: "/wills/",
    icon: "📜",
  },
  {
    title: "Trusts & Asset Protection",
    desc: "Revocable Living Trusts, pour-over wills, deeds of transfer — bypass probate and protect your legacy privately and efficiently.",
    href: "/trusts/",
    icon: "🛡️",
  },
  {
    title: "Real Estate Law",
    desc: "Residential and commercial closings, deed transfers, contract review, Lady Bird Deeds, title examination throughout Broward and Miami-Dade.",
    href: "/real-estate-law/",
    icon: "🏠",
  },
  {
    title: "Milestone Title",
    desc: "Full-service title insurance, title searches, closing coordination, and recording — over 20 years serving South Florida real estate.",
    href: "/title-company/",
    icon: "✅",
  },
];

const stats = [
  { value: "45+", label: "Years of Experience" },
  { value: "1980", label: "Serving Since" },
  { value: "4", label: "Languages Spoken" },
  { value: "1000s", label: "Families Protected" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-navy py-24 md:py-32">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-6">
            Protecting South Florida Families Since 1980
          </p>
          <h1 className="text-5xl md:text-7xl text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
            Your Family&apos;s Legacy,{" "}
            <em className="text-gold-light italic">Our Life&apos;s Work</em>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Estate planning, wills, trusts, real estate law, and title services — backed by over four decades of dedicated South Florida practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule/" className="btn-gold text-lg">
              Schedule Free Consultation
            </Link>
            <Link href="/pricing/" className="btn-gold-outline !border-white/30 !text-white hover:!bg-white/10 text-lg">
              View Pricing
            </Link>
          </div>
          <p className="text-white/40 text-sm mt-6">
            English | Español | Русский | Українська
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-cream-warm py-12">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-serif text-navy mb-1">{s.value}</div>
                <div className="text-ink/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl text-navy mb-4">How We Help</h2>
            <p className="text-ink/60 text-lg max-w-2xl mx-auto">
              From estate planning to real estate closings, we guide South Florida families through life&apos;s most important legal decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((pa) => (
              <Link
                key={pa.href}
                href={pa.href}
                className="group block bg-white rounded-2xl p-8 border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 no-underline"
              >
                <span className="text-4xl mb-4 block">{pa.icon}</span>
                <h3 className="text-2xl text-navy mb-3 group-hover:text-gold transition-colors">{pa.title}</h3>
                <p className="text-ink/60 leading-relaxed">{pa.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-cream-warm py-20">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl text-navy mb-4">Why Families Trust Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Four Decades of Experience",
                desc: "Licensed since 1980, our attorneys have guided thousands of families through estate planning and real estate matters.",
              },
              {
                title: "Flat-Fee Transparency",
                desc: "No hourly billing surprises. All standard estate planning matters are quoted at your free consultation with a flat fee you can count on.",
              },
              {
                title: "Multilingual Service",
                desc: "We serve South Florida's diverse communities in English, Spanish, Russian, and Ukrainian — ensuring nothing is lost in translation.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl text-navy mb-3">{item.title}</h3>
                <p className="text-ink/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LegalService", "LocalBusiness"],
            name: "Muroff, Milestone & Milestone, P.A.",
            description: "Estate planning, wills, trusts, real estate law, and title services in South Florida since 1980.",
            url: "https://milestonelawfl.com",
            telephone: ["954-454-4522", "305-682-2324"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "100 North Federal Highway, Suite 200",
              addressLocality: "Hallandale Beach",
              addressRegion: "FL",
              postalCode: "33009",
              addressCountry: "US",
            },
            geo: { "@type": "GeoCoordinates", latitude: 25.9812, longitude: -80.1484 },
            openingHours: "Mo-Fr 09:00-17:00",
            priceRange: "$$",
            areaServed: ["Broward County", "Miami-Dade County", "South Florida"],
            knowsLanguage: ["en", "es", "ru", "uk"],
            foundingDate: "1980",
          }),
        }}
      />
    </>
  );
}
