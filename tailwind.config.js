/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        },
        secondary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        accent: {
          DEFAULT: '#06b6d4',
          500: '#06b6d4',
          600: '#0891b2'
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },
        bg: {
          light: '#f8fafc',
          dark: '#0b1220'
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg,#06b6d4 0%, #6366f1 40%, #7c3aed 100%)',
        'sunset': 'linear-gradient(90deg,#ff7a7a 0%, #ffb86b 50%, #ffd6a5 100%)',
        'ocean': 'radial-gradient(circle at 10% 20%, #06b6d4, #7c3aed 40%, #0f172a 100%)'
      }
    },
  },
  plugins: [],
};
