"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";
import { monthlyFor, annualFor, rateFor, gbp, UNLIMITED_AT, CAP_GBP } from "@/lib/pricing";

/** Ease a number toward its target with requestAnimationFrame (easeOutCubic). */
function useEased(target: number, ms = 400): number {
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
  const [mounted, setMounted] = useState(false);
  // One-time entrance animation trigger.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isUnlimited = n >= MAX;
  const monthly = monthlyFor(n);
  const annual = annualFor(n);
  const saving = monthly * 2; // two months free
  const pct = ((n - 1) / (MAX - 1)) * 100;
  const shown = useEased(monthly);

  return (
    <div
      className="mx-auto max-w-xl rounded-3xl border border-border-subtle bg-bg-surface p-8 card-elevation transition-all duration-700 ease-out"
      style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(16px)" }}
    >
      {/* Count + price */}
      <div className="flex items-end justify-between gap-4">
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
          <div className="text-sm text-text-tertiary">per month</div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mt-8 h-3 select-none">
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
        <span>1</span>
        <span>Unlimited</span>
      </div>

      {/* Rate + annual + cap */}
      <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl border border-border-subtle bg-bg-base/40 px-4 py-3">
          <div className="text-text-tertiary">Rate</div>
          <div className="mt-0.5 font-medium text-text-primary">
            {isUnlimited ? "Flat cap" : `${rateFor(n)} / athlete`}
          </div>
        </div>
        <div className="rounded-xl border border-border-subtle bg-bg-base/40 px-4 py-3">
          <div className="text-text-tertiary">Or pay annually</div>
          <div className="mt-0.5 font-medium text-text-primary">
            {gbp(Math.round(annual))}
            <span className="ml-1 text-xs font-normal text-accent">save {gbp(Math.round(saving))}</span>
          </div>
        </div>
      </div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-text-tertiary">
        <Check className="size-3.5 text-accent" />
        Never more than {gbp(CAP_GBP)}/mo · every feature included · athletes always free
      </p>

      <Button href={SITE.signupUrl} variant="primary" className="mt-6 w-full">
        Start free
      </Button>
      <p className="mt-3 text-center text-xs text-text-tertiary">{SITE.trialMicrocopy}</p>
    </div>
  );
}
