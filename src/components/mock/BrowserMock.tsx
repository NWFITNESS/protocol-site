/**
 * A stylised browser showing a representative Protocol coach calendar — sidebar
 * nav + bracket "block cards" per section (rest, habits, warm-up, metcon,
 * strength) with RPE/Cap badges, mirroring the real builder. Decorative.
 */
const NAV = [
  ["Dashboard", false],
  ["Athletes", true],
  ["Messages", false],
  ["Programs", false],
  ["Nutrition", false],
  ["Metrics", false],
] as const;

function Block({
  tone,
  title,
  children,
  badge,
}: {
  tone: string;
  title: string;
  children?: React.ReactNode;
  badge?: string;
}) {
  return (
    <div className={`rounded-md border-l-2 bg-bg-surface-raised/60 p-1.5 ${tone}`}>
      <div className="flex items-center gap-1">
        <span className="text-[9px] font-semibold text-text-primary">{title}</span>
        {badge && <span className="nums ml-auto rounded bg-black/30 px-1 text-[8px] text-text-secondary">{badge}</span>}
      </div>
      {children && <div className="mt-0.5 text-[8px] leading-tight text-text-tertiary">{children}</div>}
    </div>
  );
}

export function BrowserMock({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`w-full overflow-hidden rounded-2xl border border-border-strong bg-bg-surface shadow-2xl ${className}`}
    >
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-border-subtle bg-bg-surface-raised px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-bg-base px-3 py-1 text-[11px] text-text-tertiary">
          <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" strokeLinecap="round" />
          </svg>
          app.protocolapp.uk
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="hidden w-28 shrink-0 flex-col gap-1 border-r border-border-subtle bg-bg-base p-2.5 sm:flex">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="font-bold text-accent" style={{ fontFamily: "var(--font-orbitron)" }}>
              [P]
            </span>
            <span className="text-[10px] font-semibold tracking-wide text-text-secondary">FORGED</span>
          </div>
          {NAV.map(([label, active]) => (
            <div
              key={label}
              className={`flex items-center gap-1.5 rounded px-1.5 py-1 text-[9px] ${
                active ? "bg-accent-muted text-accent" : "text-text-tertiary"
              }`}
            >
              <span className={`size-1.5 rounded-full ${active ? "bg-accent" : "bg-border-strong"}`} />
              {label}
            </div>
          ))}
        </div>

        {/* calendar */}
        <div className="min-w-0 flex-1 p-2.5 sm:p-3">
          <div className="mb-2 flex items-center justify-between px-0.5">
            <span className="text-[11px] font-semibold text-text-primary">June 2026</span>
            <div className="flex overflow-hidden rounded-md border border-border-subtle text-[9px]">
              <span className="px-2 py-0.5 text-text-tertiary">Day</span>
              <span className="bg-accent px-2 py-0.5 font-medium text-white">Month</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {["Mon", "Tue", "Wed", "Thu"].map((d) => (
              <p key={d} className="px-0.5 text-[8px] font-medium uppercase tracking-wide text-text-tertiary">
                {d}
              </p>
            ))}

            {/* Mon */}
            <div className="flex flex-col gap-1.5">
              <Block tone="border-l-pink-500 text-pink-300" title="Rest day" />
              <Block tone="border-l-emerald-500 text-emerald-300" title="Habits">
                Steps · Water · Protein
              </Block>
            </div>

            {/* Tue */}
            <div className="flex flex-col gap-1.5">
              <Block tone="border-l-accent" title="Lower · Strength" badge="RPE 7">
                Back squat 5×5 @82%
              </Block>
            </div>

            {/* Wed — rich session */}
            <div className="flex flex-col gap-1.5">
              <div className="rounded-md border border-border-subtle bg-bg-surface-raised/40 p-1">
                <p className="mb-1 px-0.5 text-[8px] font-semibold text-text-primary">Week 2 · Press</p>
                <div className="flex flex-col gap-1">
                  <Block tone="border-l-emerald-500 text-emerald-300" title="Warm-up" />
                  <Block tone="border-l-accent" title="Metcon" badge="Cap 8:00">
                    21-15-9 · RPE 8
                  </Block>
                  <Block tone="border-l-[#7c3aed] text-[#a78bfa]" title="Strict press" badge="@75%">
                    5×4 · 21X1
                  </Block>
                </div>
              </div>
            </div>

            {/* Thu */}
            <div className="flex flex-col gap-1.5">
              <Block tone="border-l-amber-500 text-amber-300" title="Conditioning" badge="30:00">
                Zone 2 · bike
              </Block>
              <Block tone="border-l-border-strong text-text-tertiary" title="Daily check-in" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
