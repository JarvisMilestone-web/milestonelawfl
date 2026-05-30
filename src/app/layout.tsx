import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Muroff, Milestone & Milestone, P.A. — South Florida Estate Planning & Real Estate Law",
  description:
    "Protecting South Florida Families Since 1980. Estate planning, wills, trusts, real estate law, and title services in Hallandale Beach, FL. Free consultations.",
  metadataBase: new URL("https://milestonelawfl.com"),
  openGraph: {
    title: "Muroff, Milestone & Milestone, P.A.",
    description: "Protecting South Florida Families Since 1980. Estate planning, wills, trusts, real estate law.",
    url: "https://milestonelawfl.com",
    siteName: "Muroff, Milestone & Milestone, P.A.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
