<<<<<<< HEAD
import React from "react"

export default function SeccionResultados({ subtotal, tasa, descuento, total }) {
  const etiqueta = tasa === 0 ? "Descuento 0% (No aplica)" : `Descuento ${Math.round(tasa * 100)}%`

  return (
    <div className="mt-8 bg-emerald-50 border border-emerald-300 rounded-lg p-6 shadow-inner">
      <h2 className="text-xl font-semibold text-emerald-800 mb-4 border-b border-emerald-300 pb-2 text-center">
        Resultados de la Compra
      </h2>

      <div className="space-y-4 text-gray-800">
        <div className="flex justify-between items-center">
          <label className="font-medium">Subtotal:</label>
          <span className="bg-white rounded-md px-3 py-1 w-36 text-right border border-gray-200 shadow-sm">
            L {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <label className="font-medium text-emerald-700">{etiqueta}:</label>
          <span className="bg-white rounded-md px-3 py-1 w-36 text-right border border-gray-200 shadow-sm text-emerald-700">
            - L {descuento.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <label className="font-semibold text-gray-900">Total a pagar:</label>
          <span className="bg-emerald-600 text-white rounded-md px-3 py-1 w-36 text-right font-semibold shadow">
            L {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
=======
// Sección donde se mostrarán los resultados
export default function SeccionResultados() {
  return <div>Resultados aquí</div>;
>>>>>>> 386adf5bbb077c919e237888cf79df7738f54bc6
}