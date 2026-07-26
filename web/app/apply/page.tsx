import type { Metadata } from "next";
import { site, spotsRemaining } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Your Free Assessment",
  description:
    "Book your free AI-powered business assessment call. No cost, no obligation, one call to start.",
};

export default function ApplyPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold text-slate-900">
        Book your free assessment
      </h1>
      <p className="mt-4 text-slate-600">
        {spotsRemaining} of {site.spotsTotal} free case-study spots left.
        Pick a time below for a short call — no cost, no obligation.
      </p>

      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-brand px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-dark"
      >
        Choose a time
      </a>

      <p className="mt-6 text-sm text-slate-500">
        Prefer email? Reach out directly at{" "}
        <a href={`mailto:${site.contactEmail}`} className="text-brand-dark underline">
          {site.contactEmail}
        </a>
        .
      </p>
    </section>
  );
}
