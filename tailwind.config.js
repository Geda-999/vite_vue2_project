// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  komabig: ["10rem", { lineHeight: "10rem" }],
  theme: {
    extend: {
      colors: {
        bootstrap_primary: "#0d6efd",
        bootstrap_secondary: "#6c757d",
        bootstrap_success: "#198754",
        bootstrap_danger: "#dc3545",
        bootstrap_info: "#0dcaf0",
      },
    },
  },
  plugins: [],
};
