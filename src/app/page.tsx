import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import HeroSlider from "@/components/HeroSlider";

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
    icon: "🔑",
  },
];

const stats = [
  { value: "45+", label: "Years of Experience" },
  { value: "4", label: "Languages Spoken" },
  { value: "Flat", label: "Fee Pricing" },
  { value: "Free", label: "Consultation" },
];

const team = [
  {
    initials: "NM",
    name: "Neil Alan Milestone, Esq.",
    bar: "FL Bar #309966",
    role: "Attorney | Probate, Trusts & Real Property",
  },
  {
    initials: "JM",
    name: "Jan Muroff Milestone, Esq.",
    bar: "FL Bar #309958",
    role: "Attorney | Estate Planning & Real Estate",
  },
  {
    initials: "TT",
    name: "Tetyana Tyshchenko",
    bar: null,
    role: "Legal Secretary & Paralegal | Title Processor",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO with slider */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
        {/* Slider background */}
        <HeroSlider />

        {/* Content */}
        <div className="relative z-10 container-site py-32 px-6">
          <div className="inline-block border border-gold/40 text-gold text-xs font-semibold uppercase tracking-[3px] px-6 py-2 rounded-full mb-8">
            Estate Planning &amp; Real Estate Law
          </div>
          <h1 className="text-5xl md:text-7xl text-white font-serif mb-6 leading-[1.1] max-w-4xl mx-auto">
            Protect Your Family.<br />
            <span className="text-gold">Protect Your Legacy.</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            South Florida&apos;s trusted attorneys since 1980. Serving Broward &amp; Miami-Dade.
          </p>

          {/* Language pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["🇺🇸 English", "🇪🇸 Español", "🇷🇺 Русский", "🇺🇦 Українська"].map((lang) => (
              <span
                key={lang}
                className="bg-white/10 border border-white/20 text-white/90 text-sm px-4 py-1.5 rounded-full backdrop-blur-sm"
              >
                {lang}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/schedule/" className="btn-gold text-base px-8 py-4">
              Schedule Free Consultation
            </Link>
            <Link
              href="/pricing/"
              className="bg-transparent text-white border border-white/30 hover:border-gold hover:text-gold rounded-full px-8 py-4 font-semibold text-base transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>

          {/* Phones */}
          <div className="flex gap-6 justify-center text-gold font-semibold text-lg">
            <a href="tel:9544544522" className="hover:text-gold-light transition-colors">
              954.454.4522
            </a>
            <span className="text-white/30">|</span>
            <a href="tel:3056822324" className="hover:text-gold-light transition-colors">
              305.682.2324
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy border-y border-gold/20 py-10">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-serif text-gold mb-1">{s.value}</div>
                <div className="text-white/50 text-sm uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Practice Areas</p>
            <h2 className="text-4xl md:text-5xl text-navy mb-4">How We Protect You</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {practiceAreas.map((pa) => (
              <Link
                key={pa.href}
                href={pa.href}
                className="group block bg-white rounded-2xl p-8 border border-black/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 no-underline"
              >
                <span className="text-4xl mb-4 block">{pa.icon}</span>
                <h3 className="text-2xl text-navy mb-3 group-hover:text-gold transition-colors font-serif">
                  {pa.title}
                </h3>
                <p className="text-ink/60 leading-relaxed">{pa.desc}</p>
                <span className="inline-block mt-4 text-gold text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why Families Choose Us</p>
            <h2 className="text-4xl md:text-5xl text-white mb-4 font-serif">
              A Law Firm Built on{" "}
              <em className="text-gold-light">Relationships, Not Hours</em>
            </h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚖️",
                title: "Four Decades of Experience",
                desc: "Licensed since 1980, our attorneys have guided thousands of families through estate planning and real estate matters across South Florida.",
              },
              {
                icon: "💰",
                title: "Flat-Fee Transparency",
                desc: "No hourly billing surprises. All standard estate planning matters are quoted at your free consultation — you know the cost before you commit.",
              },
              {
                icon: "🌐",
                title: "Multilingual Service",
                desc: "We serve South Florida's diverse communities in English, Spanish, Russian, and Ukrainian — ensuring nothing is lost in translation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-gold/15 rounded-2xl p-8 hover:border-gold/30 transition-colors"
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl text-white mb-3 font-serif">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney Preview */}
      <section className="py-20 bg-cream-warm">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-4xl md:text-5xl text-navy mb-4 font-serif">Meet Your Attorneys</h2>
            <div className="w-12 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((attorney) => (
              <div
                key={attorney.initials}
                className="bg-white rounded-2xl p-8 border border-black/5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                {/* Avatar circle */}
                <div className="w-20 h-20 rounded-full border-2 border-gold/40 flex items-center justify-center mx-auto mb-5 bg-cream-warm">
                  <span className="font-serif font-bold text-navy text-xl">{attorney.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">{attorney.name}</h3>
                {attorney.bar && (
                  <span className="inline-block bg-gold/10 text-gold/80 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {attorney.bar}
                  </span>
                )}
                <p className="text-ink/60 text-sm leading-relaxed">{attorney.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/attorneys/" className="btn-gold">
              Meet Our Full Team →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LegalService", "LocalBusiness"],
            name: "Muroff, Milestone & Milestone, P.A.",
            description:
              "Estate planning, wills, trusts, real estate law, and title services in South Florida since 1980.",
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
