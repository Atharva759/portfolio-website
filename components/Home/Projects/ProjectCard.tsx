"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TECH_STACK } from "@/constant/techStack";

type TechKey = keyof typeof TECH_STACK;

type Props = {
  images: string[];
  title: string;
  desc: string;
  tech: TechKey[];
  github?: string;
  live?: string;
};

const ProjectCard = ({
  images,
  title,
  desc,
  tech,
  github,
  live,
}: Props) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, images.length]);

  return (
    <motion.article
      className="
        group relative overflow-hidden rounded-2xl
        bg-white/[0.04] backdrop-blur-xl
        border border-white/10
        shadow-xl shadow-black/20
        hover:border-cyan-400/40
        hover:shadow-cyan-500/20
        transition-all duration-500
      "
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 220 }}
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition duration-500
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at top right, rgba(6,182,212,0.18), transparent 45%)",
        }}
      />

      {/* Image */}
      <div
        className="relative h-72 w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {images.length > 0 && (
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <Image
                src={images[index]}
                alt={`${title} preview`}
                fill
                className="
                  object-cover
                  transition duration-700
                  group-hover:scale-105
                "
              />

              {/* Image gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-transparent
                  to-transparent
                "
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`View image ${i + 1}`}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    i === index
                      ? "w-7 bg-cyan-400"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }
                `}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h2
          className="
            text-xl sm:text-2xl
            font-semibold
            text-white
            group-hover:text-cyan-300
            transition
          "
        >
          {title}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
          {desc}
        </p>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-3">
          {tech.map((key) => {
            const TechIcon = TECH_STACK[key].icon;
            const color = TECH_STACK[key].color;

            return (
              <motion.span
                key={key}
                whileHover={{ scale: 1.05 }}
                className="
                  flex items-center gap-2
                  px-3 py-1.5
                  rounded-full
                  text-xs sm:text-sm
                  font-medium
                  backdrop-blur-md
                "
                style={{
                  backgroundColor: `${color}18`,
                  border: `1px solid ${color}50`,
                  color,
                }}
              >
                <TechIcon />
                {TECH_STACK[key].label}
              </motion.span>
            );
          })}
        </div>

        {/* Actions */}
        <div className="mt-7 flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                text-sm
                text-white
                bg-white/5
                border border-white/10
                hover:bg-cyan-400/10
                hover:border-cyan-400/40
                hover:text-cyan-300
                transition
              "
            >
              <FaGithub />
              Code
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                text-sm
                text-white
                bg-white/5
                border border-white/10
                hover:bg-cyan-400/10
                hover:border-cyan-400/40
                hover:text-cyan-300
                transition
              "
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;