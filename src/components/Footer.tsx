import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl mb-3">Muroff, Milestone &amp; Milestone</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Protecting South Florida Families Since 1980
            </p>
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              100 North Federal Highway<br />
              Suite 200<br />
              Hallandale Beach, FL 33009
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-gold text-sm font-sans font-semibold uppercase tracking-wider mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wills/" className="text-white/60 hover:text-white transition-colors no-underline">Wills &amp; Estate Planning</Link></li>
              <li><Link href="/trusts/" className="text-white/60 hover:text-white transition-colors no-underline">Trusts &amp; Asset Protection</Link></li>
              <li><Link href="/real-estate-law/" className="text-white/60 hover:text-white transition-colors no-underline">Real Estate Law</Link></li>
              <li><Link href="/title-company/" className="text-white/60 hover:text-white transition-colors no-underline">Milestone Title</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-sm font-sans font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/attorneys/" className="text-white/60 hover:text-white transition-colors no-underline">Our Attorneys</Link></li>
              <li><Link href="/pricing/" className="text-white/60 hover:text-white transition-colors no-underline">Pricing</Link></li>
              <li><Link href="/faq/" className="text-white/60 hover:text-white transition-colors no-underline">FAQ</Link></li>
              <li><Link href="/contact/" className="text-white/60 hover:text-white transition-colors no-underline">Contact</Link></li>
              <li><Link href="/schedule/" className="text-white/60 hover:text-white transition-colors no-underline">Schedule Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-sm font-sans font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="tel:9544544522" className="hover:text-white transition-colors no-underline text-white/60">954.454.4522</a>
              </li>
              <li>
                <a href="tel:3056822324" className="hover:text-white transition-colors no-underline text-white/60">305.682.2324</a>
              </li>
              <li className="pt-2">Mon–Fri 9:00am – 5:00pm</li>
              <li>Evenings &amp; weekends by appointment</li>
              <li className="pt-2">English | Español | Русский | Українська</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Muroff, Milestone &amp; Milestone, P.A. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy/" className="hover:text-white/70 transition-colors no-underline text-white/40">Privacy Policy</Link>
            <Link href="/terms/" className="hover:text-white/70 transition-colors no-underline text-white/40">Terms of Service</Link>
          </div>
          <p className="text-center md:text-right max-w-md">
            Attorney Advertising. The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
