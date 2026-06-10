/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // lineClamp is now included by default in Tailwind CSS v3.3+
    // No need for @tailwindcss/line-clamp plugin
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#fbffffff",
        marrslight: "#167A7A",
        marrsgreen: "#005C5C",
        marrsdark: "#003D3D",
        cardlight: "#C9D6D6",

        // bgdark: "#2D2D2D",
        bgdark: "#1D2A35",
        carrilight: "#57DCB4",
        carrigreen: "#05CE91",
        carridark: "#00835B",
        // carddark: "#383838",
        carddark: "#22323F",
        textlight: "#F9FAFB",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
