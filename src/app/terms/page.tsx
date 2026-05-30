import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Muroff, Milestone & Milestone, P.A.",
  description: "Terms of service for milestonelawfl.com.",
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <div className="container-site max-w-3xl mx-auto">
        <h1 className="text-4xl text-navy mb-8 font-serif">Terms of Service</h1>
        <p className="text-ink/50 text-sm mb-8">Last updated: May 2026</p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Attorney Advertising</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          This website is operated by Muroff, Milestone &amp; Milestone, P.A. and constitutes attorney advertising. The hiring of a lawyer is an important decision that should not be based solely upon advertisements.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">No Attorney-Client Relationship</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          The information on this website is for general informational purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. Viewing this website, submitting a contact form, or scheduling a consultation does not create an attorney-client relationship.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">No Guarantee of Results</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Past results do not guarantee future outcomes. Every legal matter is different and must be evaluated on its own facts and circumstances.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Use of This Website</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          You may use this website for personal, informational purposes. You may not reproduce, distribute, or use the content for commercial purposes without our written consent.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Limitation of Liability</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Muroff, Milestone &amp; Milestone, P.A. makes no warranties or representations about the accuracy or completeness of the content on this website. We are not liable for any damages arising from the use of or reliance on the information provided.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">External Links</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          This website may contain links to external websites. We do not control or endorse those sites and are not responsible for their content or privacy practices.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Governing Law</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          These terms are governed by the laws of the State of Florida. Any disputes shall be resolved in the courts of Broward County, Florida.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Contact</h2>
        <p className="text-ink/70 leading-relaxed">
          Muroff, Milestone &amp; Milestone, P.A.<br />
          100 North Federal Highway, Suite 200<br />
          Hallandale Beach, FL 33009<br />
          954.454.4522 · 305.682.2324
        </p>
      </div>
    </section>
  );
}
