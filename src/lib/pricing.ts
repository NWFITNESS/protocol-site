import type { PriceTier } from "./site";

/** "£12.50" / "£23". Whole pounds show no decimals. */
export function gbp(v: number): string {
  return Number.isInteger(v) ? `£${v}` : `£${v.toFixed(2)}`;
}

/** "£12.50" + "/mo" for a price point. */
export function formatTierPrice(tier: PriceTier): { amount: string; suffix: string } {
  return { amount: gbp(tier.monthly), suffix: "/mo" };
}
