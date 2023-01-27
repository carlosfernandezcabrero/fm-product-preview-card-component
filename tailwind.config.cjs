/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        grayish: '#6b7189',
        cyan: '#3c8067'
      },
      fontFamily: {
        title: ['Fraunces', 'serif']
      }
    }
  },
  plugins: []
}
