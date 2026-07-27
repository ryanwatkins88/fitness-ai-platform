import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ProgramCard } from "@/components/program-card";
import { programs, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Programs & Pricing",
  description:
    "Coaching programs for people on GLP-1 medications: a low-cost starter program, live group coaching, and fully custom 1:1 coaching.",
  alternates: { canonical: `${siteConfig.url}/programs` },
};

export default function ProgramsPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-brand-900">Programs & Pricing</h1>
        <p className="mt-4 text-lg text-brand-600">
          Every program is built around the same goal: preserve muscle, protect bone density, and keep you
          functionally strong while your GLP-1 medication does its job. Pick the level of support that fits you.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} href={siteConfig.booking.url} />
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-brand-100 bg-brand-50 p-8 text-center">
        <h2 className="text-2xl font-bold text-brand-900">Not sure which one fits?</h2>
        <p className="mt-2 text-brand-600">Book a free call and we&apos;ll help you pick the right starting point.</p>
        <Link
          href={siteConfig.booking.url}
          className="mt-6 inline-block rounded-full bg-accent-500 px-7 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
        >
          {siteConfig.booking.label}
        </Link>
      </div>
    </Container>
  );
}
