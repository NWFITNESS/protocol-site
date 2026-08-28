/**
 * Waitlist signup handler. Inserts into the shared Protocol Supabase
 * (`public.waitlist_signups`, owned by the app repo's migrations) over PostgREST
 * with the anon key + an insert-only RLS policy - so no service-role key or
 * Supabase SDK lives on the marketing site.
 *
 * Requires env on the site's Vercel project:
 *   SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL)
 *   SUPABASE_ANON_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)
 */

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Stable per-email referral code (djb2 → base36), so a repeat signup keeps the
 *  same share link without needing to read the row back under RLS. */
function referralCode(email: string): string {
  let h = 5381;
  const s = email.toLowerCase();
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(36).toUpperCase().slice(0, 7).padStart(7, "0");
}

const clip = (v: unknown, max: number): string | null => {
  if (typeof v !== "string") return null;
  const t = v.trim();
  return t ? t.slice(0, max) : null;
};

export async function POST(request: Request) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error("Waitlist: Supabase env not configured on the site.");
    return Response.json({ error: "Waitlist is temporarily unavailable." }, { status: 503 });
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = clip(payload.email, 200)?.toLowerCase();
  const fullName = clip(payload.full_name, 120);
  if (!fullName || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const code = referralCode(email);

  const row = {
    full_name: fullName,
    email,
    business_name: clip(payload.business_name, 160),
    role: clip(payload.role, 120),
    niche: clip(payload.niche, 60),
    active_clients: clip(payload.active_clients, 40),
    programs: clip(payload.programs, 2000),
    timeline: clip(payload.timeline, 60),
    wants_referral: payload.wants_referral === true,
    referral_count: clip(payload.referral_count, 40),
    referral_contacts: clip(payload.referral_contacts, 4000),
    referral_code: code,
    referred_by: clip(payload.referred_by, 24),
    source: clip(payload.source, 40) ?? "waitlist",
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist_signups`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });

    // Already on the list (unique email) - treat as success with the same code.
    if (res.status === 409) {
      return Response.json({ ok: true, alreadyJoined: true, referral_code: code });
    }

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Waitlist insert failed:", res.status, detail);
      return Response.json({ error: "Couldn't save your spot. Please try again." }, { status: 502 });
    }

    return Response.json({ ok: true, referral_code: code });
  } catch (err) {
    console.error("Waitlist insert error:", err);
    return Response.json({ error: "Network error. Please try again." }, { status: 502 });
  }
}
