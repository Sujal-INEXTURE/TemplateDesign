/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0aad0a",
        "text-color": "#5c6c75",
        "border-color": "#85d685",
      },
    },
  },
  plugins: [],
};
