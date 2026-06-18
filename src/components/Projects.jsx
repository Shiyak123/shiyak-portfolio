import projectsData from "../data/projects";
import SectionTitle from "./SectionTitle";
import { FaCodeBranch, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-surface-2 dark:bg-surface-2">
            <div className="max-w-6xl mx-auto">

                <SectionTitle
                    title="My Projects"
                    icon={FaCodeBranch}
                    colorClass="text-heading-projects"
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {projectsData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl shadow-md bg-surface border border-surface hover:border-heading-projects/50 transition-all hover:shadow-lg"
                        >
                            <h3 className="text-xl font-bold mb-2 text-heading-projects flex items-center gap-2">
                                <FaCodeBranch className="text-sm" />
                                {project.title}
                            </h3>

                            <p className="text-secondary mb-3">
                                {project.description}
                            </p>

                            {/* Tech */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 bg-surface-2 text-heading-projects rounded border border-heading-projects/30 hover:border-heading-projects transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a href={project.links.github} className="text-heading-projects hover:text-heading-projects/80 flex items-center gap-1 transition-colors">
                                    <FaGithub /> GitHub
                                </a>
                                <a href={project.links.live} className="text-heading-projects hover:text-heading-projects/80 flex items-center gap-1 transition-colors">
                                    <FaExternalLinkAlt /> Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}