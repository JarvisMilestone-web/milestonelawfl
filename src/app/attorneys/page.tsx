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
];

export default function AttorneysPage() {
  return (
    <>
      <section className="section-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Our Team</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4">Meet the Attorneys</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A team with deep roots in South Florida — committed to protecting your family and your future.
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 border border-black/5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col items-center"
              >
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full border-2 border-gold/40 bg-cream-warm flex items-center justify-center mb-5 shrink-0">
                  <span className="font-serif font-bold text-navy text-2xl">
                    {t.name.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
                  </span>
                </div>

                {/* Name */}
                <h2 className="text-xl font-bold text-navy mb-2">{t.name}</h2>

                {/* Bar badge */}
                {t.bar && (
                  <span className="inline-block bg-gold/10 text-gold/80 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {t.bar}
                  </span>
                )}

                {/* Role */}
                <p className="text-navy/80 font-semibold text-sm mb-1">{t.role}</p>
                <p className="text-ink/50 text-xs mb-4">{t.years}</p>

                {/* Bio */}
                <p className="text-ink/65 text-sm leading-relaxed">{t.bio}</p>
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
