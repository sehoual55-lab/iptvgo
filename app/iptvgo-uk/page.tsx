import type { Metadata } from "next";
import { CountryPage } from "@/components/pages/country-page";
import { siteConfig } from "@/config/site.config";

const languages = {
  "en-GB": `${siteConfig.url}/iptvgo-uk`,
  "it-IT": `${siteConfig.url}/iptvgo-italia`,
  "fr-FR": `${siteConfig.url}/iptvgo-france`,
  "x-default": `${siteConfig.url}/iptvgo-uk`,
};

const description =
  "IPTVGO UK — 25,000+ live channels and 140,000+ films & series in 4K for viewers across the United Kingdom. BBC, ITV, Sky, Premier League, instant activation and 24/7 support.";

export const metadata: Metadata = {
  title: "IPTVGO UK | Best IPTV Subscription in the United Kingdom 2026",
  description,
  keywords: ["iptvgo uk", "iptvgo", "iptv uk", "best iptvgo subscription", "iptvgo app"],
  alternates: { canonical: `${siteConfig.url}/iptvgo-uk`, languages },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: `${siteConfig.url}/iptvgo-uk`,
    siteName: "IPTVGO",
    title: "IPTVGO UK — Premium IPTV in the United Kingdom",
    description,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "IPTVGO UK", description, images: [siteConfig.seo.ogImage] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function Page() {
  return <CountryPage lang="en" />;
}
