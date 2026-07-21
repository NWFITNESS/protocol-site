# Protocol marketing site — research teardown + build plan

**Purpose.** We're moving from the "coming soon" splash to a real marketing site to start promoting Protocol. This doc is the single blueprint for that build: a full teardown of two reference sites (**FITR** and **TrueCoach**), a synthesis of the winning pattern, and a **close-adaptation plan** for Protocol's own site — sitemap, section-by-section homepage spec with draft copy, feature-page template, a pricing page mapped to Protocol's real model, the design system, and the build/tech notes.

- **Fidelity chosen by founder:** *Close adaptation* — mirror the reference layout/section-flow closely, but restyle to Protocol's brand and rewrite all copy for our product.
- **Repo:** `protocol-site` (this repo) → `github.com/NWFITNESS/protocol-site` → deploys to **`protocolapp.uk`**. The app is separate at **`app.protocolapp.uk`**.
- **Stack already in place:** Next.js 16.2.6, React 19, Tailwind v4, `next/font` (Inter + Orbitron), a `[ P ]` `Mark.tsx`, `/privacy`, `/terms`. ⚠️ `AGENTS.md` warns this Next.js has breaking changes vs. training data — read `node_modules/next/dist/docs/` before writing app-router code.

> **Who we are (grounding for all copy).** Protocol — *"The coaching protocol."* The operating system for serious coaches. **Built by a coach, for coaches.** Target: independent strength, S&C, CrossFit and hybrid coaches running 5–50 individual athletes (not group-class gym owners, not casual fitness-app users). Brand voice: precise, confident, serious, technical when earned, **no fitness clichés, no emoji in UI copy**. Vocabulary: **athletes** (not "clients"), programs, blocks, weeks, sessions, sections, movements, sets, library, logs, PRs, maxes.

---

## Part 1 — Reference teardown: FITR (coachwithfitr.com)

FITR is the closest analogue to Protocol: a **dark-themed**, all-in-one coaching platform aimed at serious S&C / CrossFit / HYROX coaches, with per-client billing and heavy "scale your business" positioning. Its dark aesthetic and audience make it the primary structural model for us.

### 1.1 Information architecture / nav

Mega-menu nav grouped by outcome, not by feature name:

- **Get Started** · **Why FITR**
- **Features** (mega-dropdown):
  - *Programming* → Program Types, Schedule Builder, Macros & Nutrition, Habits, Sets & Reps, Packages, HYROX resources
  - *Client Management* → Communication, Progress Tracking, Performance, Review & Build
  - *Marketing* → Storefront, Program Pages, Customisation, Promotions, Data & Integrations
  - *Business & Admin* → Business Automation, Teams, Notifications, Management, Zapier
  - *Mobile Apps* → Coach App, Client App, Custom App, Client Experience
  - *View all Features*
- **Resources** (dropdown): About, Testimonials, Blog, Built to coach, For Education, Partners, Brand Downloads, Demos, Documentaries, Free Calculators, Help centre, Use Cases, Pricing
- **Header CTAs:** Login · **Free Trial** (primary)
- **Rotating top banner promos** (offers, custom-app plug, lead-magnet guide)

### 1.2 Homepage sections (in order)

