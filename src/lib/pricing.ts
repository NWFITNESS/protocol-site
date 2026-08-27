import type { PriceTier } from "./site";

/** "£12.50" / "£23". Whole pounds show no decimals. */
export function gbp(v: number): string {
  return Number.isInteger(v) ? `£${v}` : `£${v.toFixed(2)}`;
}

/** "£12.50" + "/mo" for a price point. */
export function formatTierPrice(tier: PriceTier): { amount: string; suffix: string } {
  return { amount: gbp(tier.monthly), suffix: "/mo" };
}

// ─── The per-athlete curve (mirrors the app, protocol repo src/lib/plans.ts) ──
const BANDS: { upTo: number | null; ratePence: number }[] = [
  { upTo: 5, ratePence: 250 },
  { upTo: 10, ratePence: 230 },
  { upTo: 25, ratePence: 210 },
  { upTo: null, ratePence: 175 },
];
const FLOOR = 5; // billed minimum (the £12.50 floor)
const CAP_PENCE = 10_000; // £100/mo hard cap
/** The last athlete count still priced per-athlete; beyond it is "Unlimited". */
export const UNLIMITED_AT = 58;

function ratePence(qty: number): number {
  for (const b of BANDS) if (b.upTo == null || qty <= b.upTo) return b.ratePence;
  return BANDS[BANDS.length - 1].ratePence;
}

/** Monthly £ for a head-count: volume rate on the floored count, capped at £100. */
export function monthlyFor(athletes: number): number {
  const qty = Math.max(FLOOR, athletes);
  return Math.min(qty * ratePence(qty), CAP_PENCE) / 100;
}

/** Annual £ = ten months' price (two months free). */
export function annualFor(athletes: number): number {
  return monthlyFor(athletes) * 10;
}

/** "£2.50" per-athlete rate for the band a head-count lands in. */
export function rateFor(athletes: number): string {
  return gbp(ratePence(Math.max(FLOOR, athletes)) / 100);
}

export const CAP_GBP = CAP_PENCE / 100;
