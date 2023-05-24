/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "576px",
      md: "764px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        xs: "360px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1370px",
        "3xl": "1540px",
      },
    },
    extend: {
      colors: {
        primaryColor: "#11998E",
        secondary: "#EC6A4B",
        bgColor: "#CCEEFB",
        lightText: "#BDBDBD",
        textColor: "#000000",
      },
    },
  },
  plugins: [],
};
