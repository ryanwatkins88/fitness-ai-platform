import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/site.config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} | Free AI Assessment for Small Businesses`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI business assessment",
    "free AI assessment call",
    "how to implement AI in my business",
    "AI for small business",
    "AI consulting for small business",
    "save money with AI",
    "AI quick wins",
    "AI implementation plan",
  ],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.brandName} | Free AI Assessment for Small Businesses`,
    description: siteConfig.description,
    siteName: siteConfig.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Free AI Assessment for Small Businesses`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: siteConfig.brandName,
            description: siteConfig.description,
            url: siteConfig.url,
            email: siteConfig.contactEmail,
            areaServed: "US",
            priceRange: "Free consultation",
            makesOffer: {
              "@type": "Offer",
              name: "Free AI Business Assessment Call",
              price: "0",
              priceCurrency: "USD",
            },
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
