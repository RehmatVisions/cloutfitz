import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ProtectedImage } from "./ImageProtection";
import { categories, niches, works } from "@/data/works";

export function Work() {
  const [niche, setNiche] = useState<string>(niches[0]);
  const [category, setCategory] = useState<string>("All");

  const items = useMemo(
    () =>
      works.filter(
        (w) => w.niche === niche && (category === "All" || w.category === category),
      ),
    [niche, category],
  );

  return (
    <section id="work" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Our work
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Samples, sorted by niche
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Restaurants are our home ground — start there, then filter by the exact
              deliverable you need.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="-mx-3 mt-10 overflow-x-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2">
              {niches.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => {
                    setNiche(n);
                    setCategory("All");
                  }}
                  className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                    niche === n
                      ? "border-transparent bg-gradient-primary text-primary-foreground shadow-glow"
                      : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="-mx-3 mt-3 overflow-x-auto px-3 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2">
              {["All", ...categories].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    category === c
                      ? "bg-ink text-background"
                      : "bg-secondary text-muted-foreground hover:text-primary"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((w, i) => (
            <Reveal key={w.id} delay={(i % 3) * 80}>
              <article className="hover-lift group h-full overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ProtectedImage
                    src={w.image}
                    alt={`${w.title} for ${w.client} — ${w.niche}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink backdrop-blur">
                    {w.category}
                  </span>
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 p-5">
                  <div className="min-w-0">
                    <p className="truncate text-xs text-muted-foreground">{w.niche}</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
