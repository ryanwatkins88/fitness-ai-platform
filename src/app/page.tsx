import Link from "next/link";
import { Container } from "@/components/container";
import { ProgramCard } from "@/components/program-card";
import { LeadMagnetForm } from "@/components/lead-magnet-form";
import { programs, leadMagnets, siteConfig } from "@/lib/site-config";

export default function Home() {
  const featuredMagnet = leadMagnets[0];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-background">
        <Container className="grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <p className="inline-block rounded-full bg-accent-100 px-4 py-1 text-sm font-semibold text-accent-700">
              For Ozempic · Wegovy · Mounjaro · Zepbound
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
              Lose the Weight. Keep the Muscle, Strength, and Bone You Worked For.
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-700">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={siteConfig.booking.url}
                className="rounded-full bg-accent-500 px-7 py-3.5 text-center font-semibold text-white transition-colors hover:bg-accent-600"
              >
                {siteConfig.booking.label}
              </Link>
              <Link
                href="/lead-magnets"
                className="rounded-full border border-brand-300 px-7 py-3.5 text-center font-semibold text-brand-800 transition-colors hover:bg-brand-50"
              >
                Get a Free Guide First
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">Why this matters</p>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl">💪</span>
                <span className="text-brand-800">
                  Up to <strong>40% of weight lost</strong> on a GLP-1 can be lean muscle without the right training and protein intake.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🦴</span>
                <span className="text-brand-800">
                  Bone density and functional strength are just as important as the number on the scale.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <span className="text-brand-800">
                  Coaching built specifically around GLP-1 dosing, appetite changes, and energy shifts — not a generic program.
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Value ladder */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-900">Coaching for Wherever You Are</h2>
            <p className="mt-3 text-brand-600">
              Start with a low-cost program, join live group coaching, or go fully custom with 1:1 support.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} href={`/programs#${program.slug}`} />
            ))}
          </div>
        </Container>
      </section>

      {/* Lead magnet */}
      <section className="bg-brand-800 py-20 text-white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-200">Free Guide</p>
            <h2 className="mt-3 text-3xl font-bold">{featuredMagnet.title}</h2>
            <p className="mt-3 text-brand-100">{featuredMagnet.subtitle}</p>
            <ul className="mt-6 space-y-2">
              {featuredMagnet.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-brand-100">
                  <span className="text-accent-300">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8">
            <LeadMagnetForm leadMagnetSlug={featuredMagnet.slug} title={featuredMagnet.title} />
            <p className="mt-3 text-xs text-brand-500">No spam. Unsubscribe anytime.</p>
          </div>
        </Container>
      </section>

      {/* Trust / how it works */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-900">How Coaching Works</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { step: "1", title: "Book a Free Call", body: "We talk through your medication, goals, and current routine." },
              { step: "2", title: "Get a Custom Plan", body: "Strength training and nutrition built around your appetite and energy." },
              { step: "3", title: "Track Real Progress", body: "Strength, function, and body composition — not just the scale." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-brand-100 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500 font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-900">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-600">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-24">
        <Container>
          <div className="rounded-3xl bg-accent-500 px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-bold">Ready to Protect What You&apos;ve Built?</h2>
            <p className="mx-auto mt-3 max-w-xl text-accent-50">
              Book a free strategy call and we&apos;ll figure out which program fits your goals and your medication timeline.
            </p>
            <Link
              href={siteConfig.booking.url}
              className="mt-7 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-accent-600 transition-transform hover:scale-105"
            >
              {siteConfig.booking.label}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
