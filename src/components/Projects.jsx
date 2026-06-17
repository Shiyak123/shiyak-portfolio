import projectsData from "../data/projects";

export default function Projects() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold text-center mb-12">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {projectsData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                                {project.description}
                            </p>

                            {/* Tech */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a href={project.links.github} className="text-blue-500">
                                    GitHub
                                </a>
                                <a href={project.links.live} className="text-green-500">
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