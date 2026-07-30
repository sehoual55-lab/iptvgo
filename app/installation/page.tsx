import type { Metadata } from "next";
import { InstallationPage } from "@/components/pages/installation-page";
import { buildMetadata } from "@/lib/seo";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = buildMetadata({ locale: "en", title: en.meta.installation.title, description: en.meta.installation.description, path: "/installation" });

export default function Page() {
  return <InstallationPage lang="en" />;
}
