import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/legal-page";
import { buildMetadata } from "@/lib/seo";
import { it } from "@/i18n/dictionaries/it";

export const metadata: Metadata = buildMetadata({ locale: "it", title: it.meta.terms.title, description: it.meta.terms.description, path: "/terms" });

export default function Page() {
  return <LegalPage lang="it" doc="terms" />;
}
