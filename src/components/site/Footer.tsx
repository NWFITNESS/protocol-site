import Link from "next/link";
import { Mark } from "@/app/Mark";
import { Container } from "@/components/ui/Container";
import { FOOTER, SITE } from "@/lib/site";

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  const cls = "text-sm text-text-tertiary transition-colors hover:text-text-primary";
  return external ? (
    <a href={href} className={cls}>
      {label}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-base">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2" aria-label="Protocol home">
              <Mark size={24} />
              <span
                className="text-base font-semibold tracking-wide text-text-primary"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                PROTOCOL
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-text-tertiary">{SITE.positioning}</p>
            <p className="mt-1 text-sm text-text-tertiary">Built by a coach, for coaches.</p>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-medium uppercase tracking-widest text-text-secondary">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink href={l.href} label={l.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-text-tertiary">© 2026 Protocol. All rights reserved.</p>
          <p className="text-xs text-text-tertiary">{SITE.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
