import { Reveal } from "./Reveal";
import { designers } from "@/data/designers-config";
import officeImage from "@/assets/office.png";

export function Designers() {
  return (
    <section id="designers" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Our team
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Talented designers creating exceptional work
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              You work directly with our creative team — no account managers,
              just direct collaboration and exceptional design.
            </p>
          </div>
        </Reveal>

        {/* Team Members Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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

        {/* Office Showcase Section */}
        <Reveal delay={300}>
          <div className="mt-16 overflow-hidden rounded-3xl border border-border shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
              {/* Office Image */}
              <div className="relative h-64 sm:h-80 lg:h-full overflow-hidden">
                <img
                  src={officeImage}
                  alt="CLOUTFITZ Studio Office"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              </div>

              {/* Office Info */}
              <div className="p-8 sm:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Our Studio
                </p>
                <h3 className="mt-4 text-2xl font-extrabold text-ink sm:text-3xl">
                  Where creativity
                  <br />
                  comes to life
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Our studio in the heart of the creative district is where design magic happens. 
                  Every project is crafted with attention to detail, collaboration, and a passion 
                  for creating exceptional apparel designs that make brands stand out.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full bg-primary/10">
                    <span className="grid h-full w-full place-items-center font-bold text-primary">🎨</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">Design First Approach</p>
                    <p className="text-xs text-muted-foreground">Quality over quantity, always.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
