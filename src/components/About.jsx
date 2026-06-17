import { motion } from "framer-motion";

export default function About() {
    const timeline = [
        {
            year: "2023",
            title: "Started Web Development Journey",
            description:
                "Began learning HTML, CSS, JavaScript and built first static websites.",
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
                "Started MERN stack development and built real-world systems like finance and logistics platforms.",
        },
    ];

    return (
        <section
            id="about"
            className="py-20 px-6 bg-gray-50 dark:bg-gray-950"
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
                >
                    About Me 👨‍💻
                </motion.h2>

                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            My Story
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I am a passionate Full Stack Developer specializing in the MERN stack.
                            My journey started with curiosity about how websites work, and it grew
                            into building real-world applications that solve practical problems.
                            <br /><br />
                            I enjoy turning ideas into clean, scalable, and user-friendly web
                            applications. I focus on writing maintainable code and creating smooth
                            user experiences.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <span className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-300">
                                MERN Stack
                            </span>
                            <span className="px-3 py-1 text-sm rounded-full bg-green-500/20 text-green-600 dark:text-green-300">
                                UI/UX Focus
                            </span>
                            <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">
                                Problem Solver
                            </span>
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                            Timeline ⏳
                        </h3>

                        {timeline.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-800"
                            >
                                <p className="text-blue-500 font-bold">{item.year}</p>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">
                        Education 🎓
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-800">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                BSc (Hons) Information Technology
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                South Eastern University of Sri Lanka
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                2020 - Present
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-800">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Self Learning (MERN Stack)
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                React, Node.js, Express, MongoDB, Tailwind CSS
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                2023 - Present
                            </p>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}