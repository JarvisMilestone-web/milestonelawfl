import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Muroff, Milestone & Milestone, P.A.",
  description: "Privacy policy for milestonelawfl.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="section-navy relative overflow-hidden py-16 md:py-20">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <h1 className="font-serif text-4xl text-white md:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-white/60">Last updated: May 2026</p>
          <div className="mx-auto mt-6 hairline-gold w-24" />
        </div>
      </section>

      <section className="section-cream py-16">
        <div className="container-site">
          <div className="card mx-auto max-w-3xl p-8 md:p-12">
            <h2 className="mb-4 font-serif text-2xl text-navy-800">Information We Collect</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              When you visit milestonelawfl.com, we may collect information you voluntarily provide through our contact form, including your name, phone number, and the nature of your legal inquiry. We do not collect email addresses through the website.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              We use the information you provide solely to respond to your inquiry, schedule consultations, and provide legal services. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Cookies and Analytics</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              This website may use cookies and analytics tools to understand how visitors use our site and to improve the user experience. These tools may collect anonymous data such as pages viewed, time spent on site, and referring URLs.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Third-Party Services</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              Our website may contain links to third-party websites or embed third-party services (such as scheduling tools and maps). These third parties have their own privacy policies, and we are not responsible for their practices.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Data Security</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              We take reasonable measures to protect the information you provide from unauthorized access, use, or disclosure. However, no method of electronic transmission or storage is 100% secure.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Your Rights</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              You may contact us at any time to request access to, correction of, or deletion of your personal information. Contact us by phone at 954.454.4522 or 305.682.2324.
            </p>

            <h2 className="mb-4 mt-10 font-serif text-2xl text-navy-800">Changes to This Policy</h2>
            <p className="mb-4 leading-relaxed text-ink-500">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
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
