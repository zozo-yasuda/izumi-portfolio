import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '768px',
        'sm': '1103px',
        'md': '1230px',
        'lg': '1600px'
      },
      minHeight: {
        'screen': '100vh',
        'full': '100%',
      },
      boxShadow: {
        'right': '0px 0 0px 1px rgba(0, 0, 0, 0.1), 0px 0 0px 0px rgba(0, 0, 0, 0.05)',
        'left': '-8px 0 15px -3px rgba(0, 0, 0, 0.1), -4px 0 6px -2px rgba(0, 0, 0, 0.05)',
      },
      letterSpacing: {
        '18': '0.18em',
        '5': '0.05em',
        '24':'0.24em',
      },
      fontFamily: {
        sans: ["Corbel", "Calibri", "sans-serif"],
        'tomarik': ['tomarik-introvert', 'sans-serif'],
      },
      colors: {
        green: "#2A6230",
        lime: "#509944",
        offwhite: "#FDFAFA",
        rose: "#FCE3E5",
        pink: "#F6AFB6",
        offblack: "#2C2D43",
        red: "#EE5365"
      },
      leading: {
        extraloose: "32",
      },
    },
  },
  plugins: [],
};
export default config;
