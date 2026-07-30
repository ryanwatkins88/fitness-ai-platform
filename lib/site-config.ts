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
    // Add your real Facebook Page URLs here (not personal profile URLs).
    facebookPrimary: "https://facebook.com/",
    facebookMobility: "https://facebook.com/",
    facebookGLP1: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
  nav: [
    { href: "/mobility-recovery", label: "Mobility & Recovery" },
    { href: "/glp1-support", label: "GLP-1 Support" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;
