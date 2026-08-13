/**
 * Cohesive, on-brand "app UI" tiles for the feature cards — rendered in code
 * (not screenshots or stock) so they stay crisp and consistent. Each fills its
 * card header. Decorative.
 */
import type { ReactNode } from "react";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_36%,#141b26,#0a0b0f)] px-4">
      {children}
      <div className="tile-sheen pointer-events-none absolute inset-0" />
    </div>
  );
}

const V = "#7c3aed";
const EM = "#22c55e";
const AM = "#f59e0b";

/* ── Programming: a mini calendar week of coloured session blocks ─────────── */
function Programming() {
  const cols: string[][] = [
    ["#3b82f6"],
    [V],
    [EM, "#3b82f6"],
    ["#3b82f6"],
    [V, AM],
  ];
  return (
    <Frame>
      <div className="w-full max-w-[280px]">
        <div className="mb-2 flex items-center justify-between px-0.5">
          <span className="text-[10px] font-semibold text-text-secondary">June · Week 3</span>
          <span className="rounded bg-accent-muted px-1.5 py-0.5 text-[9px] font-semibold text-accent">1RM → %</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {["M", "T", "W", "T", "F"].map((d, i) => (
            <div key={i} className="rounded-md border border-border-subtle/60 bg-bg-surface/70 p-1">
              <div className="mb-1 text-center text-[8px] text-text-tertiary">{d}</div>
              <div className="space-y-1">
                {cols[i].map((col, j) => (
                  <div key={j} className="h-3.5 rounded-sm border-l-2" style={{ background: `${col}22`, borderColor: col }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ── Forms & check-ins: a submitted check-in card ─────────────────────────── */
function Forms() {
  return (
    <Frame>
      <div className="w-full max-w-[240px] rounded-xl border border-border-subtle bg-bg-surface/80 p-3">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-text-primary">Weekly check-in</span>
          <span className="rounded bg-accent-muted px-1.5 py-0.5 text-[8px] font-semibold text-accent">Sent</span>
        </div>
        {[true, true, false].map((done, i) => (
          <div key={i} className="mb-2 flex items-center gap-2">
            <span
              className={`flex size-3.5 items-center justify-center rounded-[4px] ${done ? "bg-accent text-white" : "border border-border-strong"}`}
            >
              {done && (
                <svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </span>
            <span className="h-1.5 rounded-full bg-border-strong/70" style={{ width: `${[70, 55, 62][i]}%` }} />
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ── Nutrition: calorie ring + macro bars ─────────────────────────────────── */
function Nutrition() {
  const r = 30;
  const c = 2 * Math.PI * r;
  const macros: [string, string, number][] = [
    ["Protein", "#3b82f6", 0.82],
    ["Carbs", V, 0.6],
    ["Fat", "#22c7d9", 0.45],
  ];
  return (
    <Frame>
      <div className="flex items-center gap-4">
        <div className="relative flex items-center justify-center">
          <svg width="76" height="76" viewBox="0 0 76 76" className="-rotate-90">
            <circle cx="38" cy="38" r={r} fill="none" stroke="#2a2e38" strokeWidth="7" />
            <circle cx="38" cy="38" r={r} fill="none" stroke="#3b82f6" strokeWidth="7" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * 0.34} />
          </svg>
          <div className="absolute flex flex-col items-center leading-none">
            <span className="font-mono text-[15px] font-bold text-text-primary">2,240</span>
            <span className="mt-0.5 text-[8px] text-text-tertiary">kcal</span>
          </div>
        </div>
        <div className="w-[120px] space-y-2">
          {macros.map(([label, col, pct], i) => (
            <div key={label}>
              <div className="mb-0.5 flex justify-between text-[9px] text-text-tertiary">
                <span>{label}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-bg-surface-raised">
                <div className="bar-pulse h-full rounded-full" style={{ width: `${pct * 100}%`, background: col, animationDelay: `${i * 0.4}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* ── Timer: interval-timer face ───────────────────────────────────────────── */
function Timer() {
  const r = 44;
  const c = 2 * Math.PI * r;
  return (
    <Frame>
      <span className="absolute left-4 top-3 rounded-md bg-accent-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
        EMOM · 12
      </span>
      <div className="relative flex items-center justify-center">
        <svg width="104" height="104" viewBox="0 0 104 104" className="-rotate-90">
          <circle cx="52" cy="52" r={r} fill="none" stroke="#2a2e38" strokeWidth="7" />
          <circle className="ring-spin" cx="52" cy="52" r={r} fill="none" stroke="#3b82f6" strokeWidth="7" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * 0.34} />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="font-mono text-[22px] font-bold leading-none text-text-primary">00:47</span>
          <span className="mt-1 text-[9px] text-text-tertiary">Round 3 / 12</span>
        </div>
      </div>
      <div className="absolute bottom-3 flex items-center gap-3">
        <span className="size-5 rounded-full border border-border-strong" />
        <span className="flex size-6 items-center justify-center rounded-full bg-accent text-white">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor">
            <rect x="7" y="5" width="3.5" height="14" rx="1" />
            <rect x="13.5" y="5" width="3.5" height="14" rx="1" />
          </svg>
        </span>
        <span className="size-5 rounded-full border border-border-strong" />
      </div>
    </Frame>
  );
}

/* ── PRs: a new-PR badge over an upward trend ─────────────────────────────── */
function Prs() {
  return (
    <Frame>
      <div className="w-full max-w-[250px]">
        <div className="mb-2 flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-lg bg-accent text-white">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </span>
          <span className="text-[11px] font-semibold text-text-primary">New PR</span>
          <span className="text-[10px] text-text-tertiary">Back squat</span>
          <span className="nums ml-auto text-[11px] font-semibold text-accent">140 kg</span>
        </div>
        <div className="rounded-lg border border-border-subtle/60 bg-bg-surface/70 p-2">
          <svg viewBox="0 0 240 60" className="h-14 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="prg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3b82f6" stopOpacity="0.35" />
                <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path className="draw-trend" d="M4 48 L44 42 L84 44 L124 32 L164 30 L204 16 L236 8" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 48 L44 42 L84 44 L124 32 L164 30 L204 16 L236 8 L236 60 L4 60 Z" fill="url(#prg)" />
            <circle cx="236" cy="8" r="3.5" fill="#3b82f6" />
          </svg>
        </div>
      </div>
    </Frame>
  );
}

/* ── Storefront: a product card with a paid confirmation ──────────────────── */
function Storefront() {
  return (
    <Frame>
      <div className="w-full max-w-[240px] rounded-xl border border-border-subtle bg-bg-surface/80 p-2.5">
        <div className="mb-2 flex h-11 items-center justify-center rounded-md bg-[linear-gradient(120deg,rgba(59,130,246,0.3),rgba(124,58,237,0.22))]">
          <span className="font-display text-[11px] font-bold tracking-wider text-white/90">ALL-ACCESS</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="leading-tight">
            <p className="text-[11px] font-semibold text-text-primary">All-access</p>
            <p className="text-[9px] text-text-tertiary">Every program</p>
          </div>
          <span className="nums text-[13px] font-bold text-accent">£52.50</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 border-t border-border-subtle/60 pt-2">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-tertiary">
            <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
          </svg>
          <span className="nums text-[10px] text-text-tertiary">•••• 4242</span>
          <span className="ml-auto rounded bg-[#22c55e]/15 px-1.5 py-0.5 text-[8px] font-semibold text-[#4ade80]">Paid</span>
        </div>
      </div>
    </Frame>
  );
}

const ARTS: Record<string, () => ReactNode> = {
  programming: Programming,
  forms: Forms,
  nutrition: Nutrition,
  timer: Timer,
  prs: Prs,
  storefront: Storefront,
};

export function FeatureArt({ name }: { name: string }) {
  const Art = ARTS[name];
  return Art ? <Art /> : null;
}
