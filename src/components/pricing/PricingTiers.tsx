import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRICES, PLAN, SITE } from "@/lib/site";
import { gbp } from "@/lib/pricing";

export function PricingTiers() {
  return (
    <div>
      {/* The per-athlete model in one line */}
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-sm text-text-tertiary">From</span>
          <span className="nums text-5xl font-semibold text-text-primary">{gbp(PLAN.floorMonthly)}</span>
          <span className="text-sm text-text-tertiary">/mo</span>
        </div>
        <p className="mt-4 text-base text-text-secondary">
          {PLAN.headlineRate} per athlete, and it gets cheaper as you grow. Never more than{" "}
          <span className="text-text-primary">{gbp(PLAN.capMonthly)}/mo</span>, however big your roster.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href={SITE.signupUrl} variant="primary">
            Start free
          </Button>
          <span className="text-sm text-text-tertiary">
            or pay annually and get {PLAN.annualMonthsFree} months free
          </span>
        </div>
      </div>

      {/* Representative points on the curve - the app bills your exact head-count */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PRICES.map((t) => (
          <div
            key={t.id}
            className={`flex flex-col rounded-2xl border p-5 ${
              t.highlighted
                ? "border-accent/60 bg-accent-muted card-elevation"
                : "border-border-subtle bg-bg-surface"
            }`}
          >
            {t.highlighted && (
              <span className="mb-3 inline-flex w-fit rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-white">
                Most popular
              </span>
            )}
            <div className="text-sm font-medium text-text-primary">{t.name}</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="nums text-2xl font-semibold text-text-primary">{gbp(t.monthly)}</span>
              <span className="text-xs text-text-tertiary">/mo</span>
            </div>
            <div className="mt-1 nums text-xs text-text-tertiary">{t.perAthlete ?? "capped"}</div>
            <p className="mt-3 flex-1 border-t border-border-subtle/60 pt-3 text-xs leading-relaxed text-text-tertiary">
              {t.tagline}
            </p>
            <Button
              href={SITE.signupUrl}
              variant={t.highlighted ? "primary" : "outline"}
              className="mt-4 w-full"
            >
              Start free
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-sm text-text-tertiary">
        <Check className="size-4 text-accent" />
        {SITE.trialMicrocopy} No contract, scales automatically as your roster changes.
      </p>
    </div>
  );
}
