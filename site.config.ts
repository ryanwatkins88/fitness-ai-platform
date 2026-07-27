/**
 * Single place to edit the business details used across the whole site.
 * See GUIDE.md for a walkthrough of what to change before you launch.
 */
export const siteConfig = {
  brandName: "AI Business Assessment",
  tagline: "A free 15-minute call. A custom AI game plan for your business.",
  description:
    "Book a free AI business assessment call. Get a custom plan with 4 quick AI wins and a starter roadmap to save time, cut costs, and get started with AI — no tech background required.",

  // Update this once the site is deployed to a real domain (also set NEXT_PUBLIC_SITE_URL
  // in your Vercel project settings so metadata/sitemap use the live URL).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourdomain.com",

  // Replace with your real Calendly event link. Create a free 15-30 min event
  // type at https://calendly.com and paste its URL here (or set the
  // NEXT_PUBLIC_CALENDLY_URL environment variable in Vercel).
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/ryanwatkinsfit/ai-business-assessment",

  contactEmail: "ryanwatkinsfit@gmail.com",

  social: {
    // Add your real profile URLs here once available, e.g.:
    // instagram: "https://instagram.com/yourhandle",
    // linkedin: "https://linkedin.com/in/yourhandle",
  },
};

export type SiteConfig = typeof siteConfig;
