module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite'
      }
    },
  },
  safelist: [
    'bg-blue-300',
    'bg-indigo-300'
  ],
  plugins: [],
}
