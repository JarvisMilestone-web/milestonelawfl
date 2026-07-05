import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  Home,
  KeyRound,
  Languages,
  Scale,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";
import HeroSlider from "@/components/HeroSlider";

const TITLE_SITE = "https://milestonetitlefl.com";

const practiceAreas = [
  {
    title: "Wills & Estate Planning",
    desc: "Last Will & Testament, Living Will, Healthcare Surrogate, Durable Power of Attorney, and HIPAA Authorization — all handled with precision.",
    href: "/wills/",
    Icon: ScrollText,
  },
  {
    title: "Trusts & Asset Protection",
    desc: "Revocable Living Trusts, pour-over wills, deeds of transfer — bypass probate and protect your legacy privately and efficiently.",
    href: "/trusts/",
    Icon: ShieldCheck,
  },
  {
    title: "Real Estate Law",
    desc: "Residential and commercial closings, deed transfers, contract review, Lady Bird Deeds, title examination throughout Broward and Miami-Dade.",
    href: "/real-estate-law/",
    Icon: Home,
  },
  {
    title: "Milestone Title",
    desc: "Title insurance, searches, escrow, and closings through Milestone Title, Co. — the separate title company our attorneys founded in 2002.",
    href: "/title-company/",
    Icon: KeyRound,
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

const completePillars = [
  {
    step: "01",
    title: "Your Closing",
    body: "Handled by Milestone Title, Co. — title search, escrow, settlement, and recording under Florida promulgated rates and a published settlement fee.",
    note: "Provided by Milestone Title, Co.",
  },
  {
    step: "02",
    title: "Your Estate Plan",
    body: "Wills, trusts, and the documents that protect the home you just closed on — engaged directly with this firm at our published flat fees.",
    note: "Engaged directly with the firm",
  },
  {
    step: "03",
    title: "TrusteeClear — Free",
    body: "Our trustee & successor guidance program, included at no charge for your trustee or successor trustee when you complete the package.",
    note: "Included at no additional charge",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — crossfading family slider, premium left-set content */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <HeroSlider />

        <div className="container-site relative z-10 py-28">
          <div className="max-w-3xl">
            <span className="badge-gold mb-7">
              <Sparkles size={12} aria-hidden />
              Estate Planning &amp; Real Estate Law · Since 1980
            </span>
            <h1 className="font-serif text-5xl leading-[1.06] text-white md:text-7xl">
              Protect your family.
              <br />
              <em className="text-gold-300 not-italic md:italic">Protect your legacy.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
              South Florida&apos;s trusted estate planning and real estate attorneys —
              flat fees quoted before you commit, and every document reviewed and
              signed by a licensed Florida attorney.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/schedule/" className="btn-gold !px-8 !py-4 !text-base">
                Schedule Free Consultation
              </Link>
              <Link href="/pricing/" className="btn-gold-outline !px-8 !py-4 !text-base">
                View Published Pricing
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-lg font-semibold">
              <a href="tel:+19544544522" className="text-gold-300 no-underline transition-colors hover:text-gold-200">
                954.454.4522
              </a>
              <span className="text-white/25">|</span>
              <a href="tel:+13056822324" className="text-gold-300 no-underline transition-colors hover:text-gold-200">
                305.682.2324
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {["English", "Español", "Русский", "Українська"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-navy-900/8 bg-ivory-50">
        <div className="container-site grid grid-cols-2 gap-8 py-12 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl text-navy-800 md:text-5xl">{s.value}</div>
              <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-cream py-24">
        <div className="container-site">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Our Practice Areas</p>
            <h2 className="mt-3 font-serif text-4xl text-navy-800 md:text-5xl">
              How we protect you
            </h2>
            <div className="mx-auto mt-6 hairline-gold w-24" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {practiceAreas.map(({ title, desc, href, Icon }) => (
              <Link key={href} href={href} className="card card-hover group block p-8 no-underline">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-navy-800 transition-colors group-hover:text-gold-600">
                  {title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-500">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
                  Learn more
                  <ArrowRight size={14} aria-hidden className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE MILESTONE COMPLETE — flagship */}
      <section className="section-navy relative overflow-hidden py-24">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="badge-gold mb-6">
              <Sparkles size={12} aria-hidden />
              The Flagship Package
            </span>
            <h2 className="font-serif text-4xl text-white md:text-6xl">
              The Milestone <em className="text-gold-300">Complete</em>
            </h2>
            <p className="lede mx-auto mt-5 max-w-2xl">
              Close on your home and leave with your legacy protected — one coordinated
              experience across two companies that have worked side by side since 2002.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {completePillars.map((p) => (
              <div key={p.step} className="card-navy p-8">
                <span className="font-serif text-4xl text-gold-400/70">{p.step}</span>
                <h3 className="mt-4 font-serif text-2xl text-white">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">{p.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-gold-300/80">
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/milestone-complete/" className="btn-gold !px-9 !py-4 !text-base">
              Explore The Complete
              <ArrowRight size={16} aria-hidden />
            </Link>
            <p className="mx-auto mt-7 max-w-3xl text-xs leading-relaxed text-white/45">
              Muroff, Milestone &amp; Milestone, P.A. and Milestone Title, Co. are separate
              entities. Title, escrow, and settlement services are provided by Milestone Title,
              Co.; legal services are engaged directly with this firm at its published fees.
              Each company is responsible solely for its own services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-ivory-200 py-24">
        <div className="container-site">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Why Families Choose Us</p>
            <h2 className="mt-3 font-serif text-4xl text-navy-800 md:text-5xl">
              A law firm built on <em className="text-gold-600">relationships, not hours</em>
            </h2>
            <div className="mx-auto mt-6 hairline-gold w-24" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                Icon: Scale,
                title: "Four Decades of Experience",
                desc: "Licensed since 1980, our attorneys have guided thousands of families through estate planning and real estate matters across South Florida.",
              },
              {
                Icon: BadgeDollarSign,
                title: "Flat-Fee Transparency",
                desc: "No hourly billing surprises. All standard estate planning matters are quoted at your free consultation — you know the cost before you commit.",
              },
              {
                Icon: Languages,
                title: "Multilingual Service",
                desc: "We serve South Florida's diverse communities in English, Spanish, Russian, and Ukrainian — ensuring nothing is lost in translation.",
              },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="card card-hover p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="mt-5 font-serif text-xl text-navy-800">{title}</h3>
                <p className="mt-3 leading-relaxed text-ink-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real families — consultation photo */}
      <section className="section-navy overflow-hidden py-24">
        <div className="container-site grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">Real Families. Real Attorneys.</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white md:text-5xl">
              Your plan, reviewed
              <br />
              <em className="text-gold-300">by a real attorney</em>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Every estate plan we prepare is personally reviewed and signed by a licensed
              Florida attorney — not a paralegal, not a call center. We sit down with your
              family, answer every question, and make sure you leave with a plan you understand.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Flat-fee pricing. Free consultation. No surprises.
            </p>
            <Link href="/schedule/" className="btn-gold mt-9 !px-8 !py-4 !text-base">
              Schedule Your Free Consultation
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gold-500/25 shadow-card-hover">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/family-jewish-consultation.png"
              alt="Family signing estate plan at Muroff, Milestone & Milestone"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section-cream py-24">
        <div className="container-site">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">Our Team</p>
            <h2 className="mt-3 font-serif text-4xl text-navy-800 md:text-5xl">
              Meet your attorneys
            </h2>
            <div className="mx-auto mt-6 hairline-gold w-24" />
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.initials} className="card card-hover p-8 text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-500/40 bg-ivory-200">
                  <span className="font-serif text-xl font-bold text-navy-800">{member.initials}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-800">{member.name}</h3>
                {member.bar && (
                  <span className="mt-1.5 inline-block rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-600">
                    {member.bar}
                  </span>
                )}
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/attorneys/" className="btn-navy">
              Meet Our Full Team
              <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Title platform cross-promo */}
      <section className="section-cream pb-24">
        <div className="container-site">
          <div className="card-navy flex flex-col items-start gap-8 p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow !text-gold-300">Closing a Property?</p>
              <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
                Milestone Title — the title platform our attorneys founded
              </h2>
              <p className="mt-4 leading-relaxed text-white/65">
                Instant Florida closing-cost calculators, seller net sheets, a 67-county
                records navigator, and online title ordering — at MilestoneTitleFL.com.
                A separate company, closing South Florida deals since 2002.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a href={TITLE_SITE} rel="noopener" className="btn-gold">
                Visit MilestoneTitleFL.com
                <ArrowRight size={15} aria-hidden />
              </a>
              <a href={`${TITLE_SITE}/closing-cost-calculator`} rel="noopener" className="btn-gold-outline">
                Try the Calculator
              </a>
            </div>
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
              "Estate planning, wills, trusts, and real estate law in South Florida since 1980. Founders of Milestone Title, Co., a separate title and closing company.",
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
            knowsAbout: [
              "Estate Planning",
              "Wills",
              "Revocable Living Trusts",
              "Real Estate Law",
              "Florida Probate Avoidance",
            ],
          }),
        }}
      />
    </>
  );
}
