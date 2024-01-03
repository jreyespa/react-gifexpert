// Crear la APP
  //	npm create vite@latest
    // Equivalente 1: yarn create vite
  //  npm install

// Arrancar la APP:
  // npm run dev -- --host

import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom/client.js' --> NO VA
import { GifExpertApp } from './GifExpertApp.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>
);

