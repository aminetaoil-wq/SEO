import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/company";
import { localBusinessJsonLd, JsonLd } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Standaard (site-brede) metadata. Per-pagina metadata vult dit aan/overschrijft.
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Erkend elektricien in ${company.address.city}`,
    template: `%s | ${company.name}`,
  },
  description: company.shortIntro,
  keywords: [
    "elektricien",
    `elektricien ${company.address.city}`,
    "elektrotechnisch installatiebedrijf",
    "groepenkast vervangen",
    "laadpaal installeren",
    "zonnepanelen aansluiten",
    "storingsdienst",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: company.url,
    siteName: company.name,
    title: `${company.name} | Erkend elektricien in ${company.address.city}`,
    description: company.shortIntro,
    images: [
      {
        // TODO: plaats een echte og-image (1200×630) in /public/og-image.jpg
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: company.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Erkend elektricien in ${company.address.city}`,
    description: company.shortIntro,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>
        {/* Skip-link voor toetsenbord-/screenreadergebruikers */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Naar hoofdinhoud
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* LocalBusiness / Electrician schema.org JSON-LD (site-breed) */}
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
