import { motion } from "framer-motion";

export default function Certifications() {
    const certificates = [
        {
            title: "MERN Stack Development",
            issuer: "Self Learning",
            year: "2024",
        },
        {
            title: "Frontend Development",
            issuer: "React & Tailwind Projects",
            year: "2023",
        },
        {
            title: "Future Careers BRIDGE Program",
            issuer: "SEU",
            year: "2023",
        },
    ];

    return (
        <section className="py-24 px-6 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                    Certifications
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {cert.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                {cert.issuer}
                            </p>
                            <p className="text-blue-500 mt-1">{cert.year}</p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}