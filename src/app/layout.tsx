import type { Metadata } from "next";
// Self-hosted fonts (via @fontsource) instead of next/font/google, so Vercel's
// Turbopack build never has to resolve Google Fonts at build time - which it
// intermittently fails to do. The CSS variables are defined in globals.css.
import "@fontsource-variable/inter";
import "@fontsource-variable/orbitron";
import "./globals.css";
import { Header, Footer } from "@/components/site/Chrome";

const TITLE = "Protocol - Coaching software, built by coaches";
const DESCRIPTION =
  "Join the waitlist for Protocol, the all-in-one platform to program, track and grow your online fitness, nutrition and wellbeing coaching. 30-day free trial. Built by coaches, for coaches.";

export const metadata: Metadata = {
  metadataBase: new URL("https://protocolapp.uk"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "coaching software",
    "online coaching platform",
    "personal trainer software",
    "fitness coaching app",
    "nutrition coaching software",
    "strength and conditioning software",
    "coaching waitlist",
  ],
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://protocolapp.uk",
    siteName: "Protocol",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="flex min-h-full flex-col bg-bg-base text-text-primary"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <Header />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
