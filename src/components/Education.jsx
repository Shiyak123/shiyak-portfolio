import { motion } from "framer-motion";

export default function Education() {
    const education = [
        {
            year: "2020 - Present",
            title: "BSc (Hons) Information Technology",
            place: "South Eastern University of Sri Lanka",
            description:
                "Focused on software engineering, data structures, web development, and system design principles.",
        },
        {
            year: "2023",
            title: "Web Development Specialization",
            place: "Self-Learning Path",
            description:
                "MERN stack development, responsive UI systems, and API integration.",
        },
    ];

    return (
        <section className="py-24 px-6 bg-white dark:bg-gray-950">
            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Education
                </h2>

                <div className="mt-12 border-l-2 border-blue-500 pl-6 space-y-8">

                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

                            <p className="text-blue-500 font-semibold">{item.year}</p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {item.place}
                            </p>
                            <p className="text-gray-500 mt-1 text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}