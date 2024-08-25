/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Light */
        background: "#F9F1F4",
        foreground: "#0A0607",
        primary: "#B46475",
        secondary: "#D39CA8",
        accent: "#C77A89",

        /* Dark */
        "dark-background": "#0E0609",
        "dark-foreground": "#F9F5F6",
        "dark-primary": "#9B4B5C",
        "dark-secondary": "#632C38",
        "dark-accent": "#853847",
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
