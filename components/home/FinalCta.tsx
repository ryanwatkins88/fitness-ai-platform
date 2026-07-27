import { CalendlyButton } from "@/components/CalendlyButton";

export function FinalCta() {
  return (
    <section className="gradient-hero py-20 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Your custom AI plan is one free call away
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/75">
          Fifteen minutes. Five questions. A written plan built for your business —
          no cost, no obligation.
        </p>
        <div className="mt-8 flex justify-center">
          <CalendlyButton />
        </div>
      </div>
    </section>
  );
}
