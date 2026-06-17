import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    // Initialize theme once
    useEffect(() => {
        const saved = localStorage.getItem("theme");

        if (saved === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else if (saved === "light") {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            // system preference fallback
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            setDarkMode(prefersDark);

            if (prefersDark) {
                document.documentElement.classList.add("dark");
            }
        }
    }, []);

    // Sync changes
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
}