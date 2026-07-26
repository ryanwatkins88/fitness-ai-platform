// Central place for the values you'll need to keep current or replace
// with your real accounts. Every page reads from here so you only edit
// one file.
export const site = {
  name: "QuickWin AI",
  tagline:
    "Free AI-powered business assessments for coaches, real estate agents, and service business owners.",
  // TODO: replace with your real purchased domain
  domain: "https://quickwinai.com",
  // TODO: replace with your real booking link (Calendly, Cal.com, etc.)
  bookingUrl: "https://calendly.com/your-handle/free-assessment",
  // TODO: replace with a real inbox you monitor
  contactEmail: "hello@quickwinai.com",
  // Case-study scarcity — keep this accurate, don't round up
  spotsTotal: 5,
  spotsFilled: 1,
};

export const spotsRemaining = site.spotsTotal - site.spotsFilled;
