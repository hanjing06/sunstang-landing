"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] shadow-[0_18px_55px_rgba(24,24,24,0.14)] ring-1 ring-black/5">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
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

      <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center gap-2">
        {images.map((image, imageIndex) => (
          <span
            key={image.src}
            className={`h-1.5 rounded-full bg-white shadow-sm transition-all duration-300 ${
              imageIndex === index ? "w-7" : "w-1.5 opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
