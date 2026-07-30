import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const socialLinks = [
    siteConfig.social.facebookRehabGlp1,
    siteConfig.social.facebookGeneral,
    siteConfig.social.instagram,
  ].filter((link) => !link.endsWith("com/"));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    areaServed: "Online",
    knowsAbout: [
      "Personal training",
      "Injury rehabilitation exercise",
      "Prehabilitation (pre-surgery conditioning)",
      "Arthritis-friendly strength training",
      "Post-stroke exercise",
      "Balance and fall-risk reduction",
      "GLP-1 medication strength preservation",
    ],
    founder: {
      "@type": "Person",
      name: `${siteConfig.coachName} Watkins`,
      jobTitle: "Personal Trainer & Physical Therapist Assistant",
      description:
        "15+ years as a personal trainer with a physical therapist assistant background, specializing in online coaching for injury recovery, arthritis, and GLP-1 strength preservation.",
    },
    sameAs: socialLinks,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coaching programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobility & Recovery Coaching",
            description:
              "Online strength and mobility coaching for adults managing arthritis, joint injuries, post-stroke recovery, Parkinson's, and balance/fall risk.",
            url: `${siteConfig.url}/mobility-recovery`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GLP-1 Strength Support",
            description:
              "Online resistance training and accountability coaching for people on GLP-1 medications to preserve lean muscle during weight loss.",
            url: `${siteConfig.url}/glp1-support`,
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
