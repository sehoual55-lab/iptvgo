import type { Metadata } from "next";
import { LegalPage } from "@/components/pages/legal-page";
import { buildMetadata } from "@/lib/seo";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = buildMetadata({ locale: "en", title: en.meta.dmca.title, description: en.meta.dmca.description, path: "/dmca" });

export default function Page() {
  return <LegalPage lang="en" doc="dmca" />;
}
