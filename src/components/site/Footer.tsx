import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="px-3 pb-6 sm:px-6">
      <Reveal>
        <div
          id="contact"
          className="mx-auto max-w-6xl scroll-mt-28 overflow-hidden rounded-[2.5rem] bg-gradient-primary px-6 py-14 text-primary-foreground shadow-glow sm:px-12 sm:py-20"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_auto] lg:items-center">
            <div className="min-w-0">
              <h2 className="max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Ready to make your restaurant look world-class?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
                Send us your brief today — first concept lands within 48 hours.
              </p>
            </div>
            <a
              href="mailto:hello@vezelaidesigns.com"
              className="group inline-flex w-max items-center gap-2 rounded-full bg-card px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.04]"
            >
              hello@vezelaidesigns.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-8 max-w-6xl rounded-[2.5rem] border border-border bg-card px-6 py-12 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A restaurant-first design studio. Menus, branding, print, social and websites
              for hospitality brands worldwide.
            </p>
          </div>

          <nav className="min-w-0">
            <h3 className="text-sm font-bold text-ink">Studio</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {[
                ["Services", "#services"],
                ["Process", "#process"],
                ["Our work", "#work"],
                ["Designers", "#designers"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="min-w-0">
            <h3 className="text-sm font-bold text-ink">Design</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {["Menu design", "Logo & branding", "Social posts", "Packaging"].map((l) => (
                <li key={l}>
                  <a href="#work" className="transition-colors hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h3 className="text-sm font-bold text-ink">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Business Bay, Dubai, UAE
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:hello@vezelaidesigns.com" className="hover:text-primary">
                  hello@vezelaidesigns.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+971500000000" className="hover:text-primary">
                  +971 50 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vezelai Designs. All rights reserved.</p>
          <p>Designed for restaurants, everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
