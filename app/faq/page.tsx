import type { Metadata } from "next";
import { FaqPage } from "@/components/pages/faq-page";
import { buildMetadata } from "@/lib/seo";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = buildMetadata({ locale: "en", title: en.meta.faq.title, description: en.meta.faq.description, path: "/faq" });

export default function Page() {
  return <FaqPage lang="en" />;
}
