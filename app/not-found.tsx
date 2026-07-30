import CtaButton from "@/components/CtaButton";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        We couldn't find that page
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        Let's get you back on track.
      </p>
      <div className="mt-8">
        <CtaButton href="/">Back to Home</CtaButton>
      </div>
    </section>
  );
}
