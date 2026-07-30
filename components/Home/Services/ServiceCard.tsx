"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/constant/techStack";

type TechKey = keyof typeof TECH_STACK;

type Props = {
  tech: TechKey;
  name: string;
  desc: string;
};

const ServiceCard = ({
  tech,
  name,
  desc,
}: Props) => {
  const {
    icon: Icon,
    color,
  } = TECH_STACK[tech];

  return (
    <motion.article
      whileHover={{
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 16,
      }}
      className="
        group
        relative
        h-full
        overflow-hidden

        rounded-2xl
        p-7

        bg-white/[0.04]
        backdrop-blur-xl

        border
        border-white/10

        shadow-xl
        shadow-black/20

        hover:border-white/20
        transition-all
        duration-500
      "
    >

      {/* Colored glow */}
      <div
        className="
          absolute
          inset-0

          opacity-0
          group-hover:opacity-100

          transition
          duration-500

          pointer-events-none
        "
        style={{
          background: `
            radial-gradient(
              circle at top right,
              ${color}30,
              transparent 55%
            )
          `,
        }}
      />


      {/* Top accent */}
      <div
        className="
          absolute
          top-0
          left-0
          h-[2px]
          w-0

          group-hover:w-full

          transition-all
          duration-500
        "
        style={{
          backgroundColor: color,
        }}
      />


      <div className="relative">

        {/* Icon */}
        <motion.div
          className="
            w-14
            h-14

            rounded-2xl

            flex
            items-center
            justify-center

            bg-white/5

            border
            border-white/10

            shadow-inner
          "
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
          }}
        >
          <Icon
            className="
              w-7
              h-7
            "
            style={{
              color,
            }}
          />
        </motion.div>


        {/* Content */}
        <h3
          className="
            mt-6

            text-xl
            font-semibold

            text-white

            group-hover:text-cyan-300

            transition-colors
            duration-300
          "
        >
          {name}
        </h3>


        <p
          className="
            mt-3

            text-sm
            leading-relaxed

            text-white/70

            group-hover:text-white/80

            transition
          "
        >
          {desc}
        </p>


        {/* Tech label */}
        <div
          className="
            mt-6

            inline-flex
            items-center
            gap-2

            px-3
            py-1.5

            rounded-full

            text-xs

            bg-white/5

            border
            border-white/10

            text-white/60
          "
        >
          <span
            className="
              w-2
              h-2
              rounded-full
            "
            style={{
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
            }}
          />

          {TECH_STACK[tech].label}
        </div>

      </div>

    </motion.article>
  );
};

export default ServiceCard;