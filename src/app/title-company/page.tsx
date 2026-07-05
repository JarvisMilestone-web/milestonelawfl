import type { Metadata } from "next";
import {
  Activity,
  BadgeDollarSign,
  Building2,
  Calculator,
  FileSearch,
  Globe,
  KeyRound,
  Landmark,
  Map,
  Scale,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Milestone Title — Attorney-Supervised Title Company | South Florida",
  description:
    "Milestone Title: attorney-supervised title search, title insurance, escrow, and closings since 2002 — underwritten by Old Republic National Title Insurance Company. Calculators, a client portal with live closing tracking, and service in four languages at MilestoneTitleFL.com.",
};

// Milestone Title's dedicated platform. Flip to https://milestonetitlefl.com
// once DNS is attached — one-line change.
const TITLE_SITE = "https://milestonetitlefl.com";

const services = [
  { title: "Title Search & Examination", desc: "Full public-records searches read under attorney supervision — ownership history, liens, judgments, and the issues that derail closings." },
  { title: "Title Insurance", desc: "Owner's and lender's policies at Florida's promulgated rates, underwritten by Old Republic National Title Insurance Company." },
  { title: "Closings & Settlement", desc: "Residential, commercial, cash, financed, probate, and trust closings — every file on a published ten-step timeline." },
  { title: "Escrow Services", desc: "Segregated trust accounts, three-way reconciliation discipline, and verified wire procedures on every transfer." },
  { title: "Municipal Lien Searches & Estoppels", desc: "Code violations, open permits, utility balances, and HOA/condo certificates — the five-figure surprises county records miss." },
  { title: "Title Curative Work", desc: "Unreleased mortgages, probate gaps, judgment liens — triaged fast, with an honest read on which cures need separately engaged legal help." },
  { title: "Recording Services", desc: "Deeds and mortgages e-recorded correctly and tracked to confirmation, with doc stamps computed county-correct." },
  { title: "Remote Online Notarization", desc: "Close from anywhere on earth — identity-proofed, Florida-authorized, routine for our international and snowbird clients." },
];

const platform = [
  { title: "Real closing-cost calculators", desc: "Florida promulgated premiums, the reissue credit, doc stamps with Miami-Dade's surtax rule — live, free, no email wall.", href: `${TITLE_SITE}/closing-cost-calculator`, cta: "Run your numbers" },
  { title: "A portal with live tracking", desc: "Clients and Realtors watch their file move across the ten-step closing timeline — no status calls required.", href: `${TITLE_SITE}/portal`, cta: "See the portal" },
  { title: "Florida Records Navigator", desc: "Official deed, plat, and property-record sources for all 67 Florida counties, mapped in one place.", href: `${TITLE_SITE}/records`, cta: "Browse all 67 counties" },
  { title: "Transparent flat-band pricing", desc: "Published settlement-fee bands — identical for every client and every agent — plus bundle savings when the law firm handles the closing's legal work.", href: `${TITLE_SITE}/pricing`, cta: "See the pricing promise" },
];

const serviceIcons = [FileSearch, ShieldCheck, KeyRound, Landmark, Building2, Scale, ScrollText, Globe];
const platformIcons = [Calculator, Activity, Map, BadgeDollarSign];

