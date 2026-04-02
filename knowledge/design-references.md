# Design References — BRITE.Live Rebuild

## Reference Site 1: Cascaid Health (cascaidhealth.com) — PRIMARY INSPIRATION
**Vibe:** Editorial, high-trust, warm but authoritative
**Screenshots:** /Users/daniiltarasenco/Downloads/cascaidhealth.com_.png

### Design Patterns to Use:
- Large serif headlines with italic accent words for emphasis
- Warm neutral palette (cream/white backgrounds, dark text)
- Statistics section with big bold numbers (76%, 80%, 90%)
- Alternating full-width image sections with text overlays
- Minimal outline-style CTAs
- Editorial "From complexity to clarity" feel
- Generous whitespace and breathing room
- Clean section transitions

### Technical Details:
- Built on Divi (WordPress) — we're rebuilding in Next.js
- Fonts: Open Sans body, serif headings
- Colors: #333 headings, #666 body, white backgrounds
- Container: 1080px max-width, 80% width
- Responsive: 981px, 768px, 767px breakpoints

---

## Reference Site 2: Institute of Health (instituteofhealth.com) — PREMIUM POLISH
**Vibe:** Ultra-premium, luxury medical education
**Screenshots:** /Users/daniiltarasenco/Downloads/www.instituteofhealth.com_.png

### Design Patterns to Use:
- Scroll-triggered text line animations (GSAP + SplitType)
- Dark hero with abstract organic particle background (.avif)
- Horizontal carousel for content (Splide.js) — adapt for Medical Board
- Video testimonial grid with hover-to-play
- Generous negative space
- Large confident typography
- Progress bars and counter animations
- Smooth scroll (Lenis.js)

### Technical Details:
- Built on Webflow
- Colors: #242424 primary dark, #f1f1f1 light, white content areas
- Animations: GSAP with ScrollTrigger, SplitType for text splitting
- Blur effects: 14-18px on animated elements
- Stagger: 0.06-0.08s intervals
- Easing: power3.out entrance, power3.in exit
- Video: Vimeo lazy-loaded on hover
- Smooth scroll: Lenis.js
- Hidden scrollbars

---

## Reference Site 3: Raven Health (ravenhealth.com) — LAYOUT & TRUST PATTERNS
**Vibe:** Clean SaaS, professional, feature-focused
**Screenshots:** /Users/daniiltarasenco/Downloads/ravenhealth.com_.png

### Design Patterns to Use:
- Trust bar with partner/client logos
- Feature cards grid with icons (shadow, rounded corners)
- Testimonial carousel on dark background (#2f3942)
- Case study cards
- Social proof counters (400+ clinics, etc.)
- Pricing/feature comparison layout

### Technical Details:
- Fonts: Poppins primary, Campton for emphasis
- Colors: #5B51CA purple accent, #227263 teal, #1a2121 dark, #f5f8fa light bg
- Cards: 10px border-radius, 15px box-shadow, scale(1.05) hover
- Buttons: #5B51CA bg, hover to #1a2121, 10px 30px padding
- Animations: Intersection Observer fade-in-up, 300ms stagger
- Carousel: Swiper.js
- Container: 1200px max-width

---

## BRITE Design Direction Summary

**Foundation:** Cascaid's editorial warmth (serif headlines, breathing room, medical authority)
**Polish:** IOH's premium feel (dark sections, confident typography, smooth scroll animations)
**Conversion:** Raven's trust patterns (feature grids, testimonials, social proof counters)

### Key Design Decisions:
1. Serif font for headlines (authority) + clean sans-serif for body (readability)
2. Warm neutral palette evolved from BRITE's teal/green
3. Dark hero section with organic/abstract background
4. GSAP scroll-triggered reveals on every section
5. Horizontal carousel for Medical Board showcase
6. Statistics section for credibility (17+ years, 18 board members, etc.)
7. Testimonial section on dark background
8. Large confident typography with italic accent words
9. Generous whitespace throughout
10. Simplified line animations (not full IOH complexity)
