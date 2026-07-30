import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Faq from "@/components/Faq";
import { articles } from "@/lib/articles";
import { siteConfig } from "@/lib/site-config";

const relatedArticles = articles.filter((article) => article.audience === "mobility");

export const metadata: Metadata = {
  title: "Online Training for Arthritis, Injury Recovery & Balance (50+)",
  description:
    "Online personal training for adults 50+ managing arthritis, joint pain, stenosis, post-stroke recovery, Parkinson's, or past injuries. PTA-trained coaching focused on safe, steady progress.",
  alternates: {
    canonical: `${siteConfig.url}/mobility-recovery`,
  },
};

const conditions = [
  "Post-stroke recovery",
  "Parkinson's disease",
  "Spinal stenosis",
  "Meniscus tears",
  "Knee arthritis",
  "Hip arthritis",
  "Shoulder pain & rotator cuff tears",
  "Thumb & wrist pain",
  "General balance & fall-risk reduction",
];

const process = [
  {
    step: "1. Movement & history review",
    text: "We start with your diagnosis history, current limitations, and what a good day vs. a hard day looks like for you.",
  },
  {
    step: "2. A program built around your body",
    text: "Your plan is built to work with your joints and conditions, not against them — progressed carefully as you get stronger.",
  },
  {
    step: "3. Ongoing coaching & accountability",
    text: "Regular check-ins, form feedback, and adjustments so you keep making progress safely, week after week.",
  },
];

const faqs = [
  {
    question: "Can you train me online if I have arthritis or a joint replacement?",
    answer:
      "Yes — most of my clients in this track have arthritis, a joint replacement, or a past injury. Sessions are done over video call, and programming is built around your specific joints and restrictions from day one.",
  },
  {
    question: "Do I need any equipment at home?",
    answer:
      "No. Most programs start with bodyweight and simple, inexpensive equipment (resistance bands, a sturdy chair). We can add equipment later if you want to progress further.",
  },
  {
    question: "Is this a replacement for physical therapy?",
    answer:
      "No. If you're in active PT, I coordinate around that and typically start once you're discharged or cleared for independent exercise. Think of this as the strength and consistency layer that continues after formal PT ends.",
  },
  {
    question: "I'm in my 60s or 70s and haven't exercised in years — is it too late to start?",
    answer:
      "It's genuinely one of the best times to start. Strength and balance training reduce fall risk and support independence regardless of age or exercise history — we just start at the right intensity for where you are today.",
  },
];

export default function MobilityRecoveryPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
            Mobility & Recovery Coaching
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Move with more confidence, at any age or stage of recovery
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            With 15+ years of training experience and a physical therapist
            assistant background, I build online strength and mobility
            programs for adults 50+ who want to stay independent, reduce
            pain, and feel steady on their feet again.
          </p>
          <div className="mt-8">
            <CtaButton href="/contact">Book a Free Consult</CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Conditions I regularly train around
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          I'm not a substitute for your physical therapist or physician — I
          work alongside your care team to build a strength and movement
          plan that supports your recovery long after formal PT ends.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {conditions.map((condition) => (
            <li
              key={condition}
              className="rounded-xl border border-zinc-200 bg-white px-5 py-4 text-sm font-medium text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
            >
              {condition}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            How coaching works
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {process.map((item) => (
              <div key={item.step}>
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                  {item.step}
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Related reading
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {relatedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="rounded-xl border border-zinc-200 bg-white p-6 transition-colors hover:border-teal-600 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                {article.title}
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Let's build a plan around what your body needs today
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Book a free consult and we'll talk through your history and goals
          before designing anything.
        </p>
        <div className="mt-8">
          <CtaButton href="/contact">Book a Free Consult</CtaButton>
        </div>
      </section>
    </>
  );
}
