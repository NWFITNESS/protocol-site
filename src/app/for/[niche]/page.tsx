import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Screenshot } from "@/components/ui/Screenshot";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/brand";
import { Section } from "@/components/site/Section";
import { FinalCta } from "@/components/site/FinalCta";
import { NICHES, FEATURE_CATEGORIES, SITE } from "@/lib/site";

interface Props {
  params: Promise<{ niche: string }>;
}

export function generateStaticParams() {
  return NICHES.map((n) => ({ niche: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { niche } = await params;
  const n = NICHES.find((x) => x.slug === niche);
  if (!n) return {};
  return { title: n.title, description: n.subtitle };
}

export default async function NichePage({ params }: Props) {
  const { niche } = await params;
  const n = NICHES.find((x) => x.slug === niche);
  if (!n) notFound();

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
        <Container className="relative py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>For {n.audience}</Eyebrow>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
                {n.title}
              </h1>
              <p className="mt-5 text-lg text-text-secondary">{n.subtitle}</p>
              <ul className="mt-8 space-y-3">
                {n.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span className="text-sm text-text-secondary">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={SITE.signupUrl} className="px-6 py-3 text-base">
                  {SITE.ctaPrimary}
                  <ArrowRight className="size-4" />
                </Button>
                <Button href="/features" variant="outline" className="px-6 py-3 text-base">
                  Explore features
                </Button>
              </div>
              <p className="mt-4 text-sm text-text-tertiary">{SITE.trialMicrocopy}</p>
            </div>
            <Screenshot src="/screens/calendar-builder.png" alt={`Protocol for ${n.audience}`} />
          </div>
        </Container>
      </section>

      <Section>
        <h2 className="text-center text-2xl font-semibold tracking-tight text-text-primary">
          Everything you need, in one app
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/features/${c.slug}`}
              className="group rounded-xl border border-border-subtle bg-bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent-muted text-accent">
                <Icon name={c.icon} className="size-4" />
              </span>
              <h3 className="mt-3 flex items-center gap-1.5 text-sm font-medium text-text-primary">
                {c.title}
                <ArrowRight className="size-3.5 text-text-tertiary transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-text-tertiary">{c.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
