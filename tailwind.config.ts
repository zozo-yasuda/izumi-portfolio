import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '18': '0.18em',
      },
      fontFamily: {
        sans: ["Corbel", "Calibri", "sans-serif"],
        'tomarik': ['tomarik-introvert', 'sans-serif'],
      },
      colors: {
        green: "#27611D",
        lime: "#509944",
        offwhite: "#FBF7F7",
        rose: "#FCE3E6",
        pink: "#F6AEB6",
      },
      leading: {
        extraloose: "32",
      },
    },
  },
  plugins: [],
};
export default config;
