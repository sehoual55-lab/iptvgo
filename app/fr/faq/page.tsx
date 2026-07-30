import type { Metadata } from "next";
import { FaqPage } from "@/components/pages/faq-page";
import { buildMetadata } from "@/lib/seo";
import { fr } from "@/i18n/dictionaries/fr";

export const metadata: Metadata = buildMetadata({ locale: "fr", title: fr.meta.faq.title, description: fr.meta.faq.description, path: "/faq" });

export default function Page() {
  return <FaqPage lang="fr" />;
}
