import projectsData from "../data/projects";

export default function Projects() {
    return (
        <section className="py-20 px-6 bg-surface-2 dark:bg-surface-2">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold text-center mb-12 text-primary">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projectsData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl shadow-md bg-surface border border-surface"
                        >
                            <h3 className="text-xl font-bold mb-2 text-primary">
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
                                        className="text-xs px-2 py-1 bg-surface inline-block text-muted rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a href={project.links.github} className="text-primary hover:underline">
                                    GitHub
                                </a>
                                <a href={project.links.live} className="text-primary hover:underline">
                                    Live
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}