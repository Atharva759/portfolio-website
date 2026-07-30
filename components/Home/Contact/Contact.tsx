"use client";

import {
  BiEnvelope,
  BiMap,
  BiDownload,
} from "react-icons/bi";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodeforces,
} from "react-icons/si";

const cvdrive = process.env.NEXT_PUBLIC_CV_LINK_URL;

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/atharvakhadake/",
    icon: FaLinkedin,
    hover:
      "hover:border-cyan-400/60 hover:bg-cyan-900/30 hover:shadow-cyan-500/20",
    iconColor: "text-[#0A66C2]",
  },
  {
    name: "GitHub",
    href: "https://github.com/Atharva759",
    icon: FaGithub,
    hover:
      "hover:border-white/40 hover:bg-white/5 hover:shadow-white/10",
    iconColor: "text-white",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/atharvakhadake",
    icon: SiLeetcode,
    hover:
      "hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:shadow-yellow-400/20",
    iconColor: "text-[#FFA116]",
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/atharvakhadake759",
    icon: SiCodeforces,
    hover:
      "hover:border-red-400/60 hover:bg-red-500/10 hover:shadow-red-400/20",
    iconColor: "text-white",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto w-[92%] max-w-6xl">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Let's Build Something{" "}
            <span className="text-cyan-400">
              Amazing Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm currently open to internships, full-time Software Engineering
            opportunities, open-source collaborations, and exciting technical
            challenges. Whether you have an opportunity, a project, or simply
            want to connect, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mx-auto mt-14 rounded-3xl border border-cyan-500/20 bg-white/[0.04] p-8 backdrop-blur-xl">

          <div className="grid gap-8 md:grid-cols-3">

            {/* Email */}
            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <BiEnvelope className="text-3xl text-cyan-300" />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:atharvakhadake759@gmail.com"
                  className="font-medium text-white transition hover:text-cyan-300"
                >
                  atharvakhadake759@gmail.com
                </a>
              </div>

            </div>

            {/* Location */}
            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <BiMap className="text-3xl text-cyan-300" />
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Location
                </p>

                <p className="font-medium text-white">
                  Pune, Maharashtra, India
                </p>
              </div>

            </div>

            {/* CV */}
            <div className="flex items-center justify-start md:justify-end">

              <a
                href={cvdrive}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-cyan-400/40"
              >
                <BiDownload className="text-xl transition-transform group-hover:translate-y-0.5" />
                Download CV
              </a>

            </div>

          </div>

        </div>

        {/* Social Links */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${social.hover}`}
              >
                <div className="flex flex-col items-center text-center">

                  <div className="rounded-2xl bg-white/5 p-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon className={`text-5xl ${social.iconColor}`} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {social.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Connect with me on {social.name}
                  </p>

                </div>
              </a>
            );
          })}

        </div>

        {/* Footer */}
        <div className="mt-16 text-center">

          <p className="text-lg text-gray-300">
            Thanks for visiting my portfolio.
          </p>

          <p className="mt-2 text-gray-500">
            Looking forward to building something great together.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Contact;