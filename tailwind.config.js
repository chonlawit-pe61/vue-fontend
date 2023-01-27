/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/src/assets/img/image-header.jpg')",
        'leftSection': "url('/src/assets/img/image-graphic-design.jpg')",
        'rightSection': "url('/src/assets/img/image-photography.jpg')",
      },
    },
  },
  plugins: [],
}
