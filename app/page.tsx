import CtaButton from "@/components/CtaButton";
import PathCard from "@/components/PathCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white dark:from-zinc-950 dark:to-black">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700 dark:text-teal-400">
            Online personal training
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Strength and mobility coaching that meets you where you are
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            15+ years as a personal trainer and a physical therapist assistant
            background, coaching adults through arthritis, joint pain,
            neurological conditions, and GLP-1 weight loss — online, with real
            accountability and programs built around how you actually feel.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaButton href="/contact">Book a Free Consult</CtaButton>
            <CtaButton href="/about" variant="secondary">
              Meet Your Coach
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-6 text-center sm:grid-cols-4">
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">15+</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Years training clients</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">PTA</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Physical therapist assistant background</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">100%</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Online, anywhere you are</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1:1</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Custom-built programming</p>
          </div>
        </div>
      </section>

      {/* Two-path split */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            Find the path that fits where you're starting from
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Every program starts with your history, your movement, and your
            goals — not a generic template.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <PathCard
            eyebrow="Rehab, Arthritis & Longevity"
            title="Mobility & Recovery Coaching"
            description="For adults 50+ managing arthritis, joint replacements, stenosis, past injuries, or neurological conditions like stroke or Parkinson's — and anyone who wants to stay independent and confident on their feet."
            bullets={[
              "Post-stroke, Parkinson's, and balance-focused programming",
              "Knee, hip, shoulder, wrist & rotator cuff friendly training",
              "Built around what your body can safely do today",
            ]}
            href="/mobility-recovery"
            ctaLabel="Explore Mobility & Recovery"
          />
          <PathCard
            eyebrow="GLP-1 Strength Support"
            title="GLP-1 Strength Preservation"
            description="On Ozempic, Wegovy, Zepbound, or Mounjaro? Rapid weight loss without strength training can cost you muscle. I build the training and accountability layer your GLP-1 plan is missing."
            bullets={[
              "Resistance training to protect lean muscle while you lose fat",
              "Programming that adapts as your energy and appetite change",
              "Accountability check-ins so you actually stay consistent",
            ]}
            href="/glp1-support"
            ctaLabel="Explore GLP-1 Support"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-teal-700">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to feel steadier, stronger, and more capable?
          </h2>
          <p className="mt-3 text-teal-50">
            Book a free consult and let's figure out the right starting point
            for you.
          </p>
          <div className="mt-8">
            <CtaButton href="/contact">Book a Free Consult</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
