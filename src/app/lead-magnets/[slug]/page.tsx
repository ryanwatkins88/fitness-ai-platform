import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { LeadMagnetForm } from "@/components/lead-magnet-form";
import { leadMagnets, siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return leadMagnets.map((magnet) => ({ slug: magnet.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const magnet = leadMagnets.find((m) => m.slug === slug);
  if (!magnet) return {};

  return {
    title: magnet.title,
    description: magnet.description,
    alternates: { canonical: `${siteConfig.url}/lead-magnets/${magnet.slug}` },
  };
}

export default async function LeadMagnetPage({ params }: Props) {
  const { slug } = await params;
  const magnet = leadMagnets.find((m) => m.slug === slug);
  if (!magnet) notFound();

  return (
    <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:items-start">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">Free Guide</p>
        <h1 className="mt-3 text-4xl font-extrabold text-brand-900">{magnet.title}</h1>
        <p className="mt-4 text-lg text-brand-600">{magnet.subtitle}</p>
        <p className="mt-6 leading-7 text-brand-700">{magnet.description}</p>

        <ul className="mt-8 space-y-3">
          {magnet.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-brand-800">
              <span className="mt-0.5 text-accent-500">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm lg:sticky lg:top-24">
        <h2 className="text-xl font-bold text-brand-900">Get it sent to your inbox</h2>
        <p className="mt-2 text-sm text-brand-600">Free. Takes 10 seconds. No spam.</p>
        <div className="mt-6">
          <LeadMagnetForm leadMagnetSlug={magnet.slug} title={magnet.title} />
        </div>
      </div>
    </Container>
  );
}
