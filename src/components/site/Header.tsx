"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV, SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-base/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href={SITE.signinUrl} variant="ghost">
            Log in
          </Button>
          <Button href={SITE.signupUrl}>{SITE.ctaPrimary}</Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex size-9 items-center justify-center rounded-md text-text-secondary hover:text-text-primary md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border-subtle bg-bg-base md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm text-text-secondary hover:bg-bg-surface-raised hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button href={SITE.signupUrl} className="w-full">
                {SITE.ctaPrimary}
              </Button>
              <Button href={SITE.signinUrl} variant="outline" className="w-full">
                Log in
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
