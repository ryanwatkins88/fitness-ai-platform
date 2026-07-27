import { Zap, Map, FileText } from "lucide-react";

const deliverables = [
  {
    icon: Zap,
    title: "4 quick AI wins",
    description:
      "Specific, no-fluff actions built around your business — things you can start using within days, not months.",
  },
  {
    icon: Map,
    title: "A starter AI roadmap",
    description:
      "Just getting started with AI? Get a simple, prioritized path so you know exactly what to set up first and why.",
  },
  {
    icon: FileText,
    title: "A plan you keep",
    description:
      "Everything is delivered in writing — no upsell required to walk away with something you can act on.",
  },
];

export function WhatYouGet() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What you walk away with
        </h2>
        <p className="mt-4 text-ink/60">
          One free call turns into a plan built specifically for your business.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        {deliverables.map((item) => (
          <div key={item.title} className="text-center sm:text-left">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-2/10 text-accent-2 sm:mx-0">
              <item.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
