import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata } from "@/lib/seo";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = buildMetadata({ locale: "en", title: en.meta.contact.title, description: en.meta.contact.description, path: "/contact" });

export default function Page() {
  return <ContactPage lang="en" />;
}
