import React from "react"

export default function SeccionResultados({ subtotal, tasa, descuento, total }) {
  return (
    <section className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-6 shadow-inner">
      <h2 className="text-xl font-bold text-center text-emerald-900 mb-4">
        Resultados de la Compra
      </h2>

      <div className="space-y-2 text-right">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Subtotal:</span>
          <span className="font-semibold text-gray-800">
            L {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">
            Descuento {tasa > 0 ? `${tasa * 100}%` : "0% (No aplica)"}:
          </span>
          <span className="font-semibold text-red-600">
            - L {descuento.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between border-t border-emerald-300 pt-2">
          <span className="font-bold text-gray-900">Total a pagar:</span>
          <span className="font-bold text-emerald-700">
            L {total.toFixed(2)}
          </span>
        </div>
      </div>
    </section>
  )
}