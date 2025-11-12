<<<<<<< HEAD
import React from "react"

export default function CampoProducto({ indice, valor, onCambio, error }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-emerald-800 mb-1">
        Producto {indice + 1}
      </label>
      <input
  type="text"
  value={valor}
  onChange={(e) => onCambio(indice, e.target.value)}
  className={`campo ${error ? "campo-error" : ""}`}
  placeholder="Ingrese precio (ej. 1200.50)"
/>
      {error && <span className="text-red-600 text-xs mt-1">{error}</span>}
    </div>
  )
=======
// Campo de entrada para productos
export default function CampoProducto() {
  return <input type='text' placeholder='Producto' />;
>>>>>>> 386adf5bbb077c919e237888cf79df7738f54bc6
}