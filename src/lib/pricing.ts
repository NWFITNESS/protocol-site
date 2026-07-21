import type { PriceTier } from "./site";

/** "£12.50" / "£23" / "Custom". Whole pounds show no decimals. */
export function formatTierPrice(tier: PriceTier): { amount: string; suffix: string } {
  if (tier.monthly === null) return { amount: "Custom", suffix: "" };
  const v = tier.monthly;
  const amount = Number.isInteger(v) ? `£${v}` : `£${v.toFixed(2)}`;
  return { amount, suffix: "/mo" };
}
