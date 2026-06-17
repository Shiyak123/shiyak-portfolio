import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experienceData = [
    {
        type: "professional",
        title: "Full-Stack MERN Developer (Internship)",
        company: "SKYREK Internship Program",
        period: "2026 – Present",
        description:
            "Working as a MERN Stack Developer focusing on backend development, REST API creation, authentication systems, and full-stack application development.",
        points: [
            "Developing scalable backend using Node.js & Express.js",
            "Building secure REST APIs with JWT authentication",
            "Integrating MongoDB database systems",
            "Currently developing React.js frontend for marketplace system",
        ],
    },
    {
        type: "business",
        title: "Owner & Manager",
        company: "NEW ONLINE MART (Retail & Wholesale Clothing)",
        period: "2022 – Present",
        description:
            "Running a successful home-based retail and wholesale clothing business with WhatsApp-based customer operations.",
        points: [
            "Managed inventory, pricing, and order processing",
            "Built strong customer relationships and repeat sales",
            "Handled marketing and customer communication",
            "Improved business growth through referral-based strategy",
        ],
    },
    {
        type: "academic",
        title: "Teacher (Part-Time)",
        company: "Institute of Ma’hadur Rasiqheen",
        period: "2023 – 2026",
        description:
            "Teaching and mentoring students in Islamic studies and academic development.",
        points: [
            "Delivered structured lesson plans",
            "Improved student engagement and learning outcomes",
            "Developed communication and leadership skills",
        ],
    },
    {
        type: "academic",
        title: "Assistant Accountant",
        company: "Matara Grand Mosque",
        period: "2023",
        description:
            "Supported financial record management and administrative accounting tasks.",
        points: [
            "Managed financial documentation",
            "Assisted reporting and bookkeeping tasks",
            "Ensured accurate record keeping",
        ],
    },
    {
        type: "early",
        title: "Customer Experience Associate",
        company: "Fashion Bug / Cool Planet",
        period: "2018 – 2021",
        description:
            "Worked in customer service and retail operations, gaining strong communication and sales experience.",
        points: [
            "Handled customer inquiries and support",
            "Improved customer satisfaction experience",
            "Developed retail sales skills",
        ],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 px-6 bg-surface-2 dark:bg-surface-2"
        >
            <div className="max-w-5xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-primary mb-16">
                    Professional <span className="text-primary">Experience</span>
                </h2>

                {/* Timeline */}
                <div className="space-y-10 border-l-2 border-surface pl-6">

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >

                            {/* Dot */}
                            <div className="absolute -left-[34px] top-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                                {exp.type === "professional" ? (
                                    <FaBriefcase />
                                ) : (
                                    <FaGraduationCap />
                                )}
                            </div>

                            {/* Card */}
                            <div className="bg-surface p-6 rounded-xl shadow-md hover:shadow-lg transition border border-surface">

                                <h3 className="text-xl font-bold text-primary">
                                    {exp.title}
                                </h3>

                                <p className="text-secondary font-medium">
                                    {exp.company}
                                </p>

                                <p className="text-sm text-muted mb-3">
                                    {exp.period}
                                </p>

                                <p className="text-secondary mb-4">
                                    {exp.description}
                                </p>

                                <ul className="space-y-2 text-sm text-secondary">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}