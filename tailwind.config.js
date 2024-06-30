/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: '#1E90FF',
      },
      fontFamily: {
        playwrite: ['Playwrite FR Moderne', 'sans-serif'],
        play: ['Play', 'sans-serif'],
        oswald:['Oswald']
      },
    },
  },
  plugins: [],
}