"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ─── Question flow (adapted from the Typeform draft into a low-friction,
      on-brand slide form). Only name + email are required; everything else is
      skippable so people can join in seconds but richer data is captured when
      offered. ────────────────────────────────────────────────────────────── */

type FieldType = "text" | "email" | "textarea" | "choice";

interface Field {
  key: string;
  type: FieldType;
  label: string;
  help?: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
  /** The referral opt-in gate — a "yes" reveals the two referral steps. */
  gate?: boolean;
}

const REFERRAL_YES = "Yes, count me in";

const BASE_FIELDS: Field[] = [
  { key: "full_name", type: "text", label: "First, what's your name?", help: "So we know how to greet you.", placeholder: "Full name", required: true },
  { key: "email", type: "email", label: "Where should we send your invite?", help: "We'll email you the moment your 14-day free trial is ready.", placeholder: "you@yourbusiness.com", required: true },
  { key: "business_name", type: "text", label: "What's your business called?", help: "Your coaching brand or business name.", placeholder: "e.g. Apex Performance" },
  { key: "role", type: "text", label: "And your role?", help: "Founder, head coach, nutritionist, consultant…", placeholder: "e.g. Head coach" },
  { key: "niche", type: "choice", label: "What's your coaching niche?", help: "Pick the closest fit.", options: ["Fitness", "Nutrition", "Health", "Wellbeing", "Other"] },
  { key: "active_clients", type: "choice", label: "How many clients do you coach right now?", help: "A rough number is fine.", options: ["Just starting", "1–10", "11–25", "26–50", "51–100", "100+"] },
  { key: "programs", type: "textarea", label: "What do you deliver online?", help: "A line on the programs or services you run.", placeholder: "e.g. 1-to-1 strength coaching, HYROX prep, nutrition plans…" },
  { key: "timeline", type: "choice", label: "When might you switch platforms?", help: "No commitment — it just helps us plan.", options: ["Immediately", "Within 30 days", "In 1–3 months", "Just exploring"] },
  { key: "wants_referral", type: "choice", label: "Refer other coaches, get 2 months free?", help: "When a coach you refer joins Protocol, you get 2 months on us.", options: [REFERRAL_YES, "Maybe later"], gate: true },
];

