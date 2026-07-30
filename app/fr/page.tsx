import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home";
import { buildMetadata } from "@/lib/seo";
import { fr } from "@/i18n/dictionaries/fr";

export const metadata: Metadata = buildMetadata({
  locale: "fr",
  title: fr.meta.home.title,
  description: fr.meta.home.description,
  path: "",
  keywords: ["iptvgo", "iptvgo france", "iptvgo app", "iptvgo player", "abonnement iptvgo"],
});

export default function Page() {
  return <HomePage lang="fr" />;
}
