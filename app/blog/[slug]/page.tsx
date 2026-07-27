import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/content/blog";
import { BlockRenderer } from "@/components/blog/BlockRenderer";
import { CalendlyButton } from "@/components/CalendlyButton";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          author: {
            "@type": "Organization",
            name: siteConfig.brandName,
          },
        }}
      />

      <article className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-xs font-medium uppercase tracking-wide text-ink/40">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readingTime}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>

        <BlockRenderer blocks={post.content} />

        <div className="mt-14 rounded-2xl border border-line bg-surface p-8 text-center">
          <p className="font-semibold">Want to see how this applies to your business?</p>
          <p className="mt-2 text-sm text-ink/60">
            Book a free 15-minute AI business assessment call and get 4 quick wins built
            specifically for you.
          </p>
          <div className="mt-6 flex justify-center">
            <CalendlyButton />
          </div>
        </div>
      </article>
    </>
  );
}
