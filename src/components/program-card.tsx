import Link from "next/link";
import type { ProgramTier } from "@/lib/site-config";

const tierLabel: Record<ProgramTier["tier"], string> = {
  "low-ticket": "Start Here",
  "mid-ticket": "Most Popular",
  "high-ticket": "Fully Custom",
};

export function ProgramCard({ program, href }: { program: ProgramTier; href: string }) {
  return (
    <div id={program.slug} className="flex scroll-mt-24 flex-col rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
      <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
        {tierLabel[program.tier]}
      </span>
      <h3 className="mt-4 text-2xl font-bold text-brand-900">{program.name}</h3>
      <p className="mt-1 text-sm text-brand-500">{program.bestFor}</p>

      <div className="mt-5">
        <span className="text-3xl font-extrabold text-brand-900">{program.price}</span>
        <span className="ml-2 text-sm text-brand-500">{program.billing}</span>
      </div>

      <p className="mt-4 leading-6 text-brand-700">{program.description}</p>

      <ul className="mt-6 flex-1 space-y-2">
        {program.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-brand-700">
            <span className="mt-0.5 text-accent-500">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="mt-8 block rounded-full bg-brand-800 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-brand-700"
      >
        {program.ctaLabel}
      </Link>
    </div>
  );
}
