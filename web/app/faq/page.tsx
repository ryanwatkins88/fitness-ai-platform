import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Free AI Business Assessment",
  description:
    "Common questions about the free AI-powered business assessment: what it costs, how the guarantee works, how the AI analysis works, and who it's for.",
};

const faqs = [
  {
    q: "Is the assessment actually free?",
    a: "Yes. The assessment call, the AI-assisted analysis, and the results call are free during the current case study. Only the optional done-for-you implementation is paid, and only if you choose it.",
  },
  {
    q: "What do I actually get?",
    a: "If you're newer to your business, a starter business plan with concrete next steps. If you're more established, around four automation or quick-win recommendations built specifically from what you told us in the assessment call.",
  },
  {
    q: "How does the AI part work?",
    a: "The assessment call is a normal conversation. The transcript is analyzed with AI to identify the highest-leverage next steps for your specific business, rather than applying a generic template to everyone.",
  },
  {
    q: "What happens to what I say on the call?",
    a: "It's used to build your personalized plan and to identify your specific implementation items if you choose the paid option. It is not published or shared without your permission.",
  },
  {
    q: "What's the guarantee?",
    a: "The guarantee applies only to the paid, done-for-you option. We define the exact items you need to implement based on your assessment. If you do the work — and it's trackable that you did — and still see no progress against what you told us mattered, you get your money back.",
  },
  {
    q: "I'm not a fitness coach or real estate agent. Does this still apply to me?",
    a: "Yes, if you run a service or client-based business where content, follow-up, or basic automation could be improved. The process is the same regardless of industry.",
  },
  {
    q: "How much does the paid option cost?",
    a: "Pricing is discussed on the results call, after you've seen your specific plan, since it depends on your business and what implementation actually involves.",
  },
  {
    q: "How many free spots are there?",
    a: "This is being run as a live case study with a limited number of free spots. Check the homepage for current availability.",
  },
];

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h1 className="text-3xl font-bold text-slate-900">
        Frequently asked questions
      </h1>
      <div className="mt-8 space-y-8">
        {faqs.map((f) => (
          <div key={f.q}>
            <h2 className="font-semibold text-slate-900">{f.q}</h2>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <CTAButton href="/apply">Book Your Free Assessment</CTAButton>
      </div>
    </section>
  );
}
