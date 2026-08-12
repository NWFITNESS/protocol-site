import Link from "next/link";
import { Logo } from "@/components/brand";

/** Minimal sticky header for the waitlist site: logo + a single CTA that
 *  scrolls to the form. Intentionally has no full-site nav — this branch ships
 *  only the waitlist. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle/60 bg-bg-base/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Logo />
        <a
          href="#waitlist"
          className="inline-flex h-10 shrink-0 items-center whitespace-nowrap rounded-lg bg-accent px-4 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          Join<span className="hidden sm:inline">&nbsp;the waitlist</span>
        </a>
      </div>
    </header>
  );
}

/** Minimal footer: wordmark, one-liner, legal links. */
export function Footer() {
  return (
    <footer className="border-t border-border-subtle/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-8">
        <Logo />
        <p className="max-w-sm text-sm text-text-tertiary">
          The all-in-one platform for online coaches. Built by a coach, for coaches.
        </p>
        <div className="flex items-center gap-4 text-xs text-text-tertiary">
          <Link href="/privacy" className="hover:text-text-secondary">
            Privacy policy
          </Link>
          <span className="text-border-strong">|</span>
          <Link href="/terms" className="hover:text-text-secondary">
            Terms of service
          </Link>
        </div>
        <p className="text-xs text-text-tertiary/70">
          © {new Date().getFullYear()} Protocol. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
