import React from "react"

export default function CampoProducto({ indice, valor, onCambio, error }) {
  return (
    <div className="flex flex-col">
      <label className="text-emerald-900 font-semibold mb-1">
        Producto {indice + 1}
      </label>
      <input
        type="text"
        value={valor}
        onChange={(e) => onCambio(indice, e.target.value)}
        placeholder="Ingrese precio (ej. 1200.50)"
        className={`border rounded-md px-3 py-2 text-gray-800 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${
          error ? "border-red-400 bg-red-50" : "border-gray-300"
        }`}
      />
      {error && (
        <span className="text-sm text-red-600 mt-1 font-medium">
          {error}
        </span>
      )}
    </div>
  )
}