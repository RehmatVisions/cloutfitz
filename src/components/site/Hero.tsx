import { ArrowUpRight, Star } from "lucide-react";
import menu from "@/assets/work-menu.jpg";
import post from "@/assets/work-post.jpg";
import card from "@/assets/work-card.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-3 pt-28 sm:px-6 sm:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-gradient-primary opacity-20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-64 h-[360px] w-[360px] rounded-full bg-accent opacity-60 blur-3xl"
      />

      <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-border bg-card/70 px-5 py-12 shadow-soft backdrop-blur-sm sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Design studio for restaurants
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              <span className="text-gradient-primary">Designs</span> that make
              <br className="hidden sm:block" /> restaurants unforgettable
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Vezelai Designs crafts menus, logos, flyers, social posts, packaging and
              websites for restaurants across Dubai and beyond — pixel perfect, on brand,
              delivered fast.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
              >
                Start your project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                View our work
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                ["480+", "Projects delivered"],
                ["120+", "Dubai clients"],
                ["10", "Niches covered"],
              ].map(([value, label]) => (
                <div key={label} className="min-w-0">
                  <dt className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    {value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative min-w-0">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <div className="absolute inset-0 rotate-3 rounded-[2rem] bg-gradient-primary opacity-15" />
              <img
                src={menu}
                alt="Restaurant menu design by Vezelai Designs"
                width={912}
                height={1104}
                className="absolute inset-0 h-full w-full rounded-[2rem] object-cover shadow-soft"
              />
              <img
                src={post}
                alt="Social media post design for a restaurant"
                width={912}
                height={1104}
                loading="lazy"
                className="animate-float absolute -left-4 bottom-6 w-28 rounded-2xl border-4 border-card object-cover shadow-soft sm:-left-10 sm:w-36"
              />
              <img
                src={card}
                alt="Restaurant business card design"
                width={912}
                height={1104}
                loading="lazy"
                className="animate-float absolute -right-3 top-8 w-28 rounded-2xl border-4 border-card object-cover shadow-soft sm:-right-8 sm:w-36"
                style={{ animationDelay: "1.5s" }}
              />
              <div className="absolute -bottom-5 right-2 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-soft sm:right-8">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-xs font-semibold text-ink">4.9 / 5 client rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 opacity-70">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex gap-10">
              {[
                "Al Mandi House",
                "Rosso Kitchen",
                "Ryoku Dubai",
                "Spice Haus",
                "Ember Kitchen",
                "Layali Lounge",
                "Palm Bay",
              ].map((n) => (
                <span
                  key={n + dup}
                  className="whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {n}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
