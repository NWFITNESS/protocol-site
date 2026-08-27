import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://protocolapp.uk"),
  title: {
    default: "Protocol - The coaching protocol",
    template: "%s - Protocol",
  },
  description:
    "The operating system for serious coaches. Percentage-based programming, athlete tracking, nutrition, messaging and payments in one precise app. Built by a coach, for coaches.",
  keywords: [
    "coaching software",
    "strength and conditioning software",
    "personal trainer software",
    "online coaching platform",
    "percentage based programming",
    "CrossFit programming software",
  ],
  openGraph: {
    type: "website",
    title: "Protocol - The coaching protocol",
    description:
      "The operating system for serious coaches. Built by a coach, for coaches.",
    url: "https://protocolapp.uk",
    siteName: "Protocol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protocol - The coaching protocol",
    description:
      "The operating system for serious coaches. Built by a coach, for coaches.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-full flex-col bg-bg-base text-text-primary"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
