module.exports = {
  darkMode: 'class',
  content: [],
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}"
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",

        "m1": "#5D5C61",
        "m2": "#379683",
        "m3": "#7395AE",
        "m4": "#557A95",
        "m5": "#B1A296"
      },
    },
  },
  plugins: [],
}
