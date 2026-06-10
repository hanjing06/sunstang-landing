"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const subsystems = [
  {
    title: "Aerodynamics",
    image: "/homepage/aerodynamics.webp",
    alt: "Sunstang aerodynamics subteam at work",
  },
  {
    title: "Battery Pack",
    image: "/homepage/battery-pack.webp",
    alt: "Sunstang battery pack subteam at work",
  },
  {
    title: "Chassis & Fabrication",
    image: "/homepage/chassis-fabrication.webp",
    alt: "Sunstang chassis and fabrication subteam at work",
  },
  {
    title: "Driver Controls",
    image: "/homepage/driver-controls.webp",
    alt: "Sunstang driver controls subteam at work",
  },
  {
    title: "Powertrain",
    image: "/homepage/powertrain.webp",
    alt: "Sunstang powertrain subteam at work",
  },
  {
    title: "Solar Array",
    image: "/homepage/solar-array.webp",
    alt: "Sunstang solar array subteam at work",
  },
  {
    title: "Steering & Brakes",
    image: "/homepage/steering-brakes.webp",
    alt: "Sunstang steering and brakes subteam at work",
  },
  {
    title: "Suspension",
    image: "/homepage/suspension.webp",
    alt: "Sunstang suspension subteam at work",
  },
];

export default function SubsystemSection() {
  return (
    <section
      id="subsystems"
      aria-labelledby="subsystems-title"
      className="border-t border-border px-4 py-20 sm:px-6 md:py-28"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Subsystems
          </p>
          <h2
            id="subsystems-title"
            className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl"
          >
            Specialized teams, one solar car.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Each subsystem owns a critical part of the vehicle while working
            closely with the rest of the team from design through race day.
          </p>
        </motion.div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {subsystems.map((item) => (
            <motion.article key={item.title} variants={fadeUp} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-surface">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em]">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
