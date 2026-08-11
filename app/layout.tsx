import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource-variable/inter";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { en } from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: en.meta.home.title, template: "%s | IPTVGO" },
  description: en.meta.home.description,
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

// Sets <html lang> from the URL locale prefix (works with static export).
const langScript = `(function(){try{var p=location.pathname;var l=p.indexOf('/it')===0?'it-IT':p.indexOf('/fr')===0?'fr-FR':'en-GB';document.documentElement.lang=l;}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
      </head>
      <body className="min-h-screen font-sans">{children}<Script src="/iptvgo-checkout.js" strategy="afterInteractive" /></body>
    </html>
  );
}
