/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/resources/**/*.{js,ts,jsx,tsx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'gray-ui/90': 'rgba(18, 18, 18, 0.9)',
      'gray-ui/60': 'rgba(18, 18, 18, 0.6)',
      'gray-ui/35': 'rgba(18, 18, 18, 0.35)',
      'gray-ui/10': 'rgba(18, 18, 18, 0.1)',
      'gray-ui/5': 'rgba(18, 18, 18, 0.05)',
      'gray-ui/5c': '#5c5c5c',
      'gray-ui': {
        DEFAULT: '#191919',
        900: '#232323',
        800: '#353535',
        700: '#6B6B6B',
        300: '#CECECE',
        200: '#ECECEC',
        100: '#F8F8F8',
      },
      'yellow-ui': {
        600: '#F3D432',
        500: '#FAE160',
        400: '#FFEF9C',
      },
      'yellow-ui/5': 'rgba(22, 157, 255, 0.05)',
      'blue-ui/5': 'rgba(22, 157, 255, 0.05)',
      'red-ui': '#ea1210',
      'red-ui/5': 'rgba(240, 74, 74, 0.05)',
      'green-ui/5':  'rgba(40, 191, 51, 0.05)',
    },
    borderWidth: {
      '1-ui': '1px',
    },
    lineHeight: {
      'none': '1',
      'h1-ui': '1.1',
      'h2-ui': '1.2',
      'sm-ui': '1.4',
      'regular-ui': '1.6',
    },
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
      '2xl': '1680px',
    },
    fontFamily: {
      main: 'GraphikLCG, sans-serif',
      secondary: 'Inter, sans-serif',
    },
    container: {
      center: true,
    },
    extend: {
      transitionDuration: {
        std: '200ms',
      },
      transitionProperty: {
        absolute: 'left, right, top, bottom',
      },
      backgroundImage: {
        checkbox: 'url(\'../../src/resources/icons/tick.svg\')',
      },
      height: {
        13: '3.25rem',
      },
      width: {
        13: '3.25rem',
      },
      ringWidth: {
        3: '3px',
      },
      borderRadius: {
        xs: '1px',
        std: '2px',
        lg: '3px',
      },
      fontSize: {
        10: '10px',
        44: '44px',
      },
      keyframes: {
        bgFromCenter: {
          '0%': {
            opacity: '0.5',
            transform: 'scale(0, 1)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1, 1)',
            right: '0',
            left: '0',
          },
        },
        menuShow: {
          '0%': {
            transform: 'translateY(5px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        togler: {
          '0%': {
            left: 0,
          },
          '100%': {
            right: 0,
          },
        },
        popup: {
          '0%': {
            transform: 'translateY(70px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        bgFromCenter: 'bgFromCenter 0.2s ease forwards',
        menuShow: 'menuShow 0.2s ease forwards',
        showPopup: 'popup 0.3s ease forwards',
      },
    },
  },
};
