import React from "react"

export default function Nota({ texto, tipo }) {
  if (!texto) return null

  const colores = {
    error: "text-red-600 bg-red-100 border border-red-300",
    info: "text-emerald-700 bg-emerald-50 border border-emerald-300",
  }

  return (
    <p className={`text-center p-3 rounded-md mb-4 text-sm font-medium ${colores[tipo] || ""}`}>
      {texto}
    </p>
  )
}