import { PROJECTS } from "@/constants/projects";
import ImageCarousel from "./ImageCarousel";
import TechChip from "./ui/TechChip";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  project: (typeof PROJECTS)[number];
  reverse?: boolean;
};

export default function ProjectCard({ project, reverse }: Props) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-20 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <ImageCarousel images={project.images} />

      <div>
        <h3 className="text-4xl font-bold">{project.title}</h3>

        <p className="mt-6 text-gray-600 leading-8">{project.desc}</p>

        <div className="flex flex-wrap gap-3 mt-8">
          {project.tech.map((tech) => (
            <TechChip key={tech} tech={tech} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="group flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="group flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md"
            >
              <FiExternalLink className="group-hover:translate-x-0.5 transition" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
