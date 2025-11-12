<<<<<<< HEAD
import { useState, useEffect } from "react"

export default function useCalculos() {
  const [valores, setValores] = useState(["", "", "", "", ""])
  const [subtotal, setSubtotal] = useState(0)
  const [tasa, setTasa] = useState(0)
  const [montoDescuento, setMontoDescuento] = useState(0)
  const [total, setTotal] = useState(0)
  const [errores, setErrores] = useState(["", "", "", "", ""])
  const [mensaje, setMensaje] = useState("")
  const [interactuado, setInteractuado] = useState(false)

  useEffect(() => {
    if (!interactuado) return

    const nuevosErrores = valores.map((v) => {
      if (v === "") return "" 
      if (!/^\d+(\.\d{1,2})?$/.test(v)) return "Solo números válidos"
      return ""
    })
    setErrores(nuevosErrores)

    const hayErrores = nuevosErrores.some((e) => e !== "")
    const vacios = valores.some((v) => v === "")

    if (hayErrores) {
      setMensaje("Revise los valores ingresados, solo se permiten números.")
      setSubtotal(0)
      setMontoDescuento(0)
      setTotal(0)
      setTasa(0)
      return
    } else if (vacios) {
  
      setMensaje("")
      setSubtotal(0)
      setMontoDescuento(0)
      setTotal(0)
      setTasa(0)
      return
    }
    setMensaje("")
    const numeros = valores.map((v) => parseFloat(v))
    const sub = numeros.reduce((a, b) => a + b, 0)
    setSubtotal(sub)

    let r = 0
    if (sub >= 1000 && sub <= 4999.99) r = 0.1
    else if (sub >= 5000 && sub <= 8999.99) r = 0.2
    else if (sub >= 9000 && sub <= 12999.99) r = 0.3
    else r = 0

    setTasa(r)
    const desc = sub * r
    setMontoDescuento(desc)
    setTotal(sub - desc)
  }, [valores, interactuado])

  const actualizarValor = (i, val) => {
    if (!interactuado) setInteractuado(true)
    const copia = [...valores]
    copia[i] = val
    setValores(copia)
  }

  return { valores, actualizarValor, subtotal, tasa, montoDescuento, total, errores, mensaje }
=======
// Hook personalizado para cálculos
import { useState } from 'react';

export function useCalculos() {
  const [resultado, setResultado] = useState(0);
  const calcular = (a, b) => setResultado(a + b);
  return { resultado, calcular };
>>>>>>> 386adf5bbb077c919e237888cf79df7738f54bc6
}