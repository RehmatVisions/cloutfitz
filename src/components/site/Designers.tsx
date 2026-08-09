import { Reveal } from "./Reveal";
import { designers } from "@/data/designers-config";

export function Designers() {
  return (
    <section id="designers" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Our designers
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
                A small team, deeply specialised
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              You work directly with the designer building your brand — no account managers
              in between.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {designers.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <article className="hover-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-primary opacity-10 transition-transform duration-500 group-hover:scale-150"
                />
                {m.image ? (
                  <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-2xl shadow-glow">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary font-display text-xl font-bold text-primary-foreground shadow-glow">
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                )}
                {m.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-gradient-primary px-2 py-1 text-[10px] font-bold uppercase text-primary-foreground">
                    ⭐ Featured
                  </span>
                )}
                <h3 className="relative mt-6 text-base font-bold text-ink">{m.name}</h3>
                <p className="relative mt-1 text-sm text-muted-foreground">{m.role}</p>
                <span className="relative mt-5 inline-block rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {m.tag}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
