# BRITE.Live — Premium Website Rebuild

## Project Overview
Building a $50,000-quality website for BRITE.Live, a bio-identical hormone replacement therapy (BHRT) company operating since 2009. The site must convey world-class medical credibility, trust, and premium quality. This is a complete rebuild — not a WordPress migration.

## Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** GSAP (scroll-triggered) + Framer Motion (page transitions, micro-interactions)
- **3D (hero accents):** Spline or Three.js (subtle, medical-grade — never gimmicky)
- **Fonts:** Google Fonts — 2 families (serif for headings = authority, sans-serif for body = readability)
- **Deployment:** Vercel (auto-deploy from GitHub)
- **Images:** next/image with optimization, lazy loading

## Brand Identity
- **Current Colors:** Teal #46bea7, Green #03c973, Dark Blue-Gray #354554
- **Logos:** BRITE-300.png, BRITE-logo-300 (green variant)
- **Tone:** Professional, trustworthy, warm, medically authoritative but approachable
- **Audience:** Adults seeking hormone therapy — often women in menopause, men with low testosterone

## Design Rules (from video research)
1. **Never use default Tailwind indigo/purple.** Always use the BRITE brand palette.
2. **Never use default/overused fonts.** Always use the project's chosen Google Fonts pair.
3. **Every section needs visual depth** — gradient backgrounds (radial, multi-color in teal/green palette), not flat white.
4. **Animations on every section** — elements should reveal on scroll (GSAP ScrollTrigger), buttons glow on hover (300ms transitions), cards lift on hover.
5. **Use human-designed components** from 21st.dev as starting points, then normalize to BRITE's design system.
6. **Above the fold is everything** — the hero section must be stunning, with either video background, animated gradient, or subtle 3D element.
7. **Micro-details create premium feel** — proper negative space, consistent shadows, smooth transitions, hover states on all interactive elements.
8. **Mobile-first responsive design** — every component must look perfect on mobile before desktop.
9. **Medical credibility through design** — clean layouts, generous whitespace, professional typography hierarchy. This is healthcare, not a startup landing page.

## Content Guidelines
- **Never use generic placeholder text.** Always use real BRITE content from the knowledge base (see knowledge/ folder).
- **Trust signals are mandatory** — credentials, years in business (since 2009), Medical Board showcase, patient outcomes.
- **The Medical Board (18 members) is the crown jewel** — showcase them prominently with photos, credentials, and specialties.
- **Content should educate** — explain BHRT in accessible language, reduce patient anxiety, build confidence.

## Architecture — Pages to Build
1. Homepage (hero + trust bar + services + board preview + testimonials + CTA)
2. About (company story, Dr. Rosensweet's vision, timeline, mission)
3. Services / How It Works (BHRT explained, the process, what to expect)
4. Medical Board (grid of all 18 experts)
5. Individual Board Member Profiles (18 pages)
6. Getting Started / Application Guide
7. FAQ
8. Testimonials / Patient Stories
9. Blog / Resources (educational content hub)
10. Contact (form + booking)
11. Login / Member Portal
12. Privacy Policy
13. Terms of Service

## Development Rules
- Always invoke the front-end design skill before writing any front-end code.
- Use the screenshot loop (Puppeteer) for full-page builds to self-correct visual issues.
- Turn off screenshot loop during small iterative tweaks.
- Commit to git after every meaningful change.
- Test on localhost before pushing to GitHub.
- Keep components modular — one component per file in src/components/.
- Use src/app/ for pages (App Router conventions).
- Keep all static assets in public/.
- Reference knowledge/ folder for real content and brand assets.

## Quality Standards
- Lighthouse scores: 95+ across all categories
- WCAG 2.1 AA accessibility compliance (critical for medical sites)
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- SEO: structured data (MedicalOrganization schema), Open Graph, sitemap
- No console errors, no layout shifts, no broken images

## Build Phases
### Phase 0: Foundation Setup
- Initialize Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui
- Connect GitHub + deploy to Vercel (live preview from day one)
- Set up brand assets folder (logos, palette, typography)

### Phase 1: Design Direction
- Find 3-5 inspiration sites (medical/health/wellness premium)
- Choose typography (2 Google Fonts)
- Define design system (colors, spacing, components)
- Generate hero imagery with AI

### Phase 2: Build (ANF Framework)
- ASSEMBLE: Pull premium components from 21st.dev (hero, trust bar, services, medical board, testimonials, FAQ, contact, footer)
- NORMALIZE: Unify into cohesive BRITE design system (colors, fonts, spacing, shadows)
- FILL: Replace all placeholders with real content from knowledge base

### Phase 3: Premium Polish
- GSAP scroll-triggered animations on every section
- Framer Motion page transitions
- 3D hero accents (Spline/Three.js)
- Gradient backgrounds (radial, teal/green palette)
- Micro-interactions (button glows, card hovers, 300ms transitions)
- Screenshot loop QA pass

### Phase 4: Full Page Buildout
- Build all 13 pages listed in Architecture section
- Each page gets full ANF treatment + polish
- 18 individual Medical Board member profile pages

### Phase 5: Technical Excellence
- SEO: structured data (MedicalOrganization schema), Open Graph, sitemap.xml
- Performance: Lighthouse 95+, Core Web Vitals targets
- Accessibility: WCAG 2.1 AA compliance
- Mobile-first responsive QA on all breakpoints
- Analytics migration from current Google Analytics

## Knowledge Base
- `knowledge/website-content/` — scraped content from current brite.live
- `knowledge/transcripts/` — YouTube video transcripts (5 videos on premium website building)
- `knowledge/video-insights-summary.md` — condensed techniques from all 5 videos
