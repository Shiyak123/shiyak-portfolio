import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaUser } from "react-icons/fa";

export default function About() {
    const timeline = [
        {
            year: "2023",
            title: "Started Web Development Journey",
            description:
                "Began learning HTML, CSS and JavaScript and built first static websites.",
        },
        {
            year: "2024",
            title: "Frontend Development Growth",
            description:
                "Worked with React, Tailwind CSS and built multiple UI projects.",
        },
        {
            year: "2025",
            title: "Full Stack Development",
            description:
                "Started MERN stack development and built real-world systems.",
        },
    ];

    return (
        <section id="about" className="py-20 px-6 bg-surface-2 dark:bg-surface-2">
            <div className="max-w-6xl mx-auto">

                <SectionTitle
                    title="About Me"
                    icon={FaUser}
                    colorClass="text-heading-about"
                />

                <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-heading-about mb-4 flex items-center gap-2">
                            <FaUser /> My Story
                        </h3>

                        <p className="text-secondary leading-relaxed">
                            I am a passionate Full Stack Developer specializing in the MERN
                            stack. My journey started with curiosity about how websites work and
                            it grew into building real-world applications that solve practical
                            problems.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <span className="px-3 py-1 text-sm rounded-full bg-heading-about/10 inline-block text-heading-about border border-heading-about/30 hover:border-heading-about transition-colors">
                                MERN Stack
                            </span>
                            <span className="px-3 py-1 text-sm rounded-full bg-heading-about/10 inline-block text-heading-about border border-heading-about/30 hover:border-heading-about transition-colors">
                                UI/UX Focus
                            </span>
                            <span className="px-3 py-1 text-sm rounded-full bg-heading-about/10 inline-block text-heading-about border border-heading-about/30 hover:border-heading-about transition-colors">
                                Problem Solver
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-heading-about mb-4">Timeline</h3>

                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl bg-surface/50 dark:bg-white/5 backdrop-blur-md border border-heading-about/30 hover:border-heading-about/60 transition-colors"
                            >
                                <p className="text-heading-about font-bold">{item.year}</p>
                                <h4 className="text-lg font-semibold text-heading-about">{item.title}</h4>
                                <p className="text-muted text-sm mt-1">{item.description}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-semibold text-center text-heading-about mb-8">Education 🎓</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl bg-surface/50 dark:bg-white/5 backdrop-blur-md border border-heading-about/30 hover:border-heading-about/60 transition-colors">
                            <h4 className="text-lg font-semibold text-heading-about">BSc (Hons) Information Technology</h4>
                            <p className="text-secondary text-sm mt-2">South Eastern University of Sri Lanka</p>
                            <p className="text-muted text-sm mt-1">2020 - Present</p>
                        </div>

                        <div className="p-6 rounded-xl bg-surface/50 dark:bg-white/5 backdrop-blur-md border border-heading-about/30 hover:border-heading-about/60 transition-colors">
                            <h4 className="text-lg font-semibold text-heading-about">Self Learning (MERN Stack)</h4>
                            <p className="text-secondary text-sm mt-2">React, Node.js, Express, MongoDB, Tailwind CSS</p>
                            <p className="text-muted text-sm mt-1">2023 - Present</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}