module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#121212",
        card: "#1e1e1e",
        accent: "#fbbf24"
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255,255,255,0.05), 0 18px 50px rgba(0,0,0,0.5)"
      }
    },
  },
  plugins: [],
};