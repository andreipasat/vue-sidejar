module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"fonts/TTCommons"', 'sans-serif'],
    },
    fontSize: {
      xs: ['12px', {
        lineHeight: '16px',
      }],
      sm: ['14px', {
        lineHeight: '22px',
      }],
      lg: ['18px', {
        lineHeight: '22px',
      }],
    },
    colors: {
      white: '#FFF',
      neutral: '#262B33',
      'gray-0': '#C1C9DE',
      'gray-1': '#D9DEEB',
      'gray-2': '#E5E5E5',
      'gray-3': '#828BA2',
      green: '#207544',
      indigo: '#2F8DEB'
    },
    extend: {
      maxWidth: {
        '246': '246px',
      },
      minHeight: {
        '264': '264px',
      },
      maxHeight: {
        '264': '264px',
      }
    },
  },
  plugins: [
  ],
}