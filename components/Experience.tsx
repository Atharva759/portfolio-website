"use client";

import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            subtitle="Experience"
            title="Where I've Worked"
          />
        </motion.div>

        <div className="mt-20">

          <TimelineItem
            year="2026"
            company="OmneVu"
            role="Software Developer Intern"
            duration="Jan 2026 - June 2026"
            points={[
              "Developed cloud-native IoT platform features.",
              "Built scalable REST APIs and WebSocket services.",
              "Designed multi-tenant architecture with RBAC.",
              "Integrated AI-powered assistant using RAG.",
            ]}
          />

          <TimelineItem
            year="2025"
            company="Baellchen Technologies"
            role="Machine Learning Intern"
            duration="September 2025 - November 2025"
            points={[
              "Built retail demand forecasting models.",
              "Worked with Transformers and XGBoost.",
              "Improved prediction accuracy through feature engineering.",
            ]}
          />

        </div>

      </div>
    </section>
  );
}