/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl2': '1280px',
      // => @media (min-width: 1280px) { ... }
       'xl3': '1920px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {backgroundImage: {
      'hero': "url('/bg.jpg')",
    },
    blur: {
      xs1: '1px',
      xs2: '2px',
    }
  },
  },
  plugins: [],
}
