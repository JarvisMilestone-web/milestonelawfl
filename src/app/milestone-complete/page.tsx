import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "The Milestone Complete — Close It. Protect It. Pass It On.",
  description:
    "One coordinated package, two separate firms: your closing through Milestone Title (underwritten by Old Republic), your estate plan — trusts, wills, deeds, homestead protection — engaged directly with this firm at published pricing, and TrusteeClear free for your trustee and successor trustee.",
};

// Milestone Title's dedicated platform. Flip to https://milestonetitlefl.com
// once DNS is attached — one-line change.
const TITLE_SITE = "https://milestonetitlefl.com";

const pillars = [
  {
    title: "The Closing — Milestone Title",
    desc: "Your purchase or sale closed on a published ten-step timeline: search, escrow with verified-wire discipline, settlement, recording, and your owner's policy at Florida's promulgated rate — underwritten by Old Republic National Title Insurance Company.",
  },
  {
    title: "The Protection — This Firm",
    desc: "Trusts, wills, powers of attorney, healthcare directives, Lady Bird deeds, and Florida homestead strategy — at the published pricing on our Pricing page, engaged directly with the attorneys who supervise the title work.",
  },
  {
    title: "The Aftercare — TrusteeClear, Free",
    desc: "Every trust-based Complete includes TrusteeClear — the Florida successor-trustee platform — free for your trustee AND successor trustee: plain-English duties, after-death timelines, notice-of-trust and homestead guidance for the person your plan puts in charge.",
  },
];

const planPricing = [
  ["Full Estate Plan — Individual", "$1,500"],
  ["Full Estate Plan — Couple", "$2,000"],
  ["Trust Package — Individual", "$2,000"],
  ["Trust Package — Couple (joint)", "$2,250"],
  ["Lady Bird Deed (in package)", "$350 + recording"],
  ["Deed into Trust", "$400–$495 + recording"],
];

export default function MilestoneCompletePage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">The Flagship Package</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">The Milestone Complete</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Close it. Protect it. Pass it on. Your closing, your estate plan, and free TrusteeClear for the person
            your plan puts in charge — two specialized firms, separately engaged, deliberately coordinated. No one
            else in Florida is built to offer this.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="/schedule/" className="btn-gold inline-block">Book a Free Consultation</a>
            <a href={`${TITLE_SITE}/milestone-complete`} className="btn-gold-outline inline-block">
              Explore the Full Package
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-ink/70 text-lg leading-relaxed">
              The closing table is the best estate-planning moment of your life — you are already deciding whose name
              goes on the deed, and every question a plan answers is being answered whether you plan it or not. The
              Complete makes those answers deliberate: the vesting, the deed, the homestead strategy, and the trust
              funding all land correctly the first time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border border-black/5">
                <h3 className="text-xl text-navy mb-3">{p.title}</h3>
                <p className="text-ink/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream-warm rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl text-navy mb-2 text-center">The estate-planning side, at our published pricing</h3>
            <p className="text-ink/60 text-center text-sm mb-8">
              These are this firm&apos;s published legal fees — the same ones on our{" "}
              <a href="/pricing/" className="text-gold font-semibold">Pricing page</a>. Nothing invented, nothing
              blurred.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {planPricing.map(([name, price]) => (
                <div key={name} className="text-center">
                  <p className="text-ink/70 text-sm mb-1">{name}</p>
                  <p className="text-2xl font-serif text-gold">{price}</p>
                </div>
              ))}
            </div>
            <p className="text-ink/50 text-xs text-center mt-8 max-w-2xl mx-auto">
              Milestone Title, Co. and Muroff, Milestone &amp; Milestone, P.A. are separate entities; each is solely
              responsible for its own services, and neither is liable for the services of the other. Legal services
              are never automatic — they are engaged directly with the law firm under a written scope, at fees the
              firm determines, only if you choose to engage it. Title and settlement services are provided by
              Milestone Title, Co. Bundle savings apply to service and legal fees — never the state-promulgated title
              premium, which no one may discount. Every component is optional and available separately. TrusteeClear
              is a technology platform, not legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Included Free</p>
              <h2 className="text-4xl text-navy font-serif mb-6">
                TrusteeClear: because a trust is only as strong as your trustee
              </h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                The hardest day of a trust&apos;s life is the day someone has to run it. TrusteeClear — the Florida
                successor-trustee platform — gives your trustee and successor trustee guided duties, after-death
                checklists and timelines, notice-of-trust and homestead-after-death direction, and a clear path to
                attorney review when judgment calls appear.
              </p>
              <p className="text-ink/70 leading-relaxed mb-6">
                It is included free with every trust-based Complete — our gift to the person who will carry your
                plan.
              </p>
              <a href="https://trusteeclear.com" className="btn-gold inline-block" target="_blank" rel="noopener noreferrer">
                See TrusteeClear
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/family-1.png"
                alt="Multigenerational South Florida family at home — the Milestone Complete protects the house, the plan, and the people"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="One Roof. One Package. Done Right, Once."
        subtitle="Book a free consultation, or call 954.454.4522 and say 'the Complete.'"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "The Milestone Complete",
            provider: { "@type": "LegalService", name: "Muroff, Milestone & Milestone, P.A." },
            description:
              "Flagship package combining a Milestone Title closing (underwritten by Old Republic National Title Insurance Company) with estate planning — trusts, wills, deeds, homestead protection — at published pricing, plus TrusteeClear free for the trustee and successor trustee.",
            areaServed: "South Florida",
            url: "https://milestonelawfl.com/milestone-complete/",
          }),
        }}
      />
    </>
  );
}
