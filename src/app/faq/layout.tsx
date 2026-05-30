import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Muroff, Milestone & Milestone, P.A.",
  description:
    "Frequently asked questions about estate planning, wills, trusts, real estate law, and our services in South Florida.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
