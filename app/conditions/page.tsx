import type { Metadata } from "next";
import Link from "next/link";
import { conditions } from "@/lib/conditions";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Conditions We Train Around",
  description:
    "Online personal training built around specific conditions — knee and hip arthritis, rotator cuff tears, spinal stenosis, meniscus tears, post-stroke recovery, Parkinson's, and balance/fall prevention.",
  alternates: {
    canonical: `${siteConfig.url}/conditions`,
  },
};

export default function ConditionsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
        Conditions
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Training built around your specific condition
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        Generic programs ignore what's actually going on in your body. Here's
        how coaching is approached for each condition I regularly work with.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {conditions.map((condition) => (
          <Link
            key={condition.slug}
            href={`/conditions/${condition.slug}`}
            className="rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-teal-600 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="font-semibold text-zinc-900 dark:text-zinc-50">
              {condition.name}
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {condition.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
