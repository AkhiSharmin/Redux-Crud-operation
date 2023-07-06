/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d18e4f",

          secondary: "#27ea89",

          accent: "#f98b1d",

          neutral: "#2b2b36",

          "base-100": "#323234",

          info: "#9bb7e9",

          success: "#3ddbaf",

          warning: "#99590b",

          error: "#fc6469",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
