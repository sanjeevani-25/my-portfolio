/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      bgwhite: "#fff",
      bgblack: "#191919",
      bgblue: "#1B7196",
      bgslightdarkblue: "#11678C",
      txtwhite: "#fff",
      txtblack: "#232323",
      txtgrey: "#919191",
    },
    fontFamily: {
      // nunito: ["Nunito", "sans-serif"],
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
