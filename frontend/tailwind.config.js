module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-background": "url('./assets/background.jpg')",
      },
      backgroundColor: {
        "bg-color": "rgba(148 163 184 .4)",
      },
      colors: {
        "bg-panel": "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
