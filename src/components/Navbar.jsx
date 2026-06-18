import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Experience", href: "#experience" },
        { name: "Certificates", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    // Scroll effect (navbar background)
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-blue-950/50 dark:to-slate-950 backdrop-blur-md shadow-lg border-b border-heading-skills/30"
                : "bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 dark:from-slate-900/80 dark:via-blue-900/40 dark:to-slate-900/80 backdrop-blur-md border-b border-heading-skills/20"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-xl font-bold bg-gradient-to-r from-heading-hero to-heading-skills bg-clip-text text-transparent">
                    Shiyak<span className="text-heading-skills">.dev</span>
                </h1>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-8 text-slate-300 dark:text-slate-400 font-medium">
                    {links.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-slate-300 dark:text-slate-400 hover:text-heading-skills hover:font-semibold transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-xl text-heading-skills hover:text-heading-hero transition-colors"
                        aria-label="Open Menu"
                    >
                        <FaBars />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-3/4 h-full bg-gradient-to-b from-slate-900 to-slate-800 dark:from-slate-950 dark:to-blue-950/30 shadow-xl z-50 p-6 backdrop-blur-md border-l border-heading-skills/30"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-2xl mb-8 text-heading-skills hover:text-heading-hero transition-colors"
                            aria-label="Close Menu"
                        >
                            <FaTimes />
                        </button>

                        <div className="flex flex-col gap-6 text-lg">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 dark:text-slate-400 hover:text-heading-skills hover:font-semibold transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}