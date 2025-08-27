/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#e99b63",
      },
      fontFamily: {
        jumbotron: ['"Jumbotron"', "sans-serif"],
        bhlingglers: ['"Bhlingglers"', "cursive"],
        orbitron: ['"Orbitron"', "sans-serif"],
        treeghost: ['"Tree Ghost"', "cursive"],
        rebornes: ['"Rebornes"', "serif"],
        brshape: ['"BR Shape"', "sans-serif"],
        Jumbox: ["FTY STRATEGYCIDE NCV", "sans-serif"],
        Vecna: ["FTY STRATEGYCIDE NCV", "sans-serif"],
        Klam: ["klam", "sans-serif"],
        Tea: ["DENNE MILK TEA", "sans-serif"],
        Ballerina: ["Baleria Script", "sans-serif"],
        supernova: ["Supernova", "sans-serif"],
        Surprisedmonkey: ["Surprisedmonkey", "sans-serif"],
        Marhey: ["Marhey", "sans-serif"],
        Pixelify: ["Pixelify Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Pixelify2: ["PF Tempesta Seven", "sans-serif"],
        Pixelify3: ["PF Tempesta Seven Extended", "sans-serif"],
        Pixelify4: ["PF Tempesta Seven Condensed", "sans-serif"],
        Pixelify5: ["PF Tempesta Seven Compressed", "sans-serif"],
      },

      // ✅ Animations for Marquee
      animation: {
        marquee: "marquee var(--duration,40s) linear infinite",
        "marquee-vertical":
          "marquee-vertical var(--duration,40s) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap,1rem)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-50% - var(--gap,1rem)))" },
        },
      },
    },
  },
  plugins: [],
};
