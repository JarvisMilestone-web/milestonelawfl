import CTABanner from "@/components/CTABanner";

const faqs = [
  {
    q: "What is the difference between a will and a trust?",
    a: "A will takes effect after death and must go through probate — a public court process that can take months and cost thousands. A trust takes effect immediately, allows assets to pass directly to beneficiaries without probate, and keeps your family's financial matters private. Many clients benefit from having both as part of a comprehensive estate plan."
  },
  {
    q: "Do I need a trust if I already have a will?",
    a: "Not always, but for most Florida families a trust offers significant advantages. If you own real property, have assets over $75,000, or want to avoid probate delays and costs for your heirs, a trust is often the better choice. We'll help you determine the right approach at your free consultation."
  },
  {
    q: "What is a Lady Bird Deed?",
    a: "A Lady Bird Deed (enhanced life estate deed) allows you to transfer real property to a beneficiary upon your death while retaining full control during your lifetime — including the right to sell, mortgage, or revoke the deed. It avoids probate for the property without triggering Medicaid lookback issues."
  },
  {
    q: "How much does estate planning cost?",
    a: "All of our standard estate planning services are flat-fee — quoted at your free consultation with no hourly billing surprises. Individual will packages start at $750, full estate plans at $1,500, and trust packages at $2,000. Visit our pricing page for complete details."
  },
  {
    q: "What documents are included in a Full Estate Plan?",
    a: "A Full Estate Plan typically includes a Last Will & Testament, Revocable Living Trust (when appropriate), Living Will, Healthcare Surrogate Designation, Durable Power of Attorney, and HIPAA Authorization. The exact documents depend on your situation and will be discussed at your consultation."
  },
  {
    q: "Do you offer consultations in languages other than English?",
    a: "Yes. We serve South Florida's diverse communities in English, Spanish, Russian, and Ukrainian. Our team member Tetyana Tyshchenko is fluent in Russian and Ukrainian and assists with all client communications."
  },
  {
    q: "What areas do you serve?",
    a: "We are located in Hallandale Beach and serve clients throughout Broward County, Miami-Dade County, and all of South Florida. For estate planning matters, we can serve clients anywhere in the State of Florida."
  },
  {
    q: "How long does the estate planning process take?",
    a: "Most estate plans can be completed within 2-4 weeks from your initial consultation. Simple wills may be ready sooner. We work efficiently while ensuring every document is prepared with precision and fully reflects your wishes."
  },
  {
    q: "What is Milestone Title?",
    a: "Milestone Title is our full-service title company with over 20 years of experience. We provide title insurance, title searches, closing coordination, and recording services for residential and commercial real estate transactions throughout South Florida."
  },
  {
    q: "Is the initial consultation really free?",
    a: "Absolutely. The initial 30-minute consultation is completely free with no obligation. It gives us a chance to understand your situation and give you a clear, flat-fee quote for the work you need. You can schedule online or call us directly."
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-navy relative overflow-hidden py-24 md:py-28">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <span className="badge-gold">Questions & Answers</span>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl text-white">Frequently Asked Questions</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            Answers to the most common questions about estate planning, trusts, real estate law, and our services.
          </p>
        </div>
      </section>

      {/* Accordions */}
      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <div className="px-5 pb-5 text-ink-500 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Still Have Questions?" subtitle="Schedule a free consultation and we'll walk you through everything." />
    </>
  );
}
