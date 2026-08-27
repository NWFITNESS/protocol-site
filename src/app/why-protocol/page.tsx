import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Screenshot } from "@/components/ui/Screenshot";
import { Eyebrow, BracketWrap } from "@/components/brand";
import { Section, SectionHeading } from "@/components/site/Section";
import { FinalCta } from "@/components/site/FinalCta";

export const metadata: Metadata = {
  title: "Why Protocol",
  description:
    "Protocol is built by a working coach around the things other tools get wrong: percentage-based loading, how coaches actually write sessions, and progress data scattered across apps.",
};

const PROBLEMS = [
  {
    n: "01",
    title: "Percentage loading is a first-class citizen",
    body: "In most tools, sets × reps × % of 1RM is an afterthought you fake with text. Protocol calculates the working weight for every athlete from their own maxes, updates it when their maxes move, and stores every 1RM and rep-max natively.",
  },
  {
    n: "02",
    title: "Sessions match how coaches actually write",
    body: "Real programming has structure - warm-up, strength, accessory, conditioning. Protocol's section-based session model mirrors how you'd write it on paper, with supersets, tempo, rest and intent, instead of a flat list of exercises.",
  },
  {
    n: "03",
    title: "Every number in one place",
    body: "PRs, logs, benchmark results, bodyweight and metrics live together per athlete - detected automatically from completed sessions, graphed over time, and ready to act on. No more fragments across a spreadsheet, a notes app and a chat thread.",
  },
];

export default function WhyProtocolPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(59,130,246,0.16), transparent 70%)",
          }}
          aria-hidden
        />
        <Container className="relative py-20 text-center">
          <div className="flex justify-center">
            <Eyebrow>Why Protocol</Eyebrow>
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            Software a coach actually built.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Protocol didn&apos;t start as a business plan. It started with a coach
            frustrated by tools that couldn&apos;t handle real programming - so it&apos;s
            built around the things that matter when you coach for a living.
          </p>
        </Container>
      </section>

      {/* The wedge */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>The core problem</Eyebrow>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              <BracketWrap>Percentages, done right.</BracketWrap>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              Write <span className="nums text-text-primary">5×3 @ 80%</span> once.
              Every athlete opens their session to their exact working weight,
              calculated from their own maxes. Hit a new PR and the number updates
              everywhere it&apos;s used. It sounds simple - it&apos;s the thing most
              coaching tools still get wrong.
            </p>
          </div>
          <Screenshot
            src="/screens/session-percentages.png"
            alt="A session showing 5×3 @ 80% auto-calculated to an athlete's working weight"
          />
        </div>
      </Section>

      {/* Three problems solved */}
      <div className="border-t border-border-subtle bg-bg-surface/30">
        <Section>
          <SectionHeading
            eyebrow="What we fix"
            title="Three things other tools get wrong."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {PROBLEMS.map((p) => (
              <div
                key={p.n}
                className="rounded-xl border border-border-subtle bg-bg-surface p-6 card-elevation"
              >
                <span className="nums text-sm font-semibold text-accent">{p.n}</span>
                <h3 className="mt-2 text-base font-medium text-text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Built by a coach */}
      <Section className="border-t border-border-subtle">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Built by a coach, for coaches</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Precise. Confident. Serious. Built.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
            Protocol targets independent strength, S&amp;C, CrossFit and hybrid coaches
            running real rosters - not group-class gyms, not casual fitness apps. Every
            decision favours the coach who cares about the details: the load is right,
            the structure is honest, and the whole business lives in one place.
          </p>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
