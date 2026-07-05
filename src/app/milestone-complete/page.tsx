import type { Metadata } from "next";
import { KeyRound, ShieldCheck, Sparkles } from "lucide-react";
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
    desc: "Trusts, wills, powers of attorney, healthcare directives, Lady Bird deeds, and Florida homestead strategy — engaged directly with this firm at the published pricing on our Pricing page, as a separate engagement coordinated with the closing's calendar.",
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

const pillarIcons = [KeyRound, ShieldCheck, Sparkles];

export default function MilestoneCompletePage() {
  return (
    <>
      <section className="section-navy relative overflow-hidden py-24 md:py-28">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <span className="badge-gold mb-6">
            <Sparkles size={12} aria-hidden />
            The Flagship Package
          </span>
          <h1 className="font-serif text-4xl text-white md:text-6xl">The Milestone Complete</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            Close it. Protect it. Pass it on. Your closing, your estate plan, and free TrusteeClear for the person
            your plan puts in charge — two specialized firms, separately engaged, deliberately coordinated. No one
            else in Florida is built to offer this.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="/schedule/" className="btn-gold">Book a Free Consultation</a>
            <a href={`${TITLE_SITE}/milestone-complete`} className="btn-gold-outline">
              Explore the Full Package
            </a>
          </div>
        </div>
      </section>

      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="lede">
              The closing table is the best estate-planning moment of your life — you are already deciding whose name
              goes on the deed, and every question a plan answers is being answered whether you plan it or not. The
              Complete makes those answers deliberate: the vesting, the deed, the homestead strategy, and the trust
              funding all land correctly the first time.
            </p>
          </div>

          <div className="mb-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <div key={p.title} className="card card-hover p-8">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                    <Icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-navy-800">{p.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="card-navy p-8 md:p-12">
            <h3 className="text-center font-serif text-3xl text-white">The estate-planning side, at our published pricing</h3>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-white/65">
              These are this firm&apos;s published legal fees — the same ones on our{" "}
              <a href="/pricing/" className="font-semibold text-gold-300 no-underline transition-colors hover:text-gold-200">Pricing page</a>. Nothing invented, nothing
              blurred.
            </p>
            <div className="mx-auto mt-6 hairline-gold w-24" aria-hidden />
            <div className="mx-auto mt-10 grid max-w-4xl gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {planPricing.map(([name, price]) => (
                <div key={name} className="text-center">
                  <p className="text-sm text-white/65">{name}</p>
                  <p className="mt-1.5 font-serif text-3xl text-white md:text-4xl">{price}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-white/45">
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

      <section className="bg-ivory-200 py-20 md:py-24">
        <div className="container-site">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow">Included Free</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-navy-800">
                TrusteeClear: because a trust is only as strong as your trustee
              </h2>
              <p className="mt-5 leading-relaxed text-ink-500">
                The hardest day of a trust&apos;s life is the day someone has to run it. TrusteeClear — the Florida
                successor-trustee platform — gives your trustee and successor trustee guided duties, after-death
                checklists and timelines, notice-of-trust and homestead-after-death direction, and a clear path to
                attorney review when judgment calls appear.
              </p>
              <p className="mt-4 leading-relaxed text-ink-500">
                It is included free with every trust-based Complete — our gift to the person who will carry your
                plan.
              </p>
              <a href="https://trusteeclear.com" className="btn-gold mt-8" target="_blank" rel="noopener noreferrer">
                See TrusteeClear
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gold-500/20 shadow-card-hover">
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
