module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'border-gray-primary': '#cdcabb',
      },
      textShadow: {
        sm: "1px 1px 2px rgba(197, 30, 166, 0.5)",
        md: "2px 2px 4px rgba(241, 26, 205, 0.5)",
        lg: "3px 3px 6px rgba(216, 28, 28, 0.5)",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
  ],
};