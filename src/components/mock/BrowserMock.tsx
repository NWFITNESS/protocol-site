/**
 * A stylised browser showing a representative Protocol calendar builder (week
 * columns with coloured block cards). Pure markup, decorative → aria-hidden.
 */
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// [day index] → blocks. Kept sparse + representative of real programming.
const BLOCKS: Record<number, { label: string; tone: string }[]> = {
  0: [{ label: "Lower · Strength", tone: "accent" }],
  1: [{ label: "Upper · Push", tone: "violet" }],
  2: [{ label: "Conditioning", tone: "emerald" }],
  3: [{ label: "Lower · Power", tone: "accent" }],
  4: [{ label: "Upper · Pull", tone: "violet" }],
  5: [{ label: "Long run", tone: "amber" }],
};

const TONES: Record<string, string> = {
  accent: "border-l-accent bg-accent/10 text-accent",
  violet: "border-l-[#7c3aed] bg-[#7c3aed]/12 text-[#a78bfa]",
  emerald: "border-l-emerald-500 bg-emerald-500/10 text-emerald-300",
  amber: "border-l-amber-500 bg-amber-500/10 text-amber-300",
};

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

      {/* calendar grid */}
      <div className="p-3 sm:p-4">
        <div className="mb-2 flex items-center justify-between px-1">
          <span className="text-xs font-semibold text-text-primary">August · Week 3</span>
          <span className="nums rounded-md bg-accent-muted px-2 py-0.5 text-[10px] font-medium text-accent">
            5 athletes
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {DAYS.map((d, i) => (
            <div key={d} className="min-h-[92px] rounded-lg bg-bg-base p-1.5">
              <p className="mb-1.5 px-0.5 text-[9px] font-medium uppercase tracking-wide text-text-tertiary">
                {d}
              </p>
              <div className="flex flex-col gap-1">
                {(BLOCKS[i] ?? []).map((b, j) => (
                  <div
                    key={j}
                    className={`rounded border-l-2 px-1.5 py-1 text-[9px] font-medium leading-tight ${TONES[b.tone]}`}
                  >
                    {b.label}
                  </div>
                ))}
                {!BLOCKS[i] && (
                  <div className="rounded border border-dashed border-border-subtle px-1.5 py-1 text-center text-[9px] text-text-tertiary">
                    Rest
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
