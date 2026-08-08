"use client";

import { PORTFOLIO } from "@/constants/portfolio";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div>

            <h3 className="text-2xl font-bold tracking-tight">
              Atharva<span className="text-blue-600">.</span>
            </h3>

            <p className="text-gray-500 mt-2">
              Software Engineer
            </p>

          </div>

          <div className="flex items-center gap-6 text-xl">

            <a
              href={PORTFOLIO.github}
              target="_blank"
              className="text-gray-500 hover:text-black transition-all hover:-translate-y-1"
            >
              <FaGithub />
            </a>

            <a
              href={PORTFOLIO.linkedin}
              target="_blank"
              className="text-gray-500 hover:text-[#0A66C2] transition-all hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="text-gray-500 hover:text-red-500 transition-all hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-black/5 pt-6 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Atharva Khadake
          </p>

          <p className="mt-3 md:mt-0">
            Built with{" "}
            <span className="font-medium text-gray-600">
              Next.js
            </span>{" "}
            ·{" "}
            <span className="font-medium text-gray-600">
              TypeScript
            </span>{" "}
            ·{" "}
            <span className="font-medium text-gray-600">
              Tailwind CSS
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}