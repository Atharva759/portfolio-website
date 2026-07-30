"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-white/10

        bg-white/[0.03]

        backdrop-blur-xl
      "
    >

      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2

          -top-20

          w-80
          h-40

          bg-cyan-500/10

          blur-[100px]

          rounded-full
        "
      />


      {/* Top accent */}
      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "100%",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="
          absolute
          top-0
          left-0

          h-px

          bg-gradient-to-r
          from-transparent
          via-cyan-400/50
          to-transparent
        "
      />


      <div
        className="
          relative
          z-10

          w-[90%]
          md:w-[80%]

          mx-auto

          py-7

          flex
          flex-col
          sm:flex-row

          items-center
          justify-between

          gap-4
        "
      >

        <p
          className="
            text-sm

            text-white/60

            text-center
            sm:text-left
          "
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-white/80 font-medium">
            Atharva Khadake
          </span>
          . All rights reserved.
        </p>



        <p
          className="
            text-sm

            text-white/60

            flex
            items-center
            gap-1
          "
        >
          Built with{" "}

          <span
            className="
              text-cyan-300
              font-medium

              hover:text-cyan-200

              transition
            "
          >
            Next.js
          </span>

          <span>
            &
          </span>

          <span
            className="
              text-cyan-300
              font-medium

              hover:text-cyan-200

              transition
            "
          >
            TypeScript
          </span>

        </p>

      </div>

    </footer>
  );
};

export default Footer;