import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, no-fluff advice on using AI to save time and money in your small business.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">The Blog</h1>
        <p className="mt-4 text-ink/60">
          Practical, no-fluff advice on using AI to save time and money in your business.
        </p>
      </div>

      <div className="mt-14 divide-y divide-line border-y border-line">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-center justify-between gap-6 py-6"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-ink/40">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {post.readingTime}
              </p>
              <h2 className="mt-2 text-lg font-semibold group-hover:text-accent">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-ink/60">{post.description}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-ink/30 transition-colors group-hover:text-accent" />
          </Link>
        ))}
      </div>
    </section>
  );
}
