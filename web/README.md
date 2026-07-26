# QuickWin AI — marketing site

Next.js (App Router) + TypeScript + Tailwind. Built for SEO (per-page
metadata, sitemap.xml, robots.txt, JSON-LD structured data) and for AI
answer-engine discoverability (`public/llms.txt`).

## Before this goes live

Everything below lives in one file, `lib/site.ts` — edit it, don't hunt
through pages:

- [ ] Replace `domain` with your real, purchased domain
- [ ] Replace `bookingUrl` with your real Calendly/Cal.com link
- [ ] Replace `contactEmail` with an inbox you monitor
- [ ] Keep `spotsFilled` accurate as case-study spots fill

Also:
- [ ] Buy/verify the domain (see naming suggestions discussed with Claude:
      QuickWin AI was a placeholder brand — rename via find-and-replace in
      `lib/site.ts`, `app/layout.tsx`, and page titles if you pick something
      else)
- [ ] Once picked, deploy to Vercel (free tier is enough for this): connect
      the GitHub repo, set the project root to `web/`, and point your
      domain's DNS at it
- [ ] Add a real analytics tool (Plausible, Fathom, or GA4) once traffic
      starts

## Local development

```bash
cd web
npm install
npm run dev
```

## Build check

```bash
npm run build
```

## Structure

- `app/` — one folder per route (App Router)
- `components/` — shared Nav, Footer, CTAButton
- `lib/site.ts` — single source of truth for brand name, domain, booking
  link, contact email, and case-study spot count
- `public/llms.txt` — plain-language site summary for AI answer engines
  (ChatGPT, Claude, Perplexity, etc.)
