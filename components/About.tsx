"use client";

import { motion } from "framer-motion";
import { PORTFOLIO } from "@/constants/portfolio";
import { TECH_STACK } from "@/constants/techStack";

const technologies = [
  "java",
  "springboot",
  "nextjs",
  "docker",
  "postgresql",
  "node",
  "aws",
  "systemdesign",
] as const;

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
              About
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Building software
              <br />
              that solves
              <span className="text-blue-600"> real problems.</span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              {PORTFOLIO.about}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#projects"
                className="rounded-full bg-black text-white px-6 py-3 hover:-translate-y-1 transition"
              >
                View Projects
              </a>

              <a
                href="#experience"
                className="rounded-full border border-black/10 px-6 py-3 hover:bg-gray-50 transition"
              >
                Experience
              </a>

            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[36px] border border-black/5 bg-white p-10 shadow-sm"
          >
            <h3 className="text-2xl font-semibold">
              Technologies I enjoy working with
            </h3>

            <p className="text-gray-500 mt-3">
              I enjoy designing scalable backend systems, modern web
              applications and AI-powered solutions using these technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              {technologies.map((tech) => {
                const item = TECH_STACK[tech];
                const Icon = item.icon;

                return (
                  <div
                    key={tech}
                    className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon
                      size={18}
                      color={item.color}
                    />

                    <span className="font-medium">
                      {item.label}
                    </span>
                  </div>
                );
              })}

            </div>

            <div className="mt-12 border-t border-black/5 pt-8">

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-gray-500">
                    Focus
                  </p>

                  <p className="font-semibold mt-2">
                    Backend Engineering
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Interests
                  </p>

                  <p className="font-semibold mt-2">
                    System Design & AI
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Based In
                  </p>

                  <p className="font-semibold mt-2">
                    Pune, India 🇮🇳
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Status
                  </p>

                  <p className="font-semibold mt-2 text-green-600 bg-green-100 rounded-full text-center p-1 border-green-500 border">
                     Open to Opportunities
                  </p>
                </div>

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}