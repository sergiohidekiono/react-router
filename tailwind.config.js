/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}", // Garante que tudo dentro de `src` será escaneado
        "./public/**/*.html", // Opcional, se usar templates HTML
    ],
    safelist: [
        { pattern: /^gap-/ },
        { pattern: /^w-/ },
        { pattern: /^h-/ },
        { pattern: /^text-/ },
        { pattern: /^bg-/ },
    ],
    theme: {
        extend: {},
    },
    plugins: [require("tailwind-scrollbar")],
};
