/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/dist/flowbite.min.js"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        s1: "0px 9.9px 21.6px rgba(1, 71, 255, 0.41)",
        s2: "2px 12px 20px 0px rgba(90, 117, 167, 0.17)",
        s3: "drop-shadow(31.6228px 94.8683px 80px rgba(0, 0, 0, 0.11)) drop-shadow(20.4962px 61.4887px 46.8519px rgba(0, 0, 0, 0.0835185)) drop-shadow(12.1806px 36.5419px 25.4815px rgba(0, 0, 0, 0.0668148)) drop-shadow(6.32456px 18.9737px 13px rgba(0, 0, 0, 0.055)) drop-shadow(2.57667px 7.73001px 6.51852px rgba(0, 0, 0, 0.0431852)) drop-shadow(0.585607px 1.75682px 3.14815px rgba(0, 0, 0, 0.0264815));",
      },
      colors: {
        primary: "#187CFF",
        secondary: "#FFD200",
      },
      animation: {
        marquee1: "marquee1 10s linear infinite",
        marquee2: "marquee2 10s linear infinite",
        marquee3: "marquee3 10s linear infinite",
        marquee4: "marquee4 10s linear infinite",
        marquee5: "marquee5 10s linear infinite",
        marquee6: "marquee6 10s linear infinite",
      },
      keyframes: {
        marquee1: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        marquee3: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        marquee4: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        marquee5: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee6: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
