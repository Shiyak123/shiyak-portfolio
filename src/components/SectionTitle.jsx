import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, icon: Icon, colorClass = "text-heading-hero" }) {
    return (
        <div className="text-center mb-12">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 ${colorClass}`}
            >
                {Icon && <Icon className="text-2xl md:text-3xl" />}
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-600 dark:text-gray-400 mt-3"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}