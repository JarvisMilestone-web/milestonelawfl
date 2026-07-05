import type { Metadata } from "next";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule a Free Consultation — Muroff, Milestone & Milestone, P.A.",
  description: "Schedule your free consultation. Estate planning, wills, trusts, real estate law. No obligation. Flat-fee pricing.",
};

export default function SchedulePage() {
  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      {/* Hero header */}
      <section className="section-navy relative overflow-hidden py-20 md:py-24">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <p className="eyebrow">Free Consultation</p>
          <h1 className="mt-4 font-serif text-4xl text-white md:text-6xl">Schedule Your Consultation</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            <Phone size={18} aria-hidden className="mr-1.5 inline align-middle text-gold-300" />
            <a href="tel:9544544522" className="text-gold-300 hover:underline">954.454.4522</a>
            &nbsp;·&nbsp;
            <a href="tel:3056822324" className="text-gold-300 hover:underline">305.682.2324</a>
            &nbsp;·&nbsp;English | Español | Русский | Українська
          </p>
          <div className="mx-auto mt-6 hairline-gold w-24" />
        </div>
      </section>

      {/* SSA Booking — full remaining height, no scroll */}
      <div className="flex-1 bg-ivory-100" style={{ minHeight: "700px" }}>
        <iframe
          src="https://tbm.0d8.myftpupload.com/schedule/"
          title="Book a Free Consultation"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "700px",
            border: "none",
            display: "block",
          }}
          scrolling="yes"
        />
      </div>

      {/* Minimal disclaimer */}
      <div className="bg-ivory-200 py-3 text-center">
        <p className="text-xs text-ink-400">
          Scheduling does not create an attorney-client relationship. &nbsp;
          <a href="https://tbm.0d8.myftpupload.com/schedule/" target="_blank" rel="noopener noreferrer" className="font-medium text-gold-600 hover:underline">
            Having trouble? Open directly →
          </a>
        </p>
      </div>
    </div>
  );
}
