/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        5000: "5000ms",
      },
      keyframes: {
        movePokemon: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(.1rem)" },
        },
      },
      animation: {
        movePokemon: "movePokemon 1s ease-in-out infinite",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      custom: "2.5rem",
    },
    blur: {
      xs2: "1px",
      xs1: "0.5px",
    },
  },
  plugins: [],
};
