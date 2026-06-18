module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {
            colors: {
                /* Custom heading colors for visual hierarchy */
                'heading-hero': 'var(--heading-hero, #38bdf8)',
                'heading-skills': 'var(--heading-skills, #06b6d4)',
                'heading-projects': 'var(--heading-projects, #10b981)',
                'heading-experience': 'var(--heading-experience, #f59e0b)',
                'heading-about': 'var(--heading-about, #8b5cf6)',
                'heading-certifications': 'var(--heading-certifications, #ec4899)',
                'heading-contact': 'var(--heading-contact, #06b6d4)',

                /* Light mode colors */
                'light-surface': '#f3f8ff',
                'light-surface-2': '#eff6ff',
                'light-border': '#dbeafe',
            },
        },
    },
    plugins: [],
}
