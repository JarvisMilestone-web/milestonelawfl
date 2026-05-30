import Link from "next/link";

export default function CTABanner({
  title = "Ready to Protect Your Family?",
  subtitle = "Schedule your free 30-minute consultation today. We serve clients in English, Spanish, Russian, and Ukrainian.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-navy py-20">
      <div className="container-site text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-4">{title}</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/schedule/" className="btn-gold">Schedule Free Consultation</Link>
          <a href="tel:9544544522" className="btn-gold-outline !border-white/30 !text-white hover:!bg-white/10">
            Call 954.454.4522
          </a>
        </div>
      </div>
    </section>
  );
}
