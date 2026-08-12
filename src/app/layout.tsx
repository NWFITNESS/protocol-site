import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/site/Chrome";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["500", "600", "700", "800"],
});

const TITLE = "Protocol — Coaching software, built by coaches";
const DESCRIPTION =
  "Join the waitlist for Protocol, the all-in-one platform to program, track and grow your online fitness, nutrition and wellbeing coaching. 14-day free trial. Built by coaches, for coaches.";

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
      </body>
    </html>
  );
}
