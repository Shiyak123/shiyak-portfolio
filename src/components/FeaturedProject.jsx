import projectsData from "../data/projects";

export default function FeaturedProject() {
    const featured = projectsData.featured;

    return (
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
                    Featured Project
                </h2>

                <div className="p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800">

                    <h3 className="text-2xl font-bold mb-2">
                        {featured.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {featured.subtitle}
                    </p>

                    <p className="mb-4">
                        {featured.description}
                    </p>

                    <p className="mb-4 text-sm text-gray-500">
                        <strong>Challenge:</strong> {featured.challenge}
                    </p>

                    {/* Features */}
                    <ul className="list-disc pl-5 mb-4">
                        {featured.features.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {featured.techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <a href={featured.links.github} className="text-blue-500">
                            GitHub
                        </a>
                        <a href={featured.links.live} className="text-green-500">
                            Live Demo
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}