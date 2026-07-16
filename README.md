# Naineesh — Portfolio

A clean, minimal Next.js 14 (App Router) portfolio site. Built with TypeScript,
Tailwind CSS, and lucide-react icons.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.

## Before you publish — things to check

- **Full name**: the hero currently shows "Naineesh" only. Add your last
  name in `app/page.tsx` (hero heading) and in `app/layout.tsx` (metadata
  title) if you'd like it displayed.
- **Experience bullets**: the DuPont bullets are filled in with real detail.
  The Stallion Memphis and University of Memphis ITS entries have only a
  single generic line each — swap in your actual day-to-day
  responsibilities/impact from those roles in `app/page.tsx` (`EXPERIENCE`
  array).
- **Resume link**: consider adding a "Download Resume" button in the hero
  once you have a PDF you want to link — drop it in `/public` and link to
  `/your-resume.pdf`.
- **Profile photo (optional)**: if you'd like a photo in the hero, add an
  image to `/public` and update `app/page.tsx`.
- **Contact info**: double-check email/LinkedIn/GitHub links in the
  `CONTACT` section are current.

## Structure

```
app/
  layout.tsx     — fonts, metadata
  page.tsx       — all page content/sections
  globals.css    — design tokens, animations
tailwind.config.ts — color palette & type scale
```

## Design notes

- **Palette**: cool off-white background, near-black ink text, cobalt-blue
  accent, small green "status" signal.
- **Type**: Space Grotesk (headings), Inter (body), JetBrains Mono
  (labels/dates/status bar).
- **Signature element**: the mono "status bar" under the hero name — a
  small system-health-check motif (open to work / experience / OPT status)
  that reflects the job-search context without being gimmicky.
