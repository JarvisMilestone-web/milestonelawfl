import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Muroff, Milestone & Milestone, P.A.",
  description:
    "Contact Muroff, Milestone & Milestone in Hallandale Beach, FL. Call 954.454.4522 or 305.682.2324. English, Spanish, Russian, Ukrainian.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
