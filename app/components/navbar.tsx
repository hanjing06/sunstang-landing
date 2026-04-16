"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: '/subsystems', label: 'Subsystems' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/about', label: 'About' },
  { href: '/getinvolved', label: 'Get Involved' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <nav className="mx-auto flex items-center justify-between py-3 px-6">
        <Link href="/" className="text-[20px]">
          <motion.span transition={{ duration: 0.2, ease: "easeOut" }}>
            Sunstang
          </motion.span>
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>
                <motion.span
                  className="text-sm tracking-widest text-neutral-700 relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:text-black transition-colors duration-200"
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {label}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}