type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        Frequently asked questions
      </h2>
      <div className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
        {items.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-zinc-900 dark:text-zinc-50">
              {item.question}
              <span className="shrink-0 text-teal-700 transition-transform group-open:rotate-45 dark:text-teal-400">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
