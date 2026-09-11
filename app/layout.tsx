import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site, titleFor } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleFor("Oncology EMR for Epic and Meditech Expanse"),
    template: `${site.legalName} | %s`,
  },
  description:
    "Community-hospital oncology implementation and optimization on Meditech Expanse and Epic. Project managers, oncology pharmacists, and infusion nurses on the build. Email accounts@cohesyshealth.com.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.legalName,
    title: titleFor("Oncology EMR for Epic and Meditech Expanse"),
    description:
      "Community-hospital oncology implementation and optimization on Meditech Expanse and Epic.",
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
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
