import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Free Consultation — Muroff, Milestone & Milestone, P.A.",
  description:
    "Book your free 30-minute consultation with our attorneys. Available in English, Spanish, Russian, and Ukrainian.",
};

export default function SchedulePage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Book Now</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Schedule a Free Consultation</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Meet with our attorneys to discuss your estate planning, real estate, or title needs — at no cost and no obligation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-cream-warm rounded-2xl p-8 sticky top-24">
                <h3 className="text-xl text-navy mb-6">Consultation Details</h3>
                <ul className="space-y-4 text-ink/70">
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl">⏱</span>
                    <div>
                      <p className="font-semibold text-navy">30 Minutes</p>
                      <p className="text-sm">Enough time to understand your needs and outline a plan</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl">💰</span>
                    <div>
                      <p className="font-semibold text-navy">Completely Free</p>
                      <p className="text-sm">No cost, no obligation, no pressure</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl">🌐</span>
                    <div>
                      <p className="font-semibold text-navy">4 Languages</p>
                      <p className="text-sm">English, Spanish, Russian, Ukrainian</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold text-xl">📞</span>
                    <div>
                      <p className="font-semibold text-navy">Prefer to Call?</p>
                      <p className="text-sm">
                        <a href="tel:9544544522" className="text-gold hover:text-gold-light">954.454.4522</a>
                        {" · "}
                        <a href="tel:3056822324" className="text-gold hover:text-gold-light">305.682.2324</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking iframe */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
                <iframe
                  src="https://tbm.0d8.myftpupload.com/schedule/"
                  title="Schedule a Consultation"
                  className="w-full border-0"
                  style={{ minHeight: "700px" }}
                  loading="lazy"
                />
              </div>
              <p className="text-center mt-4">
                <a
                  href="https://tbm.0d8.myftpupload.com/schedule/"
                  className="text-gold hover:text-gold-light text-sm font-medium"
                >
                  Having trouble? Open scheduling page directly →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-site pb-12">
        <p className="text-ink/40 text-xs text-center max-w-2xl mx-auto">
          Scheduling a consultation does not create an attorney-client relationship. Information shared during the consultation is kept confidential.
        </p>
      </div>
    </>
  );
}
