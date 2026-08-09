import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    name: "Khalid Al Mansoori",
    role: "Owner, Al Mandi House — Dubai",
    text: "Our new menu paid for itself in the first week. Guests actually order the dishes we want to sell now.",
  },
  {
    name: "Sara Haddad",
    role: "Marketing Lead, Rosso Kitchen",
    text: "A full month of social posts, always on time and always on brand. Working with Vezelai is effortless.",
  },
  {
    name: "Imran Sheikh",
    role: "Founder, Spice Haus",
    text: "They rebranded us from logo to packaging. Delivery orders went up 34% in two months.",
  },
  {
    name: "Layla Nour",
    role: "GM, Layali Lounge",
    text: "Premium finish on every single file. The print house did not need a single correction.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Restaurants that trust us with their brand
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <figure className="hover-lift h-full rounded-3xl border border-border bg-card p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 shrink-0 text-accent" />
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-ink">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex min-w-0 items-center gap-3 border-t border-border pt-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-ink">{t.name}</span>
                    <span className="block truncate text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
