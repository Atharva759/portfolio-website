"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { PORTFOLIO } from "@/constants/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-black/5 bg-gradient-to-br from-white to-gray-50 p-10 md:p-16 shadow-sm"
        >

          <span className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
            Contact
          </span>

          <h2 className="mt-5 text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Let's build something
            <span className="text-blue-600"> meaningful.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            I'm currently looking for Software Engineering opportunities,
            backend development roles, and exciting AI projects. Whether
            you have an opportunity or just want to connect, I'd love to
            hear from you.
          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href={`mailto:${PORTFOLIO.email}`}
              className="group flex items-center gap-3 rounded-2xl bg-black px-7 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <FaEnvelope />

              Say Hello

              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>

            <a
              href={PORTFOLIO.resume}
              className="rounded-2xl border border-black/10 bg-white px-7 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
            >
              Download Resume
            </a>

          </div>

          {/* Divider */}

          <div className="my-14 h-px bg-black/5" />

          {/* Contact Grid */}

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-400">
                Email
              </p>

              <a
                href={`mailto:${PORTFOLIO.email}`}
                className="mt-3 block font-semibold hover:text-blue-600 transition"
              >
                {PORTFOLIO.email}
              </a>

            </div>

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-400">
                GitHub
              </p>

              <a
                href={PORTFOLIO.github}
                target="_blank"
                className="mt-3 flex items-center gap-2 font-semibold hover:text-blue-600 transition"
              >
                <FaGithub />

                GitHub
              </a>

            </div>

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-400">
                LinkedIn
              </p>

              <a
                href={PORTFOLIO.linkedin}
                target="_blank"
                className="mt-3 flex items-center gap-2 font-semibold hover:text-blue-600 transition"
              >
                <FaLinkedin />

                LinkedIn
              </a>

            </div>

            <div>

              <p className="text-sm uppercase tracking-wide text-gray-400">
                Location
              </p>

              <div className="mt-3 flex items-center gap-2 font-semibold">

                <FiMapPin />

                Pune, India

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}