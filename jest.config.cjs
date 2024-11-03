module.exports = {
    setupFiles: ['./jest.setup.js'], // Incluye un archivo de setup para las pruebas
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },
    transformIgnorePatterns: [
      '/node_modules/(?!your-esm-package)/' // Si hay paquetes que necesitan ser transformados
    ],
    testEnvironment: 'node'
  };


  