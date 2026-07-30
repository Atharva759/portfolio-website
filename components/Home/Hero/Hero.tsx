"use client";

import { BsArrowRight } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Particlebackground from "./ParticleBackground";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center

        overflow-hidden

        text-white
      "
    >

      {/* Background */}
      <Particlebackground />

      <div
        className="
          absolute
          inset-0

          bg-hero-gradient
        "
      />


      {/* Glow layers */}
      <div
        className="
          absolute
          top-1/3
          left-1/2

          -translate-x-1/2

          w-[550px]
          h-[550px]

          rounded-full

          bg-cyan-500/20

          blur-[160px]
        "
      />


      <div
        className="
          absolute
          bottom-0
          left-1/2

          -translate-x-1/2

          w-[400px]
          h-[200px]

          bg-blue-500/10

          blur-[120px]
        "
      />


      <motion.div
        className="
          relative
          z-10

          flex
          flex-col
          items-center

          text-center

          px-6
          max-w-5xl
        "
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        {/* Badge */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mb-8

            px-4
            py-2

            rounded-full

            bg-white/5

            backdrop-blur-xl

            border
            border-white/10

            text-sm

            text-cyan-300
          "
        >
          ✨ Full Stack Developer • ML Enthusiast
        </motion.div>


        {/* Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            max-w-4xl

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl

            font-semibold

            leading-[1.1]

            tracking-tight
          "
        >
          Building{" "}
          <span
            className="
              bg-gradient-to-r
              from-cyan-300
              via-blue-400
              to-indigo-400

              bg-clip-text
              text-transparent
            "
          >
            scalable web products
          </span>

          <br />

          & impactful digital experiences
        </motion.h1>


        {/* Intro */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
          }}
          className="
            mt-8

            flex
            flex-wrap

            justify-center
            items-center

            gap-3

            text-lg
            sm:text-xl

            text-white/80
          "
        >
          <span>
            Hi, I'm
          </span>

          <span
            className="
              font-semibold
              text-cyan-300
            "
          >
            Atharva
          </span>


          <span
            className="
              px-4
              py-2

              rounded-xl

              bg-white/10

              border
              border-white/10

              backdrop-blur-md

              text-cyan-300

              font-medium

              shadow-lg
            "
          >
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Backend Engineer",
                  "Problem Solver",
                  "Machine Learning Explorer",
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
              }}
            />
          </span>
        </motion.div>


        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="
            mt-12

            flex
            flex-col
            sm:flex-row

            gap-5
          "
        >

          <Link href="#projects">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group

                px-8
                py-4

                rounded-full

                flex
                items-center
                gap-3

                font-medium

                bg-cyan-400/10

                border
                border-cyan-400/30

                backdrop-blur-xl

                hover:bg-cyan-400/20

                transition

                shadow-lg
                shadow-cyan-500/20

                cursor-pointer
              "
            >
              View Projects

              <BsArrowRight
                className="
                  w-5
                  h-5

                  group-hover:translate-x-1

                  transition
                "
              />
            </motion.button>
          </Link>


          <Link href="#about">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                px-8
                py-4

                rounded-full

                flex
                items-center
                gap-3

                font-medium

                bg-white/5

                border
                border-white/10

                hover:bg-white/10

                transition

                cursor-pointer
              "
            >
              <FiDownload />

              About Me
            </motion.button>
          </Link>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Hero;