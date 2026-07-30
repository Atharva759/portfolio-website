"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/constant/techStack";
import ServiceCard from "./ServiceCard";

type Service = {
  tech: keyof typeof TECH_STACK;
  name: string;
  desc: string;
};

const services: Service[] = [
  {
    tech: "react",
    name: "Frontend Engineering",
    desc:
      "Building responsive, accessible interfaces with React and Tailwind, focused on performance, scalability, and clean user experiences.",
  },
  {
    tech: "node",
    name: "Backend & APIs",
    desc:
      "Designing secure and scalable backend systems using Spring Boot and Node.js with reliable REST APIs and service architecture.",
  },
  {
    tech: "postgresql",
    name: "Databases & Cloud",
    desc:
      "Optimizing data systems with PostgreSQL, MongoDB, and MySQL while building reliable cloud-ready deployments.",
  },
  {
    tech: "springboot",
    name: "Scalable Systems",
    desc:
      "Architecting production-ready applications with microservices, gateways, and modern backend engineering practices.",
  },
];

const Services = () => {
  return (
    <section
      className="
        relative
        pt-28
        pb-32
        overflow-hidden
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-cyan-500/10
          via-transparent
          to-transparent
        "
      />

      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2

          w-[650px]
          h-[650px]

          rounded-full
          bg-cyan-500/10

          blur-[180px]
        "
      />


      <div className="relative z-10">

        {/* Heading */}
        <motion.div
          className="text-center px-5"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div
            className="
              flex
              justify-center
              items-center
              gap-3
              mb-5
            "
          >
            <span
              className="
                h-px
                w-10
                bg-cyan-400/40
              "
            />

            <p
              className="
                text-cyan-300
                uppercase
                tracking-[0.25em]
                text-xs
                sm:text-sm
              "
            >
              Services
            </p>

            <span
              className="
                h-px
                w-10
                bg-cyan-400/40
              "
            />
          </div>


          <h1
            className="
              text-3xl
              sm:text-4xl
              xl:text-5xl

              font-semibold

              text-white

              leading-tight
            "
          >
            What I build &{" "}
            <span className="text-cyan-300">
              work with
            </span>
          </h1>


          <p
            className="
              mt-5
              max-w-2xl
              mx-auto

              text-white/60

              text-sm
              sm:text-base

              leading-relaxed
            "
          >
            Combining modern technologies with clean architecture to create
            scalable applications and impactful digital experiences.
          </p>

        </motion.div>


        {/* Cards */}
        <motion.div
          className="
            w-[90%]
            sm:w-[80%]
            lg:w-[85%]
            xl:w-[75%]

            mx-auto

            mt-20

            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4

            gap-7
          "
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;