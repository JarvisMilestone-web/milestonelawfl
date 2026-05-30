import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Free Consultation — Muroff, Milestone & Milestone, P.A.",
  description: "Schedule your free consultation. Estate planning, wills, trusts, real estate law. No obligation. Flat-fee pricing.",
};

export default function SchedulePage() {
  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      {/* Compact header */}
      <div className="section-navy py-8 text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Free Consultation</p>
        <h1 className="text-3xl md:text-4xl text-white">Schedule Your Consultation</h1>
        <p className="text-white/60 text-sm mt-2">
          📞 <a href="tel:9544544522" className="text-gold hover:underline">954.454.4522</a>
          &nbsp;·&nbsp;
          <a href="tel:3056822324" className="text-gold hover:underline">305.682.2324</a>
          &nbsp;·&nbsp;English | Español | Русский | Українська
        </p>
      </div>

      {/* SSA Booking — full remaining height, no scroll */}
      <div className="flex-1 bg-cream" style={{ minHeight: "700px" }}>
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
      <div className="bg-cream-warm py-3 text-center">
        <p className="text-ink/40 text-xs">
          Scheduling does not create an attorney-client relationship. &nbsp;
          <a href="https://tbm.0d8.myftpupload.com/schedule/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
            Having trouble? Open directly →
          </a>
        </p>
      </div>
    </div>
  );
}
