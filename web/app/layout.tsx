import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Free AI Business Assessment for Service Businesses`,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: `${site.name} — Free AI Business Assessment`,
    description: site.tagline,
    url: site.domain,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Free AI Business Assessment`,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.domain,
    description: site.tagline,
    contactPoint: {
      "@type": "ContactPoint",
      email: site.contactEmail,
      contactType: "customer service",
    },
  };

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
