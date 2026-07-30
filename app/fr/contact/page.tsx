import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata } from "@/lib/seo";
import { fr } from "@/i18n/dictionaries/fr";

export const metadata: Metadata = buildMetadata({ locale: "fr", title: fr.meta.contact.title, description: fr.meta.contact.description, path: "/contact" });

export default function Page() {
  return <ContactPage lang="fr" />;
}
