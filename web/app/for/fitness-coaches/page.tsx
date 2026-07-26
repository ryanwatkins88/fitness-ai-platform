import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { spotsRemaining, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Business Assessment for Fitness Coaches & Personal Trainers",
  description:
    "A free AI-powered business assessment for fitness coaches and personal trainers who post content but can't turn it into paying clients. Get a personalized plan or four quick wins in 48-72 hours.",
};

export default function FitnessCoachesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">
        For fitness coaches and online trainers
      </h1>
      <p className="mt-4 text-slate-600">
        Most coaches don't have a content problem. They have a lead-tracking
        and follow-up problem. You can post daily and still not know which
        piece of content actually brought you a client, or what happened to
        the person who commented last week.
      </p>
      <p className="mt-4 text-slate-600">
        The free assessment call digs into exactly that: your content, your
        lead follow-up, and whether you have any system confirming who
        actually becomes a paying client versus who just follows you. From
        there, you get either a starter business plan (if you're newer) or a
        short list of content, tracking, and follow-up quick wins (if you're
        established) — built from your answers, not a generic template.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-slate-600">
        <li>Know which content pillars actually fit your audience</li>
        <li>Get a real system for tracking leads, not just likes</li>
        <li>Find out where interested followers are falling out of your process</li>
        <li>Walk away with concrete next steps either way — coached or not</li>
      </ul>
      <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-center">
        <p className="font-semibold text-slate-900">
          {spotsRemaining} of {site.spotsTotal} free case-study spots left
        </p>
        <div className="mt-4">
          <CTAButton href="/apply">Book Your Free Assessment</CTAButton>
        </div>
      </div>
    </section>
  );
}
