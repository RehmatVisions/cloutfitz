export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M4 5l8 14 8-14"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-base font-bold tracking-tight text-ink">
            Vezelai
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Designs
          </span>
        </span>
      )}
    </a>
  );
}
