/**
 * ============================================================================
 *  SUBSCRIPTION PLANS — KEEP EXACTLY AS PROVIDED
 * ============================================================================
 *  Names, prices, durations, features, order and the connection system are
 *  unchanged. Plan names & prices are locale-agnostic; feature labels are
 *  translated via the dictionaries (features are referenced by key).
 * ============================================================================
 */

export type PlanId = "bronze" | "gold" | "platinum" | "exclusive";

export type Plan = {
  id: PlanId;
  name: string;
  price: number;
  /** duration in months (label localized) */
  months: number;
  bonusMonths?: number;
  connections: number;
  channels: string;
  movies: string;
  popular?: boolean;   // Most Popular
  bestValue?: boolean; // Best Value
  highlight?: boolean;
};

export const plans: Plan[] = [
  { id: "bronze", name: "Bronze", price: 39.99, months: 12, connections: 1, channels: "25,000+", movies: "100,000+" },
  { id: "gold", name: "Gold", price: 49.99, months: 15, bonusMonths: 3, connections: 1, channels: "25,000+", movies: "100,000+", popular: true, highlight: true },
  { id: "platinum", name: "Platinum", price: 59.99, months: 15, bonusMonths: 3, connections: 1, channels: "25,000+", movies: "100,000+" },
  { id: "exclusive", name: "Exclusive", price: 84.99, months: 24, bonusMonths: 3, connections: 1, channels: "25,000+", movies: "140,000+", bestValue: true },
];

/** Feature keys — labels resolved per-locale from the dictionary. */
export const planFeatureKeys = [
  "liveChannels",
  "moviesSeries",
  "quality4k",
  "international",
  "adult",
  "netflixPrime",
  "epg",
  "instantActivation",
  "allDevices",
  "support247",
  "stableServers",
] as const;

export type FeatureKey = (typeof planFeatureKeys)[number];

export const connectionConfig = {
  min: 1,
  max: 5,
  additionalDiscount: 0.15, // each additional connection -15%
};

export function calcPrice(basePrice: number, connections: number): number {
  const c = Math.max(connectionConfig.min, Math.min(connectionConfig.max, connections));
  const additional = (c - 1) * basePrice * (1 - connectionConfig.additionalDiscount);
  return Math.round((basePrice + additional) * 100) / 100;
}

export function calcFullPrice(basePrice: number, connections: number): number {
  const c = Math.max(connectionConfig.min, Math.min(connectionConfig.max, connections));
  return Math.round(basePrice * c * 100) / 100;
}

export function formatPrice(price: number, symbol = "$"): string {
  return `${symbol}${price.toFixed(2)}`;
}
