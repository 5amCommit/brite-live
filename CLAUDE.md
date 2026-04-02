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

## Build Phases — Full Execution Plan

> **IMPORTANT FOR CLAUDE:** At the start of every new session, read this section and the Progress Tracker below to understand where we are. Never skip phases. Never jump ahead. Complete each step before moving to the next.

### Phase 0: Foundation Setup
0.1. Initialize Next.js 15 project with App Router, TypeScript, Tailwind CSS
0.2. Install shadcn/ui component library
0.3. Write CLAUDE.md with project rules, brand guidelines, design system, persistent instructions, and all 5 phases in full detail
0.4. Install the front-end design skill globally in Claude Code
0.5. Create GitHub repository and push initial commit
0.6. Deploy to Vercel and confirm live preview URL works
0.7. Set up brand assets folder — download logo files from current brite.live, document color palette
0.8. Verify dev server runs locally (npm run dev)

### Phase 1: Design Direction
1.1. User browses godly.website / awwwards.com and provides 3-5 screenshot inspirations of premium medical/health/wellness sites
1.2. Analyze screenshots and extract design patterns (layout structure, color usage, typography, spacing, hero treatment)
1.3. Choose typography — select 2 Google Fonts: one serif for headings (medical authority), one clean sans-serif for body (readability)
1.4. Define refined color palette — evolve from current teal #46bea7 / green #03c973 into a more sophisticated system with primary, secondary, accent, background tones, and dark mode variants
1.5. Define spacing scale, border-radius system, shadow system, and component patterns
1.6. Generate hero imagery — use MidJourney or AI image generation for premium lifestyle/wellness imagery that fits BRITE brand
1.7. Create a design tokens file (tailwind config) encoding all decisions
1.8. Update CLAUDE.md with finalized design system choices

### Phase 2: Build — ANF Framework (Homepage First)
2.1. **ASSEMBLE** — Source premium components from 21st.dev for each homepage section:
     - Hero section (video/animated background, headline, CTA)
     - Trust bar (logos, credentials, "since 2009", number of board members)
     - Services / How It Works section (3-4 cards explaining BHRT process)
     - Medical Board preview (grid of top 6 doctors with photos + credentials)
     - Testimonials / Social proof carousel
     - FAQ accordion section
     - Contact / CTA section ("Get Started" with form or booking link)
     - Footer (nav links, app download badges, social, copyright)
2.2. **NORMALIZE** — Unify all assembled components into one cohesive design:
     - Apply BRITE color palette to every component (remove any default colors)
     - Apply chosen Google Fonts pair consistently (headings + body)
     - Standardize spacing, padding, margins across all sections
     - Unify shadow depths, border-radius, and hover states
     - Ensure consistent button styles, link styles, and card treatments
     - Verify visual flow from section to section (no jarring transitions)
2.3. **FILL** — Replace every piece of placeholder content with real BRITE content:
     - Company story and value proposition from knowledge base
     - Real Medical Board member names, photos, credentials, and specialties
     - Actual BHRT benefits and process descriptions from scraped content
     - Real CTAs that match BRITE's patient journey (application, getting started)
     - Verify no lorem ipsum or generic text remains anywhere

### Phase 3: Premium Polish
3.1. Install GSAP + ScrollTrigger — add scroll-triggered reveal animations to every section (fade-in-up, stagger children)
3.2. Install Framer Motion — add page transition animations and layout animations
3.3. Add gradient backgrounds — radial gradients in teal/green palette behind hero and alternating sections (not flat white)
3.4. Add micro-interactions to all interactive elements:
     - Buttons: glow effect on hover, scale up slightly (300ms ease)
     - Cards: lift with shadow increase on hover (300ms ease)
     - Navigation: smooth underline or highlight transitions
     - Links: color transitions on hover
3.5. Add 3D hero accent — subtle Spline or Three.js element (e.g., floating molecule, DNA helix, abstract wellness shape) — must be medical-grade, never gimmicky
3.6. Add visual grid/texture overlays for depth where appropriate
3.7. Run screenshot loop QA — use Puppeteer to self-review every section, identify visual issues, fix them
3.8. Test full scroll experience from top to bottom — ensure animations are smooth, no jank, no layout shifts

### Phase 4: Full Page Buildout
Build each page using the same ANF (Assemble → Normalize → Fill) + Polish workflow:

4.1. **Homepage** — already built in Phase 2+3, review and finalize
4.2. **About page** — company story, Dr. Rosensweet's vision, founding story, timeline since 2009, mission statement, team culture
4.3. **Services / How It Works** — BHRT explained step by step, what patients can expect, benefits breakdown, who it's for (menopause, low T, aging)
4.4. **Medical Board landing page** — grid/masonry of all 18 experts with photos, names, credentials, specialties, and links to individual profiles
4.5. **18 Individual Board Member profile pages** — dynamic routes (/medical-board/[slug]), full bio, photo, credentials, education, specialties, experience. Use data from knowledge/website-content/brite-live-inventory.md
4.6. **Getting Started / Application Guide** — step-by-step guide for new patients: how to apply hormones, dosage info, what to expect, when to contact provider
4.7. **FAQ page** — comprehensive Q&A about BHRT safety, process, costs, side effects, eligibility, treatment timeline
4.8. **Testimonials / Patient Stories** — social proof page with patient experiences (will need real testimonials from uncle or placeholder structure)
4.9. **Blog / Resources hub** — content listing page with categories, designed for future educational articles (SEO growth engine)
4.10. **Contact page** — form (name, email, phone, message), office info, embedded map if applicable, booking link
4.11. **Login / Member Portal** — clean login form, link to mobile apps (iOS/Android), account access
4.12. **Privacy Policy** — styled legal page with real content from current site
4.13. **Terms of Service** — styled legal page with real content from current site
4.14. Final cross-page review — ensure navigation works between all pages, consistent header/footer, no broken links

