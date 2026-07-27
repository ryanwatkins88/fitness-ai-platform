import Link from "next/link";
import { CalendlyButton } from "@/components/CalendlyButton";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-ink/60">
        That page doesn&apos;t exist, but your free AI business assessment still does.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <CalendlyButton />
        <Link href="/" className="text-sm font-medium text-ink/60 underline underline-offset-4">
          Back to home
        </Link>
      </div>
    </section>
  );
}
