import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { spotsRemaining, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How the Free AI Business Assessment Works",
  description:
    "Step by step: how the free AI-powered business assessment works, from the first call through the AI-assisted analysis to your personalized plan or automation quick wins.",
};

export default function HowItWorksPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-slate-900">How it works</h1>
      <p className="mt-4 text-slate-600">
        No funnel tricks, no hidden pitch buried three steps in. Here's
        exactly what happens if you book a free assessment with{" "}
        {site.name}.
      </p>

      <div className="mt-10 space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            1. The assessment call
          </h2>
          <p className="mt-2 text-slate-600">
            We get on a call and go through a set of questions about where
            your business actually stands — your leads, your follow-up
            process, your content, what's working, and what isn't. This call
            is not a pitch. The only goal is understanding your business
            accurately.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            2. AI-assisted analysis (48–72 hours)
          </h2>
          <p className="mt-2 text-slate-600">
            Your answers are analyzed to identify exactly what would move
            the needle fastest for your specific business, instead of a
            generic template applied to everyone. If you're newer and still
            figuring out your foundation, this becomes a starter business
            plan. If you're more established, it becomes a short list —
            usually around four items — of automations or quick wins you
            can implement right away.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            3. The results call
          </h2>
          <p className="mt-2 text-slate-600">
            We walk through the plan or the four items together, in plain
            language — what each one is, why it matters for your business
            specifically, and what implementing it actually looks like.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            4. Your choice: DIY or done for you
          </h2>
          <p className="mt-2 text-slate-600">
            You can take those items and implement them yourself — free, no
            obligation, no follow-up sales call required. Or, if you'd
            rather move faster, we can implement them for you as a paid
            engagement.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            The guarantee, if you go with the paid option
          </h2>
          <p className="mt-2 text-slate-600">
            We define the exact items you need to implement based on your
            assessment. If you do the work — and it's trackable that you
            did — and you still see no progress against what you told us
            mattered in the assessment, you get your money back. This
            guarantee does not apply to the free assessment itself, since no
            payment is made at that stage — it applies specifically to the
            paid implementation option.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-slate-50 p-6 text-center">
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
