import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const experienceData = [
    {
        role: "Assistant Accountant",
        company: "Professional Firm",
        period: "Previous Experience",
        responsibilities: [
            "Financial record management",
            "Reporting",
            "Documentation",
            "Administrative support"
        ],
        skills: ["Analytical Thinking", "Communication", "Problem Solving"]
    },
    {
        role: "Founder",
        company: "New Online Mart",
        period: "E-Commerce Venture",
        responsibilities: [
            "Business Operations",
            "Customer Relations",
            "Inventory Management",
            "Sales Strategy"
        ],
        skills: ["Leadership", "Business Management", "Customer Service"]
    }
];

export default function Experience() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="w-full py-20 px-6 bg-surface-2">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
                    Professional <span className="text-primary">Experience</span>
                </h2>

                <motion.div
                    className="relative border-l border-surface ml-4 space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    {experienceData.map((exp, index) => (
                        <motion.div key={index} variants={itemVariants} className="relative pl-8">

                            <div className="absolute -left-5 top-1 text-white bg-primary rounded-full w-8 h-8 flex items-center justify-center">
                                <FaBriefcase />
                            </div>

                            <div className="p-6 bg-surface rounded-xl shadow border border-surface">

                                <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                                <p className="text-secondary">{exp.company}</p>

                                <div className="flex items-center gap-2 text-sm text-muted mt-1">
                                    <FaCalendarAlt />
                                    {exp.period}
                                </div>

                                <ul className="mt-4 space-y-2 text-secondary">
                                    {exp.responsibilities.map((task, i) => (
                                        <li key={i}>• {task}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="text-xs px-2 py-1 bg-surface text-muted rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}