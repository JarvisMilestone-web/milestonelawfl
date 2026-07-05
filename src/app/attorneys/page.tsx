import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Our Attorneys — Muroff, Milestone & Milestone, P.A.",
  description:
    "Meet the attorneys and team at Muroff, Milestone & Milestone. Over 45 years of combined experience in estate planning, real estate law, and title services.",
};

const team = [
  {
    name: "Neil Alan Milestone, Esq.",
    bar: "FL Bar #309966",
    role: "Partner — Real Estate Law, Probate, Trusts & Real Property",
    years: "45+ years experience • Licensed since 1980",
    bio: "Neil has guided South Florida families through estate planning, probate, and real estate transactions for over four decades. A graduate of Florida State University College of Law, Neil brings meticulous attention to detail and a genuine commitment to protecting each client's legacy.",
  },
  {
    name: "Jan Muroff Milestone, Esq.",
    bar: "FL Bar #309958",
    role: "Partner — Estate Planning & Real Estate",
    years: "40+ years experience",
    bio: "Jan combines deep expertise in estate planning and real estate law with a personal approach that has made her a trusted advisor to generations of South Florida families. Her bilingual capabilities and breadth of experience make her an invaluable guide through life's most important legal decisions.",
  },
  {
    name: "Melvin I. Muroff",
    bar: "Founding Partner & Legacy",
    role: "73 Years General Practice",
    years: "The name behind the firm",
    bio: "The firm bears the Muroff name in honor of Melvin I. Muroff, a legendary South Florida attorney whose 73 years of dedicated general practice established the foundation upon which Muroff, Milestone & Milestone was built. Melvin's commitment to community, integrity, and accessible legal counsel remains the firm's guiding principle today.",
  },
  {
    name: "Tetyana Tyshchenko",
    bar: "",
    role: "Legal Secretary, Paralegal & Title Processor • Office Manager, Milestone Title",
    years: "Fluent in Russian and Ukrainian",
    bio: "Tetyana is the operational backbone of the firm and Milestone Title. Her expertise in legal document processing, title work, and client communications — combined with her fluency in Russian and Ukrainian — makes her an essential resource for South Florida's diverse communities.",
  },
  {
    name: "Eric Milestone",
    bar: "",
    role: "Director of Marketing & Client Acquisition",
    years: "Driving growth and client experience",
    bio: "Eric leads the firm's marketing strategy and client acquisition efforts, ensuring that families across South Florida can easily find and access the legal services they need. His focus on client experience and modern outreach has been instrumental in connecting the firm with the next generation of clients.",
  },
];

export default function AttorneysPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-navy relative overflow-hidden py-24 md:py-28">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <span className="badge-gold">Our Team</span>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl text-white">Meet the Attorneys</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            A team with deep roots in South Florida — committed to protecting your family and your future.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="section-cream py-20 md:py-24">
        <div className="container-site">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
            {team.map((t) => (
              <div key={t.name} className="card card-hover flex flex-col items-center p-8 text-center">
                {/* Avatar */}
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-500/40 bg-ivory-200">
                  <span className="font-serif text-xl font-bold text-navy-800">
                    {t.name.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>

                {/* Name */}
                <h2 className="font-serif text-xl text-navy-800">{t.name}</h2>

                {/* Bar badge */}
                {t.bar && (
                  <span className="mt-1.5 inline-block rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-600">
                    {t.bar}
                  </span>
                )}

                {/* Role */}
                <p className="mt-3 text-sm font-semibold text-navy-700">{t.role}</p>
                <p className="mt-1 text-xs text-ink-400">{t.years}</p>

                {/* Bio */}
                <p className="mt-4 text-sm leading-relaxed text-ink-500">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Attorney",
              name: "Neil Alan Milestone",
              jobTitle: "Partner",
              worksFor: { "@type": "LegalService", name: "Muroff, Milestone & Milestone, P.A." },
              description: "Real Estate Law, Probate, Trusts & Real Property attorney with 45+ years experience.",
            },
            {
              "@context": "https://schema.org",
              "@type": "Attorney",
              name: "Jan Muroff Milestone",
              jobTitle: "Partner",
              worksFor: { "@type": "LegalService", name: "Muroff, Milestone & Milestone, P.A." },
              description: "Estate Planning & Real Estate attorney with 40+ years experience.",
            },
          ]),
        }}
      />
    </>
  );
}
