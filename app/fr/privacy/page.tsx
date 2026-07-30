import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/legal-page";
import { buildMetadata } from "@/lib/seo";
import { fr } from "@/i18n/dictionaries/fr";

export const metadata: Metadata = buildMetadata({ locale: "fr", title: fr.meta.privacy.title, description: fr.meta.privacy.description, path: "/privacy" });

export default function Page() {
  return <LegalPage lang="fr" doc="privacy" />;
}
