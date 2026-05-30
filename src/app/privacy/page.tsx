import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Muroff, Milestone & Milestone, P.A.",
  description: "Privacy policy for milestonelawfl.com.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <div className="container-site max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-navy">
        <h1 className="text-4xl text-navy mb-8 font-serif">Privacy Policy</h1>
        <p className="text-ink/50 text-sm mb-8">Last updated: May 2026</p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Information We Collect</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          When you visit milestonelawfl.com, we may collect information you voluntarily provide through our contact form, including your name, phone number, and the nature of your legal inquiry. We do not collect email addresses through the website.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">How We Use Your Information</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          We use the information you provide solely to respond to your inquiry, schedule consultations, and provide legal services. We do not sell, rent, or share your personal information with third parties for marketing purposes.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Cookies and Analytics</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          This website may use cookies and analytics tools to understand how visitors use our site and to improve the user experience. These tools may collect anonymous data such as pages viewed, time spent on site, and referring URLs.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Third-Party Services</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          Our website may contain links to third-party websites or embed third-party services (such as scheduling tools and maps). These third parties have their own privacy policies, and we are not responsible for their practices.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Data Security</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          We take reasonable measures to protect the information you provide from unauthorized access, use, or disclosure. However, no method of electronic transmission or storage is 100% secure.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Your Rights</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          You may contact us at any time to request access to, correction of, or deletion of your personal information. Contact us by phone at 954.454.4522 or 305.682.2324.
        </p>

        <h2 className="text-2xl text-navy mt-10 mb-4 font-serif">Changes to This Policy</h2>
        <p className="text-ink/70 leading-relaxed mb-4">
          We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
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
