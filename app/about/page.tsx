import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "15+ years as a personal trainer with a physical therapist assistant background, coaching adults through injury recovery, chronic conditions, and GLP-1 weight loss online.",
};

const timeline = [
  {
    title: "15+ years training clients",
    text: "Over a decade and a half coaching people through real life — not just workouts, but the injuries, setbacks, and comebacks in between.",
  },
  {
    title: "Physical therapist assistant background",
    text: "Hands-on clinical experience working with patients recovering from stroke, joint replacements, and a wide range of orthopedic and neurological conditions.",
  },
  {
    title: "Specialized in the population most trainers avoid",
    text: "Arthritis, stenosis, meniscus tears, rotator cuff repairs, balance and fall-risk work with clients 50+ — and now, strength support for people on GLP-1 medications.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
          About {siteConfig.coachName}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Training built on clinical experience, not guesswork
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          I've spent 15+ years as a personal trainer and trained as a
          physical therapist assistant, which means I don't just program
          workouts — I understand how joints, injuries, and conditions
          actually behave under load. That combination is why clients trust
          me with the things other trainers shy away from: post-stroke
          recovery, Parkinson's, arthritis, stenosis, meniscus and rotator
          cuff injuries, and balance work for people who want to stay
          independent as they age.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          More recently, I've expanded to help people on GLP-1 medications
          like Ozempic and Wegovy protect their strength and muscle while
          they lose weight — because the medication changes the number on
          the scale, but it's training that determines what that weight loss
          actually does to your body.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Everything is delivered online, with real accountability — check-ins,
          feedback, and programming that adjusts to how you're actually
          feeling week to week, not a static PDF you're left to figure out
          alone.
        </p>
      </section>

      <section className="bg-zinc-50 py-16 dark:bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-600" />
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Let's talk about where you're starting from
        </h2>
        <div className="mt-8">
          <CtaButton href="/contact">Book a Free Consult</CtaButton>
        </div>
      </section>
    </>
  );
}
