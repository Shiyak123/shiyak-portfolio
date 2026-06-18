import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaTrophy } from "react-icons/fa";

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
        <section id="certifications" className="py-24 px-6 bg-surface-2 dark:bg-surface-2">
            <div className="max-w-6xl mx-auto">

                <SectionTitle
                    title="Certifications"
                    icon={FaTrophy}
                    colorClass="text-heading-certifications"
                />

                <div className="grid md:grid-cols-3 gap-6 mt-12">

                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-xl bg-surface border border-heading-certifications/30 hover:border-heading-certifications/60 transition-all hover:shadow-lg"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <FaTrophy className="text-heading-certifications text-lg" />
                                <h3 className="text-lg font-semibold text-white">
                                    {cert.title}
                                </h3>
                            </div>
                            <p className="text-slate-300 mt-2">
                                {cert.issuer}
                            </p>
                            <p className="text-cyan-300 font-semibold mt-1">{cert.year}</p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}