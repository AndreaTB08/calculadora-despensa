import React from "react"
import CampoProducto from "./components/CampoProducto.jsx"
import SeccionResultados from "./components/SeccionResultados.jsx"
import useCalculos from "./hooks/useCalculos.jsx"

export default function AppPrincipal() {
  const { valores, actualizarValor, subtotal, tasa, montoDescuento, total, errores, mensaje } = useCalculos()

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-100 via-emerald-200 to-emerald-300 p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-8 border border-emerald-300">
        <h1 className="text-3xl font-extrabold text-center text-emerald-800 mb-6">
          Calculadora de Descuentos
        </h1>

        {mensaje && (
          <p className="text-center text-red-600 font-medium mb-4">{mensaje}</p>
        )}

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {valores.map((v, i) => (
            <CampoProducto
              key={i}
              indice={i}
              valor={v}
              onCambio={actualizarValor}
              error={errores[i]}
            />
          ))}
        </section>

        <div className="mt-8">
          <SeccionResultados
            subtotal={subtotal}
            tasa={tasa}
            descuento={montoDescuento}
            total={total}
          />
        </div>
      </div>
    </main>
  )
}