"use client";

import { TECH_STACK } from "@/constants/techStack";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  techs: readonly (keyof typeof TECH_STACK)[];
};

export default function TechCard({
  title,
  description,
  techs,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="border-b border-black/5 pb-10"
    >
      <div className="mb-8">

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          {description}
        </p>

      </div>

      <div className="flex flex-wrap gap-4">

        {techs.map((tech) => {
          const item = TECH_STACK[tech];
          const Icon = item.icon;

          return (
            <div
              key={tech}
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-black/10
                bg-white
                px-5
                py-3
                transition-all
                duration-300
                hover:shadow-md
                hover:-translate-y-1
              "
            >
              <Icon
                size={20}
                color={item.color}
              />

              <span className="font-medium">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}