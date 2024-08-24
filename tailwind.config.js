/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9F1F4",
        foreground: "#0A0607",
        primary: "#B46475",
        secondary: "#D39CA8",
        accent: "#C77A89",
      },
      fontFamily: {
        "poppins-thin": ["Poppins-Thin", "sans-serif"],
        "poppins-extra-light": ["Poppins-ExtraLight", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
        "poppins-regular": ["Poppins-Regular", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-semi-bold": ["Poppins-SemiBold", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-extra-bold": ["Poppins-ExtraBold", "sans-serif"],
        "poppins-black": ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
