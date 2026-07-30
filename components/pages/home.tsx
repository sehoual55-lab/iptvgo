import { Shell } from "@/components/shell";
import { Hero } from "@/components/sections/hero";
import { FilmScroll } from "@/components/sections/film-scroll";
import { Why } from "@/components/sections/why";
import { Coverage } from "@/components/sections/coverage";
import { Experience } from "@/components/sections/experience";
import { Devices } from "@/components/sections/devices";
import { AiSection } from "@/components/sections/ai-section";
import { Stories } from "@/components/sections/stories";
import { Pricing } from "@/components/sections/pricing";
import { InstallationTimeline } from "@/components/sections/installation-timeline";
import { Faq } from "@/components/sections/faq";
import { BlogPreview } from "@/components/sections/blog-preview";
import { FinalCta } from "@/components/sections/final-cta";
import { JsonLd } from "@/components/jsonld";
import { faqJsonLd, productJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { getShowcase } from "@/lib/tmdb";
import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";

export async function HomePage({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const posters = await getShowcase();

  return (
    <Shell dict={dict} lang={lang}>
      <JsonLd data={[
        organizationJsonLd(),
        websiteJsonLd(),
        faqJsonLd(dict.faq.items.slice(0, 6)),
        productJsonLd({ name: "Gold", price: 49.99, description: dict.meta.home.description }),
      ]} />
      <Hero dict={dict} lang={lang} />
      <FilmScroll posters={posters} dict={dict} />
      <div id="why" className="scroll-mt-24"><Why dict={dict} /></div>
      <Coverage dict={dict} />
      <div id="experience" className="scroll-mt-24"><Experience dict={dict} /></div>
      <Devices dict={dict} />
      <AiSection dict={dict} />
      <Stories dict={dict} />
      <Pricing dict={dict} />
      <InstallationTimeline dict={dict} />
      <Faq dict={dict} lang={lang} />
      <BlogPreview dict={dict} lang={lang} />
      <FinalCta dict={dict} lang={lang} />
    </Shell>
  );
}
