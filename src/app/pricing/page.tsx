import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/brand";
import { Section, SectionHeading } from "@/components/site/Section";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { FinalCta } from "@/components/site/FinalCta";
import {
  PRICING_INCLUDES,
  PRICING_ADDONS,
  PRICING_FAQ,
  PRICING_CONFIRMED,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing that scales with your roster. Start free for 30 days, then pay per athlete - from £12.50/mo, capped at £100. Athletes are always free.",
};

export default function PricingPage() {
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
            <Eyebrow>Pricing</Eyebrow>
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            Simple pricing that scales with your roster.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Start free for 30 days, then pay for the athletes you coach - no
            tiers, no cliffs, and never more than £100 a month. Athletes are
            always free.
          </p>
        </Container>
      </section>

      <Section>
        {!PRICING_CONFIRMED && (
          <div className="mx-auto mb-10 max-w-2xl rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-center text-sm text-amber-300">
            Final pricing is being confirmed - the figures below are placeholders.
          </div>
        )}
        <PricingCalculator />
      </Section>

      {/* What's included */}
      <div className="border-t border-border-subtle bg-bg-surface/30">
        <Section>
          <SectionHeading
            eyebrow="Every plan includes"
            title="The whole product, on every plan."
            subtitle="Plans differ only by how many athletes you coach — the features don't."
          />
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
            {PRICING_INCLUDES.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-sm text-text-secondary">{f}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Add-ons */}
      <Section className="border-t border-border-subtle">
        <SectionHeading eyebrow="Add-ons" title="Grow when you're ready." />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {PRICING_ADDONS.map((a) => (
            <div
              key={a.title}
              className="rounded-xl border border-border-subtle bg-bg-surface p-6 card-elevation"
            >
              <h3 className="text-base font-medium text-text-primary">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <div className="border-t border-border-subtle bg-bg-surface/30">
        <Section>
          <SectionHeading eyebrow="Questions" title="Pricing FAQ" />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-border-subtle">
            {PRICING_FAQ.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left text-sm font-medium text-text-primary">
                  {f.q}
                  <span className="ml-4 text-text-tertiary transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{f.a}</p>
              </details>
            ))}
          </div>
        </Section>
      </div>

      <FinalCta />
    </>
  );
}
