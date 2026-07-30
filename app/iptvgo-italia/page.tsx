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
  "IPTVGO Italia — oltre 25.000 canali live e più di 140.000 film e serie in 4K per gli spettatori di tutta Italia. Rai, Mediaset, Sky, DAZN, Serie A, attivazione immediata e assistenza 24/7.";

export const metadata: Metadata = {
  title: "IPTVGO Italia | Il Miglior Abbonamento IPTV in Italia 2026",
  description,
  keywords: ["iptvgo italia", "iptvgo", "iptv italia", "abbonamento iptv", "iptvgo app"],
  alternates: { canonical: `${siteConfig.url}/iptvgo-italia`, languages },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: `${siteConfig.url}/iptvgo-italia`,
    siteName: "IPTVGO",
    title: "IPTVGO Italia — IPTV Premium in Italia",
    description,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "IPTVGO Italia", description, images: [siteConfig.seo.ogImage] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function Page() {
  return <CountryPage lang="it" />;
}
