// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
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
  variants: {
    extend: {},
  },
  plugins: [],
};
