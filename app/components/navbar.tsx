"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "/subsystems", label: "Subsystems" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#181818]/10 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border border-[#181818]/20 bg-white text-[9px] font-medium uppercase tracking-[0.22em] text-[#4F4F4F]">
            Logo
          </div>

          <div className="flex flex-col leading-none">
            <motion.span
              className="text-[1rem] font-semibold uppercase tracking-[0.16em] text-[#181818]"
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              Sunstang
            </motion.span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#4F4F4F]">
              Western Solar Car
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-7">
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