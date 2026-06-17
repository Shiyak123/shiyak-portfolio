import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    // Initialize theme
    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        } else if (saved === "light") {
            document.documentElement.classList.remove("dark");
            setDark(false);
        } else {
            // optional: system preference fallback
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            if (prefersDark) {
                document.documentElement.classList.add("dark");
                setDark(true);
            }
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !dark;

        setDark(newTheme);

        if (newTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-xl text-gray-700 dark:text-yellow-300 transition-transform hover:scale-110"
        >
            {dark ? <FaSun /> : <FaMoon />}
        </button>
    );
}