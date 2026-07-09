import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

// ============================================================================
//  Botón "Agregar" unificado — la ÚNICA forma de pedir un producto.
//
//  item     = { id, nombre, img }
//  precio   = número (productos sin tamaño)
//  tamanos  = [{ label, precio }] → muestra un botón por tamaño (1 toque)
//  nota     = string opcional (p. ej. ingredientes del smoothie personalizado)
//  variant  = 'block' (ancho completo) | 'pill' (compacto) | 'icon' (redondo +)
// ============================================================================

export default function AddToCart({ item, precio, tamanos, nota, variant = 'block' }) {
  const { add } = useCart()
  const [feedback, setFeedback] = useState(null) // null | 'default' | label tamaño
  const timer = useRef(null)

  const confirmar = (tamano, precioFinal) => {
    add({
      id: item.id,
      nombre: item.nombre,
      img: item.img ?? null,
      tamano,
      precio: precioFinal,
      nota,
    })
    clearTimeout(timer.current)
    setFeedback(tamano ?? 'default')
    timer.current = setTimeout(() => setFeedback(null), 1100)
  }

  // --- Con tamaños: un botón por tamaño, precio visible, 1 toque -----------
  if (tamanos?.length) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {tamanos.map((t) => {
          const ok = feedback === t.label
          return (
            <motion.button
              key={t.label}
              whileTap={{ scale: 0.94 }}
              onClick={() => confirmar(t.label, t.precio)}
              className={`flex flex-col items-center rounded-full border-2 py-2 font-display text-sm font-600 leading-tight transition-colors duration-200 ${
                ok
                  ? 'border-marigold bg-marigold text-vino-900'
                  : 'border-vino/15 bg-vino/5 text-vino hover:border-vino hover:bg-vino hover:text-crema'
              }`}
              aria-label={`Agregar ${item.nombre} ${t.label}`}
            >
              {ok ? (
                <span className="py-1.5">✓ ¡Agregado!</span>
              ) : (
                <>
                  <span>{t.label}</span>
                  <span className="text-xs opacity-75">${t.precio.toFixed(2)}</span>
                </>
              )}
            </motion.button>
          )
        })}
      </div>
    )
  }

  const ok = feedback !== null

  // --- Compacto: píldora "+ Agregar" (listas con poco espacio) --------------
  if (variant === 'pill') {
    return (
      <motion.button
        whileTap={{ scale: 0.94 }}
        onClick={() => confirmar(undefined, precio)}
        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-display text-sm font-600 transition-colors duration-200 ${
          ok ? 'bg-marigold text-vino-900' : 'bg-vino text-crema hover:bg-marigold hover:text-vino-900'
        }`}
        aria-label={`Agregar ${item.nombre}`}
      >
        {ok ? '✓ ¡Agregado!' : '+ Agregar'}
      </motion.button>
    )
  }

  // --- Icono: botón redondo "+" (filas de cafés) ----------------------------
  if (variant === 'icon') {
    return (
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={() => confirmar(undefined, precio)}
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-lg font-700 transition-colors duration-200 ${
          ok ? 'bg-crema text-vino' : 'bg-marigold text-vino-900 hover:bg-crema hover:text-vino'
        }`}
        aria-label={`Agregar ${item.nombre}`}
      >
        {ok ? '✓' : '+'}
      </motion.button>
    )
  }

  // --- Bloque: botón ancho "Agregar" (tarjetas) ------------------------------
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={() => confirmar(undefined, precio)}
      className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-3 font-display font-600 transition-colors duration-300 ${
        ok
          ? 'bg-marigold text-vino-900'
          : 'bg-vino/5 text-vino hover:bg-vino hover:text-crema'
      }`}
      aria-label={`Agregar ${item.nombre} a mi pedido`}
    >
      {ok ? '✓ ¡Agregado!' : '+ Agregar'}
    </motion.button>
  )
}
