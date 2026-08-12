import {
  BookOpen,
  Instagram,
  PenTool,
  CreditCard,
  Package,
  Monitor,
  Sparkles,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { SERVICES } from "@/data/content";

const iconMap = {
  "Logo & Branding": PenTool,
  "T-Shirt Design": BookOpen,
  "Hoodie & Sweater": BookOpen,
  "Social Posts": Instagram,
  "Business Cards": CreditCard,
  Packaging: Package,
  "Website Design": Monitor,
  "Brand Refresh": Sparkles,
};

const benefits = [
  {
    title: "On-Brand Designs",
    text: "Consistent with your brand guidelines and goals.",
    icon: CheckCircle2,
  },
  {
    title: "Fast Turnaround",
    text: "Quick delivery without compromising quality.",
    icon: Clock3,
  },
  {
    title: "Premium Quality",
    text: "Pixel-perfect, print-ready high-resolution files.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Support",
    text: "Clear communication and ongoing creative support.",
    icon: MessageCircle,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:py-28"
    >
      {/* Soft premium background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-32 h-[420px] w-[420px] rounded-full bg-red-500/[0.035] blur-[120px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-red-500/[0.04] blur-[130px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-red-500 sm:text-xs">
              {SERVICES.badge}
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[62px]">
              Everything your
              <br />
              apparel brand needs,
              <br />
              under{" "}
              <span className="text-red-500">one</span> studio
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              From concept to execution, we design everything your apparel
              brand needs to stand out, sell more, and build a lasting
              impression.
            </p>
          </div>
        </Reveal>

        {/* ================= SERVICE CARDS ================= */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {SERVICES.items.map((s, i) => {
            const IconComponent =
              iconMap[s.title as keyof typeof iconMap] || PenTool;

            const featured = i === 2;

            return (
              <Reveal key={s.title} delay={i * 60}>
                <article
                  className={[
                    "group relative h-full min-h-[250px] overflow-hidden rounded-[28px] border bg-white p-7 transition-all duration-300",
                    featured
                      ? "border-red-500 shadow-[0_20px_55px_rgba(239,68,68,0.10)]"
                      : "border-black/[0.09] shadow-[0_10px_35px_rgba(0,0,0,0.025)] hover:-translate-y-1 hover:border-black/[0.14] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)]",
                  ].join(" ")}
                >
                  {/* Featured arrow */}
                  {featured && (
                    <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-red-500 text-white shadow-[0_10px_25px_rgba(239,68,68,0.25)] transition-transform duration-300 group-hover:scale-105">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  )}

                  {/* Icon */}
                  <span
                    className={[
                      "grid h-14 w-14 place-items-center rounded-full transition-all duration-300",
                      featured
                        ? "bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white"
                        : "bg-[#f5f4f2] text-red-500 group-hover:bg-red-50",
                    ].join(" ")}
                  >
                    <IconComponent className="h-6 w-6" strokeWidth={1.8} />
                  </span>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-[18px] font-extrabold tracking-[-0.02em] text-ink">
                      {s.title}
                    </h3>

                    {/* Red accent line */}
                    <div className="mt-3 h-[2px] w-6 rounded-full bg-red-500 transition-all duration-300 group-hover:w-10" />

                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {s.text}
                    </p>
                  </div>

                  {/* Bottom subtle glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-red-500/[0.035] blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* ================= BENEFITS ================= */}
        <Reveal delay={180}>
          <div className="mt-5 overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.035)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className={[
                      "relative flex items-start gap-4 px-6 py-6 lg:px-7",
                      index !== 0
                        ? "border-t border-black/[0.07] sm:border-t-0 sm:border-l"
                        : "",
                      index === 2
                        ? "lg:border-l"
                        : "",
                    ].join(" ")}
                  >
                    {/* Icon */}
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-red-50 text-red-500">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>

                    {/* Text */}
                    <div>
                      <h3 className="text-sm font-extrabold tracking-[-0.01em] text-ink">
                        {benefit.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}