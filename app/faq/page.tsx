import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { CalendlyButton } from "@/components/CalendlyButton";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/site.config";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about the free AI business assessment call: what happens on the call, what you get, pricing, and privacy.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "Is the first call really free?",
    answer:
      "Yes. The first call is completely free with no obligation. It's 15 minutes and about 5 questions about your business — that's it.",
  },
  {
    question: "What actually happens on the call?",
    answer:
      "I'll ask you around 5 questions about your business, your day-to-day workflow, and where you feel like you're losing time or money. That's all I need to build your plan.",
  },
  {
    question: "I don't know anything about AI. Is this still for me?",
    answer:
      "Yes — that's exactly who this is for. You don't need any technical background. If you're starting from zero, your plan will include a simple starter roadmap so you know exactly what to do first.",
  },
  {
    question: "What do I get after the call?",
    answer:
      "A written, custom plan for your business with 4 specific quick AI wins you can act on right away, plus a starter roadmap if you're new to AI. It's yours to keep, whether or not we work together further.",
  },
  {
    question: "How long until I get my plan?",
    answer:
      "Your custom plan is put together after the call using an in-depth AI-assisted analysis of what you shared, so I can tailor it specifically to your business rather than send a generic template.",
  },
  {
    question: "Do I need to buy or sign up for any tools?",
    answer:
      "No. The assessment itself is free and doesn't require signing up for anything. Any tools mentioned in your plan are optional recommendations — you decide what, if anything, to implement.",
  },
  {
    question: "What kinds of businesses is this for?",
    answer:
      "Any business — local and brick-and-mortar businesses, solopreneurs and freelancers, service businesses and tradespeople, coaches and consultants, e-commerce sellers, and small teams or agencies.",
  },
  {
    question: "Is what I share on the call kept private?",
    answer:
      "Yes. Whatever you share is used only to build your custom plan and is not shared with anyone else.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Frequently asked questions</h1>
          <p className="mt-4 text-ink/60">
            Still have a question?{" "}
            <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-accent underline underline-offset-4">
              Email me
            </a>{" "}
            and I&apos;ll get back to you.
          </p>
        </div>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {faq.question}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CalendlyButton />
        </div>
      </section>
    </>
  );
}
