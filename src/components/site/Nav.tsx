import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Designs", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-5 pt-4 sm:px-8 lg:px-10">
      <nav
        className="
          mx-auto
          flex
          max-w-[1500px]
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <a
          href="#top"
          className="
            flex
            h-[62px]
            w-[150px]
            shrink-0
            items-center
          "
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                text-[13px]
                font-medium
                text-black/75
                transition-colors
                hover:text-black
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="
            hidden
            rounded-full
            bg-[#ff2638]
            px-6
            py-3
            text-[13px]
            font-semibold
            text-white
            shadow-[0_8px_24px_rgba(255,38,56,0.20)]
            transition-all
            hover:-translate-y-0.5
            hover:bg-[#ed1d31]
            lg:block
          "
        >
          Start a Project
        </a>

        {/* Mobile button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            border
            border-black/10
            bg-white/60
            text-black
            backdrop-blur-sm
            lg:hidden
          "
        >
          {open ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>

        {/* Mobile menu */}
        {open && (
          <div
            className="
              absolute
              left-5
              right-5
              top-[68px]
              rounded-2xl
              border
              border-black/10
              bg-white/95
              p-3
              shadow-xl
              backdrop-blur-xl
              lg:hidden
            "
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  block
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  font-medium
                  text-black/70
                  transition
                  hover:bg-black/5
                  hover:text-black
                "
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                mt-2
                block
                rounded-full
                bg-[#ff2638]
                px-4
                py-3
                text-center
                text-sm
                font-semibold
                text-white
              "
            >
              Start a Project
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}