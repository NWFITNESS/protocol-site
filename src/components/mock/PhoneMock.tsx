/**
 * A stylised phone showing a representative Protocol athlete session (real UI
 * patterns — sections, sets × reps × %, a logged-PR toast). Pure markup, no
 * screenshot needed. Decorative, so aria-hidden.
 */
export function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative w-[248px] shrink-0 rounded-[2.4rem] border border-border-strong bg-[#050506] p-2.5 shadow-2xl ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="overflow-hidden rounded-[1.9rem] bg-bg-base">
        {/* status + header */}
        <div className="flex items-center justify-between px-4 pb-2 pt-4 text-[10px] text-text-tertiary">
          <span className="nums">9:41</span>
          <span className="nums">Mon 12 Aug</span>
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] text-text-tertiary">Today</p>
              <p className="text-sm font-semibold text-text-primary">Lower · Strength</p>
            </div>
            <span className="nums rounded-md bg-accent-muted px-2 py-1 text-[10px] font-medium text-accent">
              Week 3
            </span>
          </div>

          {/* section card */}
          <div className="mt-3 rounded-xl border border-border-subtle bg-bg-surface p-3">
            <div className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded bg-accent text-[10px] font-bold text-white">
                A
              </span>
              <span className="text-xs font-medium text-text-primary">Back squat</span>
              <span className="nums ml-auto text-[10px] text-accent">82.5%</span>
            </div>
            <div className="mt-2.5 grid grid-cols-5 gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`nums rounded-md py-1.5 text-center text-[10px] font-medium ${
                    s <= 3 ? "bg-accent/20 text-accent" : "bg-bg-surface-raised text-text-tertiary"
                  }`}
                >
                  {s <= 3 ? "✓" : "5"}
                </div>
              ))}
            </div>
          </div>

          {/* second block */}
          <div className="mt-2 rounded-xl border border-border-subtle bg-bg-surface p-3">
            <div className="flex items-center gap-2">
              <span className="flex size-5 items-center justify-center rounded bg-bg-surface-raised text-[10px] font-bold text-text-secondary">
                B
              </span>
              <span className="text-xs font-medium text-text-primary">Romanian deadlift</span>
              <span className="nums ml-auto text-[10px] text-text-tertiary">3 × 8</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bg-surface-raised">
              <div className="h-full w-1/3 rounded-full bg-accent" />
            </div>
          </div>

          {/* PR toast */}
          <div className="mt-3 flex items-center gap-2 rounded-xl border border-accent/30 bg-accent-muted/50 p-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M18 2H6v7a6 6 0 0 0 12 0V2Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold text-text-primary">New PR — Back squat</p>
              <p className="nums text-[10px] text-text-secondary">140 kg · +5 kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
