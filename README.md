# Ryan Watkins Fitness — Website

Lead-generation website for an online personal training business, built with
[Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

The site is split into two audience paths — **Mobility & Recovery** (arthritis,
post-stroke, Parkinson's, joint injuries, 50+ balance/longevity) and **GLP-1
Strength Support** (Ozempic/Wegovy/Zepbound/Mounjaro users) — plus an About
page and a lead-capture contact form.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing site content

Business name, tagline, contact email, and social links all live in one file:
[`lib/site-config.ts`](./lib/site-config.ts). Update that instead of hunting
through pages.

Page copy lives directly in each route:

- `app/page.tsx` — homepage
- `app/mobility-recovery/page.tsx`
- `app/glp1-support/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`

## Lead capture form (contact page)

The contact form posts to `app/api/contact/route.ts`, which emails you the
lead using [Resend](https://resend.com) (free tier: 3,000 emails/month, no
credit card required).

To make it live:

1. Create a free Resend account and verify a sending domain (or use their
   shared `onboarding@resend.dev` sender for testing).
2. Create an API key in the Resend dashboard.
3. Copy `.env.example` to `.env.local` and set:
   ```
   RESEND_API_KEY=re_your_key_here
   LEAD_NOTIFICATION_EMAIL=you@example.com
   ```
4. Restart the dev server. Submissions will now arrive by email, with
   reply-to set to the lead's email address so you can respond directly.

Until `RESEND_API_KEY` is set, the form will show a friendly error asking
visitors to email you directly — it won't fail silently or lose the lead's
message.

The form also includes a hidden honeypot field for basic spam filtering.

## SEO

- Per-page metadata (title/description) via the Next.js Metadata API.
- Auto-generated `sitemap.xml` (`app/sitemap.ts`) and `robots.txt`
  (`app/robots.ts`) — update `siteConfig.url` once you have a real domain.
- `ProfessionalService` structured data (JSON-LD) in `app/layout.tsx`.

## Deploying

The fastest path is [Vercel](https://vercel.com/new) (built by the Next.js
team, generous free tier):

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Import the repo at vercel.com/new.
3. Add the `RESEND_API_KEY` and `LEAD_NOTIFICATION_EMAIL` environment
   variables in the Vercel project settings.
4. Deploy — you'll get a `*.vercel.app` URL immediately, then can attach a
   custom domain under Project Settings → Domains once you've purchased one
   (e.g. via Namecheap, Google Domains, or directly through Vercel).
5. Update `siteConfig.url` in `lib/site-config.ts` to your real domain and
   redeploy so SEO metadata and the sitemap point to the right place.

## Still to customize

- [ ] Real Facebook Page URLs and Instagram handle in `lib/site-config.ts`
- [ ] A purchased domain, wired up in Vercel + `siteConfig.url`
- [ ] Real client testimonials (none are included — avoid placeholder/fake
      quotes; add real ones once you have client permission)
- [ ] Profile/action photos (currently a text-only design — add an `Image`
      to the hero/about sections once you have photos you like)
- [ ] Resend sending domain verified for your own domain (instead of the
      shared `onboarding@resend.dev` sender) once you have a domain
