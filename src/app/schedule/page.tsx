import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Free Consultation — Muroff, Milestone & Milestone, P.A.",
  description:
    "Schedule your free consultation with Muroff, Milestone & Milestone. Estate planning, wills, trusts, real estate law. No obligation. Flat-fee pricing.",
};

export default function SchedulePage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
            Free Consultation
          </p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            Schedule Your Free Consultation
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            No obligation, no pressure. We&apos;ll review your situation and give you a
            clear flat-fee quote before you decide anything.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="container-site">
          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { icon: "⏱️", title: "30 Minutes", desc: "Quick, focused consultation to understand your needs" },
              { icon: "💰", title: "100% Free", desc: "No fees, no obligation — just honest legal guidance" },
              { icon: "🌐", title: "4 Languages", desc: "English, Spanish, Russian, or Ukrainian" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-black/5 text-center">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-ink/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Live booking embed */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl text-navy font-serif text-center mb-2">Pick a Date &amp; Time</h2>
            <p className="text-ink/60 text-center mb-6">
              Select an available slot below. You&apos;ll receive a confirmation email immediately.
            </p>

            {/* SSA booking — live embed */}
            <div className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm"
                 style={{ minHeight: "600px" }}>
              <iframe
                src="https://tbm.0d8.myftpupload.com/schedule/"
                title="Schedule a Consultation"
                width="100%"
                height="700"
                style={{ border: "none", display: "block" }}
                scrolling="auto"
              />
            </div>

            <p className="text-center mt-4 text-ink/50 text-sm">
              Having trouble?{" "}
              <a
                href="https://tbm.0d8.myftpupload.com/schedule/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold hover:underline"
              >
                Open booking page directly →
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="max-w-3xl mx-auto mt-10">
            <div className="bg-navy rounded-2xl p-8 text-center">
              <p className="text-white/70 mb-3">Prefer to call us directly?</p>
              <div className="flex gap-6 justify-center">
                <a href="tel:9544544522" className="text-gold font-bold text-xl hover:text-gold-light transition-colors">
                  954.454.4522
                </a>
                <span className="text-white/30 text-xl">|</span>
                <a href="tel:3056822324" className="text-gold font-bold text-xl hover:text-gold-light transition-colors">
                  305.682.2324
                </a>
              </div>
              <p className="text-white/40 text-sm mt-3">Mon–Fri 9:00am–5:00pm · Evenings &amp; weekends by appointment</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-cream-warm py-6">
        <div className="container-site text-center">
          <p className="text-ink/40 text-xs max-w-2xl mx-auto">
            Scheduling a consultation does not create an attorney-client relationship.
            Information shared during the consultation is kept confidential.
          </p>
        </div>
      </div>
    </>
  );
}
