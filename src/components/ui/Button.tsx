import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-[0_8px_24px_-10px] shadow-accent/60",
  ghost:
    "text-text-secondary hover:text-text-primary hover:bg-bg-surface-raised",
  outline:
    "border border-border-strong text-text-primary hover:border-text-tertiary hover:bg-bg-surface-raised",
};

/** Link-styled CTA button. `external` renders a plain <a> for app.protocolapp.uk. */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${VARIANTS[variant]} ${className}`;
  const isExternal = external || href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
