/**
 * Single source of content for the Protocol marketing site. Pages compose from
 * this so copy, nav and pricing live in one place. See docs/WEBSITE_RESEARCH_AND_PLAN.md.
 *
 * Vocabulary: "athletes" (not clients). Voice: precise, confident, no emoji,
 * sentence case (the PROTOCOL wordmark is the only all-caps).
 */

export const SITE = {
  name: "Protocol",
  tagline: "The coaching protocol.",
  positioning: "The operating system for serious coaches.",
  appUrl: "https://app.protocolapp.uk",
  signupUrl: "https://app.protocolapp.uk/auth/signup",
  signinUrl: "https://app.protocolapp.uk/auth/signin",
  trialMicrocopy: "14-day full access. No card required.",
  ctaPrimary: "Start free trial",
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "Why Protocol", href: "/why-protocol" },
  { label: "Pricing", href: "/pricing" },
  { label: "For coaches", href: "/for/strength-and-conditioning" },
];

/** Feature grid on the homepage (icon keys map to lucide in components/ui/Icon). */
export interface FeatureCard {
  icon: string;
  title: string;
  body: string;
}

export const HOME_FEATURES: FeatureCard[] = [
  {
    icon: "gauge",
    title: "Percentage-based programming that just works",
    body: "Write 5×3 @ 80% once. Every athlete sees their exact working weight, auto-calculated from their own maxes — no spreadsheets, no maths.",
  },
  {
    icon: "dumbbell",
    title: "Section-based session builder",
    body: "Program the way you actually write — warm-up, strength, accessory, conditioning — with supersets, tempo, rest and a drag-and-drop calendar.",
  },
  {
    icon: "trophy",
    title: "PRs & metrics engine",
    body: "Maxes, rep-maxes and benchmarks tracked automatically, with PR detection, history graphs and shareable milestones.",
  },
  {
    icon: "utensils",
    title: "Nutrition, built in",
    body: "Macro targets, a UK food database, recipes and a weekly meal planner — no second app for you or your athletes.",
  },
  {
    icon: "message",
    title: "Messaging & check-ins",
    body: "Coach-to-athlete chat, forms and check-ins with realtime delivery and push. Every conversation in one place.",
  },
  {
    icon: "store",
    title: "Sell your coaching",
    body: "A branded storefront with Stripe payments — subscriptions, one-offs and fixed programs, on your own account.",
  },
];

/** Alternating text/screenshot spotlights on the homepage. */
export interface Spotlight {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

export const SPOTLIGHTS: Spotlight[] = [
  {
    eyebrow: "Auto-calculated loads",
    title: "Percentages, finally done right",
    body: "Most tools treat percentages as an afterthought. Protocol makes sets × reps × % of 1RM a first-class concept and stores every athlete's maxes natively — so 5×3 @ 80% resolves to their real working weight the moment they open the session.",
    image: "/screens/session-percentages.png",
    imageAlt: "A Protocol session showing 5×3 @ 80% auto-calculated to an athlete's working weight",
  },
  {
    eyebrow: "The calendar builder",
    title: "Program a whole roster, fast",
    body: "Build sessions on a colour-coded calendar with drag, multi-select, and copy-paste across athletes and weeks. Rest days, habits, benchmarks and check-ins live right alongside the training.",
    image: "/screens/calendar-builder.png",
    imageAlt: "The Protocol coach calendar builder with colour-coded sessions",
  },
  {
    eyebrow: "Metrics & PRs",
    title: "Progress you can actually see",
    body: "PRs, logs, benchmarks and bodyweight in one place per athlete. New maxes are detected from completed sessions automatically, celebrated in-app, and ready to share.",
    image: "/screens/metrics.png",
    imageAlt: "A Protocol athlete's metrics page with history graphs and PRs",
  },
  {
    eyebrow: "The athlete app",
    title: "An app athletes actually open",
    body: "A fast, phone-first experience: today's session with working weights, one-tap logging, a built-in gym timer, streaks, nutrition and health — installable to the home screen.",
    image: "/screens/athlete-home.png",
    imageAlt: "The Protocol athlete home screen on a phone",
  },
];

/** Honest, product-true stats for the trust bar (no fabricated coach counts). */
export const TRUST_STATS: { value: string; label: string }[] = [
  { value: "622", label: "movement exercise library" },
  { value: "1RM→%", label: "auto-calculated working weights" },
  { value: "All-in-one", label: "programming, tracking, nutrition & payments" },
];

/** Feature categories for /features (each links to a deep-dive at /features/[slug]). */
export interface FeatureCategory {
  slug: string;
  icon: string;
  title: string;
  summary: string;
}

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  { slug: "programming", icon: "calendar", title: "Programming", summary: "Section-based sessions, percentage loading, supersets, benchmarks and a drag-and-drop calendar." },
  { slug: "metrics", icon: "trophy", title: "Metrics & PRs", summary: "Maxes, rep-maxes, benchmarks and bodyweight with auto PR detection and history graphs." },
  { slug: "nutrition", icon: "utensils", title: "Nutrition", summary: "Macro targets, a food database, recipes, a meal planner and body-composition tracking." },
  { slug: "messaging", icon: "message", title: "Messaging & check-ins", summary: "Realtime coach-to-athlete chat, forms and check-ins with push notifications." },
  { slug: "storefront", icon: "store", title: "Storefront & payments", summary: "A branded storefront with Stripe payments — subscriptions, one-offs and fixed programs." },
  { slug: "teams", icon: "users", title: "Teams", summary: "Add assistant coaches with roles and roster access, and grow beyond a one-person operation." },
];

