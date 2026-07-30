"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <AnimatePresence>

      {isVisible && (

        <motion.button
          initial={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            scale: 0.7,
            y: 20,
          }}

          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}

          whileHover={{
            y: -5,
            scale: 1.08,
          }}

          whileTap={{
            scale: 0.95,
          }}

          onClick={scrollToTop}

          aria-label="Scroll to top"

          className="
            group

            fixed

            bottom-6
            right-6

            z-50

            w-12
            h-12

            rounded-full

            flex
            items-center
            justify-center


            bg-cyan-400/10

            backdrop-blur-xl


            border
            border-cyan-400/30


            text-cyan-300


            shadow-lg
            shadow-cyan-500/30


            hover:bg-cyan-400/20

            transition
          "
        >

          {/* Glow */}
          <span
            className="
              absolute
              inset-0

              rounded-full

              bg-cyan-400/20

              blur-xl

              opacity-0

              group-hover:opacity-100

              transition
            "
          />


          <motion.span
            className="relative"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaArrowUp className="w-4 h-4" />
          </motion.span>

        </motion.button>

      )}

    </AnimatePresence>
  );
};

export default ScrollToTop;