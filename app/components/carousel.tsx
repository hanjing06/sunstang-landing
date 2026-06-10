"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "/homepage/who-is-sunstang-1.webp",
    alt: "Sunstang team members working on the solar car",
  },
  {
    src: "/homepage/who-is-sunstang-2.webp",
    alt: "The Sunstang solar car project",
  },
  {
    src: "/homepage/who-is-sunstang-3.webp",
    alt: "Sunstang team members collaborating",
  },
  {
    src: "/homepage/who-is-sunstang-4.webp",
    alt: "Sunstang team and solar car",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused, shouldReduceMotion]);

  const showPrevious = () => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setIndex((current) => (current + 1) % images.length);
  };

  return (
    <figure
      className="relative h-80 w-full overflow-hidden rounded-xl border border-border sm:h-[420px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Sunstang project photos"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Show previous photo"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-xl text-ink shadow-sm transition-colors hover:bg-surface"
      >
        <span aria-hidden="true">←</span>
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Show next photo"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-xl text-ink shadow-sm transition-colors hover:bg-surface"
      >
        <span aria-hidden="true">→</span>
      </button>

      <div
        className="absolute inset-x-0 bottom-2 z-10 flex items-center justify-center"
        aria-label="Choose a photo"
      >
        {images.map((image, imageIndex) => (
          <button
            type="button"
            key={image.src}
            onClick={() => setIndex(imageIndex)}
            aria-label={`Show photo ${imageIndex + 1}`}
            aria-current={imageIndex === index}
            className="flex h-11 w-11 items-center justify-center rounded-full"
          >
            <span
              aria-hidden="true"
              className={`h-2 rounded-full bg-white shadow-sm transition-all ${
                imageIndex === index ? "w-8" : "w-2 opacity-65"
              }`}
            />
          </button>
        ))}

        <button
          type="button"
          onClick={() => setIsPaused((current) => !current)}
          aria-label={isPaused ? "Play photo slideshow" : "Pause photo slideshow"}
          className="ml-1 flex h-11 w-11 items-center justify-center rounded-full bg-surface/90 text-sm font-semibold text-ink shadow-sm"
        >
          <span aria-hidden="true">{isPaused ? "▶" : "Ⅱ"}</span>
        </button>
      </div>

      <figcaption className="sr-only" aria-live="polite">
        Photo {index + 1} of {images.length}: {images[index].alt}
      </figcaption>
    </figure>
  );
}
