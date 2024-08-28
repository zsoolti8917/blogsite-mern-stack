import flowbite from 'flowbite-react/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Include paths to your files where Tailwind CSS classes are used
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this according to your project structure
    flowbite.content(),
  ],
  plugins: [
    flowbite.plugin(),
  ],
};