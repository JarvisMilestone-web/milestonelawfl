import Link from "next/link";

const TITLE_SITE = "https://milestonetitlefl.com";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Dual-brand strip */}
      <div className="border-b border-white/10">
        <div className="container-site flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl">
              Muroff, Milestone <span className="text-gold-400">&amp;</span> Milestone, P.A.
            </p>
            <p className="mt-1 text-sm text-white/60">Protecting South Florida Families Since 1980</p>
          </div>
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-gold-300 font-semibold">The Title Platform</p>
            <a href={TITLE_SITE} rel="noopener" className="mt-1 block text-white/80 hover:text-white no-underline transition-colors">
              Milestone Title — MilestoneTitleFL.com ↗
            </a>
            <p className="text-xs text-white/45 mt-0.5">Founded by our attorneys · a separate company · since 2002</p>
          </div>
        </div>
      </div>

      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-sm font-sans font-semibold uppercase tracking-wider text-gold-300">Visit &amp; Contact</h2>
          <address className="mt-4 not-italic text-sm leading-relaxed text-white/65">
            100 North Federal Highway
            <br />
            Suite 200
            <br />
            Hallandale Beach, FL 33009
          </address>
          <div className="mt-3 space-y-1 text-sm">
            <a href="tel:+19544544522" className="block text-white/80 hover:text-white no-underline transition-colors">
              954.454.4522 <span className="text-white/40">(Broward)</span>
            </a>
            <a href="tel:+13056822324" className="block text-white/80 hover:text-white no-underline transition-colors">
              305.682.2324 <span className="text-white/40">(Miami-Dade)</span>
            </a>
          </div>
          <p className="mt-3 text-xs text-white/45">
            Mon–Fri 9:00am – 5:00pm
            <br />
            Evenings &amp; weekends by appointment
          </p>
          <p className="mt-3 text-xs text-white/45">English | Español | Русский | Українська</p>
        </div>

        <div>
          <h2 className="text-sm font-sans font-semibold uppercase tracking-wider text-gold-300">Practice Areas</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/wills/" className="text-white/65 hover:text-white transition-colors no-underline">Wills &amp; Estate Planning</Link></li>
            <li><Link href="/trusts/" className="text-white/65 hover:text-white transition-colors no-underline">Trusts &amp; Asset Protection</Link></li>
            <li><Link href="/real-estate-law/" className="text-white/65 hover:text-white transition-colors no-underline">Real Estate Law</Link></li>
            <li><Link href="/title-company/" className="text-white/65 hover:text-white transition-colors no-underline">Milestone Title</Link></li>
            <li><Link href="/milestone-complete/" className="font-semibold text-gold-300 hover:text-gold-200 transition-colors no-underline">The Milestone Complete ✦</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-sans font-semibold uppercase tracking-wider text-gold-300">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/attorneys/" className="text-white/65 hover:text-white transition-colors no-underline">Our Attorneys</Link></li>
            <li><Link href="/pricing/" className="text-white/65 hover:text-white transition-colors no-underline">Published Pricing</Link></li>
            <li><Link href="/faq/" className="text-white/65 hover:text-white transition-colors no-underline">FAQ</Link></li>
            <li><Link href="/contact/" className="text-white/65 hover:text-white transition-colors no-underline">Contact</Link></li>
            <li><Link href="/schedule/" className="text-white/65 hover:text-white transition-colors no-underline">Schedule Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-sans font-semibold uppercase tracking-wider text-gold-300">Title &amp; Closing Tools</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href={`${TITLE_SITE}/order-title`} rel="noopener" className="text-white/65 hover:text-white transition-colors no-underline">Order Title ↗</a></li>
            <li><a href={`${TITLE_SITE}/closing-cost-calculator`} rel="noopener" className="text-white/65 hover:text-white transition-colors no-underline">Closing Cost Calculator ↗</a></li>
            <li><a href={`${TITLE_SITE}/seller-net-sheet`} rel="noopener" className="text-white/65 hover:text-white transition-colors no-underline">Seller Net Sheet ↗</a></li>
            <li><a href={`${TITLE_SITE}/records`} rel="noopener" className="text-white/65 hover:text-white transition-colors no-underline">Florida Records Navigator ↗</a></li>
            <li><a href={`${TITLE_SITE}/pricing`} rel="noopener" className="text-white/65 hover:text-white transition-colors no-underline">Title Pricing ↗</a></li>
          </ul>
        </div>
      </div>

      {/* Legal footer */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-7 text-xs leading-relaxed text-white/40 lg:flex-row lg:justify-between">
          <div className="lg:max-w-xs">
            <p>© {new Date().getFullYear()} Muroff, Milestone &amp; Milestone, P.A. All rights reserved.</p>
            <div className="mt-2 flex items-center gap-4">
              <Link href="/privacy/" className="hover:text-white/70 transition-colors no-underline text-white/40">Privacy Policy</Link>
              <Link href="/terms/" className="hover:text-white/70 transition-colors no-underline text-white/40">Terms of Service</Link>
            </div>
          </div>
          <p className="lg:max-w-2xl">
            Attorney Advertising. The information on this website is for general information purposes only; nothing on
            this site is legal advice for any individual case, and viewing it does not create an attorney-client
            relationship. Muroff, Milestone &amp; Milestone, P.A. and Milestone Title, Co. are separate entities —
            each is solely responsible for its own services, and neither is liable for the services of the other.
            Title, escrow, and settlement services are provided by Milestone Title, Co.; legal services are engaged
            directly with this firm under its own written scope and published pricing.
          </p>
        </div>
      </div>
    </footer>
  );
}
