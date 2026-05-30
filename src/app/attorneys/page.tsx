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

      <section className="py-20">
        <div className="container-site space-y-12">
          {team.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-8 md:p-12 border border-black/5">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-navy-light flex items-center justify-center text-3xl text-gold shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl text-navy mb-1">{t.name}</h2>
                  {t.bar && <p className="text-gold text-sm font-semibold mb-1">{t.bar}</p>}
                  <p className="text-ink/70 font-medium mb-1">{t.role}</p>
                  <p className="text-ink/50 text-sm mb-4">{t.years}</p>
                  <p className="text-ink/70 leading-relaxed max-w-3xl">{t.bio}</p>
                </div>
              </div>
            </div>
          ))}
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
