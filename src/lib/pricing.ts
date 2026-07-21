import { PRICING_CONFIRMED, type PriceTier } from "./site";

/**
 * Formats a tier's price. While PRICING_CONFIRMED is false the amounts in
 * site.ts are placeholders, so we render "£—" rather than a misleading "£0".
 * Null amount = a "Custom" / contact tier.
 */
export function formatTierPrice(
  tier: PriceTier,
  period: "monthly" | "annual",
): { amount: string; suffix: string } {
  const value = period === "annual" ? tier.annual : tier.monthly;
  if (value === null) return { amount: "Custom", suffix: "" };
  if (!PRICING_CONFIRMED) return { amount: "£—", suffix: "/mo" };
  return { amount: `£${value}`, suffix: "/mo" };
}
