"use client";
import { useState, FormEvent } from "react";
const contactInfo = [
  { icon: "📍", label: "Address", value: "100 North Federal Highway, Suite 200\nHallandale Beach, FL 33009" },
  { icon: "📞", label: "Phone", value: "954.454.4522 · 305.682.2324", href: "tel:9544544522" },
  { icon: "🕐", label: "Hours", value: "Mon–Fri 9:00am – 5:00pm\nEvenings & weekends by appointment" },
  { icon: "🌐", label: "Languages", value: "English · Español · Русский · Українська" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-site text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl text-white mb-4 font-serif">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions? Reach out by phone, visit our office, or send us a message below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid lg:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <div>
            <div className="space-y-6 mb-8">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="font-semibold text-navy">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-gold hover:text-gold-light whitespace-pre-line">{c.value}</a>
                    ) : (
                      <p className="text-ink/60 whitespace-pre-line">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.5!2d-80.1484!3d25.9812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s100+North+Federal+Highway+Hallandale+Beach+FL!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 border border-black/5 text-center">
                <span className="text-5xl mb-4 block">✅</span>
                <h3 className="text-2xl text-navy mb-3 font-serif">Message Received</h3>
                <p className="text-ink/60">Thank you for reaching out. We will get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-black/5 space-y-6">
                <h3 className="text-2xl text-navy mb-2 font-serif">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">First Name</label>
                    <input type="text" required className="w-full rounded-lg border border-black/10 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Last Name</label>
                    <input type="text" required className="w-full rounded-lg border border-black/10 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Phone</label>
                  <input type="tel" className="w-full rounded-lg border border-black/10 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">How Can We Help?</label>
                  <select className="w-full rounded-lg border border-black/10 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/30 bg-white">
                    <option value="">Select a topic...</option>
                    <option>Wills &amp; Estate Planning</option>
                    <option>Trusts &amp; Asset Protection</option>
                    <option>Real Estate Law</option>
                    <option>Title Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy mb-1">Message</label>
                  <textarea rows={5} required className="w-full rounded-lg border border-black/10 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none" />
                </div>
                <button type="submit" className="btn-gold w-full justify-center">Send Message</button>
                <p className="text-ink/40 text-xs text-center">
                  Submitting this form does not create an attorney-client relationship.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
