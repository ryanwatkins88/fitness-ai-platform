// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for brand, pricing, and offer content.
// Everything marked TODO is a placeholder — replace it and the whole site
// (metadata, schema.org markup, nav, footer, program cards) updates with it.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "[Your Business Name]", // TODO: replace with your real brand name
  legalName: "[Your Business Name]", // TODO
  shortName: "[Brand]", // TODO: short version for nav/logo
  tagline: "Stay Strong, Not Just Smaller — Muscle & Bone Coaching for GLP-1 Users",
  description:
    "Coaching for people on GLP-1 medications (Ozempic, Wegovy, Mounjaro, Zepbound) who want to lose fat without losing muscle, bone density, or strength. Function-first training and nutrition coaching designed around rapid weight loss.",
  url: "https://example.com", // TODO: replace with your real domain
  ogImage: "/og-image.png",
  email: "hello@example.com", // TODO
  phone: "", // TODO (optional, for LocalBusiness schema if you train in-person)
  location: {
    // TODO: fill in if you serve a local area; leave city/region blank if 100% online
    city: "",
    region: "",
    servesOnline: true,
  },
  social: {
    instagram: "", // TODO
    tiktok: "", // TODO
    youtube: "", // TODO
    facebook: "", // TODO
  },
  booking: {
    // TODO: point this at your Calendly / Acuity / application form
    url: "#book-a-call",
    label: "Book a Free Strategy Call",
  },
} as const;

export type ProgramTier = {
  slug: string;
  tier: "low-ticket" | "mid-ticket" | "high-ticket";
  name: string;
  price: string; // TODO: replace placeholder pricing
  billing: string;
  bestFor: string;
  description: string;
  features: string[];
  ctaLabel: string;
};

// Value ladder: lead magnet (free) -> low-ticket -> mid-ticket group -> high-ticket 1:1
//
// PRICING NOTES (researched July 2026, adjust as you get real signal from sales):
// - Low-ticket: $27-47 is the standard tripwire range for a self-guided starter
//   program. $37 splits the difference.
// - Group coaching: generic group fitness coaching runs $30-100/mo, but that's
//   for low-touch, non-specialized programs. Live sessions + a GLP-1-specific
//   niche justify pricing above that band. $129/$199/$249 for 1x/2x/3x per
//   week keeps you priced like a specialist while still well under 1:1 rates.
// - 1:1: niche-specialist 1:1 coaching (menopause, metabolic health, etc.)
//   benchmarks at $300-700+/mo, vs. $100-300/mo for generalist 1:1 training.
//   $497/mo "starting at" positions you in that specialist band with room to
//   quote higher for more complex cases.
// These are informed starting points, not locked numbers — watch what actually
// converts and adjust.
export const programs: ProgramTier[] = [
  {
    slug: "strength-foundations",
    tier: "low-ticket",
    name: "GLP-1 Strength Foundations",
    price: "$37", // Standard tripwire/low-ticket pricing ($27-$47), see PRICING NOTES below
    billing: "one-time, 4-week program",
    bestFor: "People just starting a GLP-1 who want a done-for-you starting point",
    description:
      "A self-guided 4-week program that teaches the fundamentals of preserving muscle and bone while losing weight on a GLP-1 — low-risk way to try working with us before committing to coaching.",
    features: [
      "4 weeks of structured strength workouts (minimal equipment)",
      "Protein & nutrition targets built for appetite suppression",
      "Video form guides",
      "Private community access",
    ],
    ctaLabel: "Get Started for $37",
  },
  {
    slug: "group-coaching",
    tier: "mid-ticket",
    name: "Strong on GLP-1 Group Coaching",
    price: "From $129/mo", // Benchmarked against niche-specialist group coaching, see PRICING NOTES below
    billing: "monthly, choose your session frequency",
    bestFor: "People who want live coaching, accountability, and community without 1:1 pricing",
    description:
      "Live small-group coaching sessions run by a coach who programs specifically around GLP-1 medications — pick how much live support you want.",
    features: [
      "1x/week live group session — $129/mo",
      "2x/week live group sessions — $199/mo",
      "3x/week live group sessions — $249/mo",
      "Custom strength programming updated monthly",
      "Form check & Q&A during every session",
      "Private group chat with your coach",
    ],
    ctaLabel: "Join Group Coaching",
  },
  {
    slug: "one-on-one-coaching",
    tier: "high-ticket",
    name: "1:1 Private Coaching",
    price: "Starting at $497/mo", // Benchmarked against premium niche-specialist 1:1 coaching, see PRICING NOTES below
    billing: "monthly, application required",
    bestFor: "People who want fully custom programming and direct access to their coach",
    description:
      "Fully individualized strength, nutrition, and recovery coaching built around your GLP-1 dosing schedule, labs, and goals — the highest level of support we offer.",
    features: [
      "Custom program built and adjusted around your dosing schedule",
      "Direct weekly check-ins with your coach",
      "Bone-density and strength benchmarks tracked over time",
      "Priority messaging access",
    ],
    ctaLabel: "Apply for 1:1 Coaching",
  },
];

export type LeadMagnet = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  targetKeyword: string;
  bullets: string[];
  fileName: string; // TODO: name of the PDF you upload to /public/lead-magnets/
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "glp1-muscle-preservation-guide",
    title: "The GLP-1 Muscle Preservation Guide",
    subtitle: "Lose fat, not muscle — the training & protein framework for Ozempic, Wegovy, and Zepbound",
    description:
      "A free guide built specifically for people on GLP-1 medications who want to protect lean muscle and bone density while the scale goes down. Covers protein targets on a suppressed appetite, minimum-effective-dose strength training, and warning signs of losing too much muscle too fast.",
    targetKeyword: "GLP-1 muscle preservation",
    bullets: [
      "How much protein you actually need on a GLP-1 (and how to hit it with low appetite)",
      "The 3 strength moves that protect muscle fastest with the least gym time",
      "Warning signs you're losing muscle, not just fat",
      "A simple weekly template you can start today",
    ],
    fileName: "glp1-muscle-preservation-guide.pdf", // TODO: upload your PDF here
  },
  {
    slug: "mounjaro-muscle-preservation-and-ozempic-face",
    title: "Mounjaro Muscle Preservation & Preventing 'Ozempic Face'",
    subtitle: "Keep your strength and your facial volume while losing weight fast on Mounjaro",
    description:
      "A free guide for people on Mounjaro (or any fast-acting GLP-1) covering how to preserve muscle through rapid weight loss, plus specific strategies to reduce the sunken, aged appearance known as 'Ozempic face.'",
    targetKeyword: "Ozempic face prevention",
    bullets: [
      "Why rapid weight loss on Mounjaro accelerates facial volume loss",
      "Training and hydration strategies that support skin and facial structure",
      "The muscle-preservation checklist for fast responders",
      "What to change if you're losing weight faster than your body can adapt",
    ],
    fileName: "mounjaro-muscle-preservation-ozempic-face.pdf", // TODO: upload your PDF here
  },
];

export const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/lead-magnets", label: "Free Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
