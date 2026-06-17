import skillsData from "../data/skills";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Skills & Toolkit
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div
                            key={category}
                            className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-gray-900"
                        >
                            {/* Category Title */}
                            <h3 className="text-xl font-semibold mb-4 capitalize text-gray-800 dark:text-white">
                                {category}
                            </h3>

                            {/* Skills List */}
                            <ul className="space-y-2">
                                {skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between text-gray-700 dark:text-gray-300"
                                    >
                                        <span>{skill.name}</span>
                                        <span className="text-sm text-gray-500">
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