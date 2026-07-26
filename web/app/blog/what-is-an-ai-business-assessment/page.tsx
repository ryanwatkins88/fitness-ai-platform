import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "What Is an AI Business Assessment (and Is It Actually Worth Your Time)?",
  description:
    "A plain-language explanation of how an AI-assisted business assessment works, what it produces, and how to tell if it's worth doing for your business.",
};

export default function Post() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "What Is an AI Business Assessment (and Is It Actually Worth Your Time)?",
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold text-slate-900">
        What Is an AI Business Assessment (and Is It Actually Worth Your Time)?
      </h1>

      <div className="prose prose-slate mt-8 max-w-none">
        <p>
          "AI business assessment" gets used loosely, so it's worth being
          specific about what it actually means here, and what it doesn't.
        </p>

        <h2>What it is</h2>
        <p>
          It's a normal conversation — a call where someone asks you real
          questions about your business: your leads, your follow-up, your
          content, what's working and what isn't. The AI part comes after
          the call: your answers are analyzed to identify the specific
          things most likely to move the needle for your business, rather
          than handing you a generic checklist that gets given to everyone
          regardless of their situation.
        </p>

        <h2>What it isn't</h2>
        <p>
          It's not a quiz that spits out a score, and it's not an
          automated chatbot pretending to understand your business without
          a real conversation first. The analysis is only as good as the
          conversation it's based on, which is why the call itself matters
          more than the "AI" label.
        </p>

        <h2>What you get out of it</h2>
        <p>
          Depending on where your business is, one of two things: if you're
          newer or still building your foundation, a starter business plan
          with concrete next steps. If you're more established, a short
          list — usually around four — of automations or quick wins built
          specifically from what you described, not a template.
        </p>

        <h2>Is it worth your time?</h2>
        <p>
          The honest test is simple: would an accurate, outside look at
          where your business is actually leaking time, leads, or money be
          useful to you right now? If yes, the time cost is one call. If
          the assessment is free, as this one currently is, the only real
          cost is that call itself.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-center">
        <p className="font-semibold text-slate-900">
          See what a personalized assessment finds for your business.
        </p>
        <div className="mt-4">
          <CTAButton href="/apply">Book Your Free Assessment</CTAButton>
        </div>
      </div>
    </article>
  );
}
