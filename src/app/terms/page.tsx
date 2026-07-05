import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Muroff, Milestone & Milestone, P.A.",
  description: "Terms of service for milestonelawfl.com.",
};

export default function TermsPage() {
  return (
    <>
      <section className="section-navy relative overflow-hidden py-16 md:py-20">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <h1 className="font-serif text-4xl text-white md:text-6xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-white/60">Last updated: May 2026</p>
          <div className="mx-auto mt-6 hairline-gold w-24" />
        </div>
      </section>

      <section className="section-cream py-16">
        <div className="container-site">
          <div className="card mx-auto max-w-3xl p-8 md:p-12">
            <h2 className="mb-4 font-serif text-2xl text-navy-800">Attorney Advertising</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              This website is operated by Muroff, Milestone &amp; Milestone, P.A. and constitutes attorney advertising. The hiring of a lawyer is an important decision that should not be based solely upon advertisements.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">No Attorney-Client Relationship</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              The information on this website is for general informational purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. Viewing this website, submitting a contact form, or scheduling a consultation does not create an attorney-client relationship.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">No Guarantee of Results</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              Past results do not guarantee future outcomes. Every legal matter is different and must be evaluated on its own facts and circumstances.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Use of This Website</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              You may use this website for personal, informational purposes. You may not reproduce, distribute, or use the content for commercial purposes without our written consent.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Limitation of Liability</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              Muroff, Milestone &amp; Milestone, P.A. makes no warranties or representations about the accuracy or completeness of the content on this website. We are not liable for any damages arising from the use of or reliance on the information provided.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">External Links</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              This website may contain links to external websites. We do not control or endorse those sites and are not responsible for their content or privacy practices.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Governing Law</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts of Broward County, Florida.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Contact</h2>
            <p className="leading-relaxed text-ink-500">
              Muroff, Milestone &amp; Milestone, P.A.<br />
              100 North Federal Highway, Suite 200<br />
              Hallandale Beach, FL 33009<br />
              954.454.4522 · 305.682.2324
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
