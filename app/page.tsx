"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Carousel from "./components/carousel";
import SubsystemSection from "./components/subsystem-section";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

export default function HomePage() {
  return (
    <main id="main-content" className="bg-canvas text-ink">
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

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 md:pb-20">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="show"
            variants={stagger}
          >
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl"
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

      <section
        aria-labelledby="who-title"
        className="border-t border-border px-4 py-20 sm:px-6 md:py-28"
      >
        <motion.div
          className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Who is Sunstang
            </p>
            <h2
              id="who-title"
              className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl"
            >
              Engineering solar mobility since 1991.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Established in 1991, Sunstang is a student-led engineering
              initiative at Western University focused on the design,
              manufacture, and operation of solar powered electric vehicles.
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

      <SubsystemSection />

      <section className="border-t border-border bg-surface px-4 py-20 sm:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Build the Future of Solar Racing.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
              Join a multidisciplinary team and turn classroom knowledge into a
              vehicle built for competition.
            </p>
            <a
              href="mailto:email@example.com"
              className="mt-8 inline-flex rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Join Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
