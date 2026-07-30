/**
 * Single source of truth for site-wide copy/links.
 * Edit these values to update the business name, contact info, and socials everywhere.
 */
export const siteConfig = {
  name: "Ryan Watkins Fitness",
  shortName: "Ryan Watkins",
  coachName: "Ryan",
  tagline: "Online strength & mobility coaching that keeps you moving",
  description:
    "Online personal training for adults 50+ recovering from injury, managing arthritis or chronic conditions, or preserving strength on GLP-1 medications. 15+ years of experience, physical therapist assistant background.",
  // Placeholder — replace once a domain is purchased. Used for canonical URLs & sitemap.
  url: "https://www.ryanwatkinsfit.com",
  email: "ryanwatkinsfit@gmail.com",
  social: {
    // This site represents the training business, so only the two
    // client-facing Pages are linked here — not the trainer lead-gen Page,
    // which is a separate B2B audience and would confuse a client visitor.
    facebookRehabGlp1: "https://facebook.com/", // "Rehab & Prehab + GLP-1" page
    facebookGeneral: "https://facebook.com/", // "tank top arms" / general fitness page
    instagram: "https://instagram.com/",
  },
  nav: [
    { href: "/mobility-recovery", label: "Mobility & Recovery" },
    { href: "/glp1-support", label: "GLP-1 Support" },
    { href: "/conditions", label: "Conditions" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
