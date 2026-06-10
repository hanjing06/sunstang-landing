"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/subsystems", label: "Subsystems" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#181818]/10 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          aria-label="Sunstang home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/brand/sunstang-mark.png"
            alt=""
            width={330}
            height={330}
            priority
            className="h-12 w-12"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[1rem] font-semibold uppercase tracking-[0.16em] text-[#4f278c]">
              Sunstang
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#4F4F4F]">
              Solar Car Project
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>
                  <motion.span
                    className="text-[18px] font-semibold text-[#4F4F4F] transition-colors duration-300 hover:text-[#8D28D8]"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {label}
                  </motion.span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/getinvolved">
            <motion.span
                className="
                inline-flex items-center
                rounded-md
                bg-[#8D28D8]
                px-5 py-2
                text-[18px] font-semibold
                text-[#F4F4F5]
                font-medium
                transition-colors duration-300
                hover:bg-[#6F1FB0]
                "
                transition={{ duration: 0.25, ease: "easeOut" }}
            >
                Get Involved
            </motion.span>
            </Link>
        </div>
      </nav>
    </header>
  );
}
