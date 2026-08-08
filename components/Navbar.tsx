"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { PORTFOLIO } from "@/constants/portfolio";
const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl"
      >
        <nav className="flex items-center justify-between rounded-full border border-gray-200 bg-white/80 backdrop-blur-xl px-6 py-3 shadow-lg">

          {/* Logo */}

          <Link href="/">
            <h1 className="text-xl font-bold tracking-tight">
              Atharva<span className="text-blue-600">.</span>
            </h1>
          </Link>

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-gray-600 font-medium transition-all duration-300 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}

          </div>

          {/* CTA */}

          <a
            href={PORTFOLIO.resume}
            target="_blank"
            className="hidden md:flex items-center gap-2 rounded-full bg-black px-5 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-900"
          >
            Resume
            <FiArrowUpRight />
          </a>
        </nav>
      </motion.div>
    </header>
  );
}