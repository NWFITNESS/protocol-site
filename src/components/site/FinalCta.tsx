import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FINAL_CTA, SITE } from "@/lib/site";

/** Reusable bottom-of-page conversion band. */
export function FinalCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface px-6 py-14 text-center card-elevation sm:px-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.14), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
              {FINAL_CTA.title}
            </h2>
            <p className="mt-3 text-base text-text-secondary sm:text-lg">
              {FINAL_CTA.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={SITE.signupUrl} className="px-7 py-3 text-base">
                {SITE.ctaPrimary}
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {FINAL_CTA.bullets.map((b) => (
                <li key={b} className="flex items-center gap-1.5 text-sm text-text-tertiary">
                  <Check className="size-4 text-accent" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
