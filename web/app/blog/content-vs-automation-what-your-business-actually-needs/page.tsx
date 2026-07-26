import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Content vs. Automation: What Your Business Actually Needs Right Now",
  description:
    "Why posting more content isn't always the answer, and how to tell if your real bottleneck is follow-up or automation instead.",
};

export default function Post() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Content vs. Automation: What Your Business Actually Needs Right Now",
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
        Content vs. Automation: What Your Business Actually Needs Right Now
      </h1>

      <div className="prose prose-slate mt-8 max-w-none">
        <p>
          "Just post more consistently" is the most common advice given to
          coaches, agents, and service business owners who feel stuck. It's
          not wrong, exactly — but it's incomplete, and for a lot of
          businesses, it's not even the right first move.
        </p>

        <h2>Content solves an attention problem</h2>
        <p>
          Content is good at one thing: getting attention from people who
          don't know you yet. If your problem is that not enough people
          know you exist, more content is a reasonable answer. But if
          people already know you, already follow you, already comment or
          ask questions — and you still aren't converting that into paying
          work — more content won't fix it. You don't have an attention
          problem anymore. You have a follow-up problem.
        </p>

        <h2>Automation solves a consistency problem</h2>
        <p>
          Automation is good at a different thing: making sure the same
          necessary step happens every time, without depending on you
          remembering to do it. Following up with every lead within a day.
          Sending the same intake questions before a call. Flagging a lead
          that's gone quiet for a week. None of that requires more content —
          it requires a process that runs whether or not you're having a
          good week.
        </p>

        <h2>A quick way to tell which one you actually need</h2>
        <ul>
          <li>
            If people rarely comment, engage, or reach out at all — your
            gap is likely content and audience.
          </li>
          <li>
            If people do comment and reach out, but conversations trail off
            or never get followed up on — your gap is likely follow-up and
            automation, not content.
          </li>
          <li>
            If you don't know which of the above is true because you're not
            tracking engagement, replies, or conversion — that's the actual
            first problem to fix, before either content or automation.
          </li>
        </ul>

        <p>
          Most businesses aren't purely one or the other. But knowing which
          one is the bigger leak right now changes where your next hour of
          effort should go — and that's usually worth figuring out before
          committing to a content calendar or a new automation tool.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-center">
        <p className="font-semibold text-slate-900">
          Not sure which one your business needs? That's exactly what the
          free assessment figures out.
        </p>
        <div className="mt-4">
          <CTAButton href="/apply">Book Your Free Assessment</CTAButton>
        </div>
      </div>
    </article>
  );
}
