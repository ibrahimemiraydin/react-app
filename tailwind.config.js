/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          'discord-dark': '#36393f',
          'discord-darker': '#2f3136',
          'discord-hover': '#40444b',
        },
      },
    },
    plugins: [],
  };