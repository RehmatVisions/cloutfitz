import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { ProtectedImage } from "./ImageProtection";
import { works } from "@/data/works";

export function Work() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % works.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  return (
    <section id="work" className="px-3 py-20 sm:px-6 sm:py-28 flex items-center justify-center min-h-screen">
      <style>{`
        .portfolio-card:hover {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>
      <div className="w-full max-w-5xl">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Our work
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Design portfolio
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Click any image to view in full screen.
            </p>
          </div>
        </Reveal>

        {/* Centered Gallery Grid - Full Images No Rounded Corners */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 place-items-center">
          {works.map((w, i) => (
            <Reveal key={w.id} delay={(i % 2) * 80}>
              <article 
                onClick={() => openLightbox(i)}
                className="portfolio-card group relative cursor-pointer w-full transition-all duration-300"
              >
                {/* Full Image - Perfectly Fitted */}
                <div className="overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                  <div className="relative bg-black" style={{ aspectRatio: '1 / 1.4' }}>
                    <ProtectedImage
                      src={w.image}
                      alt={w.title}
                      className="portfolio-image w-full h-full object-contain transition-transform duration-500"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Clean Fullscreen Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center px-4">
            <ProtectedImage
              src={works[lightboxIndex].image}
              alt={works[lightboxIndex].title}
              className="max-h-[90vh] max-w-full object-contain"
            />
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-40 grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-40 grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightboxIndex + 1} / {works.length}
          </div>
        </div>
      )}
    </section>
  );
}
