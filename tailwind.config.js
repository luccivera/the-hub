module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      rust: "#a43f10",
      gold: "#fbab17",
      yellow: "#ffcf01",
      orange: "#f18721",
      green: "#097c3e",
      charcoal: "#333333",
      grey: "#efefef",
      white: "#ffffff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    container: {
      center: true,
    },
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px", // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
