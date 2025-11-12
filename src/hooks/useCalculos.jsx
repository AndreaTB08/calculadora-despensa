// Hook personalizado para cálculos
import { useState } from 'react';

export function useCalculos() {
  const [resultado, setResultado] = useState(0);
  const calcular = (a, b) => setResultado(a + b);
  return { resultado, calcular };
}