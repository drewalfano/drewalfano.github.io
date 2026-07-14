module.exports = {
  content: ["./*.html", "./work/*.html", "./work/**/*.html", "./about/*.html", "./contact/*.html"],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAFA",
        ink: "#111111",
        brand: "#D0272B",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}