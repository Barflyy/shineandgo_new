/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Optimisations de performance
  corePlugins: {
    // Désactiver les plugins non utilisés pour réduire la taille
    preflight: true,
    container: false, // Utiliser notre propre container
    accessibility: false, // Gérer manuellement
  },
  theme: {
    extend: {
      colors: {
        // Palette étendue selon les spécifications
        accent: '#2563EB', // blue-600
        'accent-hover': '#3B82F6', // blue-500
        'surface-light': '#F5F9FF', // sky-50 custom
        'surface-cta': '#E9F6FF', // sky-100 custom
        'card-alt': '#F5F9FF', // sky-50 custom for card backgrounds
        'text-primary': '#1E293B', // slate-900
        'ui-border': '#E2E8F0', // slate-200
        
        // Couleurs spécifiques pour les sections
        'hero-bg': '#F5F9FF',
        'hero-text': '#1E293B',
        'benefits-bg': '#F0F9FF',
        'benefits-text': '#0C4A6E',
        'process-bg': '#FEF7FF',
        'process-text': '#581C87',
        'services-bg': '#F0FDF4',
        'services-text': '#166534',
        'testimonials-bg': '#FFFBEB',
        'testimonials-text': '#92400E',
        'faq-bg': '#EEF2FF',
        'faq-text': '#3730A3',
        'zones-bg': '#F0FDFA',
        'zones-text': '#0F766E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '6xl': '72rem', // ≈1280px
      },
      borderRadius: {
        '3xl': '1.5rem',
        card: '1.5rem', // 24px
      },
      spacing: {
        '20': '5rem',
        '24': '6rem',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,.04), 0 4px 12px rgba(0,0,0,.08)',
      },
      height: {
        'svh': '100svh',
        'dvh': '100dvh',
        'lvh': '100lvh',
        'screen-minus-header': 'calc(100svh - var(--header-height, 80px))',
      },
      minHeight: {
        'svh': '100svh',
        'dvh': '100dvh',
        'lvh': '100lvh',
        'screen-minus-header': 'calc(100svh - var(--header-height, 80px))',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      // Enable container queries
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    // Plugin personnalisé pour optimiser les performances
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.content-visibility-auto': {
          'content-visibility': 'auto',
          'contain-intrinsic-size': '0 500px',
        },
        '.contain-layout': {
          'contain': 'layout',
        },
        '.contain-paint': {
          'contain': 'paint',
        },
        '.contain-size': {
          'contain': 'size',
        },
        '.contain-style': {
          'contain': 'style',
        },
        '.will-change-transform': {
          'will-change': 'transform',
        },
        '.touch-optimized': {
          '-webkit-tap-highlight-color': 'transparent',
          'touch-action': 'manipulation',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 