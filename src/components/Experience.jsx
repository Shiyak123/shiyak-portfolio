import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const experienceData = [
  {
    role: "Full-Stack MERN Developer (Internship)",
    company: "SKYREK Internship Program",
    period: "2026 – Present",
    summary: "Working as a MERN Stack Developer focusing on backend development, REST API creation, authentication systems, and full-stack application development.",
    responsibilities: [
      "Developing scalable backend using Node.js & Express.js",
      "Building secure REST APIs with JWT authentication",
      "Integrating MongoDB database systems",
      "Currently developing React.js frontend for marketplace system"
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "JWT", "React.js", "REST APIs"]
  },
  {
    role: "Owner",
    company: "NEW ONLINE MART (Retail & Wholesale Clothing Business)",
    period: "2022 – Present",
    summary: "Running a home-based retail and wholesale clothing business with WhatsApp-based customer operations.",
    responsibilities: [
      "Established and manage a home-based and WhatsApp-driven retail and wholesale clothing business.",
      "Built a loyal customer base through personalized customer engagement and relationship-focused selling.",
      "Increased repeat purchases through responsive customer support and referral-based sales strategies.",
      "Managed inventory, order processing, pricing, and customer communications while maintaining high customer satisfaction.",
      "Developed practical experience in sales, negotiation, customer relationship management, and business operations."
    ],
    skills: ["Leadership", "Business Management", "Customer Service", "Sales Strategy"]
  },
  {
    role: "Teacher (Part-Time)",
    company: "Institute of Ma'hadur Rasiqheen",
    period: "2023 – 2026",
    summary: "Teaching and mentoring students in Islamic studies and academic development.",
    responsibilities: [
      "Delivered structured lesson plans",
      "Improved student engagement and learning outcomes",
      "Developed communication and leadership skills",
      "Mentored students in Islamic studies and academic development"
    ],
    skills: ["Teaching", "Leadership", "Communication", "Mentoring"]
  },
  {
    role: "Assistant Accountant",
    company: "Matara Grand Mosque",
    period: "2023",
    summary: "Supported financial record management and administrative accounting tasks.",
    responsibilities: [
      "Managed financial documentation",
      "Assisted reporting and bookkeeping tasks",
      "Ensured accurate record keeping",
      "Supported financial record management and administrative accounting tasks"
    ],
    skills: ["Accounting", "Financial Documentation", "Bookkeeping", "Record Keeping"]
  },
  {
    role: "Islamic Studies & Sinhala Teacher",
    company: "Al Badhr Islamic Institute",
    period: "2022 – 2023",
    summary: "Taught and mentored students in Islamic studies and Sinhala language development.",
    responsibilities: [
      "Taught and mentored students in Islamic studies and Sinhala language development."
    ],
    skills: ["Teaching", "Language Instruction", "Leadership"]
  },
  {
    role: "Islamic Studies Teacher",
    company: "Institute of Zaid Bin Sabith, Galle",
    period: "2021 – 2022",
    summary: "Delivered structured lessons focused on Islamic history, ethics, and foundational principles.",
    responsibilities: [
      "Delivered structured lessons focused on Islamic history, ethics, and foundational principles."
    ],
    skills: ["Teaching", "Mentoring", "Presentation Skills"]
  },
  {
    role: "Customer Experience Associate",
    company: "Fashion Bug",
    period: "2019 – 2021",
    summary: "Handled customer inquiries, support, and frontline store communications.",
    responsibilities: [
      "Handled customer inquiries, support, and frontline store communications.",
      "Improved customer satisfaction experiences and resolved issues professionally.",
      "Developed strong retail sales skills and team collaboration habits."
    ],
    skills: ["Customer Service", "Communication", "Sales"]
  },
  {
    role: "Customer Experience Associate",
    company: "Cool Planet",
    period: "2018 – 2019",
    summary: "Handled retail operations, customer engagement, and direct inquiries.",
    responsibilities: [
      "Handled retail operations, customer engagement, and direct inquiries.",
      "Boosted general workflow efficiency and point-of-sale customer service metrics."
    ],
    skills: ["Retail Operations", "Customer Service", "Communication"]
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
    <section id="experience" className="w-full py-20 px-6 bg-surface-2">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Professional Experience"
          icon={FaBriefcase}
          colorClass="text-heading-experience"
        />

        <motion.div
          className="relative border-l border-heading-experience/30 ml-4 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {experienceData.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8">
              <div className="absolute -left-5 top-1 text-white bg-heading-experience rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
                <FaBriefcase />
              </div>

              <div className="p-6 bg-surface rounded-xl shadow border border-heading-experience/30 hover:border-heading-experience/60 transition-colors">
                <h3 className="text-xl font-bold text-heading-experience">{exp.role}</h3>
                <p className="text-secondary">{exp.company}</p>

                <div className="flex items-center gap-2 text-sm text-muted mt-1">
                  <FaCalendarAlt className="text-heading-experience/60" />
                  {exp.period}
                </div>

                {exp.summary && (
                  <p className="text-secondary mt-4 leading-relaxed">
                    {exp.summary}
                  </p>
                )}

                <ul className="mt-4 space-y-2 text-secondary">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-heading-experience">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-surface-2 text-heading-experience rounded border border-heading-experience/30 hover:border-heading-experience transition-colors">
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
