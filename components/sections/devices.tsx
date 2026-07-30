import { Reveal } from "@/components/reveal";
import { BrandLogo } from "@/components/brand-logos";
import type { Dictionary } from "@/i18n/dictionaries/en";

const brands: { key: string; label: string }[] = [
  { key: "samsung", label: "Samsung" },
  { key: "lg", label: "LG" },
  { key: "sony", label: "Sony" },
  { key: "appletv", label: "Apple TV" },
  { key: "amazon", label: "Fire TV" },
  { key: "android", label: "Android TV" },
  { key: "apple", label: "iPhone / macOS" },
  { key: "windows", label: "Windows" },
  { key: "roku", label: "Roku" },
  { key: "chromecast", label: "Chromecast" },
  { key: "xbox", label: "Xbox" },
  { key: "linux", label: "Linux" },
];

export function Devices({ dict }: { dict: Dictionary }) {
  const { eyebrow, title, subtitle } = dict.devices;

  return (
    <section id="devices" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[560px] -translate-x-1/2 rounded-full bg-violet/10 blur-[130px]" />
      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-display text-3xl font-bold text-mist md:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-balance text-lg text-mist-400">{subtitle}</p>
        </Reveal>

        {/* Logo grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b, i) => (
            <Reveal key={b.key} delay={(i % 4) * 0.05}>
              <div className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-glow">
                <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-aurora opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40" />
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-mist-400 transition-colors duration-300 group-hover:bg-teal/15 group-hover:text-teal-300">
                  <BrandLogo name={b.key} className="h-6 w-6" />
                </span>
                <span className="relative text-sm font-semibold text-mist">{b.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
