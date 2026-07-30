import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import { articles, getArticleBySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `${siteConfig.url}/resources/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.coachName,
    },
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
        {article.audience === "mobility" ? "Mobility & Recovery" : "GLP-1 Support"}
      </p>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {article.title}
      </h1>
      <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        · {article.readingTime}
      </p>

      <div className="prose-content mt-10 space-y-5">
        {article.blocks.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="pt-2 text-xl font-bold text-zinc-900 dark:text-zinc-50"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={index} className="list-disc space-y-2 pl-5">
                {block.items.map((item) => (
                  <li key={item} className="text-zinc-700 dark:text-zinc-300">
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={index} className="text-zinc-700 dark:text-zinc-300">
              {block.text}
            </p>
          );
        })}
      </div>

      <div className="mt-14 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center dark:border-zinc-800 dark:bg-zinc-950">
        <p className="font-semibold text-zinc-900 dark:text-zinc-50">
          Want a program built around this?
        </p>
        <div className="mt-4">
          <CtaButton href={article.relatedHref}>{article.relatedLabel}</CtaButton>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
