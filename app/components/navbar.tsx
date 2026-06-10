"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#subsystems", label: "Subsystems" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <nav aria-label="Primary navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            aria-label="Sunstang home"
            className="flex shrink-0 items-center gap-2.5 rounded-sm"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/brand/sunstang-mark.png"
              alt=""
              width={330}
              height={330}
              priority
              className="h-11 w-11 sm:h-12 sm:w-12"
            />
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-dark sm:text-base">
                Sunstang
              </span>
              <span className="mt-1 text-[8px] uppercase tracking-[0.16em] text-muted sm:text-[9px]">
                Solar Car Project
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-7">
              {navLinks.map(({ href, label }) => {
                const isActive = !href.includes("#") && pathname === href;

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={`rounded-sm text-base font-semibold transition-colors ${
                        isActive
                          ? "text-brand-dark"
                          : "text-muted hover:text-brand"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href="mailto:email@example.com"
              className="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get Involved
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-ink md:hidden"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              {isOpen ? "×" : "≡"}
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-border bg-surface px-4 py-4 md:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-current={
                      !href.includes("#") && pathname === href
                        ? "page"
                        : undefined
                    }
                    className="block rounded-sm border-b border-border px-2 py-3 font-semibold text-muted hover:text-brand"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="mailto:email@example.com"
              className="mx-auto mt-4 flex max-w-7xl items-center justify-center rounded-md bg-brand px-5 py-3 font-semibold text-white"
            >
              Get Involved
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
