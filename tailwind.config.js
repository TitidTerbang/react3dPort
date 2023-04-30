/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050813",
        // secondary: "#aaa6c3",
        // tertiary: "#151030",
        // // experiments
        primary: "#00334E",
        secondary: "#145374",
        tertiary: "#5588A3",
        quaternary: "#E8E8E8",
        warnalima: "#FF5733",
        readtext: "#CCCCCC",
        textsub: "#6497B1",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      gradientColorStops: {
        'custom-gradient': ['#2F4F4F', '#5588A3', '#87CEEB'],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px"
      },
      backgroundImage: {
       "hero-pattern" : "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [
      require('tailwindcss-hero-patterns'),
  ],
};
