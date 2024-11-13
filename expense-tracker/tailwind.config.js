/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0166FF",
        slate: "#334155",
        neutral: "#A3A3A3",
        base100: "#F3F4F6",
        base200: "#E5E7EB",
        base300: "#D1D5DB",
        lime: "#84CC16",
        ellipse130: "#0166FF",
        ellipse131: "#01B3FF",
        ellipse132: "#41CC00",
        ellipse133: "#F9D100",
        ellipse134: "#FF7B01",
        ellipse135: "#AE01FF",
        ellipse136: "#FF0101",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      scrollbar: {
        hide: true,
      },
    },
  },
  variants: {
    scrollbar: ["rounded"], // Tailwind CSS v2.1+ дээр
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
  daisyui: {
    darkTheme: "light", // name of one of the included themes for dark mode
  },
};