export default function TitleCompanyPage() {
  return (
    <>
      <section className="section-navy relative overflow-hidden py-24 md:py-28">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <span className="badge-gold mb-6">
            <KeyRound size={12} aria-hidden />
            Title Services
          </span>
          <h1 className="font-serif text-4xl text-white md:text-6xl">Milestone Title</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            Attorney-supervised title, escrow, and closings since 2002 — underwritten by Old Republic National Title
            Insurance Company, delivered in English, Español, Русский, and עברית from Hallandale Beach.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={`${TITLE_SITE}/order-title`} className="btn-gold">Order Title</a>
            <a href={`${TITLE_SITE}/closing-cost-calculator`} className="btn-gold-outline">
              Calculate Closing Costs
            </a>
          </div>
        </div>
      </section>

      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto mb-16 max-w-3xl">
            <p className="lede">
              Most title companies can process a transaction. They cannot identify legal risk. Milestone Title works
              under the supervision of real estate attorneys — so legal issues get spotted early and named honestly.
              When a file needs actual legal work, that work is never automatic: it is procured separately and
              directly from this firm, under its own written engagement and at additional fees the firm determines —
              or from any attorney the client chooses. Milestone Title, Co. and Muroff, Milestone &amp; Milestone,
              P.A. are separate entities, each solely responsible for its own services. That has been the model since
              2002.
            </p>
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <div key={s.title} className="card card-hover p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                    <Icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-navy-800">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-500">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="card-navy p-8 text-center md:p-12">
            <h3 className="font-serif text-3xl text-white">Why Choose Milestone Title?</h3>
            <div className="mx-auto mt-5 hairline-gold w-24" aria-hidden />
            <div className="mx-auto mt-8 grid max-w-3xl gap-8 sm:grid-cols-3">
              {[
                ["Since 2002", "Two decades of South Florida closings from Hallandale Beach"],
                ["Attorney-Founded", "Started by Florida real estate attorneys — held to attorney-supervised standards"],
                ["Old Republic", "Policies backed by one of the nation's largest title insurance underwriters"],
              ].map(([title, desc]) => (
                <div key={title}>
                  <p className="font-serif text-2xl text-gold-300">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="bg-ivory-200 py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow">MilestoneTitleFL.com</p>
            <h2 className="mt-3 font-serif text-4xl text-navy-800 md:text-5xl">A full title platform, not just a title company</h2>
            <div className="mx-auto mt-6 hairline-gold w-24" aria-hidden />
            <p className="mt-6 leading-relaxed text-ink-500">
              The title side of our practice now runs on its own dedicated platform — built for buyers, sellers,
              Realtors, lenders, and investors.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {platform.map((p, i) => {
              const Icon = platformIcons[i];
              return (
                <div key={p.title} className="card card-hover p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                    <Icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-navy-800">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-500">{p.desc}</p>
                  <a href={p.href} className="mt-5 inline-block font-semibold text-gold-600 no-underline transition-colors hover:text-gold-500">
                    {p.cta} →
                  </a>
                </div>
              );
            })}
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="hairline-gold" aria-hidden />
            <p className="mt-6 text-center text-sm leading-relaxed text-ink-500">
              One promise worth memorizing: we will never email you a change to wire instructions. Before sending funds,
              call 954.454.4522 and verify every digit by voice.
            </p>
          </div>
        </div>
      </section>

      {/* The Milestone Complete */}
      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">The Flagship Package</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-navy-800">The Milestone Complete: close it, protect it, pass it on</h2>
              <p className="mt-5 leading-relaxed text-ink-500">
                The closing table is the best estate-planning moment of your life — you are already deciding whose
                name goes on the deed. The Milestone Complete pairs your closing with your estate plan: trusts,
                wills, powers of attorney, Lady Bird deeds, and Florida homestead strategy at this firm&apos;s
                published pricing, coordinated with the title work so the plan and the deed never contradict each
                other.
              </p>
              <p className="mt-4 leading-relaxed text-ink-500">
                And every trust-based Complete includes <strong>TrusteeClear free for your trustee and successor
                trustee</strong> — the Florida successor-trustee platform with plain-English duties, after-death
                timelines, and homestead guidance for the person your plan puts in charge.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`${TITLE_SITE}/milestone-complete`} className="btn-gold">
                  Explore the Complete
                </a>
                <a href="/pricing/" className="btn-outline-dark">
                  Our Published Legal Pricing
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gold-500/20 shadow-card-hover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/family-8.png"
                alt="Multigenerational family at home in South Florida — the Milestone Complete protects the house and the plan together"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Start Your Closing — or Your Complete"
        subtitle="Order title in three minutes at MilestoneTitleFL.com, or call 954.454.4522 and say 'the Complete.'"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Milestone Title",
            provider: { "@type": "LegalService", name: "Muroff, Milestone & Milestone, P.A." },
            description:
              "Attorney-supervised title search, title insurance, escrow, settlement, and recording services since 2002, underwritten by Old Republic National Title Insurance Company.",
            areaServed: "South Florida",
            url: "https://milestonetitlefl.com/",
          }),
        }}
      />
    </>
  );
}
