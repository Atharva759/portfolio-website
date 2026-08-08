"use client";

import { PORTFOLIO } from "@/constants/portfolio";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">

      {/* background grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Status */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-2 shadow-sm"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .1 }}
          className="mt-8 text-6xl md:text-8xl font-black tracking-tight leading-[0.95]"
        >
          Hi, I'm{" "}
          <span className="text-blue-600">
            Atharva
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mt-8 text-2xl font-medium text-gray-800"
        >
          Software Engineer building scalable backend systems,
          distributed applications and AI-powered software.
        </motion.p>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8"
        >
          I enjoy designing clean architectures, optimizing performance,
          and building products that solve real-world problems from
          high performance backend services to modern full-stack applications.
        </motion.p>

        

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <a
            href="#projects"
            className="group rounded-2xl bg-black px-7 py-4 text-white flex items-center gap-2 hover:-translate-y-1 transition"
          >
            View Projects
            <FiArrowRight className="group-hover:translate-x-1 transition" />
          </a>

          <a
            href={PORTFOLIO.resume}
            className="rounded-2xl border border-black/10 bg-white px-7 py-4 hover:bg-gray-50 transition"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="flex justify-center gap-8 mt-14 text-2xl"
        >
          <a href={PORTFOLIO.github}><FaGithub /></a>
          <a href={PORTFOLIO.linkedin}><FaLinkedin /></a>
          <a href={`mailto:${PORTFOLIO.email}`}><MdEmail /></a>
        </motion.div>
    

      </div>

    </section>
  );
}