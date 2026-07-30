/**
 * ============================================================================
 *  CENTRAL CONFIGURATION — iptvgo.store
 * ============================================================================
 *  Edit everything in one place: domain, phone, WhatsApp, currency, contact,
 *  hero stats and trust metrics. Localized text lives in /i18n/dictionaries.
 * ============================================================================
 */

export const siteConfig = {
  brand: {
    name: "IPTVGO",
    legalName: "IPTVGO",
    tagline: "AI-Powered Streaming",
  },

  domain: "iptvgo.store",
  url: "https://iptvgo.store",

  contact: {
    phone: "+33 7 56 75 73 87",
    phoneRaw: "33756757387",
    whatsapp: "33756757387",
    email: "support@iptvgo.store",
    whatsappDefaultMessage:
      "Hi IPTVGO! I'd like to know more about your subscriptions. Can you help me?",
  },

  locale: {
    currency: "GBP",
    currencySymbol: "£",
  },

  // Trust / hero numbers (locale-agnostic; labels come from dictionaries)
  stats: {
    channels: "25,000+",
    vod: "140,000+",
    uptime: "99.9%",
    customers: "60,000+",
    rating: "4.9",
    reviewCount: 3620,
    countries: "50+",
  },

  social: { facebook: "#", instagram: "#", telegram: "#", youtube: "#" },

  tmdb: {
    apiKey: "eb88f8554c5c594b1b82a59672ee98f4",
  },

  seo: {
    primaryKeyword: "iptvgo",
    ogImage: "/images/og-image.jpg",
    twitterHandle: "@iptvgo",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`;
}

export function buildPhoneLink(): string {
  return `tel:+${siteConfig.contact.phoneRaw}`;
}
