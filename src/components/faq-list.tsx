import type { FAQ } from "@/lib/blog";

export function FaqList({ faqs }: { faqs: FAQ[] }) {
  const faqSchema = {
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
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <dl className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="border-b border-brand-100 pb-6">
            <dt className="text-lg font-semibold text-brand-800">{faq.question}</dt>
            <dd className="mt-2 leading-7 text-brand-700">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