### Phase 5: Technical Excellence
5.1. **SEO Optimization:**
     - Add metadata to every page (title, description, keywords)
     - Add Open Graph tags for social sharing (og:title, og:description, og:image)
     - Add structured data — MedicalOrganization schema for the company, Person schema for board members
     - Generate sitemap.xml
     - Add robots.txt
     - Verify proper heading hierarchy (h1 → h2 → h3) on every page
5.2. **Performance:**
     - Lighthouse audit — target 95+ on all four categories (Performance, Accessibility, Best Practices, SEO)
     - Optimize all images with next/image (WebP, lazy loading, proper sizing)
     - Code-split heavy libraries (GSAP, Three.js) — lazy load where possible
     - Verify Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
5.3. **Accessibility (WCAG 2.1 AA):**
     - All images have meaningful alt text
     - Proper focus management and tab order
     - Color contrast ratios meet AA standards (4.5:1 for text)
     - Skip navigation link
     - ARIA labels on interactive elements
     - Screen reader testing
5.4. **Mobile QA:**
     - Test on all breakpoints: 320px, 375px, 768px, 1024px, 1280px, 1440px
     - Verify touch targets are at least 44x44px
     - Test hamburger menu, mobile navigation, scroll behavior
5.5. **Analytics & Final:**
     - Set up Google Analytics (migrate tag G-ZHH8XTF7W0 or create new)
     - Final cross-browser testing (Chrome, Safari, Firefox)
     - Final deployment to production Vercel
     - Custom domain setup (when ready)

---

## Progress Tracker

> **IMPORTANT FOR CLAUDE:** Update this tracker as steps are completed. This is the source of truth for project state across sessions. At the start of every new session, read this to know exactly where we left off.

### Phase 0 — COMPLETE
- [x] All steps complete. GitHub: https://github.com/5amCommit/brite-live | Vercel: https://brite-live.vercel.app

### Phase 1 — COMPLETE
- [x] 3 inspiration sites analyzed (Cascaid, IOH, Raven). Playfair Display + Inter. Full color system.

### Phase 2 — COMPLETE
- [x] Homepage assembled with real BRITE content — Hero, TrustBar, Services, BoardPreview, Testimonials, CTA

### Phase 3 — COMPLETE
- [x] GSAP scroll animations, animated counters, stagger reveals, button glow, gradient backgrounds, scroll-aware header

### Phase 4 — COMPLETE
- [x] 4.1 Homepage — done
- [x] 4.2 About — company story, pull quote, timeline, video, Medical Board CTA
- [x] 4.3 Services — symptoms, 4-step process, product benefits, embedded Vimeo, stats
- [x] 4.4 Medical Board — founder spotlight, all 18 transparent headshots, horizontal cards
- [x] 4.6 Getting Started — application guide, product image, CTA
- [x] 4.7 FAQ — 10 questions, card-style accordion
- [x] 4.10 Contact — form with practitioner/patient selector, phone/email/website
- [x] 4.11 Login — dark portal with app download links
- [x] 4.12 Privacy Policy — styled legal page
- [x] 4.13 Terms of Service — styled legal page
- [ ] 4.5 Individual board member profile pages (18 dynamic routes) — DEFERRED
- [ ] 4.8 Testimonials dedicated page — DEFERRED
- [ ] 4.9 Blog/Resources hub — DEFERRED
- [x] 4.14 Cross-page review — all nav links work, consistent header/footer

### Phase 5 — COMPLETE
- [x] 5.1 SEO: metadata on all pages, Open Graph, Twitter cards, keywords, MedicalOrganization structured data, sitemap.xml, robots.txt
- [x] 5.3 Accessibility: skip-to-content link, alt text on all images, semantic HTML
- [x] Custom 404 page
- [ ] 5.2 Performance: Lighthouse audit (pending)
- [ ] 5.4 Mobile QA (pending manual testing)
- [ ] 5.5 Analytics & custom domain (pending — needs Google Analytics tag decision)

## Design System Reference

### Fonts
- **Headings:** Playfair Display (serif) — elegant, editorial, italic for accent words
- **Body:** Inter (sans-serif) — clean, readable, professional

### Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Primary Teal | #3BA89A | CTAs, links, primary actions |
| Teal Light | #4FC4B4 | Hover states, dark-section accents |
| Teal Dark | #2D8A7E | Active states, emphasis |
| Accent Green | #03c973 | Success states, secondary CTA |
| Background Cream | #FAF8F5 | Main page background |
| Warm Gray | #F2EFEB | Section alternating background |
| Dark | #1A2A2A | Dark sections (hero, testimonials) |
| Dark Light | #243838 | Cards on dark backgrounds |
| Charcoal | #2C3E3E | Dark section accents |
| Text Primary | #354554 | Body text |
| Text Light | #6B7B8D | Muted text, captions |
| Gold | #C4A265 | Premium accent, special callouts |
| Border | #E8E4DF | Subtle borders, dividers |

### Design Direction
- **Foundation:** Cascaid Health's editorial warmth (serif headlines, breathing room, medical authority)
- **Polish:** Institute of Health's premium feel (dark sections, confident typography, smooth scroll animations)
- **Conversion:** Raven Health's trust patterns (feature grids, testimonials, social proof counters)

## Knowledge Base
- `knowledge/website-content/` — scraped content from current brite.live (all 18 board members, pages, structure)
- `knowledge/transcripts/` — YouTube video transcripts (5 videos on premium website building)
- `knowledge/video-insights-summary.md` — condensed techniques from all 5 videos
- `knowledge/design-references.md` — deep analysis of 3 inspiration sites (Cascaid, IOH, Raven)
