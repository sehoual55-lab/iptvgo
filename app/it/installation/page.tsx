import type { Metadata } from "next";
import { InstallationPage } from "@/components/pages/installation-page";
import { buildMetadata } from "@/lib/seo";
import { it } from "@/i18n/dictionaries/it";

export const metadata: Metadata = buildMetadata({ locale: "it", title: it.meta.installation.title, description: it.meta.installation.description, path: "/installation" });

export default function Page() {
  return <InstallationPage lang="it" />;
}
