import { cn } from "@/lib/utils";

/** IPTVGO logo mark — an aurora rounded square with a play/"GO" glyph. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex items-center justify-center", className)}>
      <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="iptvgo-aurora" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6ff2e0" />
            <stop offset="0.5" stopColor="#19d9c0" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#iptvgo-aurora)" />
        {/* play triangle */}
        <path d="M16 13.5 L27 20 L16 26.5 Z" fill="#05060a" />
        {/* forward chevron (GO) */}
        <path d="M29.5 15.5 L33 20 L29.5 24.5" fill="none" stroke="#05060a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
      </svg>
    </span>
  );
}

/** Full lockup: mark + wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shadow-glow" />
      <span className="font-display text-xl font-bold tracking-tight text-mist">
        IPTV<span className="text-aurora">GO</span>
      </span>
    </span>
  );
}
