import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/legal-page";
import { buildMetadata } from "@/lib/seo";
import { fr } from "@/i18n/dictionaries/fr";

export const metadata: Metadata = buildMetadata({ locale: "fr", title: fr.meta.dmca.title, description: fr.meta.dmca.description, path: "/dmca" });

export default function Page() {
  return <LegalPage lang="fr" doc="dmca" />;
}
