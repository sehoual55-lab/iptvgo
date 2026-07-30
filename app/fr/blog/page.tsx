import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pages/blog-index-page";
import { buildMetadata } from "@/lib/seo";
import { fr } from "@/i18n/dictionaries/fr";

export const metadata: Metadata = buildMetadata({ locale: "fr", title: fr.meta.blog.title, description: fr.meta.blog.description, path: "/blog" });

export default function Page() {
  return <BlogIndexPage lang="fr" />;
}
