import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { site, spotsRemaining } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free AI Business Assessment — Make More Money in Your Business",
  description:
    "A free, AI-powered business assessment for coaches, real estate agents, and service business owners. One call. A personalized plan or four quick wins in 48-72 hours. No cost during the current case study.",
};

const steps = [
  {
    title: "Call 1 — the assessment",
    body: "One call, no pitching. We ask about where your business actually stands right now: leads, follow-up, content, what's working and what isn't.",
  },
  {
    title: "48–72 hours — AI-assisted analysis",
    body: "Your answers get analyzed to identify exactly what would move the needle fastest for your specific business — not a generic template.",
  },
  {
    title: "Call 2 — your plan",
    body: "If you're newer, you get a real business plan with concrete next steps. If you're established, you get around four automations or quick wins you can implement right away.",
  },
  {
    title: "Your call — DIY or done for you",
    body: "Take the plan and run with it yourself, free, no obligation. Or, if you'd rather move faster, we implement it for you — backed by a results-based guarantee.",
  },
];

const audiences = [
  {
    href: "/for/fitness-coaches",
    title: "Fitness Coaches",
    body: "Turn content into a real lead-tracking and conversion system.",
  },
  {
    href: "/for/real-estate-agents",
    title: "Real Estate Agents",
    body: "Find the quick wins that turn existing leads into closed deals.",
  },
  {
    href: "/faq",
    title: "Other Service Businesses",
    body: "If you run a client-based business and content or follow-up feels chaotic, this applies to you too.",
  },
];

export default function HomePage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI-powered business assessment",
    provider: {
      "@type": "Organization",
      name: site.name,
    },
    areaServed: "Worldwide",
    description:
      "A free business assessment call, analyzed with AI, that produces a personalized business plan or automation quick wins for coaches, real estate agents, and other service business owners.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 text-center">
        <p className="mb-4 inline-block rounded-full bg-brand-light px-4 py-1 text-sm font-semibold text-brand-dark">
          Free while this is a live case study — {spotsRemaining} of {site.spotsTotal} spots left
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Find the four things that will actually make you more money in your business.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          A free, AI-powered business assessment for coaches, real estate agents,
          and service business owners. One call, and 48–72 hours later you know
          exactly what to do next — a business plan if you're starting out, or
          automation quick wins if you're established.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <CTAButton href="/apply">Book Your Free Assessment</CTAButton>
          <CTAButton href="/how-it-works" variant="secondary">
            See How It Works
          </CTAButton>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            Built for business owners who sell their time or expertise
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {audiences.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-brand hover:shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{a.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-slate-900">
          How the free assessment works
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/how-it-works" variant="secondary">
            Read the full process
          </CTAButton>
        </div>
      </section>

      {/* Guarantee */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Results before money</h2>
          <p className="mt-4 text-slate-600">
            The assessment itself is free. If you choose the paid,
            done-for-you option, the guarantee is simple: we define the exact
            items you need to implement based on your assessment. If you do
            the work — and it's trackable that you did — and still see no
            progress against what you told us mattered, you get your money
            back. Not a "didn't like it" refund. A "you did the work and it
            still didn't move" refund.
          </p>
          <div className="mt-8">
            <CTAButton href="/apply">Book Your Free Assessment</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
