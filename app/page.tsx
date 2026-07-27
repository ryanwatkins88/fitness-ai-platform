import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhoItsFor } from "@/components/home/WhoItsFor";
import { WhatYouGet } from "@/components/home/WhatYouGet";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "Free AI Business Assessment Call",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <WhatYouGet />
      <FinalCta />
    </>
  );
}
