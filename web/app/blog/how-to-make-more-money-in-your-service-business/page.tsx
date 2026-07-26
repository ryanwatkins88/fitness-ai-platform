import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How to Make More Money in Your Service Business Without Working More Hours",
  description:
    "The three places most coaches, agents, and service business owners lose money without realizing it, and what to fix first to make more money without adding more hours.",
};

export default function Post() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "How to Make More Money in Your Service Business Without Working More Hours",
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
        How to Make More Money in Your Service Business Without Working More Hours
      </h1>

      <div className="prose prose-slate mt-8 max-w-none">
        <p>
          If you sell your time, expertise, or a service — coaching, real
          estate, consulting, anything where you're the one doing the work —
          "make more money" almost always gets translated into "work more
          hours." Take more clients, work more listings, post more content.
          That works for a while, and then it stops, because there are only
          so many hours in a week.
        </p>
        <p>
          The more durable answer isn't working more. It's finding where
          money is quietly leaking out of a process you already have, and
          fixing that first. In practice, that leak is almost always in one
          of three places.
        </p>

        <h2>1. Leads that never get a real follow-up</h2>
        <p>
          Someone comments on your post, asks a question, or reaches out —
          and then nothing happens beyond a like or a generic reply. That
          person was interested enough to raise their hand. Without a
          system that catches that moment and follows up like it matters,
          they quietly disappear, and you never even see it happen. You
          don't need more leads if the ones you already have aren't being
          followed up on.
        </p>

        <h2>2. No way to tell what's actually working</h2>
        <p>
          Likes and views feel like progress, but they don't tell you
          anything about revenue. The numbers that actually matter are: how
          many people engaged with real interest (comments, DMs, questions),
          how many of those you actually followed up with, and how many of
          those became paying clients or closed deals. If you're not
          tracking those three numbers, you're guessing at what to do more
          of.
        </p>

        <h2>3. Doing everything yourself, including the repeatable parts</h2>
        <p>
          Sending the same follow-up message, scheduling the same type of
          call, chasing the same kind of lead — these are exactly the tasks
          that automation is good at, and exactly the tasks that quietly eat
          hours you could spend on higher-value work. Fixing this isn't
          about working less overall. It's about spending the hours you do
          work on things only you can do.
        </p>

        <h2>How to find your own leak</h2>
        <p>
          The honest answer is that it's hard to see your own bottleneck
          from inside your own business — you're too close to it. That's
          the whole reason an outside look, even a quick one, tends to spot
          in an hour what takes months to notice on your own.
        </p>
      </div>

      <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-center">
        <p className="font-semibold text-slate-900">
          Want a free, personalized look at where your business is leaking
          money?
        </p>
        <div className="mt-4">
          <CTAButton href="/apply">Book Your Free Assessment</CTAButton>
        </div>
      </div>
    </article>
  );
}
