"use client"
import { TECH_STACK } from "@/constants/techStack";
import TechCard from "./TechCard";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Languages",
    description: "Core programming languages I use for development and problem solving.",
    techs: ["java", "cpp", "javascript", "typescript"] satisfies (keyof typeof TECH_STACK)[],
  },
  {
    title: "Frontend",
    description: "Building fast, responsive and accessible user interfaces.",
    techs: ["react", "nextjs", "tailwind", "html", "css"] satisfies (keyof typeof TECH_STACK)[],
  },
  {
    title: "Backend",
    description: "Scalable APIs, distributed systems and AI integrations.",
    techs: ["springboot", "node", "gemini", "systemdesign"] satisfies (keyof typeof TECH_STACK)[],
  },
  {
    title: "Databases",
    description: "Relational and NoSQL databases for production applications.",
    techs: ["postgresql", "mysql", "mongodb", "firebase"] satisfies (keyof typeof TECH_STACK)[],
  },
  {
    title: "Cloud & DevOps",
    description: "Containerization, deployment and version control.",
    techs: ["docker", "aws", "git", "github"] satisfies (keyof typeof TECH_STACK)[],
  },
  {
    title: "Tools",
    description: "Development tools that improve workflow and productivity.",
    techs: ["postman", "figma", "junit"] satisfies (keyof typeof TECH_STACK)[],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-blue-600 font-semibold uppercase tracking-[0.2em]">
            Tech Stack
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Technologies I work with.
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 leading-8">
            A curated collection of languages, frameworks and tools I use
            to design, build and deploy scalable software.
          </p>
        </motion.div>

        <div className="space-y-10">

          {sections.map((section, index) => (

            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <TechCard
                title={section.title}
                description={section.description}
                techs={section.techs}
              />
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}