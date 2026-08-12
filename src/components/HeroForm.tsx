"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * The hero's quick email capture. On a valid email it stashes it and smooth-
 * scrolls to the full multi-step form, which reads the stash and pre-fills — so
 * the visitor is already one step in. Invalid/empty just jumps to the form.
 */
export function HeroForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function jumpToForm() {
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const val = email.trim();
    if (val && !EMAIL_RE.test(val)) {
      setError(true);
      return;
    }
    if (val) {
      try {
        sessionStorage.setItem("waitlist_email", val);
        window.dispatchEvent(new CustomEvent("waitlist-prefill", { detail: val }));
      } catch {
        /* storage blocked — the field on the full form still works */
      }
    }
    jumpToForm();
  }

  return (
    <form onSubmit={submit} className="mt-6 flex flex-col gap-2.5 sm:flex-row">
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError(false);
        }}
        className={`h-12 min-w-0 flex-1 rounded-xl border bg-bg-base/70 px-4 text-base text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-1 ${
          error ? "border-red-500/60 focus:ring-red-500" : "border-border-subtle focus:border-accent focus:ring-accent"
        }`}
        aria-label="Email address"
      />
      <button
        type="submit"
        className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-6 text-base font-semibold text-white shadow-lg shadow-accent/25 transition-colors hover:bg-accent-hover"
      >
        Join the waitlist
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
