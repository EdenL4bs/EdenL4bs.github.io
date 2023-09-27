/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#c026d3',
      black: '#000',
      white: '#fff',
      'gray-400': '#9ca3af',
      'gray-800': '#1f2937',
    },
    extend: {
      fontFamily: {
        body: 'Urbanist, sans-serif',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
        },
      },
      backgroundColor: {
        body: '#171921',
      },
      backgroundImage: {
        banner: "url('/images/banner.jpeg')",
        banner1: "url('/images/banner1.jpeg')",
        banner2: "url('/images/banner2.jpeg')",
        banner3: "url('/images/banner3.jpeg')",
        banner4: "url('/images/banner4.jpeg')",
      },
      textColor: {
        body: '#fff',
        heading: '#fff',
        caption: '#fff',
        highlight: '#fff',
      },
      borderColor: {
        default: '#e1e1f0',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
