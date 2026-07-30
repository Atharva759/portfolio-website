"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";

type MetaItem = {
  icon: IconType;
  label: string;
};

type Props = {
  Icon: IconType;
  role: string;
  date?: string;
  desc?: string;
  meta?: MetaItem[];
};

const ResumeCard = ({
  Icon,
  role,
  date,
  desc,
  meta,
}: Props) => {
  return (
    <motion.div
      className="relative pl-14"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline dot */}
      <div
        className="
          absolute
          left-[17px]
          top-8
          w-4
          h-4
          rounded-full
          bg-cyan-400
          shadow-lg
          shadow-cyan-400/60
          ring-4
          ring-cyan-400/10
        "
      />

      <motion.div
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          p-6
          sm:p-8

          bg-white/[0.04]
          backdrop-blur-xl

          border
          border-white/10

          shadow-xl
          shadow-black/20

          hover:border-cyan-400/40
          hover:shadow-cyan-500/20

          transition-all
          duration-500
        "
        whileHover={{
          y: -6,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
        }}
      >

        {/* Hover glow */}
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
            background:
              "radial-gradient(circle at top left, rgba(6,182,212,0.15), transparent 45%)",
          }}
        />


        <div className="relative flex flex-col sm:flex-row gap-6">

          {/* Icon */}
          <motion.div
            className="
              shrink-0

              w-14
              h-14
              sm:w-16
              sm:h-16

              rounded-2xl

              flex
              items-center
              justify-center

              bg-cyan-400/10
              border
              border-cyan-400/20

              shadow-inner
            "
            whileHover={{
              rotate: 5,
              scale: 1.05,
            }}
          >
            <Icon
              className="
                w-7
                h-7
                sm:w-8
                sm:h-8
                text-cyan-300
              "
            />
          </motion.div>


          {/* Content */}
          <div className="flex-1">

            <h2
              className="
                text-white
                text-lg
                sm:text-xl
                md:text-2xl

                font-semibold
                leading-snug

                group-hover:text-cyan-300
                transition
              "
            >
              {role}
            </h2>


            {/* Date */}
            {date && (
              <span
                className="
                  inline-flex
                  mt-3

                  px-3
                  py-1

                  rounded-full

                  text-xs
                  sm:text-sm

                  font-medium
                  text-cyan-100

                  bg-gradient-to-r
                  from-cyan-500/20
                  to-blue-500/20

                  border
                  border-cyan-400/30
                "
              >
                {date}
              </span>
            )}


            {/* Meta */}
            {meta && meta.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {meta.map((item, index) => {
                  const MetaIcon = item.icon;

                  return (
                    <span
                      key={index}
                      className="
                        flex
                        items-center
                        gap-2

                        px-3
                        py-1.5

                        rounded-full

                        text-xs
                        sm:text-sm

                        text-gray-200

                        bg-white/5

                        border
                        border-white/10

                        hover:border-cyan-400/30

                        transition
                      "
                    >
                      <MetaIcon className="text-cyan-300" />
                      {item.label}
                    </span>
                  );
                })}
              </div>
            )}


            {/* Description */}
            {desc && (
              <p
                className="
                  mt-5

                  text-gray-300

                  text-sm
                  sm:text-base

                  leading-relaxed

                  max-w-3xl
                "
              >
                {desc}
              </p>
            )}

          </div>

        </div>

      </motion.div>
    </motion.div>
  );
};

export default ResumeCard;