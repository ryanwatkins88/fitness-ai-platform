import { CalendlyButton } from "@/components/CalendlyButton";
import { CheckCircle2 } from "lucide-react";

const trustPoints = [
  "15 minutes, 5 quick questions",
  "No sales pitch, no obligation",
  "Works for any type of business",
];

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
            Free AI Business Assessment
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Find out exactly how AI can save your business time and money —
            <span className="text-emerald-400"> in one free call.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
            Answer a few quick questions on a free 15-minute call. I&apos;ll turn your
            answers into a custom plan: 4 quick AI wins you can put to work this week,
            plus a simple starter roadmap if you&apos;re just getting into AI.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <CalendlyButton />
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
