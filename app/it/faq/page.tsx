import type { Metadata } from "next";
import { FaqPage } from "@/components/pages/faq-page";
import { buildMetadata } from "@/lib/seo";
import { it } from "@/i18n/dictionaries/it";

export const metadata: Metadata = buildMetadata({ locale: "it", title: it.meta.faq.title, description: it.meta.faq.description, path: "/faq" });

export default function Page() {
  return <FaqPage lang="it" />;
}
