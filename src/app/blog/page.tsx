import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { blogPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on muscle preservation, strength training, and nutrition for people on GLP-1 medications.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  return (
    <Container className="py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold text-brand-900">The Blog</h1>
        <p className="mt-4 text-lg text-brand-600">
          Straight answers on training and nutrition while you&apos;re on a GLP-1 medication.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-3xl space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="text-sm text-brand-400">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-brand-900">{post.title}</h2>
            <p className="mt-3 text-brand-600">{post.description}</p>
            <span className="mt-4 inline-block font-semibold text-accent-600">Read more →</span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
