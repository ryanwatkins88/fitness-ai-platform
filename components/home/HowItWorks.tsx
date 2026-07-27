import { PhoneCall, BrainCircuit, FileCheck2 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "1. Book your free call",
    description:
      "15 minutes, 5 simple questions about your business, your team, and where you're losing time or money to manual work.",
  },
  {
    icon: BrainCircuit,
    title: "2. I build your custom AI plan",
    description:
      "I take what you shared and use AI to analyze it in depth, pinpointing exactly where automation and AI can save you the most time and money.",
  },
  {
    icon: FileCheck2,
    title: "3. You get your plan",
    description:
      "A written plan with 4 specific quick wins you can act on immediately, plus a starter AI roadmap — whether you're upgrading what you have or starting from zero.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
        <p className="mt-4 text-ink/60">
          Three steps between where your business is now and a clear, custom AI plan.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="card-hover rounded-2xl border border-line bg-paper p-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white">
              <step.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
