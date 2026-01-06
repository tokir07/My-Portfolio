/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    black: '#000000',
                    red: '#DC2626',
                    blue: '#2563EB',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                floating: "0 8px 32px rgba(0, 0, 0, 0.12)",
                glass: "0 10px 40px rgba(37, 99, 235, 0.25)",
            },
        },
    },
    plugins: [],
};
