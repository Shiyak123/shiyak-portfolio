// src/data/projects.js

const projectsData = {
    featured: {
        title: "i-Computer Marketplace",
        subtitle: "Full Stack MERN E-Commerce Platform",
        description:
            "A scalable marketplace system for buying and selling computer hardware with authentication, cart system, and admin dashboard.",

        challenge:
            "Designing a secure multi-role system with real-time product management and optimized performance.",

        features: [
            "Role-based authentication (Buyer / Seller / Admin)",
            "Product listing & filtering",
            "Shopping cart system",
            "Admin dashboard",
            "REST API integration",
        ],

        techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],

        links: {
            github: "#",
            live: "#",
        },
    },

    projects: [
        {
            title: "Smart Logistics Platform",
            description: "Parcel tracking and delivery system.",
            techStack: ["React", "Express", "MongoDB"],
            links: { github: "#", live: "#" },
        },
        {
            title: "Finance Management System",
            description: "Institution financial tracking system.",
            techStack: ["React", "Node.js", "MongoDB"],
            links: { github: "#", live: "#" },
        },
        {
            title: "Student Project Marketplace",
            description: "Industry project collaboration platform.",
            techStack: ["React", "Node.js", "MongoDB"],
            links: { github: "#", live: "#" },
        },
        {
            title: "Portfolio Builder System",
            description: "Reusable portfolio generator system.",
            techStack: ["React", "Tailwind"],
            links: { github: "#", live: "#" },
        },
    ],
};

export default projectsData;