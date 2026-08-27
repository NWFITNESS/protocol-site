import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/brand";
import { Section } from "@/components/site/Section";
import { FinalCta } from "@/components/site/FinalCta";
import { FEATURE_CATEGORIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything Protocol does - section-based programming, percentage loading, metrics and PRs, nutrition, messaging, a storefront and teams. All in one app.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border-subtle">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(59,130,246,0.14), transparent 70%)",
          }}
          aria-hidden
        />
        <Container className="relative py-20 text-center">
          <div className="flex justify-center">
            <Eyebrow>Features</Eyebrow>
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            The most complete toolkit for serious coaching.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">
            Programming, tracking, nutrition, communication and payments -
            engineered to work as one system, not a pile of add-ons.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/features/${c.slug}`}
              className="group rounded-xl border border-border-subtle bg-bg-surface p-6 transition-colors hover:border-border-strong card-elevation"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent-muted text-accent">
                <Icon name={c.icon} className="size-5" />
              </span>
              <h2 className="mt-4 flex items-center gap-1.5 text-base font-medium text-text-primary">
                {c.title}
                <ArrowRight className="size-4 text-text-tertiary transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{c.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <SectionHeadingSpacer />
      <FinalCta />
    </>
  );
}

function SectionHeadingSpacer() {
  return <div className="border-t border-border-subtle" />;
}
