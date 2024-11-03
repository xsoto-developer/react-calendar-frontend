import dotenv from 'dotenv';
dotenv.config({
  path: '.env.test'
});

// Mock de localStorage global
const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: localStorageMock
});


// console.log(process.env.VITE_API_URL); 
// console.log("*********************************************************"); 
// console.log(process.env); 

// Realizar el mock completo de las variables de entorno
// jest.mock('./src/helpers/getEnvVariables', () => ({
//     getEnvVariables: () => ({ ...process.env })
// }));

// Ahora puedes definir import.meta.env si estás utilizando `import.meta` en tu código de producción
global.importMetaEnv = {
    VITE_API_URL: process.env.VITE_API_URL
  };

// Mock de import.meta para las pruebas
Object.defineProperty(global, 'import.meta', {
    value: { env: global.importMetaEnv }
  });