import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";
import { en } from "@/i18n/dictionaries/en";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brand.name,
    short_name: siteConfig.brand.name,
    description: en.meta.home.description,
    start_url: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#19d9c0",
    lang: "en",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
