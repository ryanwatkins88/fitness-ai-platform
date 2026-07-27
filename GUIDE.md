# Step-by-Step Guide

This site is a lead-gen landing page for your free AI Business Assessment
offer: a hero + how-it-works page, an FAQ, and a blog for search traffic.
Everything points visitors to one action — booking your free call on
Calendly.

The actual client-delivery workflow (the 5 call questions + the Claude
prompt that turns a transcript into a 4-quick-wins plan) is in
[`prompts/ai-assessment-prompt.md`](prompts/ai-assessment-prompt.md).
This guide covers getting the *website* live.

## 1. Set up Calendly (5 minutes)

1. Create a free account at [calendly.com](https://calendly.com).
2. Create a new event type, e.g. "Free AI Business Assessment Call" — 15
   or 30 minutes, whatever you prefer.
3. Copy that event's URL (it looks like
   `https://calendly.com/yourname/free-ai-business-assessment`).
4. Open [`site.config.ts`](site.config.ts) in this repo and paste it in as
   `calendlyUrl`. That one line updates every "Book Free Call" button on
   the whole site.

## 2. Customize the basics

Everything editable without touching page code lives in
[`site.config.ts`](site.config.ts):

- `brandName` — shown in the header, footer, and page titles
- `tagline` / `description` — used in the footer and search engine snippets
- `calendlyUrl` — from step 1
- `contactEmail` — where the "Email me" links point

To change wording on the homepage itself, edit the files in
`components/home/` (`Hero.tsx`, `HowItWorks.tsx`, `WhoItsFor.tsx`,
`WhatYouGet.tsx`, `FinalCta.tsx`) — each is plain text inside a small React
component, no coding knowledge required to find and change a sentence.

## 3. Deploy it for free (Vercel)

Vercel is the company behind Next.js (the framework this site is built
with) and hosts sites like this for free.

1. Go to [vercel.com](https://vercel.com) and sign up (you can use your
   GitHub account).
2. Click **Add New → Project** and import this GitHub repository
   (`ryanwatkins88/fitness-ai-platform`).
3. Under **Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` → your real domain once you have one, e.g.
     `https://www.yoursite.com` (use the temporary `*.vercel.app` URL until
     then — you can update this later and redeploy)
   - `NEXT_PUBLIC_CALENDLY_URL` → your Calendly URL from step 1 (optional if
     you already edited `site.config.ts` directly)
4. Click **Deploy**. In about a minute you'll get a live URL like
   `ai-business-assessment.vercel.app`.
5. To use your own domain (e.g. from Namecheap or Google Domains), go to
   the project's **Settings → Domains** in Vercel and follow the prompts —
   it walks you through the DNS records to add.

Every time you push a change to the `main` branch on GitHub, Vercel
redeploys automatically — nothing else to run.

## 4. Get it found on Google

1. Once live on your real domain, go to
   [Google Search Console](https://search.google.com/search-console) and
   add your site (use the "Domain" property type if you can — it covers
   `www` and non-`www` automatically).
2. Submit your sitemap: in Search Console, go to **Sitemaps** and submit
   `sitemap.xml` (the site already generates this automatically at
   `yoursite.com/sitemap.xml`).
3. Do the same in [Bing Webmaster Tools](https://www.bing.com/webmasters)
   — it's quick and picks up some search traffic Google misses.

That's it for technical SEO — the site already includes the on-page
essentials (meta titles/descriptions, structured data for your business and
FAQ, a fast static build, mobile-responsive layout).

## 5. Keep adding blog posts (this is what actually drives search traffic)

Technical SEO gets you *indexed*. Content is what gets you *found* — the
blog is the main lever for organic leads over time.

To add a new post, open [`content/blog.ts`](content/blog.ts) and add a new
object to the `posts` array (copy an existing one as a template — no other
file needs to change). Good topics to target:

- Questions your actual clients ask before booking (turn FAQ answers into
  full posts)
- "How to [save time / cut costs] on [specific task] with AI" for tasks
  common in industries you want more clients from
- Recaps of real wins you've delivered (with permission, anonymized if
  needed) — nothing ranks or converts better than a real result

Aim for one new post every week or two once you get going. Each post is a
new page Google can rank, and each one ends with a "Book Your Free Call"
CTA.

## 6. Running the site locally (optional, for making edits)

If you want to preview changes before they go live:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser. Press `Ctrl+C` to stop
it. Push your changes to GitHub when you're happy and Vercel takes care of
the rest.
