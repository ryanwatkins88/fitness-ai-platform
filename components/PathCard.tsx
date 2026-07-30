import CtaButton from "@/components/CtaButton";

type PathCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  href: string;
  ctaLabel: string;
};

export default function PathCard({
  eyebrow,
  title,
  description,
  bullets,
  href,
  ctaLabel,
}: PathCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">{description}</p>
      <ul className="mt-5 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <CtaButton href={href}>{ctaLabel}</CtaButton>
      </div>
    </div>
  );
}
