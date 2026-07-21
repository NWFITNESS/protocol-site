"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PRICES, SITE } from "@/lib/site";
import { formatTierPrice } from "@/lib/pricing";

export function PricingTiers() {
  const [annual, setAnnual] = useState(true);
  const period = annual ? "annual" : "monthly";

  return (
    <div>
      {/* Billing toggle */}
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setAnnual(false)}
          className={`text-sm transition-colors ${!annual ? "text-text-primary" : "text-text-tertiary hover:text-text-secondary"}`}
        >
          Monthly
        </button>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          onClick={() => setAnnual((a) => !a)}
          className="relative h-6 w-11 rounded-full border border-border-strong bg-bg-surface-raised transition-colors"
          aria-label="Toggle annual billing"
        >
          <span
            className={`absolute top-0.5 size-4 rounded-full bg-accent transition-transform ${annual ? "translate-x-5" : "translate-x-0.5"}`}
          />
        </button>
        <span className={`text-sm transition-colors ${annual ? "text-text-primary" : "text-text-tertiary"}`}>
          Annual <span className="text-accent">(save)</span>
        </span>
      </div>

      {/* Tier cards */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PRICES.map((t) => {
          const price = formatTierPrice(t, period);
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
              <div className="mt-1 nums text-xs text-text-tertiary">{t.athleteCap}</div>
              <p className="mt-3 flex-1 text-xs leading-relaxed text-text-secondary">{t.tagline}</p>
              <Button
                href={t.monthly === null ? "mailto:hello@protocolapp.uk" : SITE.signupUrl}
                variant={t.highlighted ? "primary" : "outline"}
                className="mt-4 w-full"
              >
                {t.monthly === null ? "Contact us" : "Start free"}
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
