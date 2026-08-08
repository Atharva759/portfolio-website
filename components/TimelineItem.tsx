"use client";

import { motion } from "framer-motion";
import { FiCalendar } from "react-icons/fi";

type Props = {
  year: string;
  company: string;
  role: string;
  duration: string;
  points: string[];
};

export default function TimelineItem({
  year,
  company,
  role,
  duration,
  points,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative pl-14 pb-16 last:pb-0"
    >
      {/* Timeline */}

      <div className="absolute left-[15px] top-5 bottom-0 w-px bg-gray-200" />

      {/* Dot */}

      <div className="absolute left-0 top-3 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-md">
        <div className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>

      {/* Year */}

      <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        {year}
      </span>

      {/* Card */}

      <div className="mt-4 rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

          <div>

            <h3 className="text-2xl font-bold tracking-tight">
              {company}
            </h3>

            <p className="mt-1 text-gray-600">
              {role}
            </p>

          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">

            <FiCalendar />

            {duration}

          </div>

        </div>

        <ul className="mt-8 space-y-4">

          {points.map((point) => (

            <li
              key={point}
              className="flex items-start gap-4"
            >
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600 flex-shrink-0" />

              <span className="leading-7 text-gray-600">
                {point}
              </span>

            </li>

          ))}

        </ul>

      </div>

    </motion.div>
  );
}