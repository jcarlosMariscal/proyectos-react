/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        5000: "5000ms",
      },
      keyframes: {
        orderCard: {
          "0%, 100%": { transform: "opacity(0)" },
          "50%": { transform: "opacity(1)" },
        },
      },
      animation: {
        example2: "orderCard 2s ease-in-out",
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
