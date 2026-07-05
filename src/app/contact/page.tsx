"use client";
import { useState, FormEvent } from "react";
import { CircleCheck, Clock, Globe, MapPin, Phone } from "lucide-react";

// ⚠️ REQUIRED: Replace with your Formspree form ID
// 1. Go to https://formspree.io → Sign up free → Create form
// 2. Set the recipient email to the firm's intake address
// 3. Copy the form ID (e.g. "xpwzabcd") and paste below
const FORMSPREE_ID = "YOUR_FORM_ID"; // ← Commander: replace this
const contactInfo = [
  { icon: MapPin, label: "Address", value: "100 North Federal Highway, Suite 200\nHallandale Beach, FL 33009" },
  { icon: Phone, label: "Phone", value: "954.454.4522 · 305.682.2324", href: "tel:9544544522" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 9:00am – 5:00pm\nEvenings & weekends by appointment" },
  { icon: Globe, label: "Languages", value: "English · Español · Русский · Українська" },
];

const inputClass =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 focus:border-gold-500 focus:outline-none";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us instead.");
      }
    } catch {
      setError("Network error. Please call us instead.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="section-navy relative overflow-hidden py-20 md:py-24">
        <div className="survey-grid absolute inset-0" aria-hidden />
        <div className="container-site relative text-center">
          <p className="eyebrow">Get in Touch</p>
          <h1 className="mt-4 font-serif text-4xl text-white md:text-6xl">Contact Us</h1>
          <p className="lede mx-auto mt-5 max-w-2xl">
            Have questions? Reach out by phone, visit our office, or send us a message below.
          </p>
          <div className="mx-auto mt-6 hairline-gold w-24" />
        </div>
      </section>

      <section className="section-cream py-20">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="card p-8">
              <div className="space-y-6">
                {contactInfo.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} className="flex items-start gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                        <Icon size={22} aria-hidden />
                      </span>
                      <div>
                        <p className="font-semibold text-navy-800">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="whitespace-pre-line text-gold-600 transition-colors hover:text-gold-500">{c.value}</a>
                        ) : (
                          <p className="whitespace-pre-line text-ink-500">{c.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card overflow-hidden">
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
              <div className="card p-12 text-center">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600">
                  <CircleCheck size={22} aria-hidden />
                </span>
                <h3 className="mb-3 font-serif text-2xl text-navy-800">Message Received</h3>
                <p className="text-ink-500">Thank you for reaching out. We will get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-6 p-8 md:p-10">
                <h3 className="mb-2 font-serif text-2xl text-navy-800">Send a Message</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-navy-800">First Name</label>
                    <input name="firstName" type="text" required className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-navy-800">Last Name</label>
                    <input name="lastName" type="text" required className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy-800">Email</label>
                  <input name="email" type="email" required className={inputClass} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy-800">Phone</label>
                  <input name="phone" type="tel" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy-800">How Can We Help?</label>
                  <select name="topic" className={inputClass}>
                    <option value="">Select a topic...</option>
                    <option>Wills & Estate Planning</option>
                    <option>Trusts & Asset Protection</option>
                    <option>Real Estate Law</option>
                    <option>Title Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy-800">Message</label>
                  <textarea name="message" rows={5} required className={`${inputClass} resize-none`} />
                </div>
                {error && <p className="text-center text-sm text-danger-600">{error}</p>}
                <button type="submit" disabled={loading} className="btn-gold w-full justify-center disabled:opacity-50">
                  {loading ? "Sending..." : "Send Message"}
                </button>
                <p className="text-center text-xs text-ink-400">
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
