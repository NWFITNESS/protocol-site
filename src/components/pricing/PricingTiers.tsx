import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRICES, SITE } from "@/lib/site";
import { formatTierPrice } from "@/lib/pricing";

export function PricingTiers() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PRICES.map((t) => {
          const price = formatTierPrice(t);
          const contact = t.monthly === null;
          return (
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
                <span className="nums text-2xl font-semibold text-text-primary">{price.amount}</span>
                {price.suffix && (
                  <span className="text-xs text-text-tertiary">{price.suffix}</span>
                )}
              </div>
              <div className="mt-1 nums text-xs text-text-tertiary">
                {t.perAthlete ?? "Flat rate"}
              </div>
              <div className="mt-3 border-t border-border-subtle/60 pt-3 nums text-xs text-text-secondary">
                {t.athleteCap}
              </div>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-text-tertiary">{t.tagline}</p>
              <Button
                href={contact ? "mailto:hello@protocolapp.uk" : SITE.signupUrl}
                variant={t.highlighted ? "primary" : "outline"}
                className="mt-4 w-full"
              >
                {contact ? "Contact us" : "Start free"}
              </Button>
            </div>
          );
        })}
      </div>

      <p className="mt-6 flex items-center justify-center gap-1.5 text-center text-sm text-text-tertiary">
        <Check className="size-4 text-accent" />
        {SITE.trialMicrocopy} No contract, change plan anytime.
      </p>
    </div>
  );
}
