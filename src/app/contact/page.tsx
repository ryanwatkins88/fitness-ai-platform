import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} or book a free strategy call.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

export default function ContactPage() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-4xl font-extrabold text-brand-900">Let&apos;s Talk</h1>
        <p className="mt-4 text-lg text-brand-600">
          The fastest way to get started is a free strategy call — we&apos;ll talk through your medication, goals,
          and which program fits best.
        </p>

        <Link
          href={siteConfig.booking.url}
          className="mt-8 inline-block rounded-full bg-accent-500 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-accent-600"
        >
          {siteConfig.booking.label}
        </Link>

        <div className="mt-10 border-t border-brand-100 pt-8">
          <p className="text-brand-600">Prefer email?</p>
          <a href={`mailto:${siteConfig.email}`} className="text-lg font-semibold text-brand-800 hover:text-accent-600">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </Container>
  );
}
