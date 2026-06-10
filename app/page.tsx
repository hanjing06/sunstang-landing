"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Carousel from "./components/carousel";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger:Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const subsystemData = [
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

export default function HomePage() {
  return (
    <main className="bg-[#F4F4F5] text-[#181818]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/homepage/main-background.webp"
            alt="The Sunstang solar car and team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(24,24,24,0.08),rgba(24,24,24,0.72))]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-32">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl"
            >
              Western Engineering&apos;s largest and longest running mega-project
              team
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              Sunstang designs and builds a car to compete in Formula Sun Grand
              Prix (FSGP) and American Solar Challenge (ASC).
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-[#181818]/10 px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto grid max-w-7xl gap-16 px-0 md:grid-cols-2 md:gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8D28D8]">
              Who is Sunstang
            </p>
            <h2 className="max-w-xl text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
              Established in 1991, Sunstang is a student-led engineering
              initiative at Western University focused on the design,
              manufacture, and operation of solar powered electric vehicles.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4F4F4F] md:text-lg">
              The project integrates multi-disciplinary engineering principles
              including advanced power electronics, composite structural
              design, and real-time telemetry systems.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Carousel />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative border-t border-[#181818]/10 px-6 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-7xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          <motion.div
            variants={fadeUp}
            className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#8D28D8]">
                Subsystems
              </p>
              <h2 className="max-w-2xl text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
                Built by focused teams working across every layer of the car.
              </h2>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {subsystemData.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group rounded-[28px] border border-[#181818]/10 bg-white p-6 shadow-sm"
              >
                <div className="relative mb-6 h-52 w-full overflow-hidden rounded-[22px] bg-[#d8d8dd]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-[#8D28D8] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[48px] bg-[#F4F4F5] py-28 text-center">
            <h2 className="text-3xl tracking-[-0.03em] md:text-5xl">
              Build the Future of Solar Racing.
            </h2>

            <button
              className="mt-10 cursor-pointer rounded-md bg-[#8D28D8] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6F1FB0] hover:shadow-[0_0_16px_rgba(141,40,216,0.35)]"
            >
              Join Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