/** Deep-dive content per feature page (/features/[slug]). */
export interface FeatureSection {
  title: string;
  tagline: string;
  body: string;
  image?: string;
}
export interface FeaturePage {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: FeatureSection[];
}

export const FEATURE_PAGES: FeaturePage[] = [
  {
    slug: "programming",
    title: "Programming",
    subtitle: "Build serious training, the way you actually write it.",
    intro: "Protocol's session model matches how coaches think — labelled sections, real prescriptions, and loads that calculate themselves.",
    sections: [
      { title: "Section-based sessions", tagline: "Warm-up, strength, accessory, conditioning.", body: "Every session is built from labelled sections with their own format, intent and RX+ flag — so a program reads the way you'd write it on paper.", image: "/screens/session-editor.png" },
      { title: "Percentage loading", tagline: "5×3 @ 80% → their working weight.", body: "Prescribe as a percentage of any max and Protocol resolves the exact load per athlete from their stored maxes. Change a max, the whole program updates.", image: "/screens/session-percentages.png" },
      { title: "The calendar builder", tagline: "Drag, select, copy, paste.", body: "Program on a colour-coded calendar. Copy a day or a whole week across athletes, drag sessions to move them, and drop in rest days, habits and benchmarks.", image: "/screens/calendar-builder.png" },
      { title: "Benchmarks & a global library", tagline: "The Girls, Heroes and 600+ movements.", body: "Import benchmark workouts as locked sessions, and pull from a global library of 622 movements with attributed demo videos.", image: "/screens/library.png" },
    ],
  },
  {
    slug: "metrics",
    title: "Metrics & PRs",
    subtitle: "Every number that matters, in one place per athlete.",
    intro: "Maxes, rep-maxes, benchmark results and bodyweight — tracked, graphed and celebrated automatically.",
    sections: [
      { title: "Auto PR detection", tagline: "New maxes, spotted for you.", body: "When an athlete completes a session, Protocol detects new maxes and rep-maxes, flags the PR and updates their working weights everywhere.", image: "/screens/metrics.png" },
      { title: "History graphs", tagline: "See the trajectory.", body: "Every metric has a history graph so you and the athlete can see progress over months, not just the last session.", image: "/screens/metrics-graph.png" },
      { title: "Shareable milestones", tagline: "Celebrate the wins.", body: "PRs get an in-app celebration and a share card — retention you can feel.", image: "/screens/pr-card.png" },
    ],
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    subtitle: "Coaching that doesn't stop at the barbell.",
    intro: "Set macro targets, build recipes and plan the week — all inside the same app your athletes already train in.",
    sections: [
      { title: "Macro targets", tagline: "Mifflin, Harris or Katch.", body: "Calculate targets from real formulas with tiers for training and rest days, and publish them to the athlete.", image: "/screens/nutrition-targets.png" },
      { title: "Food database & diary", tagline: "Thousands of UK foods.", body: "A searchable food database plus barcode lookup, so logging is quick and the numbers are right.", image: "/screens/nutrition-diary.png" },
      { title: "Meal planner & shopping list", tagline: "Plan the week.", body: "Build a weekly plan and turn it into a shopping list, with recipes your athletes can follow.", image: "/screens/meal-planner.png" },
    ],
  },
  {
    slug: "messaging",
    title: "Messaging & check-ins",
    subtitle: "Stay connected without the group-chat chaos.",
    intro: "Realtime chat, forms and check-ins keep every conversation and answer in one place.",
    sections: [
      { title: "Coach-to-athlete chat", tagline: "Realtime, with push.", body: "Direct messages and groups with photos, video and GIFs, delivered in realtime and backed by push notifications.", image: "/screens/messaging.png" },
      { title: "Forms & check-ins", tagline: "Ask the right questions.", body: "Build editable forms and schedule check-ins, then read answers inline against the athlete's week.", image: "/screens/forms.png" },
    ],
  },
  {
    slug: "storefront",
    title: "Storefront & payments",
    subtitle: "Turn your coaching into a business.",
    intro: "A branded storefront on your own Stripe account — subscriptions, one-offs and fixed programs, no extra tools.",
    sections: [
      { title: "Your branded storefront", tagline: "Sell at your own link.", body: "Publish products to a branded page with your logo and accent colour, and invite athletes to buy in a few clicks.", image: "/screens/storefront.png" },
      { title: "Payments, automated", tagline: "Powered by Stripe.", body: "Take card payments through your own Stripe account. Subscriptions, one-off purchases, coupons and a payments ledger, all built in.", image: "/screens/payments.png" },
    ],
  },
  {
    slug: "teams",
    title: "Teams",
    subtitle: "Grow beyond a one-person operation.",
    intro: "Add assistant coaches with roles and roster access when it's time to scale.",
    sections: [
      { title: "Roles & roster access", tagline: "The right access for each coach.", body: "Invite coaches as owner, coach or viewer, and control which athletes each of them can see and manage.", image: "/screens/teams.png" },
      { title: "Self-serve invites", tagline: "Onboard in minutes.", body: "Send a branded invite; new coaches set a password and join your team without leaving the flow.", image: "/screens/team-invite.png" },
    ],
  },
];

