"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Infinity as InfinityIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE, PRICING_INCLUDES } from "@/lib/site";
import { monthlyFor, annualFor, rateFor, gbp, UNLIMITED_AT, CAP_GBP } from "@/lib/pricing";

/** Ease a number toward its target with requestAnimationFrame (easeOutCubic). */
function useEased(target: number, ms = 420): number {
  const [display, setDisplay] = useState(target);
  const s = useRef({ from: target, cur: target, raf: 0, start: 0 });
  useEffect(() => {
    const st = s.current;
    st.from = st.cur;
    st.start = performance.now();
    cancelAnimationFrame(st.raf);
    const tick = (t: number) => {
      const p = Math.min(1, (t - st.start) / ms);
      const eased = 1 - Math.pow(1 - p, 3);
      st.cur = st.from + (target - st.from) * eased;
      setDisplay(st.cur);
      if (p < 1) st.raf = requestAnimationFrame(tick);
    };
    st.raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(st.raf);
  }, [target, ms]);
  return display;
}

const MAX = UNLIMITED_AT; // 1..57 priced per athlete, 58 = Unlimited

export function PricingCalculator() {
  const [n, setN] = useState(12);
  const [interval, setBillingInterval] = useState<"month" | "year">("month");
  const [mounted, setMounted] = useState(false);
  // One-time entrance animation trigger.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isUnlimited = n >= MAX;
  const monthly = monthlyFor(n);
  const annual = annualFor(n);
  const price = interval === "year" ? annual : monthly;
  const saving = monthly * 2; // annual saves two months
  const pct = ((n - 1) / (MAX - 1)) * 100;
  const shown = useEased(price);

  return (
    <div
      className="mx-auto max-w-xl transition-all duration-700 ease-out"
      style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(18px)" }}
    >
      {/* Billing toggle */}
      <div className="mx-auto mb-5 flex w-fit items-center gap-1 rounded-full border border-border-subtle bg-bg-surface p-1">
        {(["month", "year"] as const).map((k) => (
          <button
            key={k}
            onClick={() => setBillingInterval(k)}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              interval === k ? "bg-accent text-white" : "text-text-tertiary hover:text-text-secondary"
            }`}
          >
            {k === "month" ? "Monthly" : "Annual"}
            {k === "year" && (
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                  interval === "year" ? "bg-white/20 text-white" : "bg-accent/15 text-accent"
                }`}
              >
                2 months free
              </span>
            )}
          </button>
        ))}
      </div>

      {/* The card */}
      <div className="rounded-3xl border-2 border-accent/50 bg-bg-surface p-7 card-elevation">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
          <InfinityIcon className="size-3.5" /> No price cliffs
        </div>

        {/* Count + price */}
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-text-tertiary">You coach</div>
            <div className="mt-1 text-lg font-medium text-text-primary">
              {isUnlimited ? "Unlimited athletes" : `${n} athlete${n !== 1 ? "s" : ""}`}
            </div>
          </div>
          <div className="text-right">
            <div className="nums text-5xl font-semibold tracking-tight text-text-primary tabular-nums">
              £{shown.toFixed(2)}
            </div>
            <div className="text-sm text-text-tertiary">per {interval === "year" ? "year" : "month"}</div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-7 h-3 select-none">
          <div className="absolute inset-0 rounded-full bg-bg-surface-raised" />
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent/60 to-accent transition-[width] duration-150 ease-out"
            style={{ width: `${pct}%` }}
          />
          <div
            className="pointer-events-none absolute top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-white shadow-[0_0_0_7px_rgba(59,130,246,0.14)] transition-[left] duration-150 ease-out"
            style={{ left: `${pct}%` }}
          />
          <input
            type="range"
            min={1}
            max={MAX}
            value={n}
            onChange={(e) => setN(parseInt(e.target.value))}
            aria-label="Number of athletes"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-text-tertiary">
          <span>1 athlete</span>
          <span>Unlimited</span>
        </div>

        {/* Rate + saving line */}
        <p className="mt-5 text-sm text-text-secondary">
          {isUnlimited ? "Flat cap" : `${rateFor(n)} per athlete`}
          {" · "}
          {interval === "year" ? (
            <>two months free vs monthly</>
          ) : (
            <>
              save <span className="font-medium text-accent">{gbp(Math.round(saving))}</span> a year on annual
            </>
          )}
          {" · never more than "}
          <span className="text-text-primary">{gbp(CAP_GBP)}/mo</span>.
        </p>

        <Button href={SITE.signupUrl} variant="primary" className="mt-5 w-full">
          Start free
        </Button>
        <p className="mt-2.5 text-center text-xs text-text-tertiary">{SITE.trialMicrocopy}</p>

        {/* Everything included */}
        <div className="mt-6 border-t border-border-subtle pt-5">
          <div className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Every feature included
          </div>
          <ul className="mt-3 grid gap-2.5">
            {PRICING_INCLUDES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-text-tertiary">
        No contracts. Change plan anytime. Your athletes are always free.
      </p>
    </div>
  );
}
