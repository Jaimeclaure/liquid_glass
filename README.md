# Liquid Glass Form

Prototipo de interfaz móvil hecho con React Native y Expo. Muestra un formulario de nombre y correo dentro de una tarjeta translúcida, con desenfoque, degradado y una animación breve al pulsar el botón.

El efecto es una aproximación visual al estilo Liquid Glass; no reproduce exactamente el efecto nativo de iOS.

## Requisitos

- Node.js y npm.
- Expo Go o un emulador/simulador compatible. `react-native-linear-gradient` incluye código nativo; si el entorno no lo incluye, se necesita una development build de Expo.

## Ejecutar

Desde la carpeta raíz del repositorio:

```bash
npm install
npx expo start
```

Después, abre el proyecto con Expo Go o ejecútalo en un emulador configurado:

```bash
npx expo start --android
npx expo start --ios
```

La ejecución en iOS requiere macOS y un simulador iOS configurado. Aunque el proyecto declara un comando `web`, actualmente no incluye las dependencias de Expo para web (`react-dom` y `react-native-web`), por lo que la vista web no está preparada.

## Funcionalidad

- Campos de texto para nombre y correo.
- Desenfoque mediante `expo-blur`.
- Superposición de degradado mediante `react-native-linear-gradient`.
- Animación de escala en el botón **Submit**.

El botón solo imprime los valores introducidos en la consola. No hay validación, almacenamiento ni envío a un servidor.

## Estructura

```text
App.js                 Pantalla principal y fondo de la tarjeta
components/GlassForm.js Formulario y animación del botón
styles/glassStyles.js  Estilos de la interfaz
project/               Proyecto Expo de ejemplo independiente
```

`project/` es un scaffold Expo separado que muestra la pantalla inicial predeterminada. No es la aplicación del formulario; la app descrita en este README es la que se ejecuta desde la raíz.

## Personalización

- Reemplaza la URL de ejemplo `https://example.com/background-image.jpg` en `App.js` por una imagen de fondo válida.
- Ajusta la intensidad del desenfoque en `components/GlassForm.js`.
- Modifica colores, bordes y sombras en `styles/glassStyles.js`.
- Implementa validación y una acción de envío si necesitas convertir el prototipo en un formulario funcional.

## Privacidad

El proyecto no contiene credenciales de servicio ni integra un backend. Los datos escritos en el formulario se registran en la consola al pulsar **Submit**; no introduzcas datos personales reales en una demo compartida.
