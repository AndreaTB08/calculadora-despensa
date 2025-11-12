<<<<<<< HEAD
import { useState, useEffect } from 'react'

export default function useCalculos() {
  const [valores, setValores] = useState(['', '', '', '', ''])
  const [subtotal, setSubtotal] = useState(0)
  const [tasa, setTasa] = useState(0)
  const [montoDescuento, setMontoDescuento] = useState(0)
  const [total, setTotal] = useState(0)
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    const numeros = valores.map(v => {
      const n = parseFloat(String(v).replace(',', '.'))
      return Number.isFinite(n) ? n : 0
    })

    const negativos = numeros.some(n => n < 0)
    if (negativos) {
      setMensaje('Los precios no pueden ser negativos')
      return
    }

    setMensaje('')
    const sub = numeros.reduce((a, b) => a + b, 0)
    setSubtotal(sub)

    let r = 0
    if (sub >= 1000 && sub <= 4999.99) r = 0.1
    else if (sub >= 5000 && sub <= 8999.99) r = 0.2
    else if (sub >= 9000 && sub <= 12999.99) r = 0.3
    else if (sub >= 13000) r = 0
    else r = 0

    setTasa(r)
    const desc = sub * r
    setMontoDescuento(desc)
    setTotal(sub - desc)
  }, [valores])

  function actualizarValor(indice, valor) {
    if (!/^\d*\,?\d*\.?\d*$/.test(valor) && valor !== '') return
    const copia = [...valores]
    copia[indice] = valor
    setValores(copia)
  }

  return { valores, actualizarValor, subtotal, tasa, montoDescuento, total, mensaje }
=======
// Componente de nota o comentario
export default function Nota() {
  return <p>Nota informativa</p>;
>>>>>>> 386adf5bbb077c919e237888cf79df7738f54bc6
}