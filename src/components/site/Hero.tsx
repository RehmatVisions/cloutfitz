import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";
import heroBackground from "../../assets/hero/herobackrond.png";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Designs", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
];

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="top"
      className="
        relative isolate
        h-[100svh] min-h-[620px]
        w-full overflow-hidden
        bg-white
      "
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================= */}
      <img
        src={heroBackground}
        alt="CLOUTFITZ apparel design studio"
        className="
          absolute inset-0 -z-20
          h-full w-full
          object-cover
          object-center
        "
      />

      {/* Very subtle readability layer */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-white/20
          via-transparent
          to-transparent
        "
      />

      {/* =========================================================
          NAVBAR
          NOT FIXED — PART OF HERO
      ========================================================= */}
      <header
        className="
          absolute left-0 right-0 top-0 z-40
          px-5 pt-4
          sm:px-8 sm:pt-5
          lg:px-10
        "
      >
        <nav
          className="
            mx-auto
            flex
            h-[58px]
            w-full
            max-w-[1380px]
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <a
            href="#top"
            className="
              relative z-50
              flex shrink-0
              items-center
            "
          >
            <Logo />
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-[14px]
                  font-medium
                  text-black/80
                  transition-colors
                  duration-200
                  hover:text-black
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="
              hidden
              rounded-full
              bg-[#ff2f3d]
              px-6 py-3
              text-[14px]
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(255,47,61,0.18)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#ef2433]
              lg:inline-flex
            "
          >
            Start a Project
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="
              relative z-50
              grid h-10 w-10
              place-items-center
              rounded-full
              border border-black/10
              bg-white/70
              text-black
              backdrop-blur-md
              lg:hidden
            "
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Mobile dropdown */}
          {open && (
            <div
              className="
                absolute
                left-4 right-4 top-[66px]
                overflow-hidden
                rounded-2xl
                border border-black/10
                bg-white/95
                p-3
                shadow-2xl
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
                    px-4 py-3
                    text-sm
                    font-medium
                    text-black/75
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
                  bg-[#ff2f3d]
                  px-4 py-3
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

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div
        className="
          mx-auto
          flex h-full
          w-full
          max-w-[1380px]
          items-center
          px-5
          pt-[78px]
          pb-5

          sm:px-8
          sm:pt-[82px]

          lg:px-10
          lg:pt-[78px]
          lg:pb-6
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[720px]
            flex-col
          "
        >
          {/* =====================================================
              LABEL
          ===================================================== */}
          <div
            className="
              mb-[clamp(14px,2vh,24px)]
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-black/10
              bg-white/75
              px-4 py-2
              shadow-sm
              backdrop-blur-md
            "
          >
            <span
              className="
                h-2 w-2
                shrink-0
                rounded-full
                bg-[#ff2f3d]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-black/70

                sm:text-[11px]
              "
            >
              Global Apparel Design Brand
            </span>
          </div>

          {/* =====================================================
              MAIN HEADING
          ===================================================== */}
          <h1
            className="
              max-w-[480px]

              text-[clamp(28px,3.5vw,52px)]
              font-extrabold
              leading-[0.88]
              tracking-[-0.055em]

              text-[#101114]
            "
          >
            <span className="text-[#ff2638]">
              Designs
            </span>{" "}
            that keep your
            <br />
            apparel brand
            <br />
            fresh.
          </h1>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}
          <p
            className="
              mt-[clamp(12px,1.8vh,22px)]
              max-w-[450px]

              text-[clamp(12px,0.95vw,14px)]
              leading-[1.5]

              text-[#26303a]/80
            "
          >
            CloudFitz Apparels delivers premium T-shirt, hoodie, and sweater designs for modern clothing brands worldwide. Get 20-30 fresh designs monthly, starting at just 299 AED. We turn your vision into pixel-perfect apparel designs built for real collections.
          </p>

          {/* =====================================================
              BUTTONS
          ===================================================== */}
          <div
            className="
              mt-[clamp(16px,2.4vh,28px)]
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#ff2638]
                px-6
                py-3.5

                text-[13px]
                font-semibold
                text-white

                shadow-[0_10px_30px_rgba(255,38,56,0.20)]

                transition-all
                duration-200

                hover:-translate-y-0.5
                hover:bg-[#ed1f31]
              "
            >
              Start Your Project

              <ArrowUpRight
                className="
                  h-4 w-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>

            <a
              href="#work"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full

                border
                border-black/20
                bg-white/55

                px-6
                py-3.5

                text-[13px]
                font-semibold
                text-black/75

                backdrop-blur-sm

                transition-all
                duration-200

                hover:border-black/30
                hover:bg-white/75
                hover:text-black
              "
            >
              View Our Designs

              <span className="text-base leading-none">
                →
              </span>
            </a>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}
          <div
            className="
              mt-[clamp(16px,2.6vh,30px)]
              flex
              flex-wrap
              items-start
              gap-x-7
              gap-y-3

              border-t
              border-black/10
              pt-[clamp(12px,1.8vh,20px)]
            "
          >
            {/* Stat 1 */}
            <div className="min-w-[90px]">
              <div
                className="
                  text-[clamp(22px,2.2vw,34px)]
                  font-bold
                  leading-none
                  tracking-tight
                  text-[#111318]
                "
              >
                20-30
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-black/50
                "
              >
                Designs Monthly
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-9 w-px bg-black/10 sm:block" />

            {/* Stat 2 */}
            <div className="min-w-[90px]">
              <div
                className="
                  text-[clamp(22px,2.2vw,34px)]
                  font-bold
                  leading-none
                  tracking-tight
                  text-[#111318]
                "
              >
                299 AED+
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-black/50
                "
              >
                Starting Price
              </div>
            </div>

            {/* Divider */}
            <div className="hidden h-9 w-px bg-black/10 sm:block" />

            {/* Stat 3 */}
            <div className="min-w-[105px]">
              <div
                className="
                  text-[clamp(22px,2.2vw,34px)]
                  font-bold
                  leading-none
                  tracking-tight
                  text-[#111318]
                "
              >
                50+
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-black/50
                "
              >
                Countries Served
              </div>

              <div className="mt-1 flex gap-1 text-xs">
                🌍
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MOBILE READABILITY
      ========================================================= */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-t
          from-white/15
          to-transparent
          lg:hidden
        "
      />
    </section>
  );
}