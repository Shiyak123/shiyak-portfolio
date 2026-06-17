import projectsData from "../data/projects";

export default function FeaturedProject() {
    const featured = projectsData.featured;

    return (
        <section className="py-20 px-6 bg-surface-2 dark:bg-surface-2">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold mb-10 text-center text-primary">
                    Featured Project
                </h2>

                <div className="p-8 rounded-xl shadow-lg bg-surface border border-surface">

                    <h3 className="text-2xl font-bold mb-2 text-primary">
                        {featured.title}
                    </h3>

                    <p className="text-secondary mb-4">
                        {featured.subtitle}
                    </p>

                    <p className="mb-4">
                        {featured.description}
                    </p>

                    <p className="mb-4 text-sm text-muted">
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
                                className="px-3 py-1 text-sm bg-surface inline-block text-muted rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <a href={featured.links.github} className="text-primary hover:underline">
                            GitHub
                        </a>
                        <a href={featured.links.live} className="text-primary hover:underline">
                            Live Demo
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}