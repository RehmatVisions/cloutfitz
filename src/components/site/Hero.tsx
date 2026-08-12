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
        min-h-[100svh]
        w-full overflow-hidden
        bg-[#f5f1e9]
      "
    >
      {/* =========================================================
          HERO BACKGROUND
          Desktop = original image
          Mobile = none (light background only)
      ========================================================= */}
      <img
        src={heroBackground}
        alt="CLOUTFITZ apparel design studio"
        className="
          absolute inset-0 -z-20
          h-full w-full
          object-cover
          object-center
          hidden
          md:block
        "
      />

      {/* =========================================================
          DESKTOP ONLY LIGHT READABILITY
      ========================================================= */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-0 -z-10
          hidden
          bg-gradient-to-r
          from-white/25
          via-transparent
          to-transparent
          lg:block
        "
      />

      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header
        className="
          absolute
          left-0 right-0 top-0
          z-50
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
          {/* =====================================================
              LOGO
          ===================================================== */}
          <a
            href="#top"
            aria-label="CLOUTFITZ home"
            className="
              relative z-50
              flex
              shrink-0
              items-center
              max-md:w-[104px]
              md:w-auto
            "
          >
            <Logo />
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
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

          {/* =====================================================
              DESKTOP CTA
          ===================================================== */}
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

          {/* =====================================================
              MOBILE MENU
          ===================================================== */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="
              relative z-50
              grid
              h-9 w-9
              place-items-center
              rounded-full
              border
              border-black/10
              bg-white/75
              text-black
              shadow-[0_4px_16px_rgba(0,0,0,0.08)]
              backdrop-blur-md
              lg:hidden
            "
          >
            {open ? (
              <X className="h-[18px] w-[18px]" />
            ) : (
              <Menu className="h-[18px] w-[18px]" />
            )}
          </button>

          {/* =====================================================
              MOBILE MENU PANEL
          ===================================================== */}
          {open && (
            <div
              className="
                absolute
                left-4 right-4
                top-[66px]
                overflow-hidden
                rounded-2xl
                border
                border-black/10
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
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-[1380px]
          items-center

          px-5
          pt-[82px]
          pb-8

          sm:px-8
          sm:pt-[90px]

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

            max-md:justify-center
            max-md:pb-[5vh]
          "
        >
          {/* =====================================================
              BRAND LABEL
          ===================================================== */}
          <div
            className="
              mb-4
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-black/10
              bg-white/75
              px-3.5
              py-2
              shadow-sm
              backdrop-blur-md

              sm:mb-5
              sm:px-4
            "
          >
            <span
              className="
                h-2 w-2
                shrink-0
                rounded-full
                bg-[#ff2638]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-black/65

                sm:text-[10px]
                sm:tracking-[0.20em]
              "
            >
              Global Apparel Design Brand
            </span>
          </div>

          {/* =====================================================
              HEADING
          ===================================================== */}
          <h1
            className="
              max-w-[500px]
              text-[clamp(30px,3.5vw,52px)]
              font-extrabold
              leading-[0.89]
              tracking-[-0.055em]
              text-[#101114]

              max-md:max-w-[310px]
              max-md:text-[34px]
              max-md:leading-[0.92]
              max-md:tracking-[-0.045em]
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
              mt-4
              max-w-[455px]
              text-[14px]
              leading-[1.5]
              text-[#26303a]/80

              max-md:mt-3
              max-md:max-w-[300px]
              max-md:text-[11px]
              max-md:leading-[1.45]
            "
          >
            CloudFitz Apparels delivers premium T-shirt, hoodie, and
            sweater designs for modern clothing brands worldwide.
            Get 20-30 fresh designs monthly, starting at just 299 AED.
            We turn your vision into pixel-perfect apparel designs
            built for real collections.
          </p>

          {/* =====================================================
              CTA BUTTONS
          ===================================================== */}
          <div
            className="
              mt-6
              flex
              items-center
              gap-3

              max-md:mt-4
              max-md:gap-2
            "
          >
            {/* Primary */}
            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                justify-center
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

                max-md:px-4
                max-md:py-3
                max-md:text-[10.5px]
                max-md:whitespace-nowrap
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
                  max-md:h-3.5
                  max-md:w-3.5
                "
              />
            </a>

            {/* Secondary */}
            <a
              href="#work"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-black/15
                bg-white/60
                px-6
                py-3.5
                text-[13px]
                font-semibold
                text-black/75
                shadow-sm
                backdrop-blur-sm
                transition-all
                duration-200
                hover:border-black/25
                hover:bg-white/80
                hover:text-black

                max-md:px-4
                max-md:py-3
                max-md:text-[10.5px]
                max-md:whitespace-nowrap
              "
            >
              View Our Designs

              <span
                className="
                  text-base
                  leading-none
                  max-md:text-sm
                "
              >
                →
              </span>
            </a>
          </div>

          {/* =====================================================
              STATS
          ===================================================== */}
          <div
            className="
              mt-7
              flex
              items-start
              gap-7
              border-t
              border-black/10
              pt-5

              max-md:mt-5
              max-md:grid
              max-md:grid-cols-3
              max-md:gap-2
              max-md:pt-3
            "
          >
            {/* 20-30 */}
            <div className="min-w-0">
              <div
                className="
                  text-[34px]
                  font-bold
                  leading-none
                  tracking-tight
                  text-[#111318]

                  max-md:text-[20px]
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
                  tracking-[0.06em]
                  text-black/50

                  max-md:text-[6.5px]
                "
              >
                Designs Monthly
              </div>
            </div>

            <div className="hidden h-9 w-px bg-black/10 sm:block" />

            {/* Price */}
            <div className="min-w-0">
              <div
                className="
                  text-[34px]
                  font-bold
                  leading-none
                  tracking-tight
                  text-[#111318]

                  max-md:text-[20px]
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
                  tracking-[0.06em]
                  text-black/50

                  max-md:text-[6.5px]
                "
              >
                Starting Price
              </div>
            </div>

            <div className="hidden h-9 w-px bg-black/10 sm:block" />

            {/* Countries */}
            <div className="min-w-0">
              <div
                className="
                  text-[34px]
                  font-bold
                  leading-none
                  tracking-tight
                  text-[#111318]

                  max-md:text-[20px]
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
                  tracking-[0.06em]
                  text-black/50

                  max-md:text-[6.5px]
                "
              >
                Countries Served
              </div>

              <div className="mt-1 text-xs max-md:text-[9px]">
                🌍
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}