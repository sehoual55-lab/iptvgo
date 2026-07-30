import type { Metadata } from "next";
import { InstallationPage } from "@/components/pages/installation-page";
import { buildMetadata } from "@/lib/seo";
import { fr } from "@/i18n/dictionaries/fr";

export const metadata: Metadata = buildMetadata({ locale: "fr", title: fr.meta.installation.title, description: fr.meta.installation.description, path: "/installation" });

export default function Page() {
  return <InstallationPage lang="fr" />;
}
