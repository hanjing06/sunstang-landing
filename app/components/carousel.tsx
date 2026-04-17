"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/placeholder1.jpg",
  "/placeholder2.jpg",
  "/placeholder3.jpg",
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
    <div className="relative h-[420px] w-full overflow-hidden rounded-[28px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex items-center justify-center bg-[#CFCFD4]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Replace this with <Image /> later */}
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#4F4F4F]">
            Image {index + 1}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}