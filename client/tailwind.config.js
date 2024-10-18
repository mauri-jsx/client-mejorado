/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(255, 255, 255, 0.25)',
        'brown': 'rgba(30, 30, 17)',
        'custom-green': '#13FFAA',
        'custom-blue': '#1E67C6',
        'custom-purple': '#CE84CF',
        'custom-pink': '#DD335C',
        // Colores extraídos de la imagen
        'light-gray': '#CCD0CF',
        'gray-1': '#9BA8AB',
        'gray-2': '#4A5C5A',
        'dark-1': '#253745',
        'dark-2': '#11212D',
        'dark-3': '#06141B',
      },
      backgroundImage: {
        // Manteniendo el fondo existente
        'back': 'radial-gradient(125% 125% at 50% 0%, #333333 10%, #0000FF 40%, #8A2BE2 80%)',
        // Degradado con los nuevos colores
        'custom-gradient': 'linear-gradient(135deg, #06141B, #11212D, #253745, #4A5C5A, #9BA8AB, #CCD0CF)',
      },
      animation: {
        'smoothGradient': 'smoothGradient 8s ease-in-out infinite',
        // Nueva animación de flujo de gradiente
        'gradientFlow': 'gradientFlow 10s ease infinite',
      },
      keyframes: {
        smoothGradient: {
          '0%': { backgroundPosition: '0% 50%', backgroundSize: '150% 150%' },
          '50%': { backgroundPosition: '100% 50%', backgroundSize: '170% 170%' },
          '100%': { backgroundPosition: '0% 50%', backgroundSize: '150% 150%' },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
