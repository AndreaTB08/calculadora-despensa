import React from 'react'
import { createRoot } from 'react-dom/client'
import AppPrincipal from './AppPrincipal.jsx'
import './estilos.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppPrincipal />
  </React.StrictMode>
)