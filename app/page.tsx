"use client";

import { motion, type Variants } from "framer-motion";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";

const fadeUp:Variants = {
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
    title: "Battery Pack",
    description:
      "Placeholder text",
  },
  {
    title: "Driver Controls",
    description:
      "Placeholder text",
  },
  {
    title: "Power Train",
    description:
      "Placeholder text",
  },
  {
    title: "Solar Array",
    description:
      "Placeholder text",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#F4F4F5] text-[#181818]">

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(24,24,24,0.18),rgba(24,24,24,0.55))]" />
          <div className="absolute inset-0 bg-[#CFCFD4]" />
          <div className="absolute inset-0 flex items-center justify-center border-b border-white/10">
            <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#d9d9dd_0%,#bdbdc6_100%)] text-[12px] uppercase tracking-[0.3em] text-[#4F4F4F]">
              Hero Image Placeholder
            </div>
          </div>
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
              Put a slogan here or something
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>

           
          </motion.div>
        </div>
      </section>


<section className="relative border-t border-[#181818]/10 px-6 py-24 md:py-32">
  <motion.div
    className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-20 px-6"
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </h2>
    </motion.div>

    <motion.div variants={fadeUp}>
      <Carousel />
    </motion.div>
  </motion.div>

</section>

<section className="relative border-t border-[#181818]/10 px-6 py-24 md:py-32">
  <motion.div
    className="mx-auto max-w-7xl px-6"
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
      {subsystemData.map((item, index) => (
        <motion.div
          key={item.title}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="group rounded-[28px] border border-[#181818]/10 bg-white p-6 shadow-sm"
        >
    <div className="mb-6 flex h-52 w-full items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,#d8d8dd_0%,#c3c3cb_100%)] text-[11px] uppercase tracking-[0.22em] text-[#4F4F4F]">
      Image Placeholder {index + 1}
    </div>

    <div className="flex items-start justify-between gap-6">
      <div>
        <h3 className="text-2xl font-semibold tracking-[-0.02em]">
            {item.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4F4F4F]">
            {item.description}
        </p>
      </div>

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
        className="
          mt-10
          rounded-md
          bg-[#8D28D8]
          px-6 py-3
          text-sm font-semibold
          text-white
          transition-all duration-300
          hover:bg-[#6F1FB0]
          hover:shadow-[0_0_16px_rgba(141,40,216,0.35)]
          cursor-pointer
        "
      >
        Join Us
      </button>

    </div>

  </div>
</section>
    </main>
  );
}