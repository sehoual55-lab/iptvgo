import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { locales, defaultLocale, localePrefix, localeMeta, type Locale } from "@/i18n/config";

/**
 * Build metadata with canonical + hreflang alternates for a localized page.
 * `path` is the language-agnostic path WITHOUT locale prefix, e.g. "" (home),
 * "/installation", "/faq".
 */
export function buildMetadata(opts: {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const { locale, title, description, path = "", keywords, image } = opts;
  const url = `${siteConfig.url}${localePrefix(locale)}${path}`;
  const ogImage = image ?? siteConfig.seo.ogImage;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[localeMeta[l].htmlLang] = `${siteConfig.url}${localePrefix(l)}${path}`;
  }
  languages["x-default"] = `${siteConfig.url}${localePrefix(defaultLocale)}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      locale: localeMeta[locale].ogLocale,
      url,
      siteName: siteConfig.brand.name,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.seo.twitterHandle,
      title,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.svg`,
    sameAs: [],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand.name,
    url: siteConfig.url,
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function productJsonLd(plan: { name: string; price: number; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `IPTVGO ${plan.name} Plan`,
    description: plan.description,
    brand: { "@type": "Brand", name: siteConfig.brand.name },
    offers: {
      "@type": "Offer",
      price: plan.price.toFixed(2),
      priceCurrency: siteConfig.locale.currency,
      availability: "https://schema.org/InStock",
      url: siteConfig.url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.rating,
      reviewCount: siteConfig.stats.reviewCount,
    },
  };
}
