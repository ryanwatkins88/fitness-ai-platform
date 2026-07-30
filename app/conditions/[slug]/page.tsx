import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import { conditions, getConditionBySlug } from "@/lib/conditions";
import { getArticleBySlug } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return conditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    return {};
  }

  return {
    title: condition.metaTitle,
    description: condition.description,
    alternates: {
      canonical: `${siteConfig.url}/conditions/${condition.slug}`,
    },
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);

  if (!condition) {
    notFound();
  }

  const relatedArticle = condition.relatedArticleSlug
    ? getArticleBySlug(condition.relatedArticleSlug)
    : undefined;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mobility & Recovery",
        item: `${siteConfig.url}/mobility-recovery`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: condition.name,
        item: `${siteConfig.url}/conditions/${condition.slug}`,
      },
    ],
  };

  return (
    <>
      <section className="mx-auto max-w-2xl px-6 py-20">
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          <Link href="/mobility-recovery" className="hover:text-teal-700 dark:hover:text-teal-400">
            Mobility &amp; Recovery
          </Link>
          {" / "}
          {condition.name}
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
          Condition-specific coaching
        </p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          Online Personal Training for {condition.name}
        </h1>
        <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400">
          {condition.intro}
        </p>

        <h2 className="mt-10 text-lg font-bold text-zinc-900 dark:text-zinc-50">
          What coaching focuses on
        </h2>
        <ul className="mt-4 space-y-3">
          {condition.focusAreas.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
              <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-lg font-bold text-zinc-900 dark:text-zinc-50">
          Worth knowing
        </h2>
        <p className="mt-3 text-zinc-700 dark:text-zinc-300">{condition.caution}</p>

        {relatedArticle && (
          <Link
            href={`/resources/${relatedArticle.slug}`}
            className="mt-8 block rounded-xl border border-zinc-200 bg-zinc-50 p-5 transition-colors hover:border-teal-600 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
              Related reading
            </p>
            <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
              {relatedArticle.title}
            </p>
          </Link>
        )}

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 text-center dark:border-zinc-800 dark:bg-zinc-950">
          <p className="font-semibold text-zinc-900 dark:text-zinc-50">
            Want a program built around this specifically?
          </p>
          <div className="mt-4">
            <CtaButton href="/contact">Book a Free Consult</CtaButton>
          </div>
        </div>

        <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-600">
          This page is educational and not a substitute for guidance from your
          physician or physical therapist. Always check with them before
          starting a new exercise routine.
        </p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
