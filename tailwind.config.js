/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Helvetica Neue"', 'sans-serif'],
            },
            colors: {
                'brand-blue': '#415BE7',
                'brand-blue-hover': '#3247B5',
                'brand-bg': '#F9F9FB',
                'brand-border': '#DBDDE3',
                'brand-text': '#000000',
                'brand-text-muted': '#818EA2',
                'brand-text-gray': '#737373',
                'brand-text-darkgray': '#525252',
                'brand-step-bg': 'rgba(65, 91, 231, 0.06)'
            }
        },
    },
    plugins: [],
}