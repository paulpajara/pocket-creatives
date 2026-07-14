/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pocket: {
          yellow: "#fcbe17",
          blue: "#179cbd",
          cyan: "#32d6ff",
          ink: "#0b0e10",
          muted: "#526e87",
          paper: "#f6fbff",
          canvas: "#f2f2f2"
        }
      },
      screens: {
        mobile: { max: "767px" },
        desktop: { min: "1024px", max: "1599px" },
        wide: "1600px"
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 32px rgba(12, 18, 24, 0.12)",
        button: "0 2px 0.5px rgba(0, 0, 0, 0.1)"
      }
    }
  },
  plugins: []
};
