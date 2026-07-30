import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical, evidence-informed articles on training around arthritis, stroke recovery, and GLP-1 weight loss — written for real life, not textbooks.",
};

export default function ResourcesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
        Resources
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
        Practical guides for training through real conditions
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
        No fluff, no generic workouts — just what actually helps when you're
        managing arthritis, recovering from a stroke, or protecting your
        strength on a GLP-1 medication.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/resources/${article.slug}`}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-teal-600 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
              {article.audience === "mobility" ? "Mobility & Recovery" : "GLP-1 Support"}
            </p>
            <h2 className="mt-2 text-lg font-bold text-zinc-900 dark:text-zinc-50">
              {article.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {article.description}
            </p>
            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
              {article.readingTime}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
