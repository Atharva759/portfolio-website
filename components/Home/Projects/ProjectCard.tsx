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

const ProjectCard = ({ images, title, desc, tech, github, live }: Props) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused, images.length]);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden
      hover:border-cyan-400/40 transition-all duration-300"
    >
      {/* Images Slideshow*/}
      <div
        className="relative h-74 w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="title"
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-gray-400" : "bg-white/40"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-white">
          {title}
        </h1>

        <p className="mt-3 text-gray-300 text-sm leading-relaxed">{desc}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mt-5">
          {tech.map((key) => {
            const TechIcon = TECH_STACK[key].icon;
            return (
              <span
                key={key}
                className="flex items-center gap-2 px-3 py-1 rounded-full
                bg-blue-900/40 border border-white/10 text-gray-200 text-xs sm:text-sm"
              >
                <TechIcon color={TECH_STACK[key].color} />
                {TECH_STACK[key].label}
              </span>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex gap-5 mt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 text-sm text-white hover:text-cyan-300 transition"
            >
              <FaGithub /> Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-2 text-sm text-white hover:text-cyan-300 transition"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
