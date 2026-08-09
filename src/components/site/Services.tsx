import {
  BookOpen,
  Instagram,
  PenTool,
  Printer,
  CreditCard,
  Package,
  Monitor,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: BookOpen, title: "Menu Design", text: "Dine-in, takeaway and digital menus that sell your best dishes." },
  { icon: Instagram, title: "Social Media Posts", text: "Monthly post packs, reels covers and campaign creatives." },
  { icon: PenTool, title: "Logo & Branding", text: "Full identity systems: logo, colors, type and brand guide." },
  { icon: Printer, title: "Flyers & Standees", text: "Print-ready offers, opening flyers, table tents and standees." },
  { icon: CreditCard, title: "Business Cards", text: "Premium stationery with foil, emboss and spot-UV finishes." },
  { icon: Package, title: "Packaging", text: "Boxes, bags, cups and labels built for delivery-first brands." },
  { icon: Monitor, title: "Website Design", text: "Ordering-ready restaurant websites designed to convert." },
  { icon: Sparkles, title: "Brand Refresh", text: "Modernise an old restaurant brand without losing its soul." },
];

export function Services() {
  return (
    <section id="services" className="px-3 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            What we design
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Everything your restaurant brand needs, under one studio
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="hover-lift group h-full rounded-3xl border border-border bg-card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
