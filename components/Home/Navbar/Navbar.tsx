"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

import { NavLinks } from "@/constant/contant";
import { TECH_STACK } from "@/constant/techStack";

const cvdrive = process.env.NEXT_PUBLIC_CV_LINK_URL;

const Navbar = () => {
  const ICONS = Object.values(TECH_STACK);

  const [iconIndex, setIconIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % ICONS.length);
    }, 1400);

    return () => clearInterval(interval);
  }, [ICONS.length]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);


  const {
    icon: Icon,
    color,
  } = ICONS[iconIndex];


  return (
    <>

      {/* Navbar */}
      <motion.nav
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`
          fixed
          top-4
          left-1/2
          -translate-x-1/2

          z-[999]

          w-[92%]
          lg:w-[85%]

          rounded-full

          border

          backdrop-blur-2xl

          transition-all
          duration-300

          ${
            scrolled
              ? "bg-black/40 border-white/20 shadow-xl shadow-black/30"
              : "bg-white/5 border-white/10"
          }
        `}
      >

        <div
          className="
            h-[75px]

            px-5
            sm:px-8

            flex
            items-center
            justify-between
          "
        >

          {/* Logo */}
          <Link
            href="/"
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                w-12
                h-12

                rounded-full

                flex
                items-center
                justify-center

                bg-white/10

                border
                border-white/10

                shadow-lg
              "
            >
              <AnimatePresence mode="wait">

                <motion.div
                  key={iconIndex}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: -90,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: 90,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{
                      color,
                    }}
                  />

                </motion.div>

              </AnimatePresence>

            </div>


            <span
              className="
                hidden
                sm:block

                text-lg
                font-semibold

                text-white
              "
            >
              Atharva&apos;s Portfolio
            </span>

          </Link>



          {/* Desktop Links */}
          <div
            className="
              hidden
              lg:flex

              items-center

              gap-10
            "
          >

            {NavLinks.map((link) => (

              <Link
                key={link.id}
                href={link.url}
                className="
                  relative

                  text-white/80

                  hover:text-white

                  font-medium

                  transition
                "
              >

                {link.label}


                <span
                  className="
                    absolute
                    left-0
                    -bottom-2

                    h-[2px]

                    w-0

                    bg-cyan-400

                    shadow-lg
                    shadow-cyan-400/50

                    group-hover:w-full

                    transition-all
                  "
                />

              </Link>

            ))}

          </div>



          {/* Actions */}
          <div
            className="
              flex
              items-center
              gap-4
            "
          >

            {cvdrive && (
              <a
                href={cvdrive}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden
                  sm:flex

                  items-center
                  gap-2

                  px-5
                  py-2.5

                  rounded-full

                  bg-cyan-400/10

                  border
                  border-cyan-400/30

                  text-white

                  text-sm

                  hover:bg-cyan-400/20

                  transition

                  shadow-lg
                  shadow-cyan-500/20
                "
              >

                <BiDownload className="w-5 h-5" />

                Resume

              </a>
            )}


            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden"
            >
              <HiBars3BottomRight
                className="
                  w-8
                  h-8

                  text-white
                "
              />
            </button>

          </div>

        </div>

      </motion.nav>




      {/* Mobile Drawer */}
      <AnimatePresence>

        {open && (

          <>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0

                z-[998]

                bg-black/60

                backdrop-blur-sm
              "
            />


            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 28,
              }}
              className="
                fixed

                top-0
                right-0

                h-full

                w-[75%]
                sm:w-[60%]

                z-[999]

                p-8

                bg-[#07111f]/95

                backdrop-blur-2xl

                border-l
                border-white/10
              "
            >

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  text-white

                  mb-10

                  hover:text-cyan-300

                  transition
                "
              >
                ✕ Close
              </button>



              <div
                className="
                  flex
                  flex-col

                  gap-8
                "
              >

                {NavLinks.map((link) => (

                  <Link
                    key={link.id}
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className="
                      text-lg

                      text-white/80

                      hover:text-cyan-300

                      transition
                    "
                  >
                    {link.label}
                  </Link>

                ))}


                {cvdrive && (

                  <a
                    href={cvdrive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5

                      flex
                      items-center
                      gap-2

                      px-6
                      py-3

                      rounded-xl

                      bg-cyan-400/10

                      border
                      border-cyan-400/30

                      text-white
                    "
                  >

                    <BiDownload className="w-5 h-5" />

                    Download CV

                  </a>

                )}

              </div>

            </motion.aside>

          </>

        )}

      </AnimatePresence>

    </>
  );
};

export default Navbar;