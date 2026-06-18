import skillsData from "../data/skills";
import SectionTitle from "./SectionTitle";
import { FaTools } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiPostgresql } from "react-icons/si";

const categoryIcons = {
    frontend: <SiReact className="text-heading-skills" />,
    backend: <SiNodedotjs className="text-heading-skills" />,
    database: <SiMongodb className="text-heading-skills" />,
    tools: <FaTools className="text-heading-skills" />,
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-surface-2 dark:bg-surface-2">
            <div className="max-w-6xl mx-auto">

                <SectionTitle
                    title="Skills & Toolkit"
                    icon={FaTools}
                    colorClass="text-heading-skills"
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div
                            key={category}
                            className="p-6 rounded-xl shadow-md bg-surface bg-surface-2 border border-surface hover:border-heading-skills/50 transition-colors"
                        >
                            {/* Category Title with Icon */}
                            <h3 className="text-xl font-semibold mb-4 capitalize text-heading-skills flex items-center gap-2">
                                {categoryIcons[category] || <FaTools />}
                                {category}
                            </h3>

                            {/* Skills List */}
                            <ul className="space-y-2">
                                {skills.map((skill, index) => (
                                    <li
                                        key={index}
                                        className="flex justify-between text-secondary hover:text-heading-skills transition-colors"
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