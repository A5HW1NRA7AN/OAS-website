# Open Agri Stack — PRD

## Problem Statement
Build the official public website for Open Agri Stack (OpenAgriNet ecosystem). Frontend-only, architecture-first, interactive documentation experience. Not a marketing landing page. Should feel handcrafted, institutional, timeless. Governments, developers, policymakers, ecosystem partners are the audience.

## Design Direction
- Light-first, warm-white (#FAFBF8), lime accent (#C0CF52)
- Editorial fonts: Instrument Serif (display) + Inter Tight (body) + JetBrains Mono (labels)
- No stock photos, no glassmorphism, no floating decorations
- Motion exists only to *explain* architecture

## User Personas
1. Developers (primary)
2. Government & policymakers
3. AgTech companies
4. NGOs & ecosystem partners

## Information Architecture (chapters 00→06)
- 00 Overview (Hero + interactive blueprint)
- 01 Why OAS (3 pillars)
- 02 Reference Architecture (3-layer interactive explorer)
- 03 OAS Stack (6-layer stack explorer)
- 04 Registry Atlas (interactive registry graph)
- 05 Build with OAS (composer + application coverage)
- 06 Resources (GitBook + GitHub destinations)
- Footer (site map + legal)

Between every chapter: a `ChapterTransition` hairline with "from → to" and a hand-off note. This threads the whole site into one continuous scroll-driven story.

## What's Implemented (2026-12)
- All 8 sections built as reusable components under `src/components/site/`
- Architecture data extracted to `src/data/architecture.js` (JSON, per spec)
- Sticky nav with chapter numbers (00–06) + scroll progress rail + active-section underline
- Hero blueprint SVG animates on load: L1 → L2 → L3 with connector paths
- Reference architecture: layer cards with hover expand + synced diagram
- Stack explorer: 6 pyramid bars, click to reveal detail + modules
- Registry atlas: 6-node radial graph, click node OR pill to select, connections highlight
- Build composer: toggle 6 blocks → live coverage % per application, READY badge at 100%
- Chapter transitions between every section
- Mobile nav with chapter numbers
- 0 console errors / 0 warnings after animation cleanup

## Tech
- React 19, react-router-dom 7, Framer Motion 11, Tailwind 3, CRA + craco
- Alias: `@` → `src/`

## Next Action Items (P0/P1/P2)
- P1: Wire real GitHub / GitBook URLs (currently `#` placeholders)
- P1: Insert brand-approved copy the user offered to provide
- P2: Add SEO meta (og:image, twitter card, structured data)
- P2: Case-study spotlight (e.g. "OAS in the field") between Build and Resources
- P2: Add localisation scaffolding (data-driven, already JSON)
