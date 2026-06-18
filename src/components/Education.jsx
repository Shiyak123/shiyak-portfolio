import SectionTitle from "./SectionTitle";
import { FaBriefcase } from "react-icons/fa";

const skills = [
  "Full-Stack Web Development",
  "MERN Stack Development",
  "REST API Development",
  "Database Design & Management",
  "Authentication & Authorization",
  "Software Testing & Debugging",
  "Problem Solving & Analytical Thinking",
  "Team Collaboration",
  "Communication & Presentation Skills",
  "Time Management",
  "Adaptability & Quick Learning",
  "Customer Relationship Management",
  "Leadership & Responsibility",
];

export default function ProfessionalSkills() {
  return (
    <section id="professional-skills" className="py-24 px-6 bg-surface-2 dark:bg-surface-2">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="PROFESSIONAL SKILLS"
          icon={FaBriefcase}
          colorClass="text-heading-experience"
        />
        <p className="text-center text-secondary max-w-2xl mx-auto mb-12">
          A concise showcase of the most important technical, leadership, and customer-focused professional skills that drive my work.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-3xl border border-surface bg-slate-950/80 px-5 py-4 text-sm font-medium text-slate-100 shadow-sm transition hover:border-cyan-400/40 hover:bg-slate-900"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
