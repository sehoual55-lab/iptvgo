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
  "IPTVGO France — plus de 25 000 chaînes en direct et plus de 140 000 films et séries en 4K pour les téléspectateurs de toute la France. TF1, Canal+, beIN Sports, Ligue 1, activation instantanée et assistance 24/7.";

export const metadata: Metadata = {
  title: "IPTVGO France | Le Meilleur Abonnement IPTV en France 2026",
  description,
  keywords: ["iptvgo france", "iptvgo", "iptv france", "abonnement iptv", "iptvgo app"],
  alternates: { canonical: `${siteConfig.url}/iptvgo-france`, languages },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${siteConfig.url}/iptvgo-france`,
    siteName: "IPTVGO",
    title: "IPTVGO France — IPTV Premium en France",
    description,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "IPTVGO France", description, images: [siteConfig.seo.ogImage] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function Page() {
  return <CountryPage lang="fr" />;
}
