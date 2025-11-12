<<<<<<< HEAD
import React from 'react'
import { createRoot } from 'react-dom/client'
import AppPrincipal from './AppPrincipal.jsx'
import './estilos.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppPrincipal />
  </React.StrictMode>
)
=======
// Punto de entrada principal
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppPrincipal from './AppPrincipal';
import './estilos.css';

ReactDOM.createRoot(document.getElementById('root')).render(<AppPrincipal />);
>>>>>>> 386adf5bbb077c919e237888cf79df7738f54bc6