1. **Hero** — H1: *"personal trainer software for growing coaching businesses"*. CTA **"Start your FREE trial"** + trust line *"14 Day Full Access Trial. No Credit Card Required."* Two large product illustrations.
2. **Logo wall** — 30+ recognised brands (PureGym, GymShark, Invictus, HYROX, Eleiko, HWPO…), horizontal auto-scroll, repeated.
3. **Platform overview** — *"Personal Trainer Software that helps coaches become real businesses"* / *"Everything you need to coach clients, grow recurring revenue and run your business online."* Text + screenshot.
4. **Six core features grid** (2×3): Structured Programming Made Simple · Automate Your Coaching Workflow · Integrated Nutrition Coaching · Run Your Coaching Business In One Place · Scale Your Coaching Business · Client Progress & Accountability. Each = icon + headline + benefit paragraph.
5. **Habits (new feature spotlight)** — *"HABITS — Coach the other 23 hours."* Text left, screenshot right.
6. **Business capabilities carousel** (3 slides): All-in-One Coaching Platform · Unlimited Clients, Unlimited Potential · Flexible Coaching Anywhere. CTA below.
7. **"Build and deliver coaching your way"** — flexibility positioning, text + floating UI.
8. **Packages (feature spotlight)** — *"Turn your programs into the full package"* (bundling → premium subscriptions).
9. **Testimonials carousel** — *"Trusted by fitness brands and coaches worldwide"*, 7–8 named coach quotes, "View All Testimonials".
10. **Program Types** — 4-card grid (1-2-1 · Group rolling calendar · Session 1, day 1 · Fixed length), each with one-line explainer.
11. **Custom App spotlight** — iPhone mockup + 4 checkmark benefits ("Clients download your app – not the FITR Client App").
12. **Feature-category explorer** — 6 tiles linking to deep-dive feature pages.
13. **Final CTA** — *"Try FITR risk-free today."* / *"Deliver a more professional coaching experience in minutes."* + 3 bullets (No credit card required · PRO features included for 14 days · Choose a plan when you're ready).
14. **Media mentions** strip (Men's Health, Morning Chalk Up, Fitt Insider…).
15. **Footer** — link columns + 8 legal links + 4 socials + "designed by Digital Mast".

### 1.3 Feature deep-dive page template (reusable)

Header (feature name + benefit subhead + supporting paragraph) → **alternating text/screenshot sub-feature sections** (heading + benefit tagline + 1–2 sentence explainer + "Learn more") → product/showcase grid → testimonials → cross-feature nav tiles → logo wall → trial CTA footer. This alternating "text block ↔ visual block" rhythm is the whole system.

### 1.4 "Why FITR" positioning page

Frames differentiation as **efficiency + scale through flexibility**: use a mix of program types to "coach more clients without increasing your workload." Includes a concrete **earnings model** ("How Coach Jordan scaled earnings to $9,550/month" across 12 schedules / 110 clients), team scaling, hybrid support, and **6 extended coach case studies with revenue stats** (e.g. "£1,500 → £5,000/month", "0 to 100+ clients"). Logo wall: *"Powering PTs with 1 to 15k+ clients."*

### 1.5 Pricing

- Header: *"The Right Plan To Grow With Your Coaching Business"* / *"Start where you are. Pay for what you need. Scale as your client base grows."*
- **Per-active-client** model. **FITR PRO** = £14.99/mo per active client subscription; **FITR UNLIMITED** = flat, "Best value", unlimited clients. Currency toggle (GBP/USD/EUR) + monthly/annual (annual −20%).
- **Custom App** add-on (price gated). **5.99%** business-automation fee + Stripe fees. Client accounts **free**. 14-day full-access trial, no card. ~12 FAQs.

### 1.6 Design & funnel

Dark theme, white text, clean sans, product-screenshot-led, line-icon illustrations, horizontal carousels. **Funnel:** one repeated primary CTA (free trial, no-card, 14-day, full-access) top/mid/bottom; social proof early and often; problem → solution → features → proof → trial.

---

## Part 2 — Reference teardown: TrueCoach (truecoach.co)

TrueCoach is **light-themed**, US-centric, and the incumbent Protocol explicitly out-positions on percentage-based programming. Its strength is **conversion mechanics and trust signals**; borrow those, not its look.

### 2.1 IA / nav
- **Specialties** dropdown (S&C, Bodybuilding, Weightlifting, Nutrition, Physio, Functional Fitness, CrossFit, University, Rec Center…) — SEO landing pages per niche.
- **Features** dropdown (Program Workout Builder, Video Exercise Library, Nutrition/Habit Tracking, Wearables `NEW`, Client Tracking, Dashboard, Messaging, Public Profiles `NEW`, Automated Payments, Custom Theming, Business Planner).
- **Partner Perks · Pricing · Resources** (Learning Center, Blog, Downloads, Case Studies, Programs, Webinars, Help). **Login · Sign Up.**

### 2.2 Homepage sections (in order)
1. **Hero + email lead capture** — *"Train Your Clients Online With The #1 Platform Built For Personal Trainers"* / *"Grow your business with the personal trainer software platform trusted by 16,000+ coaches. Start your free 14-day trial today!"* Email field → **"Try it free"**, "No credit card required · Cancel any time."
2. **Anchor testimonial** — *"TrueCoach has increased our monthly revenue by over $55,000."* — Sean Pastuch, Active Life (headshot).
3. **Case-study logo carousel.**
4. **Feature grid (9 cards)** under *"Spend More Time On Coaching Your Clients At Scale And Less Time On Admin…"* — Public Profiles, Program Builder, Dashboard, Client Management, Nutrition, Progress, Custom Theming, Compliance, Payments; each + "Learn More".
5. **Benefits deep-dive (4 alternating cards)** — *"Shave hours off program admin work…"* (compliance math, client data, delivery speed, self-branded video demos + "1,200+ pre-loaded exercise videos").
6. **Stat band** — **16K+ coaches · 250K+ clients · 50M+ workouts delivered.**
7. **Mid-page email CTA** — *"Get Started With a Free 14-Day Trial."*
8. **Narrative value prop** — *"Modernize Your Personalized Coaching Business"* (kill the spreadsheets/email/YouTube glue).
9. **Product showcase (tabbed 2×2)** — Workout Logging · Exercise Videos · Messaging · Metrics & Goals, each with a mobile screenshot.
10. **Testimonials carousel** — Marcus Filly, Dane Delozier… "Read Customer Stories".
11. **Latest resources (blog cards).**
12. **Final email CTA** (repeat of #7).
13. **Footer** — Company / Features / Resources columns, app-store links, 5 socials, **review-award badges** (Capterra, G2, GetApp), "© 2026 TrueCoach, Inc."

### 2.3 Pricing
- *"Find The Right Plan For Your Personal Training Business"* — **3 tiers by active-client cap**, Standard = "Most popular":
  - **Starter** — $26.34/mo (annual), up to **5** clients, "1 month free".
  - **Standard** — $57.99/mo (annual), up to **20** clients, "2 months free".
  - **Pro** — $136.99/mo (annual), up to **50** clients, "2 months free".
- Shared features across tiers; Standard/Pro add Public Profiles, Wearables (Apple/Garmin/WHOOP), custom-branded app, advanced habit/nutrition, Zapier. 14-day trial no card; **90-day money-back guarantee**; clients free; contact sales >250 clients.

### 2.4 Design & funnel
Light/white, brand blue/teal, real founder headshots, blob/wave decorative shapes, mobile screenshots. **Funnel leans on email capture** (inline field in the CTA itself) + heavy quantified trust (16K+, revenue-$ testimonials, award badges, money-back guarantee).

---

## Part 3 — Synthesis: the coaching-software homepage formula

Both sites converge on the same spine. This is the template we adapt:

1. **Hero** — bold outcome headline + one-line subhead + single primary CTA (free trial, no card) + trust microcopy.
2. **Trust bar** — logo wall / stat band immediately under the hero.
3. **Platform overview** — "everything in one place" one-liner + product shot.
4. **Feature grid** — 6–9 icon+headline+benefit cards.
5. **Feature spotlights** — 3–6 alternating text/screenshot blocks for the hero features.
6. **Differentiator / "why us"** — the wedge vs. competitors.
7. **Social proof** — testimonials (named + role) and/or revenue stats.
8. **Pricing preview or link.**
9. **Final CTA** — repeat the trial offer with 3 reassurance bullets.
10. **Footer** — features/resources/legal columns, socials, badges.

**Universal conversion rules observed:** one repeated primary CTA (free trial, **no credit card**, 14 days, full access); social proof high on the page; benefit-led copy (coach's time/revenue/retention), not feature-led; alternating visual rhythm; clear per-tier client caps in pricing.

**Where Protocol must differ (honesty + brand):**
- **We're new** — no 16K-coach stats, no long testimonial wall yet. Do **not** fabricate. Lean on the **founder story** ("built by a coach, for coaches"), a **founding-coach / early-access** framing, and *product* proof (real screenshots, the depth of the feature set). Add stats/testimonials as they become real. (Mirrors the app's "no fake stats" rule.)
- **Dark, precise, technical** brand — closer to FITR than TrueCoach. Use the `[ P ]` brackets device, Orbitron wordmark, cobalt accent.
- **Athletes, not clients**, and a **percentage-based programming** wedge neither competitor leads with.

---

## Part 4 — Protocol site plan (the build)

### 4.1 Sitemap (phase 1 → later)

**Phase 1 (launch):**
- `/` — homepage (the full spine above)
- `/features` — all features overview (grid → links)
- `/pricing` — Protocol's real plan model
- `/why-protocol` — positioning / differentiator page (the percentage-programming + built-by-a-coach wedge)
- `/privacy`, `/terms` — already exist
- Global header + footer, primary CTA → `https://app.protocolapp.uk/auth/signup`

**Phase 2 (as content grows):**
- Feature deep-dives: `/features/programming`, `/features/metrics`, `/features/nutrition`, `/features/messaging`, `/features/storefront`, `/features/teams`, `/features/health` (FITR-style template)
- `/for/[niche]` SEO pages (strength-and-conditioning, crossfit, hyrox, hybrid) — TrueCoach's specialty-page play
- `/about` (founder story), `/blog`, `/testimonials` / case studies, `/demo`
- App-store links once native shells exist (PWA for now)

### 4.2 Homepage — section-by-section spec + DRAFT copy

> Copy below is a **first draft to react to**, not final. All rewritten for Protocol, athletes-not-clients, no emoji, sentence case except the Orbitron wordmark. Primary CTA everywhere = **"Start free trial"** → `app.protocolapp.uk/auth/signup`, microcopy **"14-day full access. No card required."** (matches the app's `platform_settings.trial_days` = 14).

1. **Header** — `[ P ] PROTOCOL` wordmark left; nav: Features · Pricing · Why Protocol · Log in · **Start free trial** (cobalt). Sticky, dark, hairline bottom border.

2. **Hero**
   - Eyebrow: `[ Built by a coach, for coaches ]`
   - H1 (Orbitron or Inter 600): **"The operating system for serious coaches."**
   - Sub: *"Protocol turns percentage-based programming, athlete tracking and your whole coaching business into one precise system — so you can program faster and coach better."*
   - CTA: **Start free trial** + microcopy. Secondary ghost: "See how it works".
   - Visual: real dark app screenshot (calendar builder or session editor) in the phone/desktop frame.

3. **Trust bar** — *honest v1:* skip fake logos. Use a one-line credibility statement + 3 product stats that are true and impressive from the build (e.g. *"622-movement exercise library · auto-calculated loads · PRs, nutrition & health in one place"*). Swap to a logo wall / coach count once real.

4. **Platform overview** — H2: **"Everything your coaching runs on, in one place."** Sub: *"Stop stitching together spreadsheets, chat apps and PDF programs. Protocol is programming, tracking, nutrition, messaging and payments in a single dark, fast, athlete-ready app."* + wide product screenshot.

5. **Six-feature grid** (icon + headline + benefit) — map to real product:
   - **Percentage-based programming that just works** — *"Write 5×3 @ 80% once. Every athlete sees their exact working weight, auto-calculated from their own maxes."*
   - **Section-based session builder** — *"Program the way you actually write — warm-up, strength, accessory, conditioning — with supersets, tempo and rest."*
   - **PRs & metrics engine** — *"Maxes, rep-maxes and benchmarks tracked automatically, with PR detection and shareable milestones."*
   - **Nutrition, built in** — *"Macro targets, a food database, recipes and a meal planner — no second app."*
   - **Messaging & check-ins** — *"Coach ↔ athlete chat, forms and check-ins, with realtime delivery and push."*
   - **Sell your coaching** — *"A branded storefront with Stripe payments — subscriptions, one-offs and fixed programs."*

6. **Feature spotlights** (alternating text/screenshot) — lead with the **wedge**:
   - *Spotlight A — Percentage programming / auto-load:* the differentiator TrueCoach/FITR don't lead on. Show a session with `5×3 @ 80% → 100 kg` resolved per athlete.
   - *Spotlight B — The calendar builder:* drag/select/copy-paste programming across athletes.
   - *Spotlight C — Metrics & PR celebration:* graph + PR share card.
   - *Spotlight D — Athlete app (PWA):* phone frame, today's session + logging.

7. **Why Protocol / differentiator band** — H2: **"Percentage-based loading, done right."** Short copy on the core problem (percentages are broken in other tools; Protocol treats sets × reps × % of 1RM as first-class and stores maxes natively) + "built by a working coach" line. CTA → `/why-protocol`.

8. **Social proof (honest v1)** — founder quote / mission statement now; a testimonials carousel scaffold ready for real coach quotes. Optional "founding coaches" invite.

9. **Pricing preview** — 3 representative tiers (see 4.4) + "See full pricing" → `/pricing`.

10. **Final CTA** — H2: **"Start coaching on Protocol."** Sub: *"Program your first week in minutes."* CTA + 3 bullets: *No card required · Full access for 14 days · Choose a plan when you're ready.*

11. **Footer** — columns: **Product** (Features, Pricing, Why Protocol, Log in) · **Company** (About — later, Blog — later) · **Legal** (Privacy, Terms) · socials (as they exist). `[ P ]` mark + "© 2026 Protocol". Keep it lean for v1.

### 4.3 Feature-page template (phase 2)
Reuse FITR's rhythm: feature H1 + benefit subhead + supporting paragraph → alternating text/screenshot sub-sections (each: heading, benefit tagline, 1–2 sentences, optional deep link) → cross-feature nav tiles → trial CTA footer. One React layout component, content-driven.

### 4.4 Pricing page — mapped to Protocol's real model

> Use Protocol's **actual** commercial model (SPEC §4.10 E), not FITR/TrueCoach's. Protocol→coach subscription by **athlete-slot tier** + 14-day trial + global paywall switch; coach→athlete monetisation via the **storefront** (Stripe Connect, ~5% platform fee); **£10/mo coach-seat** add-on for teams.

- Header: **"Simple pricing that scales with your roster."** / *"Start free. Pay by how many athletes you coach. Cancel anytime."*
- **Tiers by athlete-slot cap** (present the real `plan_tier` values — 5 / 10 / 25 / 50 / Unlimited). Monthly/annual toggle; GBP default. Recommend highlighting one tier "Most popular".
- Shared inclusions (everything the product does): programming + calendar builder, metrics/PRs, nutrition, messaging, forms, storefront, health dashboards, movement + benchmark libraries, PWA athlete app.
- Add-ons / notes: **£10/mo per extra coach seat** (Teams); **storefront** uses your own Stripe (Connect), ~5% platform fee; **athletes are free.**
- Reassurance: **14-day full-access trial, no card**; no contract; change plan anytime.
- FAQ (adapt from both references): what's an athlete slot · do athletes pay · upgrade/downgrade · how storefront payments work · do I need Stripe · what happens after the trial · team seats.

> ⚠️ **Confirm real prices before publishing.** The £-per-tier amounts aren't in the spec text here — pull them from the live `platform_settings` / Stripe products or ask the founder. Don't guess public prices.

### 4.5 Design system (site)

Reuse the app's brand tokens so the site and product feel identical:
- **Dark by default** — `--color-bg-base #0A0A0B`, surfaces `#1B1B1F` / `#27272C`, borders `#3C3C43`/`#54545C`, text `#F5F5F7`/`#A8A8B0`/`#8A8A93`.
- **Cobalt accent** `#3B82F6` (hover `#2563EB`), used sparingly — CTAs, links, the brackets, key numerics.
- **Type:** Orbitron (`--font-orbitron`) for the wordmark + brand-moment headlines; Inter (`--font-inter`) for everything else; tabular figures for numerics.
- **Brand device:** `[ … ]` cobalt brackets around eyebrows/section labels/key numerics; the `[ P ]` `Mark.tsx` (already token-driven).
- **Motion:** subtle, functional (~150ms), motion-reduce aware — carousels/reveals only where they earn it.
- **Add the tokens to `globals.css`** as `:root` custom properties (the site currently hardcodes hex; port the app's token block so `Mark.tsx`'s `var(--color-accent)` etc. resolve).

### 4.6 Funnel / CTA strategy
- **One primary CTA** everywhere: **Start free trial** → `app.protocolapp.uk/auth/signup`. Consistent microcopy: *"14-day full access. No card required."*
- **Secondary:** "Log in" (header) → `app.protocolapp.uk/auth/signin`; "See pricing"; feature deep-links.
- Consider a lightweight **email capture** (TrueCoach-style) only if we want a waitlist/nurture; otherwise send straight to signup (Protocol's trial is self-serve, so direct-to-signup is cleaner).
- Repeat the trial CTA in hero, mid-page, and final section.

### 4.7 Build / tech notes
- **Read `node_modules/next/dist/docs/` first** (per `AGENTS.md`) — this Next 16 differs from training data.
- Server components by default; Tailwind v4 (`@theme`/`@import "tailwindcss"`); `next/font` already wired.
- Reuse `Mark.tsx`; port brand tokens into `globals.css`; keep `/privacy` + `/terms`.
- Images: use real, current **dark** app screenshots (calendar builder, session editor, athlete home, metrics, nutrition). Optimise as AVIF/WebP; Next `<Image>`.
- SEO: per-page `metadata` (title/description/OG), sitemap, favicon (brand mark).
- Accessibility + performance: WCAG AA contrast (already dark-friendly), Lighthouse 90+, reduced-motion support.
- Deploy: existing Vercel project → `protocolapp.uk`.

---

## Part 5 — Open questions for the founder

1. **Vocabulary:** lead with **"athletes"** (on-brand, S&C audience) or soften to **"clients"** for broader PT SEO? (Recommend: athletes in brand copy, "clients/athletes" in SEO meta.)
2. **Real pricing:** confirm the public monthly/annual **£ figures** per tier (5/10/25/50/Unlimited) and whether we show per-tier caps like the competitors.
3. **Social proof at launch:** do we have **any** real coach quotes / beta users to feature, or run a "founding coaches" angle until we do?
4. **Email capture vs. direct signup:** waitlist/nurture, or straight to the app's free trial?
5. **Niche SEO pages** (crossfit / hyrox / strength-and-conditioning / hybrid): in scope for launch or phase 2?
6. **Screenshots:** OK to use the live FORGED/coach data captures, or do we need a clean demo account for marketing shots?
7. **Scope for v1:** ship `/ + /features + /pricing + /why-protocol` first, then feature deep-dives — agreed?

---

*Sources researched: coachwithfitr.com (home, /pricing, /why-fitr, /programming); truecoach.co (home, /pricing). Captured July 2026 for a close-adaptation rebuild.*
