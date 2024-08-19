/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#004853",
  secondary: "#5B9D99",
  tertiary: "#7EDE88",
  "accent-1": "#D6E4E3",
  "accent-2": "#B1B1E5",
  "accent-3": "#6C6CC7",
  black: "#232323",
  "login-bg": "#abada9",
};

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
