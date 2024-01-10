/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito, sans-serif"],
        
      },
      colors:{
        'primary_bg': '#FFFFFF',
        'primary_heading1': '#0F172A',
        'primary_heading2': '#5380EA',
        'primary_paragraph1': '#475569',
        'primary_paragraph2': '#767676',
        'primary_text': '#121212',
      },
    },
  },
  plugins: [],
}
