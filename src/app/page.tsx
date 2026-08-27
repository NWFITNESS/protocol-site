import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Screenshot } from "@/components/ui/Screenshot";
import { LifestyleShot } from "@/components/ui/LifestyleShot";
import { Eyebrow, BracketWrap } from "@/components/brand";
import { Section, SectionHeading } from "@/components/site/Section";
import { FinalCta } from "@/components/site/FinalCta";
import {
  SITE,
  HOME_FEATURES,
  SPOTLIGHTS,
  TRUST_STATS,
  PRICES,
} from "@/lib/site";
import { formatTierPrice } from "@/lib/pricing";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(59,130,246,0.16), transparent 70%)",
          }}
          aria-hidden
        />
        <Container className="relative pt-16 pb-8 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Eyebrow>Built by a coach, for coaches</Eyebrow>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">
              The operating system for serious coaches.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary">
              Protocol turns percentage-based programming, athlete tracking and
              your whole coaching business into one precise system - so you can
              program faster and coach better.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={SITE.signupUrl} className="px-7 py-3 text-base">
                {SITE.ctaPrimary}
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/features" variant="outline" className="px-7 py-3 text-base">
                See how it works
              </Button>
            </div>
            <p className="mt-4 text-sm text-text-tertiary">{SITE.trialMicrocopy}</p>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div
              className="pointer-events-none absolute -inset-x-6 -top-10 bottom-6 -z-10 rounded-[3rem]"
              style={{
                background:
                  "radial-gradient(ellipse 55% 60% at 50% 40%, rgba(59,130,246,0.22), transparent 70%)",
              }}
              aria-hidden
            />
            <LifestyleShot
              src="/screens/laptop-phone.png"
              mobileSrc="/screens/coach-programming-phone.png"
              alt="Protocol open on a coach's laptop and an athlete's phone in the gym"
              priority
              className="mx-auto max-w-xs sm:max-w-none"
            />
          </div>
        </Container>
      </section>

      {/* Trust stat band */}
      <Container>
        <div className="grid grid-cols-1 gap-6 border-y border-border-subtle py-8 sm:grid-cols-3">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="nums text-2xl font-semibold text-text-primary sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-text-tertiary">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>

      {/* Platform overview */}
      <Section>
        <SectionHeading
          eyebrow="One system"
          title="Everything your coaching runs on, in one place."
          subtitle="Stop stitching together spreadsheets, chat apps and PDF programs. Protocol is programming, tracking, nutrition, messaging and payments in a single dark, fast, athlete-ready app."
        />
      </Section>

      {/* Feature grid */}
      <Section className="pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border-subtle bg-bg-surface p-6 card-elevation"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                <Icon name={f.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-medium text-text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Spotlights - alternating text/screenshot */}
      <div className="border-t border-border-subtle">
        {SPOTLIGHTS.map((s, i) => (
          <Section key={s.title} className={i % 2 === 1 ? "bg-bg-surface/30" : ""}>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Eyebrow>{s.eyebrow}</Eyebrow>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">{s.body}</p>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <Screenshot src={s.image} alt={s.imageAlt} variant={i >= 2 ? "phone" : "browser"} />
              </div>
            </div>
          </Section>
        ))}
      </div>

      {/* Differentiator band */}
      <div className="border-t border-border-subtle bg-bg-surface/30">
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Why Protocol</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              <BracketWrap>Percentage-based loading, done right.</BracketWrap>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
              Percentages are broken in most coaching tools. Protocol treats sets ×
              reps × % of 1RM as a first-class concept and stores every athlete&apos;s
              maxes natively - so working weights are always right, and updating a max
              updates the whole program. It&apos;s the difference between software built
              for coaches and software a coach built.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/why-protocol" variant="outline">
                See what makes Protocol different
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <LifestyleShot
              src="/screens/Coach-programming-laptop.png"
              alt="A coach programming a session in Protocol on a laptop in the gym"
            />
          </div>
        </Section>
      </div>

      {/* Pricing preview */}
      <Section className="border-t border-border-subtle">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with your roster."
          subtitle="Start free for 30 days, then pay per athlete - from £12.50/mo, never more than £100. Athletes are always free."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {PRICES.map((t) => {
            const price = formatTierPrice(t);
            return (
              <div
                key={t.id}
                className={`rounded-xl border p-5 text-center ${
                  t.highlighted
                    ? "border-accent/50 bg-accent-muted"
                    : "border-border-subtle bg-bg-surface"
                }`}
              >
                <div className="text-sm font-medium text-text-primary">{t.name}</div>
                <div className="mt-2 nums text-lg font-semibold text-text-primary">
                  {price.amount}
                  <span className="text-xs font-normal text-text-tertiary">{price.suffix}</span>
                </div>
                <div className="mt-1 nums text-xs text-text-tertiary">{t.perAthlete ?? "capped"}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/pricing">
            See full pricing
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
