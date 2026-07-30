import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata } from "@/lib/seo";
import { it } from "@/i18n/dictionaries/it";

export const metadata: Metadata = buildMetadata({ locale: "it", title: it.meta.contact.title, description: it.meta.contact.description, path: "/contact" });

export default function Page() {
  return <ContactPage lang="it" />;
}
