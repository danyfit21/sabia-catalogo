import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { Bag } from './Icons'

const ease = [0.22, 1, 0.36, 1]

// Miniatura con fallback de marca para ítems sin foto (cafés, personalizados).
function Thumb({ img, nombre }) {
  if (img) {
    return (
      <img
        src={img}
        alt={nombre}
        className="h-16 w-16 shrink-0 rounded-xl object-cover"
      />
    )
  }
  return (
    <div
      className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-vino to-violeta"
      aria-hidden="true"
    >
      <img src="/img/logo.png" alt="" className="h-8 w-8 rounded-full opacity-90" />
    </div>
  )
}

// --- Burbuja flotante "Tu pedido" (reemplaza al botón de WhatsApp) ----------
export function CartBubble() {
  const { count, open } = useCart()

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease }}
      onClick={open}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-vino px-5 py-3.5 font-display font-600 text-crema shadow-[0_10px_30px_-6px_rgba(110,34,81,0.7)] ring-2 ring-marigold/60"
      aria-label={`Abrir mi pedido (${count} ${count === 1 ? 'ítem' : 'ítems'})`}
    >
      <Bag className="h-5 w-5" />
      Tu pedido
      <AnimatePresence mode="popLayout">
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 18 }}
            className="grid h-6 min-w-6 place-items-center rounded-full bg-marigold px-1.5 font-display text-sm font-700 text-vino-900"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

// --- Drawer del pedido -------------------------------------------------------
export function CartDrawer() {
  const cart = useCart()

  // Bloquea el scroll del fondo y cierra con Escape.
  useEffect(() => {
    if (!cart.abierto) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && cart.close()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [cart.abierto, cart.close])

  return (
    <AnimatePresence>
      {cart.abierto && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cart.close}
            className="fixed inset-0 z-50 bg-vino-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease }}
            className="fixed inset-y-0 right-0 z-50 flex w-full flex-col bg-crema-soft shadow-2xl sm:max-w-md"
            role="dialog"
            aria-label="Tu pedido"
          >
            {/* Encabezado */}
            <div className="flex items-center justify-between bg-vino px-5 py-4">
              <h3 className="flex items-center gap-2 font-display text-2xl font-600 text-crema">
                <Bag className="h-6 w-6" />
                Tu pedido
                {cart.count > 0 && (
                  <span className="rounded-full bg-marigold px-2.5 py-0.5 text-sm font-700 text-vino-900">
                    {cart.count}
                  </span>
                )}
              </h3>
              <button
                onClick={cart.close}
                className="grid h-11 w-11 place-items-center rounded-full bg-crema/10 text-2xl leading-none text-crema transition-colors hover:bg-crema/25"
                aria-label="Cerrar mi pedido"
              >
                ×
              </button>
            </div>

            {/* Contenido */}
            {cart.items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-vino/5 text-vino/40">
                  <Bag className="h-10 w-10" />
                </span>
                <p className="font-display text-xl font-600 text-vino">
                  Aún no agregas nada.
                  <br />
                  ¡Arma tu antojo!
                </p>
                <a
                  href="#catalogo"
                  onClick={cart.close}
                  className="btn-primary mt-2"
                >
                  Ver el catálogo
                </a>
              </div>
            ) : (
              <>
                <ul className="flex-1 space-y-3 overflow-y-auto p-4">
                  <AnimatePresence initial={false}>
                    {cart.items.map((it) => (
                      <motion.li
                        key={it.key}
                        layout
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ duration: 0.3, ease }}
                        className="flex gap-3 rounded-2xl bg-white p-3 shadow-card ring-1 ring-vino/5"
                      >
                        <Thumb img={it.img} nombre={it.nombre} />
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-2">
                            <p className="font-display font-600 leading-tight text-vino">
                              {it.nombre}
                              {it.tamano && (
                                <span className="ml-1.5 rounded-full bg-vino/10 px-2 py-0.5 text-xs font-500">
                                  {it.tamano}
                                </span>
                              )}
                            </p>
                            <button
                              onClick={() => cart.remove(it.key)}
                              className="text-lg leading-none text-carbon/40 transition-colors hover:text-vino"
                              aria-label={`Quitar ${it.nombre}`}
                            >
                              ×
                            </button>
                          </div>
                          {it.nota && (
                            <p className="mt-0.5 truncate text-xs text-carbon/55">{it.nota}</p>
                          )}
                          <div className="mt-auto flex items-center justify-between pt-2">
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => cart.setQty(it.key, it.cantidad - 1)}
                                className="grid h-9 w-9 place-items-center rounded-full bg-vino/10 font-display text-lg font-600 text-vino transition-colors hover:bg-vino hover:text-crema"
                                aria-label={`Quitar uno de ${it.nombre}`}
                              >
                                −
                              </button>
                              <span className="w-8 text-center font-display font-700 text-vino">
                                {it.cantidad}
                              </span>
                              <button
                                onClick={() => cart.setQty(it.key, it.cantidad + 1)}
                                className="grid h-9 w-9 place-items-center rounded-full bg-vino/10 font-display text-lg font-600 text-vino transition-colors hover:bg-vino hover:text-crema"
                                aria-label={`Agregar uno más de ${it.nombre}`}
                              >
                                +
                              </button>
                            </div>
                            {!cart.sinPrecios && typeof it.precio === 'number' && (
                              <span className="font-display font-700 text-vino">
                                ${(it.precio * it.cantidad).toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>

                {/* Pie: total + acción (el checkout llega en la siguiente fase) */}
                <div className="border-t border-vino/10 bg-white/60 p-5">
                  {!cart.sinPrecios && (
                    <div className="mb-4 flex items-center justify-between font-display">
                      <span className="text-lg font-600 text-carbon/70">Total</span>
                      <span className="text-2xl font-700 text-vino">
                        ${cart.total.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <button
                    disabled
                    className="w-full cursor-not-allowed rounded-full bg-marigold/40 py-4 font-display text-base font-700 text-vino-900/50"
                  >
                    Enviar mi pedido a SaBïa
                  </button>
                  <p className="mt-2 text-center text-xs text-carbon/50">
                    Muy pronto podrás enviarlo desde aquí 💛
                  </p>
                  <button
                    onClick={cart.clear}
                    className="mx-auto mt-3 block text-xs text-carbon/50 underline transition-colors hover:text-vino"
                  >
                    Vaciar mi pedido
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
