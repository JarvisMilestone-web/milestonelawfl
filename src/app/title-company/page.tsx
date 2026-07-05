import type { Metadata } from "next";
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

export default function TitleCompanyPage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Title Services</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Milestone Title</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Attorney-supervised title, escrow, and closings since 2002 — underwritten by Old Republic National Title
            Insurance Company, delivered in English, Español, Русский, and עברית from Hallandale Beach.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={`${TITLE_SITE}/order-title`} className="btn-gold inline-block">Order Title</a>
            <a href={`${TITLE_SITE}/closing-cost-calculator`} className="btn-gold-outline inline-block">
              Calculate Closing Costs
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-ink/70 text-lg leading-relaxed">
              Most title companies can process a transaction. They cannot identify legal risk. Milestone Title works
              under the supervision of real estate attorneys — so legal issues get spotted early and named honestly.
              When a file needs actual legal work, that work is never automatic: it is procured separately and
              directly from this firm, under its own written engagement and at additional fees the firm determines —
              or from any attorney the client chooses. Milestone Title, Co. and Muroff, Milestone &amp; Milestone,
              P.A. are separate entities, each solely responsible for its own services. That has been the model since
              2002.
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
                ["Since 2002", "Two decades of South Florida closings from Hallandale Beach"],
                ["Attorney-Founded", "Started by Florida real estate attorneys — held to attorney-supervised standards"],
                ["Old Republic", "Policies backed by one of the nation's largest title insurance underwriters"],
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

      {/* Platform */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">MilestoneTitleFL.com</p>
            <h2 className="text-4xl text-navy font-serif mb-4">A full title platform, not just a title company</h2>
            <p className="text-ink/60">
              The title side of our practice now runs on its own dedicated platform — built for buyers, sellers,
              Realtors, lenders, and investors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platform.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl text-navy mb-3">{p.title}</h3>
                <p className="text-ink/60 leading-relaxed mb-4">{p.desc}</p>
                <a href={p.href} className="text-gold font-semibold">
                  {p.cta} →
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-ink/50 text-sm mt-10 max-w-2xl mx-auto">
            One promise worth memorizing: we will never email you a change to wire instructions. Before sending funds,
            call 954.454.4522 and verify every digit by voice.
          </p>
        </div>
      </section>

      {/* The Milestone Complete */}
      <section className="py-20">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">The Flagship Package</p>
              <h2 className="text-4xl text-navy font-serif mb-6">The Milestone Complete: close it, protect it, pass it on</h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                The closing table is the best estate-planning moment of your life — you are already deciding whose
                name goes on the deed. The Milestone Complete pairs your closing with your estate plan: trusts,
                wills, powers of attorney, Lady Bird deeds, and Florida homestead strategy at this firm&apos;s
                published pricing, coordinated with the title work so the plan and the deed never contradict each
                other.
              </p>
              <p className="text-ink/70 leading-relaxed mb-6">
                And every trust-based Complete includes <strong>TrusteeClear free for your trustee and successor
                trustee</strong> — the Florida successor-trustee platform with plain-English duties, after-death
                timelines, and homestead guidance for the person your plan puts in charge.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`${TITLE_SITE}/milestone-complete`} className="btn-gold inline-block">
                  Explore the Complete
                </a>
                <a href="/pricing/" className="btn-gold-outline inline-block">
                  Our Published Legal Pricing
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
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
