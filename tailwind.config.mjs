/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1a237e',
        'soft-gold': '#ffd700',
        'gentle-purple': '#9575cd',
        'story-bg': '#f8f4ff'
      },
      fontFamily: {
        'display': ['Alice', 'serif'],
        'body': ['Crimson Text', 'serif']
      }
    }
  },
  plugins: []
}