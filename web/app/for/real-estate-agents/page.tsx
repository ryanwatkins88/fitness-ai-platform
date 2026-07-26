import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { spotsRemaining, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Business Assessment for Real Estate Agents",
  description:
    "A free AI-powered business assessment for real estate agents who want more closed deals from the leads they already have. Get a personalized plan or four quick wins in 48-72 hours.",
};

export default function RealEstateAgentsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">
        For real estate agents and brokers
      </h1>
      <p className="mt-4 text-slate-600">
        One extra closed deal a quarter changes the math on almost any
        investment in your business. The question most agents can't answer
        is which one thing — follow-up, content, referral systems, or basic
        automation — would actually get them there fastest.
      </p>
      <p className="mt-4 text-slate-600">
        The free assessment call looks at your current lead flow, your
        follow-up process, and where deals are realistically slipping. From
        there, you get either a starter business plan (if you're newer to
        the business) or a short list of automation and follow-up quick
        wins (if you're established) — built from your actual answers, not
        a generic playbook.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-6 text-slate-600">
        <li>Find out where warm leads are going cold before you follow up</li>
        <li>Get concrete next steps sized to your market, not a template</li>
        <li>Understand whether automation or content is your actual bottleneck</li>
        <li>Walk away with something usable whether we work together again or not</li>
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
