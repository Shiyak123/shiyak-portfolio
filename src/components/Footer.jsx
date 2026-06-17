import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Helper function to handle smooth scrolling to sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="w-full bg-surface dark:bg-surface text-secondary dark:text-secondary border-t border-surface transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

                {/* Top Section: Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">

                    {/* Column 1: Brand & Professional Core */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg font-bold text-primary tracking-wide">
                            MUHAMMADU N. SHIYAK
                        </h2>
                        <p className="text-sm leading-relaxed max-w-sm">
                            Final-Year ICT Undergraduate specializing in building scalable MERN stack web applications and robust software engineering solutions.
                        </p>
                        <div className="flex items-center gap-2 text-xs mt-2 text-slate-500">
                            <FaMapMarkerAlt className="text-emerald-500" />
                            <span>Colombo, Sri Lanka</span>
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation Links */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-200 text-left cursor-pointer"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Professional Channels */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                            Connect With Me
                        </h3>
                        <p className="text-sm">
                            Available for Software Engineering and Quality Assurance internship roles. Let's build something together.
                        </p>

                        {/* Social Icon Row */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="w-10 h-10 rounded-full bg-slate-200/60 dark:bg-slate-800 flex justify-center items-center text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="w-10 h-10 rounded-full bg-slate-200/60 dark:bg-slate-800 flex justify-center items-center text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                            <a
                                href="mailto:mohamedsyk1@gmail.com"
                                aria-label="Send Email"
                                className="w-10 h-10 rounded-full bg-slate-200/60 dark:bg-slate-800 flex justify-center items-center text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <FaEnvelope size={17} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Divider Bar */}
                <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-6"></div>

                {/* Bottom Section: Copyright & Sub-text */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 dark:text-slate-500">
                    <div>
                        © {currentYear} Muhammadu N. Shiyak. All rights reserved.
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Built with React & Tailwind CSS</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}