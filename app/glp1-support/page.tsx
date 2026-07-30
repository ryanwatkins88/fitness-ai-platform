import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Strength Training for GLP-1 Weight Loss (Ozempic, Wegovy, Zepbound)",
  description:
    "Online strength training built for people on GLP-1 medications. Preserve lean muscle, keep your metabolism strong, and stay accountable while you lose weight.",
};

const risks = [
  {
    title: "Muscle loss",
    text: "Studies on GLP-1 medications show a meaningful share of weight lost can be lean muscle, not just fat — without resistance training to protect it.",
  },
  {
    title: "Lower energy for exercise",
    text: "Reduced appetite and calorie intake can leave you with less fuel for workouts, so programming has to adapt with you, not fight you.",
  },
  {
    title: "Rebound weight regain",
    text: "Strength and habits built during your GLP-1 journey are what protect your results if you ever taper off the medication.",
  },
];

const included = [
  "Resistance training programmed around your energy and appetite changes",
  "Protein and recovery guidance to support muscle retention (not a meal plan replacement)",
  "Weekly accountability check-ins so consistency doesn't depend on motivation",
  "Progress tracking beyond the scale — strength, function, and how your clothes fit",
];

export default function Glp1SupportPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
            GLP-1 Strength Preservation
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            The scale is moving. Let's make sure your strength moves with it.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            GLP-1 medications like Ozempic, Wegovy, Zepbound, and Mounjaro are
            powerful tools for weight loss — but they don't build or protect
            muscle on their own. That's where structured strength training
            and real accountability come in.
          </p>
          <div className="mt-8">
            <CtaButton href="/contact">Book a Free Consult</CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          What GLP-1 medications don't do for you
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                {risk.title}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {risk.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            What's included in coaching
          </h2>
          <ul className="mt-8 space-y-4">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Protect the muscle you have while you lose the weight you don't need
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Book a free consult to talk through where you are in your GLP-1
          journey and what training should look like for you right now.
        </p>
        <div className="mt-8">
          <CtaButton href="/contact">Book a Free Consult</CtaButton>
        </div>
        <p className="mx-auto mt-10 max-w-xl text-xs text-zinc-400 dark:text-zinc-600">
          This program is a strength-training and accountability service. It
          does not prescribe, adjust, or provide medical advice about GLP-1
          medications — always follow guidance from your prescribing
          provider.
        </p>
      </section>
    </>
  );
}
