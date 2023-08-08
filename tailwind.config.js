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
      transparent: 'transparent',
      white: '#ffffff',
      'gray/90': 'rgba(18, 18, 18, 0.9)',
      'gray/60': 'rgba(18, 18, 18, 0.6)',
      'gray/35': 'rgba(18, 18, 18, 0.35)',
      'gray/10': 'rgba(18, 18, 18, 0.1)',
      'gray/5': 'rgba(18, 18, 18, 0.05)',
      'gray/5c': '#5c5c5c',
      gray: {
        DEFAULT: '#191919',
        900: '#232323',
        800: '#353535',
        700: '#6B6B6B',
        300: '#CECECE',
        200: '#ECECEC',
        100: '#F8F8F8',
      },
      yellow: {
        600: '#F3D432',
        500: '#FAE160',
        400: '#FFEF9C',
        'yellow/5': 'rgba(255, 168, 0, 0.05)',
      },
      blue: {
        'blue/5': 'rgba(22, 157, 255, 0.05)',
      },
      red: {
        DEFAULT: '#ea1210',
        'red/5': 'rgba(240, 74, 74, 0.05)',
      },
      green: {
        'green/5': 'rgba(40, 191, 51, 0.05);',
      },
    },

    borderWidth: {
      1: '1px',
      2: '2px',
      3: '3px',
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
    lineHeight: {
      none: '1',
      h1: '1.1',
      h2: '1.2',
      sm: '1.4',
      regular: '1.6',
      lg: '1.78',
    },
    letterSpacing: {
      inherit: 'inherit',
      sm: '0.2px',
      md: '1.5',
    },
    container: {
      center: true,
      screens: {
        sm: '540px',
        lg: '428px',
      },
    },

    extend: {
      transitionDuration: {
        std: '200ms',
      },
      transitionProperty: {
        absolute: 'left, right, top, bottom',
      },
      backgroundImage: {
        checkbox: `url('../../src/resources/icons/tick.svg')`,
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
