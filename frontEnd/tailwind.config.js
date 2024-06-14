/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ['nord', 'synthwave'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },

}

