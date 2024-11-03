# React Calendar FrontEnd

## Descripción
Este proyecto es una aplicación de calendario con autenticación, que permite a los usuarios gestionar eventos personales en MongoDB. La aplicación ofrece registro de eventos con selección de fechas de inicio y fin, título y descripción, así como edición y eliminación de eventos. Se han implementado validaciones de fecha y componentes de interfaz para una experiencia de usuario intuitiva.

¡Explora la aplicación en acción!
https://react-mern-backend-test.up.railway.app/

Credenciales de Acceso (para pruebas)

- **Usuario**: demo_user
- **Contraseña**: demo_pass

Usa estas credenciales para acceder a la versión de prueba de la aplicación.

## Funcionalidades
**1. Autenticación:** Registro y acceso seguro para gestionar eventos personales.
**2. Gestión de Eventos:**
- Creación de eventos con validación de fechas.
- Edición y eliminación de eventos.
- Visualización de eventos en un calendario interactivo.  
**3. Modales y Notificaciones:**  Para confirmar acciones y mostrar mensajes al usuario.
**4. Interfaz y Estilo:** Interfaz atractiva y moderna con Bootstrap v5.2.

## Tecnologías y Librerías
### Lógica y Estado GlobalDesarrollo en React
- **Redux & Redux Toolkit** (`@reduxjs/toolkit`, `redux-thunk`): Configuración avanzada de estado global para manejar la autenticación y los eventos de manera eficiente.
- **React Redux** (`react-redux`): Conexión de la store de Redux con los componentes de React.
- **React Big Calendar** (`react-big-calendar`): Biblioteca para visualización de eventos en un calendario interactivo.

### Componentes UI y Estilos
- **React Modal (`-modal-style`) y `Bootstrap v5.2`:** Modales personalizables y diseño responsivo.
- **SweetAlert2** Para alertas y confirmaciones elegantes en el navegador.

### Rutas y Navegación
- **React Router DOM** (`react-router-dom`): Configuración de rutas privadas y públicas para proteger las rutas de autenticación y eventos.

### Peticiones HTTP
- **Axios**(`axios`): Para la comunicación con la API y la sincronización de datos entre el frontend y MongoDB.

## Instalación y Configuración

### 1. Clonar el repositorio:
```
git clone https://github.com/xsoto-developer/react-calendar-frontend.git
cd react-gallery-spa
```
### 2. Instala las dependencias:
```
yarn install
```
### 3. Iniciar el servidor de desarrollo:   
```
yarn dev
```
### Ejecuta la aplicación en el modo de desarrollo
Abre [http://localhost:3000] para verla en tu navegador.

La página se volverá a cargar cuando realices cambios.\
```
yarn build
```
## Pruebas
- **Pruebas en Reducers:** Validación de lógica de actualización de estado en Redux.
- **Pruebas de Acciones Asíncronas:** Simulación y validación de llamadas a la API y operaciones asíncronas.

## Configuración de Ambientes (Development, Test, Production)
Este proyecto permite configurar diferentes ambientes (development, test, production) para facilitar el despliegue y pruebas en entornos controlados.
### Development
### 1. Renombrar el archivo de configuración:
- Cambiar el nombre del archivo `env.template` a `.env.`

### 2. Configurar las Variables de Entorno:
- En el archivo `.env`, ajustar las variables según el entorno de desarrollo.
```
VITE_API_URL=http://localhost:4000/api
```
### 3. Iniciar en modo desarrollo:  
```
yarn dev
```

## Test
### 1. Configurar las Variables de Entorno:
- Crear un archivo `.env.test`  con las variables específicas para pruebas.
```
VITE_API_URL=http://localhost:4001/api
```
### 2. Iniciar en modo de pruebas:
```
yarn test
```
## Production
### 1. Configurar las Variables de Entorno:
- Crear un archivo `.env.production` con las variables específicas para pruebas.[https://railway.app/] 
```
VITE_API_URL=https://api.production.com/api
```
### 2. Compilar para producción:
```
yarn build
```

## Repositorio del Backend
Esta aplicación frontend funciona en conjunto con el repositorio del backend para gestionar la autenticación y los datos de los eventos en MongoDB. Para el funcionamiento completo, es necesario ejecutar ambos proyectos (frontend y backend) en el entorno que elijan: desarrollo (dev), pruebas (test) o producción (prod).

**Nota: Las instrucciones detalladas de instalación y despliegue del backend están disponibles en el sigiente repositorio**
```
git clone https://github.com/xsoto-developer/node-calendar-backend.git
```