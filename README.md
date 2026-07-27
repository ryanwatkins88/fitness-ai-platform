# Fitness AI Platform

A Next.js marketing site for a fitness/nutrition coaching business focused on
helping people on GLP-1 medications (Ozempic, Wegovy, Mounjaro, Zepbound)
preserve muscle, protect bone density, and maintain function while losing
weight — built for traditional SEO and for visibility in AI answer engines
(Claude, ChatGPT, Gemini).

## What's here

- **Value-ladder site structure**: home → free lead magnets → low-ticket
  program → mid-ticket group coaching (priced by weekly frequency) →
  high-ticket 1:1 coaching. See `src/lib/site-config.ts`.
- **Two lead magnet landing pages** with an email capture form
  (`/lead-magnets/glp1-muscle-preservation-guide` and
  `/lead-magnets/mounjaro-muscle-preservation-and-ozempic-face`).
- **SEO infrastructure**: per-page metadata, `sitemap.xml`, `robots.txt`,
  `Article`/`FAQPage`/`HealthAndBeautyBusiness` schema.org JSON-LD, and an
  auto-generated Open Graph image.
- **AI-search (GEO) infrastructure**: a generated `/llms.txt` describing the
  site's programs, guides, and articles in the structure AI crawlers look
  for (see `src/app/llms.txt/route.ts`).
- **Blog** with two seed, FAQ-rich articles targeting high-intent search
  terms (`does-ozempic-cause-muscle-loss`, `ozempic-face-prevention`). Add
  more posts in `src/lib/blog.ts`.

## Before you launch — things to customize

Everything below is marked `TODO` in the code:

1. **Brand basics** — business name, domain, email, social links, and
   service area in `src/lib/site-config.ts`.
2. **Pricing** — the placeholder prices for the three program tiers in
   `src/lib/site-config.ts` (`programs` array).
3. **Booking link** — point `siteConfig.booking.url` at your real
   Calendly/Acuity/application form.
4. **Email capture** — `src/app/api/subscribe/route.ts` currently just logs
   submissions. Wire it up to your email provider (ConvertKit, Mailchimp,
   Beehiiv, Flodesk, etc.) using their API, and store the API key in an
   environment variable — never commit it to the repo.
5. **Lead magnet PDFs** — upload your two guides to `public/lead-magnets/`
   (see the README inside that folder) and have your email provider deliver
   them on signup.
6. **About page bio** — replace the placeholder paragraphs in
   `src/app/about/page.tsx` with your real story and credentials.
7. **Favicon / logo** — replace `src/app/favicon.ico` with your own.

## Development

```bash
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run lint     # lint
```

## Deploy

The easiest path is [Vercel](https://vercel.com/new) — connect this repo and
it will detect Next.js automatically. Once you have a real domain, update
`siteConfig.url` in `src/lib/site-config.ts` so canonical URLs, the sitemap,
and `llms.txt` all point to the right place.
