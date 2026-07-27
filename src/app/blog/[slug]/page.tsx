import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { siteConfig, leadMagnets } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedMagnet = leadMagnets[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <Container className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-3xl">
        <p className="text-sm text-brand-400">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="mt-2 text-4xl font-extrabold leading-tight text-brand-900">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-brand-700">{post.intro}</p>

        <div className="mt-10 space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-bold text-brand-900">{section.heading}</h2>
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="leading-7 text-brand-700">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-brand-700">
                      <span className="mt-0.5 text-accent-500">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-brand-800 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-200">Free Guide</p>
          <h3 className="mt-2 text-2xl font-bold">{relatedMagnet.title}</h3>
          <p className="mt-2 text-brand-100">{relatedMagnet.subtitle}</p>
          <Link
            href={`/lead-magnets/${relatedMagnet.slug}`}
            className="mt-5 inline-block rounded-full bg-accent-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-600"
          >
            Get the Free Guide
          </Link>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl font-bold text-brand-900">Frequently Asked Questions</h2>
          <div className="mt-6">
            <FaqList faqs={post.faqs} />
          </div>
        </div>
      </article>
    </Container>
  );
}
