import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Tomarik Introvert", "Corbel", "Calibri", "sans-serif"],
      },
      colors: {
        green: "rgb(80,153,68)",
        lime: "rgb(39,97,29)",
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