/** Niche landing pages for /for/[niche] (SEO). */
export interface Niche {
  slug: string;
  audience: string;
  title: string;
  subtitle: string;
  points: string[];
}

export const NICHES: Niche[] = [
  {
    slug: "strength-and-conditioning",
    audience: "S&C coaches",
    title: "Coaching software built for strength & conditioning",
    subtitle: "Percentage-based loading, rep-maxes and section-based programming — the tools S&C coaches actually need.",
    points: [
      "Auto-calculated working weights from each athlete's maxes",
      "Rep-maxes and 1RMs tracked natively, with PR detection",
      "Section-based sessions with tempo, rest and supersets",
      "A 622-movement library with demo videos",
    ],
  },
  {
    slug: "crossfit",
    audience: "CrossFit coaches",
    title: "Programming software for CrossFit coaches",
    subtitle: "Benchmarks, metcons and strength in one place — with a built-in gym timer your athletes will use.",
    points: [
      "The Girls, Heroes and custom benchmarks as ready-made sessions",
      "For-time, AMRAP, EMOM and interval scoring",
      "A built-in workout timer with intervals and voice cues",
      "Leaderboards, streaks and PR celebrations for engagement",
    ],
  },
  {
    slug: "hyrox",
    audience: "HYROX & hybrid coaches",
    title: "Software for HYROX and hybrid coaches",
    subtitle: "Blend strength, conditioning and running in one program — and track every number that matters.",
    points: [
      "Mix strength percentages with conditioning and monostructural work",
      "Track times, distances, calories and rounds as metrics",
      "Program groups and 1-to-1 from the same calendar",
      "Nutrition and health tracking built in",
    ],
  },
  {
    slug: "online-coaching",
    audience: "Online coaches",
    title: "The all-in-one platform for online coaches",
    subtitle: "Programming, tracking, messaging and payments — run your whole online business in one place.",
    points: [
      "A branded storefront with Stripe subscriptions and one-offs",
      "Realtime messaging, forms and check-ins",
      "Release schedules so athletes see work when you choose",
      "A phone-first athlete app, installable to the home screen",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* PRICING — fill PRICES with the real figures, everything else follows */
/* ------------------------------------------------------------------ */

/**
 * Prices mirror the app's plan tiers (protocol repo `src/lib/plans.ts`) — GBP per
 * month, athletes-billed with a per-athlete rate that steps down as the tier
 * grows. The app is monthly-only (no annual tier), so the site is too.
 * `PRICING_CONFIRMED` hides the placeholder note; keep in sync with the app if
 * plan prices change, and confirm before the paywall goes live.
 */
export const PRICING_CONFIRMED = true;

export interface PriceTier {
  id: string;
  name: string;
  athleteCap: string;
  monthly: number | null; // GBP/month, null = "Contact us"
  perAthlete: string | null; // honest per-athlete rate subtext
  tagline: string;
  highlighted?: boolean;
}

export const PRICES: PriceTier[] = [
  { id: "5", name: "Starter", athleteCap: "Up to 5 athletes", monthly: 12.5, perAthlete: "£2.50 per athlete", tagline: "Prove the model with your first athletes." },
  { id: "10", name: "Coach", athleteCap: "Up to 10 athletes", monthly: 23, perAthlete: "£2.30 per athlete", tagline: "For a growing one-to-one roster." },
  { id: "25", name: "Studio", athleteCap: "Up to 25 athletes", monthly: 52.5, perAthlete: "£2.10 per athlete", tagline: "Scale groups and 1-to-1 together.", highlighted: true },
  { id: "50", name: "Pro", athleteCap: "Up to 50 athletes", monthly: 92.5, perAthlete: "£1.85 per athlete", tagline: "Serious volume, one system." },
  { id: "unlimited", name: "Unlimited", athleteCap: "Unlimited athletes", monthly: 149, perAthlete: null, tagline: "No ceiling on your roster." },
];

/** Everything included in every plan. */
export const PRICING_INCLUDES: string[] = [
  "Section-based programming & the calendar builder",
  "Percentage loading with auto-calculated working weights",
  "Metrics, PRs, rep-maxes & benchmark tracking",
  "Nutrition: macros, food database, recipes & meal planner",
  "Messaging, forms & check-ins",
  "Health & activity dashboards",
  "A 622-movement library & benchmark library",
  "The phone-first athlete app (installable PWA)",
];

export const PRICING_ADDONS: { title: string; body: string }[] = [
  { title: "Storefront & payments", body: "Sell programs on your own Stripe account — subscriptions, one-offs and fixed programs. A small platform fee applies per transaction." },
  { title: "Extra coach seats", body: "Add assistant coaches to your team for a small monthly fee per seat." },
];

export const PRICING_FAQ: { q: string; a: string }[] = [
  { q: "What counts as an athlete?", a: "An athlete is a person you're actively coaching in Protocol. Your plan is sized by how many active athletes you have at once." },
  { q: "Do my athletes pay for an account?", a: "No. Athlete accounts are always free — you only pay for your coaching plan." },
  { q: "Can I change plan later?", a: "Yes. Upgrade or downgrade anytime as your roster grows or changes; there's no contract." },
  { q: "How does the free trial work?", a: "You get full access for 14 days, no card required. Choose a plan whenever you're ready." },
  { q: "How do storefront payments work?", a: "Payments run through your own Stripe account, so you get paid directly. A small platform fee applies per transaction." },
  { q: "Can I add other coaches?", a: "Yes — Teams lets you add assistant coaches with roles and roster access, billed per extra seat." },
];

export const FINAL_CTA = {
  title: "Start coaching on Protocol.",
  subtitle: "Program your first week in minutes.",
  bullets: ["No card required", "Full access for 14 days", "Choose a plan when you're ready"],
};

export const FOOTER = {
  columns: [
    {
      heading: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Why Protocol", href: "/why-protocol" },
        { label: "Pricing", href: "/pricing" },
        { label: "Log in", href: SITE.signinUrl },
      ],
    },
    {
      heading: "For coaches",
      links: [
        { label: "Strength & conditioning", href: "/for/strength-and-conditioning" },
        { label: "CrossFit", href: "/for/crossfit" },
        { label: "HYROX & hybrid", href: "/for/hyrox" },
        { label: "Online coaching", href: "/for/online-coaching" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy policy", href: "/privacy" },
        { label: "Terms of service", href: "/terms" },
      ],
    },
  ],
};
