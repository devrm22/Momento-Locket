/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'today': 'url("/img/bg-today.png")',
        'sm-today': 'url("/img/bg-sm-today.png")',
      },
      height: {
        'h-436': '436px'
      },
      width: {
        'w-381': '381px'
      }
    },
  },
  plugins: [],
}
