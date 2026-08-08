import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./ui/SectionHeading";

export default function Projects() {

    return (

        <section
            id="projects"
            className="py-36"
        >

            <div className="max-w-7xl mx-auto px-6">

                <SectionHeading
                    subtitle="Portfolio"
                    title="Featured Projects"
                />

                <div className="space-y-40">

                    {PROJECTS.map((project, index) => (

                        <ProjectCard
                            key={project.title}
                            project={project}
                            reverse={index % 2 === 1}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}