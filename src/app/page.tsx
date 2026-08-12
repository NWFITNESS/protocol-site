import type { ReactNode } from "react";
import { Eyebrow, BracketWrap } from "@/components/brand";
import { Reveal } from "@/components/Reveal";
import { WaitlistForm } from "@/components/WaitlistForm";

/* ── Inline line icons (no icon dependency on this branch) ─────────────────── */
type IconProps = { className?: string };
const svg = (children: ReactNode) => ({ className = "size-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    {children}
  </svg>
);
const Icons = {
  users: svg(<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>),
  layers: svg(<><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>),
  palette: svg(<><circle cx="13.5" cy="6.5" r="1.5" /><circle cx="17.5" cy="10.5" r="1.5" /><circle cx="6.5" cy="12.5" r="1.5" /><path d="M12 2a10 10 0 1 0 0 20 2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 1 2-4h1a4 4 0 0 0 4-4 10 10 0 0 0-9-8Z" /></>),
  grid: svg(<><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11M15 4v16" /></>),
  clipboard: svg(<><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></>),
  utensils: svg(<><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></>),
  timer: svg(<><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" /></>),
  trophy: svg(<><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" /></>),
  store: svg(<><path d="M2 7l1.5-4h17L22 7M4 7v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7M2 7h20M9 21v-6h6v6" /></>),
  message: svg(<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></>),
  spark: svg(<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></>),
};

/* ── Content ───────────────────────────────────────────────────────────────── */
const WORDS = ["Programming", "Nutrition", "Check-ins", "Metrics & PRs", "Messaging", "Payments", "All-access packages", "Workout timer"];

const VALUES = [
  { icon: Icons.users, title: "Built by coaches, not developers", body: "Every feature comes from real coaching, not a product roadmap. If it doesn't help you coach, it isn't here." },
  { icon: Icons.grid, title: "Your whole business, one platform", body: "Programming, athlete tracking, nutrition, check-ins, messaging and payments. Stop stitching five tools together." },
  { icon: Icons.layers, title: "From 1-to-1 to all-access", body: "Coach privately, run group programs, sell fixed-length plans, or launch an all-access package athletes subscribe to." },
  { icon: Icons.palette, title: "Your brand, front and centre", body: "Your logo, your colours, your app. Protocol runs quietly in the background so your business stays yours." },
];

const FEATURES = [
  { icon: Icons.grid, title: "Percentage-based programming", body: "Build sessions in a calendar, drag between days, and let loads auto-calculate from each athlete's maxes." },
  { icon: Icons.clipboard, title: "Bespoke forms & check-ins", body: "Design your own check-in forms, drop them into the schedule, and reply in a two-way thread." },
  { icon: Icons.utensils, title: "Fully integrated nutrition", body: "Set calorie and macro targets with the built-in calculator, build recipes and meal plans, alongside training." },
  { icon: Icons.timer, title: "Built-in workout timer", body: "For Time, AMRAP, EMOM, Tabata and intervals with beeps and voice cues. No second app on the gym floor." },
  { icon: Icons.trophy, title: "Progress & PRs", body: "Track every metric, auto-detect personal records from logged sessions, and celebrate them with your athletes." },
  { icon: Icons.store, title: "Payments & storefront", body: "Sell programs and packages, take card payments through Stripe, and get paid without leaving Protocol." },
];

const STEPS = [
  { n: "01", title: "Join the waitlist", body: "Takes about thirty seconds. Only your name and email are required." },
  { n: "02", title: "Get early access", body: "We invite coaches in waves. When your spot opens, your 14-day free trial is ready." },
  { n: "03", title: "Refer and earn", body: "Share your link. For every coach who joins through it, you get two months free." },
];

const FAQ = [
  { q: "When does Protocol launch?", a: "We're onboarding coaches in waves. Join the waitlist and we'll invite you the moment your spot opens." },
  { q: "What will it cost?", a: "Plans start from £12.50 a month and scale with your athlete count. Every waitlist member gets a 14-day free trial, no card required." },
  { q: "Who is Protocol for?", a: "Online coaches across fitness, strength, nutrition, health and wellbeing, from solo coaches to full teams." },
  { q: "How does the 2 months free work?", a: "After you join, you'll get a personal share link. When a coach signs up through it and starts their trial, we add two months to your plan, free." },
];

/* ── Layout helpers ──────────────────────────────────────────────────────── */
function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* ambient cobalt aurora */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="aurora absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.10),transparent_60%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-28">
          <div className="rise">
            <Eyebrow>Built by a coach, for coaches</Eyebrow>
          </div>
          <h1
            className="rise mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-text-primary sm:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Coaching software, finally built by coaches.
          </h1>
          <p
            className="rise mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            Protocol brings your programming, tracking, nutrition, messaging and payments into one
            precise platform for online fitness, nutrition and wellbeing coaches. Join the waitlist
            for early access and a 14-day free trial.
          </p>
          <div className="rise mt-9 flex flex-col items-center gap-4" style={{ animationDelay: "180ms" }}>
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-hover hover:shadow-accent/30"
            >
              Join the waitlist
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <p className="text-sm text-text-tertiary">14-day free trial. No card required.</p>
          </div>
        </div>

        {/* value marquee strip */}
        <div className="relative border-y border-border-subtle/60 bg-bg-surface/30 py-4">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="marquee-track flex shrink-0 items-center gap-10 pr-10 text-sm font-medium uppercase tracking-widest text-text-tertiary">
              {[...WORDS, ...WORDS].map((w, i) => (
                <span key={i} className="flex items-center gap-10">
                  {w}
                  <span className="text-accent">/</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Protocol ─────────────────────────────────────────────────── */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Protocol</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            The tools you actually coach with, in one place.
          </h2>
          <p className="mt-4 text-text-secondary">
            Most coaching software is built by people who've never written a program. Protocol isn't.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="flex h-full gap-4 rounded-2xl border border-border-subtle bg-bg-surface p-6 card-elevation">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-muted text-accent">
                  <v.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-text-primary">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Feature grid ─────────────────────────────────────────────────── */}
      <Section className="border-t border-border-subtle/60 bg-bg-surface/20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Everything in one platform</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Program, track, feed, and get paid.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 70}>
              <div className="h-full rounded-2xl border border-border-subtle bg-bg-surface p-6 card-elevation">
                <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-accent-muted text-accent">
                  <f.icon className="size-5" />
                </span>
                <h3 className="font-semibold text-text-primary">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Referral incentive band ──────────────────────────────────────── */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent-muted/60 to-bg-surface p-10 text-center card-elevation sm:p-14">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]" />
            <span className="floaty mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent text-white">
              <Icons.spark className="size-7" />
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Refer coaches. Get <span className="text-accent">2 months free.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              Bring your network. For every coach who joins Protocol through your personal link, we
              add two months to your plan, on us. Your link appears the moment you join.
            </p>
            <a
              href="#waitlist"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Claim your spot
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <Section className="border-t border-border-subtle/60 bg-bg-surface/20">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Three steps to early access.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border-subtle bg-bg-surface p-7 card-elevation">
                <span className="nums text-sm font-semibold text-accent" style={{ fontFamily: "var(--font-orbitron)" }}>
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text-primary">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Waitlist form ────────────────────────────────────────────────── */}
      <Section id="waitlist" className="scroll-mt-20">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow>Join the waitlist</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Be first on Protocol.
          </h2>
          <p className="mt-4 text-text-secondary">
            Reserve your spot and your 14-day free trial. A few quick questions and you're in.
          </p>
        </Reveal>
        <WaitlistForm />
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section className="border-t border-border-subtle/60">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            <BracketWrap>Good to know</BracketWrap>
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border-subtle/70 rounded-2xl border border-border-subtle bg-bg-surface card-elevation">
          {FAQ.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-text-primary">
                {item.q}
                <span className="text-accent transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
