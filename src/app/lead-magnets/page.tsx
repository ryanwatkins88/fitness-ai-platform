import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { leadMagnets, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Free Guides",
  description: "Free guides for preserving muscle, strength, and bone density while losing weight on a GLP-1 medication.",
  alternates: { canonical: `${siteConfig.url}/lead-magnets` },
};

export default function LeadMagnetsPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-brand-900">Free Guides</h1>
        <p className="mt-4 text-lg text-brand-600">
          Start here — practical, free resources built specifically for people on GLP-1 medications.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {leadMagnets.map((magnet) => (
          <Link
            key={magnet.slug}
            href={`/lead-magnets/${magnet.slug}`}
            className="flex flex-col rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-2xl font-bold text-brand-900">{magnet.title}</h2>
            <p className="mt-2 text-brand-600">{magnet.subtitle}</p>
            <span className="mt-6 font-semibold text-accent-600">Get the free guide →</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
