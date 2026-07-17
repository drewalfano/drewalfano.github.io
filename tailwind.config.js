module.exports = {
  content: ["./*.html", "./work/*.html", "./work/**/*.html", "./about/*.html", "./contact/*.html"],
  // These classes are only ever added by assets/js/site.js at runtime
  // (classList.add), so they never appear literally in any HTML file and
  // Tailwind's content-based purge was silently stripping them from every
  // build — the sitewide scroll-reveal fade-in has never actually animated.
  safelist: ["reveal", "reveal-soft", "is-visible", "is-shadow-tracking"],
  future: {
    // Scopes all hover:/group-hover: utilities to devices that actually
    // support hover, so tapping on touch devices can't "stick" a hover state.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        ink: "#111111",
        brand: "#D0272B",
      },
      fontFamily: {
        display: ["DM Sans", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}