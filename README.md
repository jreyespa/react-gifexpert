# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Mis comentarios #

1.- Crear la APP
    npm create vite@latest
    // Equivalente 1: yarn create vite
    npm install

2.- Arrancar la APP:
    npm run dev -- --host

3.- Ver en FS local el FS de la MV. Ejecutar el siguiente comando en la consola local:
    sshfs jarepau@192.168.1.37:/home/jarepau/ReactCursoMV /home/jarepau/Documentos/React

4.- Generar el build de producción:
    yarn build

5.- Acceder a y arrastrar la carpeta "build" y su contenido
    https://www.netlify.com/

6.- Desde consola de la MV, en la carpeta de la aplicación, prepararnos para utilizar git:
    git init
    git add .
    git commit -m "Primer commit"

