Google Maps
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1B1F4B',
        pink: '#E8338C',
        orange: '#FF7A1A',
        yellow: '#FFB81C',
        purple: '#6A3DE8',
        soft: '#F7F5FF',
        body: '#4B5070',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF9A1F 0%, #F0367A 50%, #6A3DE8 100%)',
        'badge-gradient': 'linear-gradient(90deg, #FF7A1A 0%, #E8338C 100%)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
