import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Screenshot } from "@/components/ui/Screenshot";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/brand";
import { Section } from "@/components/site/Section";
import { FinalCta } from "@/components/site/FinalCta";
import { FEATURE_PAGES, FEATURE_CATEGORIES } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return FEATURE_PAGES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = FEATURE_PAGES.find((f) => f.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.subtitle };
}

export default async function FeatureDeepDive({ params }: Props) {
  const { slug } = await params;
  const page = FEATURE_PAGES.find((f) => f.slug === slug);
  if (!page) notFound();

  const others = FEATURE_CATEGORIES.filter((c) => c.slug !== slug);

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
            <Eyebrow>{page.title}</Eyebrow>
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
            {page.subtitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-text-secondary">{page.intro}</p>
        </Container>
      </section>

      {page.sections.map((s, i) => (
        <Section key={s.title} className={i % 2 === 1 ? "bg-bg-surface/30" : ""}>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <Eyebrow>{s.tagline}</Eyebrow>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
                {s.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-secondary">{s.body}</p>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <Screenshot src={s.image} alt={`${page.title}: ${s.title}`} />
            </div>
          </div>
        </Section>
      ))}

      {/* Cross-feature nav */}
      <div className="border-t border-border-subtle bg-bg-surface/30">
        <Section>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-text-primary">
            Explore more of Protocol
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
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
      </div>

      <FinalCta />
    </>
  );
}
