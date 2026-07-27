# AI Business Assessment

Lead-gen website for a free AI business assessment offer: a homepage, FAQ,
and blog built with Next.js and Tailwind CSS, designed for search visibility
and one clear call to action — booking a free assessment call.

**New here?** Start with [`GUIDE.md`](GUIDE.md) for a step-by-step walkthrough
of customizing, deploying, and growing this site. The client-facing workflow
(discovery call questions + the Claude prompt that turns a transcript into a
custom plan) is in [`prompts/ai-assessment-prompt.md`](prompts/ai-assessment-prompt.md).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- [Next.js](https://nextjs.org) (App Router) — static generation, sitemap/robots, metadata API
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide](https://lucide.dev) icons

## Project layout

- `site.config.ts` — brand name, tagline, Calendly URL, contact email (edit this first)
- `app/` — pages (home, `/faq`, `/blog`), sitemap, robots, OG image
- `components/` — header, footer, homepage sections, shared UI
- `content/blog.ts` — blog posts; add a new array entry to publish a post
- `prompts/ai-assessment-prompt.md` — the call questions + Claude prompt for delivering assessments