const REFERRAL_FIELDS: Field[] = [
  { key: "referral_count", type: "choice", label: "How many coaches could you refer?", help: "Ballpark is fine.", options: ["1–2", "3–5", "6–10", "10+"] },
  { key: "referral_contacts", type: "textarea", label: "Who should we reach out to?", help: "Names or emails of coaches you'd refer. Optional — we'll only send them a friendly invite.", placeholder: "Jane – jane@…, Mo – mo@…" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export function WaitlistForm() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [index, setIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Capture ?ref= so a referred coach is attributed to their referrer.
  const [referredBy, setReferredBy] = useState<string | null>(null);
  useEffect(() => {
    const ref = new URLSearchParams(window.location.search).get("ref");
    if (ref) setReferredBy(ref.slice(0, 24));
  }, []);

  const wantsReferral = answers.wants_referral === REFERRAL_YES;
  const steps = useMemo(
    () => (wantsReferral ? [...BASE_FIELDS, ...REFERRAL_FIELDS] : BASE_FIELDS),
    [wantsReferral],
  );

  const onReview = index >= steps.length;
  const field = onReview ? null : steps[index];
  const total = steps.length + 1; // + review/submit screen
  const progress = Math.min(100, Math.round((index / total) * 100));

  // Focus the input when the step changes.
  useEffect(() => {
    if (field && (field.type === "text" || field.type === "email" || field.type === "textarea")) {
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [index, field]);

  function set(key: string, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
    setError(null);
  }

  function validateCurrent(): boolean {
    if (!field) return true;
    const val = (answers[field.key] ?? "").trim();
    if (field.required && !val) {
      setError(field.type === "email" ? "Please enter your email." : "This one's required.");
      return false;
    }
    if (field.type === "email" && val && !EMAIL_RE.test(val)) {
      setError("That email doesn't look right.");
      return false;
    }
    return true;
  }

  function next() {
    if (!validateCurrent()) return;
    setError(null);
    setIndex((i) => i + 1);
  }

  function back() {
    setError(null);
    setIndex((i) => Math.max(0, i - 1));
  }

  function pickChoice(value: string) {
    if (!field) return;
    const nextAnswers = { ...answers, [field.key]: value };
    setAnswers(nextAnswers);
    setError(null);
    // Auto-advance on choice for a snappy feel.
    setTimeout(() => setIndex((i) => i + 1), 160);
  }

  async function submit() {
    setStatus("submitting");
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: answers.full_name?.trim(),
          email: answers.email?.trim(),
          business_name: answers.business_name?.trim() || null,
          role: answers.role?.trim() || null,
          niche: answers.niche || null,
          active_clients: answers.active_clients || null,
          programs: answers.programs?.trim() || null,
          timeline: answers.timeline || null,
          wants_referral: wantsReferral,
          referral_count: answers.referral_count || null,
          referral_contacts: answers.referral_contacts?.trim() || null,
          referred_by: referredBy,
          source: "waitlist",
        }),
      });
      const body = (await res.json().catch(() => ({}))) as { referral_code?: string; error?: string };
      if (!res.ok) {
        setError(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setReferralCode(body.referral_code ?? null);
      setStatus("done");
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  // ─── Success screen ───────────────────────────────────────────────────────
  if (status === "done") {
    const shareUrl = referralCode
      ? `https://protocolapp.uk/?ref=${referralCode}`
      : "https://protocolapp.uk";
    const firstName = (answers.full_name ?? "").trim().split(" ")[0];

    async function copy() {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        /* clipboard blocked — the link is visible to copy manually */
      }
    }
    const shareText = encodeURIComponent(
      "I just joined the waitlist for Protocol — coaching software built by coaches. Join with my link and we both get early access:",
    );

    return (
      <div className="rise mx-auto max-w-xl rounded-2xl border border-border-subtle bg-bg-surface p-8 text-center card-elevation sm:p-10">
        <span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-accent-muted text-accent">
          <Check />
        </span>
        <h3 className="text-2xl font-semibold text-text-primary">
          You're on the list{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-text-secondary">
          We'll email <span className="text-text-primary">{answers.email}</span> the moment your
          14-day free trial is ready. Keep an eye on your inbox.
        </p>

        <div className="mt-8 rounded-xl border border-accent/30 bg-accent-muted/40 p-5 text-left">
          <p className="text-sm font-semibold text-text-primary">Skip the queue — earn 2 months free</p>
          <p className="mt-1 text-sm text-text-secondary">
            Share your link. When a coach joins through it, you get two months of Protocol on us.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              readOnly
              value={shareUrl}
              onFocus={(e) => e.currentTarget.select()}
              className="min-w-0 flex-1 truncate rounded-lg border border-border-subtle bg-bg-base px-3 py-2.5 text-sm text-text-secondary"
            />
            <button
              onClick={copy}
              className="shrink-0 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {copied ? "Copied" : "Copy link"}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <a
              className="text-accent hover:underline"
              href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on WhatsApp
            </a>
            <a
              className="text-accent hover:underline"
              href={`mailto:?subject=${encodeURIComponent("You should see this coaching platform")}&body=${shareText}%20${encodeURIComponent(shareUrl)}`}
            >
              Share by email
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ─── Review / submit screen ───────────────────────────────────────────────
  if (onReview) {
    const firstName = (answers.full_name ?? "").trim().split(" ")[0];
    const summary: [string, string | undefined][] = [
      ["Name", answers.full_name],
      ["Email", answers.email],
      ["Business", answers.business_name],
      ["Niche", answers.niche],
      ["Clients", answers.active_clients],
      ["Timeline", answers.timeline],
    ];
    return (
      <div className="rise mx-auto max-w-xl rounded-2xl border border-border-subtle bg-bg-surface p-8 card-elevation sm:p-10">
        <h3 className="text-2xl font-semibold text-text-primary">
          You're all set{firstName ? `, ${firstName}` : ""}.
        </h3>
        <p className="mt-2 text-text-secondary">
          Confirm your spot on the Protocol waitlist — 14-day free trial, no card required.
        </p>
        <dl className="mt-6 divide-y divide-border-subtle/70 rounded-xl border border-border-subtle">
          {summary
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                <dt className="text-text-tertiary">{k}</dt>
                <dd className="truncate text-right text-text-primary">{v}</dd>
              </div>
            ))}
        </dl>
        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={back}
            className="rounded-lg border border-border-subtle px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-bg-surface-raised"
          >
            Back
          </button>
          <button
            onClick={submit}
            disabled={status === "submitting"}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
          >
            {status === "submitting" ? (
              <span className="size-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            ) : (
              <>
                Join the waitlist
                <ArrowRight />
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  // ─── Question step ────────────────────────────────────────────────────────
  const value = answers[field!.key] ?? "";
  const stepNo = index + 1;

  return (
    <div className="mx-auto max-w-xl">
      {/* progress */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-bg-surface-raised">
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="nums text-xs text-text-tertiary">
          {stepNo} / {total}
        </span>
      </div>

      <div key={index} className="rise rounded-2xl border border-border-subtle bg-bg-surface p-7 card-elevation sm:p-9">
        <label className="block text-xl font-semibold text-text-primary sm:text-2xl">
          {field!.label}
        </label>
        {field!.help && <p className="mt-2 text-sm text-text-secondary">{field!.help}</p>}

        <div className="mt-6">
          {field!.type === "choice" ? (
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {field!.options!.map((opt) => {
                const selected = value === opt;
                return (
                  <button
                    key={opt}
                    onClick={() => pickChoice(opt)}
                    className={`rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all ${
                      selected
                        ? "border-accent bg-accent-muted text-text-primary"
                        : "border-border-subtle bg-bg-base text-text-secondary hover:border-border-strong hover:text-text-primary"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          ) : field!.type === "textarea" ? (
            <textarea
              ref={(el) => {
                inputRef.current = el;
              }}
              value={value}
              onChange={(e) => set(field!.key, e.target.value)}
              placeholder={field!.placeholder}
              rows={4}
              className="w-full resize-none rounded-xl border border-border-subtle bg-bg-base px-4 py-3 text-base text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          ) : (
            <input
              ref={(el) => {
                inputRef.current = el;
              }}
              type={field!.type === "email" ? "email" : "text"}
              inputMode={field!.type === "email" ? "email" : undefined}
              autoComplete={field!.type === "email" ? "email" : field!.key === "full_name" ? "name" : "off"}
              value={value}
              onChange={(e) => set(field!.key, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  next();
                }
              }}
              placeholder={field!.placeholder}
              className="w-full rounded-xl border border-border-subtle bg-bg-base px-4 py-3.5 text-base text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          )}
        </div>

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

        {/* nav — choices auto-advance, so only show Continue for input steps */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={back}
            disabled={index === 0}
            className="text-sm font-medium text-text-tertiary transition-colors hover:text-text-secondary disabled:invisible"
          >
            Back
          </button>

          <div className="flex items-center gap-4">
            {!field!.required && field!.type !== "choice" && (
              <button onClick={next} className="text-sm font-medium text-text-tertiary hover:text-text-secondary">
                Skip
              </button>
            )}
            {field!.type !== "choice" && (
              <button
                onClick={next}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Continue
                <ArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>

      <p className="mt-4 hidden text-center text-xs text-text-tertiary sm:block">
        Press <kbd className="rounded border border-border-subtle bg-bg-surface px-1.5 py-0.5">Enter</kbd> to continue
      </p>
    </div>
  );
}
