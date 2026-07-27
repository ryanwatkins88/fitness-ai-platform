import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the coach behind ${siteConfig.name} and why this coaching exists specifically for people on GLP-1 medications.`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

export default function AboutPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-brand-900">About {siteConfig.name}</h1>

        {/* TODO: replace this placeholder bio with your real story, credentials, and photo */}
        <div className="mt-8 space-y-5 leading-7 text-brand-700">
          <p>
            [TODO: Your story goes here — why you started coaching people on GLP-1 medications specifically, what
            you noticed that most weight-loss coaching gets wrong for this group, and what makes your approach
            different.]
          </p>
          <p>
            [TODO: Your credentials — certifications, years coaching, any relevant education or clinical
            background.]
          </p>
          <p>
            [TODO: A personal note on why muscle, strength, and bone health matter to you beyond aesthetics —
            this is often the most persuasive part of an About page for this audience.]
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <p className="text-sm text-brand-600">
            <strong>Note:</strong> Coaching provided here is fitness and nutrition coaching, not medical care.
            Always follow guidance from the provider who prescribes your GLP-1 medication.
          </p>
        </div>

        <Link
          href={siteConfig.booking.url}
          className="mt-10 inline-block rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-accent-600"
        >
          {siteConfig.booking.label}
        </Link>
      </div>
    </Container>
  );
}
