import skillsData from "../data/skills";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-surface-2 dark:bg-surface-2">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold text-center text-primary mb-12">
                    Skills & Toolkit
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div
                            key={category}
                            className="p-6 rounded-xl shadow-md bg-surface bg-surface-2 border border-surface"
                        >
                            {/* Category Title */}
                            <h3 className="text-xl font-semibold mb-4 capitalize text-primary">
                                {category}
                            </h3>

                            {/* Skills List */}
                            <ul className="space-y-2">
                                {skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between text-secondary"
                                    >
                                        <span>{skill.name}</span>
                                        <span className="text-sm text-muted">
                                            {skill.level}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}