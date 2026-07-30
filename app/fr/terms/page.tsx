import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/legal-page";
import { buildMetadata } from "@/lib/seo";
import { fr } from "@/i18n/dictionaries/fr";

export const metadata: Metadata = buildMetadata({ locale: "fr", title: fr.meta.terms.title, description: fr.meta.terms.description, path: "/terms" });

export default function Page() {
  return <LegalPage lang="fr" doc="terms" />;
}
