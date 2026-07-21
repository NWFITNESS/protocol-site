import Link from "next/link";
import type { ReactNode } from "react";
import { Mark } from "@/app/Mark";

/** Cobalt square brackets — the system-wide framing device. Always paired. */
export function BracketWrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="text-accent" aria-hidden>
        [
      </span>
      {children}
      <span className="text-accent" aria-hidden>
        ]
      </span>
    </span>
  );
}

/** An eyebrow label wrapped in brackets, e.g. [ Built by a coach ]. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <BracketWrap className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
      <span className="text-text-secondary">{children}</span>
    </BracketWrap>
  );
}

/** The primary horizontal lockup: [ P ] mark + PROTOCOL wordmark. Links home. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Protocol home">
      <Mark size={32} />
      <span
        className="text-lg font-semibold tracking-wide text-text-primary"
        style={{ fontFamily: "var(--font-orbitron)" }}
      >
        PROTOCOL
      </span>
    </Link>
  );
}
