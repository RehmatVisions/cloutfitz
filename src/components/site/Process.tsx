import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { PROCESS } from "@/data/content";

export function Process() {
  return (
    <section id="process" className="bg-surface px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="grid gap-4 sm:grid-cols-2">
          {PROCESS.steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 80}>
              <article
                className={`hover-lift h-full rounded-3xl border p-6 ${
                  i === 1
                    ? "border-transparent bg-gradient-primary text-primary-foreground shadow-glow"
                    : "border-border bg-card"
                }`}
              >
                <span
                  className={`font-display text-2xl font-bold ${
                    i === 1 ? "text-primary-foreground/70" : "text-primary"
                  }`}
                >
                  {s.number}
                </span>
                <h3
                  className={`mt-4 text-base font-bold ${
                    i === 1 ? "text-primary-foreground" : "text-ink"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    i === 1 ? "text-primary-foreground/85" : "text-muted-foreground"
                  }`}
                >
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              How we work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              A calm process, <span className="text-gradient-primary">sharp results</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We have designed for apparel brands long enough to know the importance of
              consistency and monthly delivery. That is why every project runs on a fixed
              schedule, a single point of contact and unlimited revisions inside the agreed
              direction — no surprises, no chasing.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Dedicated designer for your brand",
                "First concept in 48 hours",
                "Print-ready and social-ready files included",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.04]"
            >
              Book a free consult
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
