export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  faqs: FAQ[];
};

// TODO: This is a small, hand-written content store to get you started with
// two seed articles. As you publish more, either keep adding objects here or
// migrate to a CMS/MDX pipeline — the page templates don't need to change.
export const blogPosts: BlogPost[] = [
  {
    slug: "does-ozempic-cause-muscle-loss",
    title: "Does Ozempic Cause Muscle Loss? How to Protect Muscle on a GLP-1",
    description:
      "GLP-1 medications like Ozempic, Wegovy, and Zepbound cause rapid weight loss — and up to 40% of that loss can be lean muscle if you don't intervene. Here's how to protect it.",
    publishedAt: "2026-06-02",
    updatedAt: "2026-07-20",
    keywords: [
      "does ozempic cause muscle loss",
      "GLP-1 muscle loss",
      "muscle preservation ozempic",
      "sarcopenia weight loss",
    ],
    intro:
      "If you're losing weight on Ozempic, Wegovy, Mounjaro, or Zepbound, the number on the scale doesn't tell you what you're actually losing. Research on GLP-1 medications has repeatedly shown that a significant portion of weight lost — often a quarter to nearly half — can be lean muscle mass rather than fat, unless you actively train and eat to protect it.",
    sections: [
      {
        heading: "Why GLP-1 medications put muscle at risk",
        paragraphs: [
          "GLP-1 receptor agonists work primarily by suppressing appetite, which means most people eat significantly less protein and overall calories without changing anything else about their routine. When your body is in a large calorie deficit and under-fueled on protein, it doesn't just burn fat — it breaks down muscle tissue for energy too.",
          "This matters beyond appearance. Muscle is what keeps you functionally strong: carrying groceries, climbing stairs, getting up off the floor. It's also your body's primary site of glucose disposal, so losing muscle can work against the very metabolic goals that likely brought you to a GLP-1 in the first place.",
        ],
      },
      {
        heading: "The two levers that actually protect muscle",
        paragraphs: [
          "The research is consistent on this: resistance training and adequate protein intake are the two interventions shown to preserve lean mass during GLP-1-driven weight loss. Neither one alone is as effective as doing both together.",
        ],
        bullets: [
          "Resistance train 2–4x per week — your body has less reason to break down muscle it's actively using.",
          "Prioritize protein first at each meal, especially when appetite is low — aim for a target based on your body weight, not on how much you happen to feel like eating.",
          "Don't chase extreme calorie deficits — the faster the weight loss, the higher the proportion of lean mass typically lost.",
          "Track strength, not just weight — if your lifts are dropping fast, that's an early signal you're losing more than fat.",
        ],
      },
      {
        heading: "Warning signs you're losing muscle, not just fat",
        paragraphs: [
          "Weight loss itself doesn't tell you the full story. Watch for: strength dropping noticeably session to session, feeling weaker doing everyday tasks, looser skin appearing faster than expected, and persistent fatigue beyond the first few weeks of adjusting to the medication.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Ozempic cause muscle loss?",
        answer:
          "Ozempic itself doesn't directly target muscle — but the rapid, large calorie deficit it creates through appetite suppression can lead to significant muscle loss if you don't resistance train and eat enough protein. Studies on GLP-1 medications have found lean mass can account for a substantial share of total weight lost without those interventions.",
      },
      {
        question: "How much protein do I need on a GLP-1 medication?",
        answer:
          "Most coaches and researchers recommend a higher relative protein target than general guidelines when appetite is suppressed, prioritized at the start of each meal since total food volume is lower. Exact needs vary by body weight, activity level, and starting point — a coach can help you set a specific number.",
      },
      {
        question: "Can I build muscle while losing weight on Ozempic or Mounjaro?",
        answer:
          "It's possible, especially if you're new to structured resistance training, but the more realistic and common goal is preserving the muscle you already have while the medication drives fat loss. That requires consistent resistance training and hitting a protein target, not just 'staying active.'",
      },
    ],
  },
  {
    slug: "ozempic-face-prevention",
    title: "What Is 'Ozempic Face' and How Do You Prevent It?",
    description:
      "Rapid weight loss on GLP-1 medications can cause facial volume loss that ages the face — often called 'Ozempic face.' Here's why it happens and what actually helps.",
    publishedAt: "2026-06-16",
    updatedAt: "2026-07-20",
    keywords: [
      "ozempic face",
      "prevent ozempic face",
      "mounjaro face",
      "facial volume loss weight loss",
      "GLP-1 skin sagging",
    ],
    intro:
      "'Ozempic face' is the informal term for the sunken, aged, or sagging facial appearance that can follow rapid weight loss on GLP-1 medications like Ozempic, Wegovy, Mounjaro, and Zepbound. It's not caused by the drug directly — it's caused by how fast facial fat is lost relative to how well your skin, muscle, and connective tissue can adapt.",
    sections: [
      {
        heading: "Why fast weight loss shows up in your face first",
        paragraphs: [
          "The face carries a thin layer of fat that gives it fullness and youthful contour. When weight loss happens quickly, that fat is often among the first to go — and because facial skin is thinner and less elastic than skin elsewhere on the body, volume loss there is more visually noticeable, faster.",
          "The same underlying issue that drives muscle loss elsewhere in the body — rapid deficit, low protein, no resistance training — also affects the skin and connective tissue's ability to adapt as your body composition changes.",
        ],
      },
      {
        heading: "What actually helps",
        paragraphs: [
          "There's no way to spot-reduce or fully prevent facial volume changes during significant weight loss, but you can meaningfully reduce the severity with the same fundamentals that protect muscle everywhere else in the body.",
        ],
        bullets: [
          "Slow the rate of loss where possible — talk to your prescriber about titration pace if loss feels unusually fast.",
          "Hit a consistent protein target daily — protein supports the collagen and connective tissue that give skin structure.",
          "Stay well hydrated — skin elasticity is meaningfully affected by hydration status.",
          "Resistance train — overall lean mass preservation supports facial structure indirectly by supporting healthier, more gradual fat loss.",
          "Give skin time — connective tissue adapts, but slower than fat is lost; drastic short-term deficits don't give it that time.",
        ],
      },
      {
        heading: "When to loop in a professional",
        paragraphs: [
          "If facial volume loss is a significant concern, a dermatologist or medical aesthetics provider can discuss options like fillers to restore volume during your weight loss journey. That's outside a fitness coach's scope — but the muscle-preservation and nutrition fundamentals below are squarely in it, and they're the foundation everything else builds on.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Ozempic face permanent?",
        answer:
          "For many people, facial volume partially recovers over time as weight stabilizes and the body adapts, though the degree of recovery varies by age, genetics, and how much weight was lost. Slower, more controlled weight loss tends to produce less dramatic changes in the first place.",
      },
      {
        question: "Does Mounjaro cause the same facial changes as Ozempic?",
        answer:
          "Yes — 'Ozempic face' is a catch-all term, but the same facial volume loss can occur with any GLP-1 or dual GLP-1/GIP medication, including Mounjaro, Wegovy, and Zepbound, since the underlying cause is the rate and amount of fat loss, not the specific drug.",
      },
      {
        question: "Can strength training prevent Ozempic face?",
        answer:
          "Strength training doesn't target facial fat directly, but it supports the overall lean-mass preservation and more gradual body composition change that's associated with less dramatic facial volume loss. It's one part of a broader approach alongside adequate protein and hydration.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
