"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

type ProjectGalleryProps = {
  images: string[];
  projectId: string;
  title: string;
};

export default function ProjectGallery({
  images,
  projectId,
  title,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current - 1 + images.length) % images.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % images.length,
    );
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length]);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${projectId}-gallery-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`${title} — ფოტო ${index + 1} გადიდება`}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden bg-[#ddd6cc] p-0 text-left"
          >
            <Image
              src={image}
              alt={`${title} — ფოტო ${index + 1}`}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 p-0 text-xl leading-none text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
              <ZoomIn aria-hidden="true" size={19} strokeWidth={1.8} />
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — გადიდებული გალერეა`}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 p-3 text-white sm:p-6"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveIndex(null);
          }}
        >
          <div className="mb-3 flex items-center justify-between px-1">
            <p className="text-xs tracking-[0.16em] text-white/70">
              {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="გალერეის დახურვა"
              className="flex h-11 w-11 items-center justify-center border border-white/25 bg-white/10 p-0 text-2xl leading-none transition hover:bg-white hover:text-black"
            >
              <X aria-hidden="true" size={23} strokeWidth={1.8} />
            </button>
          </div>

          <div className="relative min-h-0 flex-1 overflow-hidden">
            <Image
              src={images[activeIndex]}
              alt={`${title} — ფოტო ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="წინა ფოტო"
                  className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/45 p-0 text-2xl leading-none backdrop-blur-sm transition hover:bg-white hover:text-black sm:left-5"
                >
                  <ChevronLeft aria-hidden="true" size={27} strokeWidth={1.8} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="შემდეგი ფოტო"
                  className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-black/45 p-0 text-2xl leading-none backdrop-blur-sm transition hover:bg-white hover:text-black sm:right-5"
                >
                  <ChevronRight aria-hidden="true" size={27} strokeWidth={1.8} />
                </button>
              </>
            )}
          </div>

          <div className="mx-auto mt-3 flex max-w-full gap-2 overflow-x-auto pb-1">
            {images.map((image, index) => (
              <button
                key={`${projectId}-lightbox-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`ფოტო ${index + 1}`}
                className={`relative h-14 w-20 shrink-0 overflow-hidden border-2 p-0 transition sm:h-16 sm:w-24 ${
                  index === activeIndex
                    ? "border-white opacity-100"
                    : "border-transparent opacity-50 hover:opacity-90"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
