"use client";

import {
  FaDatabase,
  FaGraduationCap,
} from "react-icons/fa";
import { VscDeveloperTools } from "react-icons/vsc";
import { BiBadge } from "react-icons/bi";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const SectionTitle = ({ children }: { children: string }) => (
  <div className="flex items-center gap-3 mb-10">
    <div className="h-7 w-1 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
    <h2 className="text-xs uppercase tracking-[0.25em] text-cyan-300 font-medium">
      {children}
    </h2>
  </div>
);

const Resume = () => {
  return (
    <section
      className="
        relative
        pt-28
        pb-32
        overflow-hidden
      "
      id="about"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />

      <div className="relative z-10 w-[90%] sm:w-[80%] lg:w-[75%] mx-auto">

        {/* About */}
        <motion.section
          className="mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            About
          </SectionTitle>

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-semibold
              text-white
              leading-tight
              mb-8
            "
          >
            A little about{" "}
            <span className="text-cyan-300">
              me
            </span>
          </h1>

          <div className="max-w-4xl space-y-5">
            <p className="text-white/80 text-lg leading-relaxed">
              I’m a B.Tech student and aspiring{" "}
              <span className="text-cyan-300 font-medium">
                Full-Stack Developer
              </span>{" "}
              with a strong interest in{" "}
              <span className="text-cyan-300 font-medium">
                Machine Learning
              </span>{" "}
              and building scalable software systems.
            </p>

            <p className="text-white/75 text-lg leading-relaxed">
              I enjoy designing full-stack applications, exploring modern
              technologies, and creating solutions with clean architecture,
              performance, and real-world usability in mind.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              I’m passionate about continuous learning, collaboration, and
              solving complex engineering challenges through technology.
            </p>
          </div>
        </motion.section>


        {/* Experience */}
        <motion.section
          className="mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            Experience
          </SectionTitle>

          <div className="relative space-y-8 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-cyan-400/20">

            <ResumeCard
              Icon={VscDeveloperTools}
              role="Software Developer (Project Intern) - OmneVu"
              date="Jan 2026 - Jun 2026"
              desc="Developed a cloud-native multi-tenant IoT platform using Spring Boot and React. Built scalable REST APIs, implemented WebSocket-based real-time communication supporting 10,000+ concurrent connections, and integrated a RAG-powered AI assistant for analytics and dashboard insights."
            />

            <ResumeCard
              Icon={FaDatabase}
              role="Machine Learning Intern - Baellchen Technologies"
              date="Sep 2025 - Nov 2025"
              desc="Built an end-to-end retail demand forecasting system using Transformer models and XGBoost, achieving 2.98% MAPE. Developed a scalable ML pipeline with preprocessing, feature engineering, and Streamlit-based real-time forecasting."
            />

          </div>
        </motion.section>


        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            Education
          </SectionTitle>

          <div className="relative space-y-8 before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-cyan-400/20">

            <ResumeCard
              Icon={BiBadge}
              role="B.Tech – Electronics & Telecommunication Engineering, VIIT Pune"
              date="Aug 2023 – May 2027"
              meta={[
                {
                  icon: FaGraduationCap,
                  label: "CGPA: 8.84",
                },
              ]}
              desc="Relevant Courses: Data Structures, Object-Oriented Programming, Operating Systems, Machine Learning, Design & Analysis of Algorithms, and Computer Networks."
            />

          </div>
        </motion.section>

      </div>
    </section>
  );
};

export default Resume;