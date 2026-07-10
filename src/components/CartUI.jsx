import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { Bag } from './Icons'
import {
  buildPedidoWA,
  extrasUpsell,
  pedidoConfig,
  productos,
} from '../data/products'

const ease = [0.22, 1, 0.36, 1]

// Iconos por tipo de pedido (coinciden con los del mensaje de WhatsApp).
const tipoIcono = {
  comer: '🍽️',
  llevar: '🥡',
  entrega: '🛵',
  productos: '📦',
}

// Miniatura con fallback de marca para ítems sin foto (cafés, personalizados).
function Thumb({ img, nombre, size = 'h-16 w-16' }) {
  if (img) {
    return <img src={img} alt={nombre} className={`${size} shrink-0 rounded-xl object-cover`} />
  }
  return (
    <div
      className={`grid ${size} shrink-0 place-items-center rounded-xl bg-gradient-to-br from-vino to-violeta`}
      aria-hidden="true"
    >
      <img src="/img/logo.png" alt="" className="h-1/2 w-1/2 rounded-full opacity-90" />
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

// Campo de texto reutilizable con estética de marca.
function Campo({ label, value, onChange, placeholder, requerido }) {
  return (
    <label className="block">
      <span className="font-display text-sm font-600 text-vino">
        {label} {requerido && <span className="text-marigold">*</span>}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-vino/15 bg-white px-4 py-3 text-vino placeholder-carbon/40 outline-none transition-colors focus:border-vino"
      />
    </label>
  )
}

// --- Drawer del pedido + checkout -------------------------------------------
export function CartDrawer() {
  const cart = useCart()
  const [step, setStep] = useState('cart') // 'cart' | 'tipo' | 'datos'
  const [tipo, setTipo] = useState(null)
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [puntoEntrega, setPuntoEntrega] = useState('')
  const [detalle, setDetalle] = useState('')
  const [ultimoExtra, setUltimoExtra] = useState(null)

  // Extras sugeridos (resueltos desde products.js): unos con foto, otros solo texto.
  const extras = useMemo(
    () =>
      extrasUpsell
        .map((e) => {
          const p = productos.find((prod) => prod.id === e.id)
          return p ? { ...p, conFoto: !!e.conFoto } : null
        })
        .filter(Boolean),
    [],
  )
  const extrasConFoto = extras.filter((e) => e.conFoto)
  const extrasTexto = extras.filter((e) => !e.conFoto)

  // Bloquea scroll de fondo + cierra con Escape.
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

  // Al cerrar, vuelve al inicio (el modo elegido se conserva).
  useEffect(() => {
    if (!cart.abierto) setStep('cart')
  }, [cart.abierto])

  // Abierto desde el Kit de Muestra con un tipo ya elegido.
  useEffect(() => {
    if (cart.abierto && cart.preTipo) {
      setTipo(cart.preTipo)
      setStep('datos')
      cart.clearPreTipo()
    }
  }, [cart.abierto, cart.preTipo, cart.clearPreTipo])

  const irACart = () => setStep('cart')
  const irATipo = () => setStep('tipo')
  const elegirTipo = (id) => {
    setTipo(id)
    cart.setModo(id === 'productos' ? 'productos' : 'local')
    setStep('datos')
  }

  const esLocal = tipo && tipo !== 'productos'

  // En el pedido para negocio solo viajan los productos de la línea SaBïa
  // (canal 'ambos'). Lo del menú del local se prepara al momento.
  const idsLinea = useMemo(
    () => new Set(productos.filter((p) => p.canal === 'ambos').map((p) => p.id)),
    [],
  )
  const itemsLinea = cart.items.filter((i) => idsLinea.has(i.id))
  const itemsSoloLocal = cart.items.filter((i) => !idsLinea.has(i.id))
  const itemsEnviables = tipo === 'productos' ? itemsLinea : cart.items

  const agregarExtra = (p) => {
    cart.add({ id: p.id, nombre: p.nombre, img: p.img, precio: p.precio })
    setUltimoExtra(p.id)
    setTimeout(() => setUltimoExtra((cur) => (cur === p.id ? null : cur)), 1200)
  }

  // Validación por tipo.
  const valido =
    tipo === 'productos'
      ? nombre.trim() && direccion.trim() && itemsLinea.length > 0
      : tipo === 'entrega'
        ? nombre.trim() && puntoEntrega
        : nombre.trim()

  const totalEnviable = itemsEnviables.reduce(
    (s, i) => s + (i.precio || 0) * i.cantidad,
    0,
  )

  const pedido = {
    tipo,
    nombre: nombre.trim(),
    items: itemsEnviables.map((i) => ({
      nombre: i.nombre,
      cantidad: i.cantidad,
      tamano: i.tamano,
      nota: i.nota,
    })),
    ...(tipo === 'productos'
      ? { direccion: direccion.trim() }
      : { total: totalEnviable }),
    ...(tipo === 'entrega'
      ? { puntoEntrega, detalleEntrega: detalle.trim() || undefined }
      : {}),
  }

  const items = cart.items
  const vacio = items.length === 0

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
            <div className="flex items-center justify-between gap-2 bg-vino px-5 py-4">
              <div className="flex items-center gap-2">
                {step !== 'cart' && (
                  <button
                    onClick={step === 'datos' ? irATipo : irACart}
                    className="grid h-10 w-10 place-items-center rounded-full bg-crema/10 text-xl text-crema transition-colors hover:bg-crema/25"
                    aria-label="Volver"
                  >
                    ←
                  </button>
                )}
                <h3 className="flex items-center gap-2 font-display text-2xl font-600 text-crema">
                  <Bag className="h-6 w-6" />
                  {step === 'cart' ? 'Tu pedido' : step === 'tipo' ? 'Tu pedido' : 'Casi listo'}
                  {step === 'cart' && cart.count > 0 && (
                    <span className="rounded-full bg-marigold px-2.5 py-0.5 text-sm font-700 text-vino-900">
                      {cart.count}
                    </span>
                  )}
                </h3>
              </div>
              <button
                onClick={cart.close}
                className="grid h-10 w-10 place-items-center rounded-full bg-crema/10 text-2xl leading-none text-crema transition-colors hover:bg-crema/25"
                aria-label="Cerrar mi pedido"
              >
                ×
              </button>
            </div>

            {/* ============================ VACÍO ============================ */}
            {vacio ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-vino/5 text-vino/40">
                  <Bag className="h-10 w-10" />
                </span>
                <p className="font-display text-xl font-600 text-vino">
                  Aún no agregas nada.
                  <br />
                  ¡Arma tu antojo!
                </p>
                <a href="#catalogo" onClick={cart.close} className="btn-primary mt-2">
                  Ver el catálogo
                </a>
              </div>
            ) : step === 'cart' ? (
              /* ========================= PASO 0 · CARRITO ==================== */
              <>
                <ul className="flex-1 space-y-3 overflow-y-auto p-4">
                  <AnimatePresence initial={false}>
                    {items.map((it) => (
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

                <div className="border-t border-vino/10 bg-white/60 p-5">
                  {!cart.sinPrecios && (
                    <div className="mb-4 flex items-center justify-between font-display">
                      <span className="text-lg font-600 text-carbon/70">Total</span>
                      <span className="text-2xl font-700 text-vino">${cart.total.toFixed(2)}</span>
                    </div>
                  )}
                  <button
                    onClick={irATipo}
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    Continuar con mi pedido
                  </button>
                  <button
                    onClick={cart.clear}
                    className="mx-auto mt-3 block text-xs text-carbon/50 underline transition-colors hover:text-vino"
                  >
                    Vaciar mi pedido
                  </button>
                </div>
              </>
            ) : step === 'tipo' ? (
              /* ===================== PASO 1 · TIPO DE PEDIDO ================= */
              <div className="flex flex-1 flex-col overflow-y-auto p-5">
                <p className="font-display text-xl font-600 text-vino">
                  ¿Cómo quieres tu pedido?
                </p>
                <p className="mt-1 text-sm text-carbon/60">
                  Elige una opción y te lo preparamos con cariño.
                </p>
                <div className="mt-5 grid gap-3">
                  {pedidoConfig.tiposPedido.map((t) => (
                    <motion.button
                      key={t.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => elegirTipo(t.id)}
                      className="flex items-center gap-4 rounded-2xl border-2 border-vino/10 bg-white p-4 text-left shadow-card transition-colors hover:border-marigold"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-vino/5 text-2xl">
                        {tipoIcono[t.id]}
                      </span>
                      <span className="font-display font-600 leading-snug text-vino">
                        {t.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              /* ============= PASO 2 · DATOS + EXTRAS + RESUMEN =============== */
              <>
                <div className="flex-1 space-y-6 overflow-y-auto p-5">
                  <div className="flex items-center gap-2 rounded-2xl bg-vino/5 px-4 py-3">
                    <span className="text-2xl">{tipoIcono[tipo]}</span>
                    <span className="font-display font-600 text-vino">
                      {pedidoConfig.tiposPedido.find((t) => t.id === tipo)?.label}
                    </span>
                  </div>

                  {/* Campos según tipo */}
                  <div className="space-y-4">
                    {tipo === 'productos' ? (
                      <>
                        <Campo
                          label="Tu nombre o el de tu negocio"
                          value={nombre}
                          onChange={setNombre}
                          placeholder="Ej. Andrea · Tienda La Esquina"
                          requerido
                        />
                        <Campo
                          label="Dirección"
                          value={direccion}
                          onChange={setDireccion}
                          placeholder="¿Dónde te dejamos el pedido?"
                          requerido
                        />
                        <p className="rounded-xl bg-marigold/15 px-4 py-3 text-sm text-vino">
                          El precio lo afinamos juntos por WhatsApp 💛
                        </p>
                      </>
                    ) : tipo === 'entrega' ? (
                      <>
                        <div>
                          <p className="font-display text-sm font-600 text-vino">
                            ¿Dónde estás? <span className="text-marigold">*</span>
                          </p>
                          <p className="text-xs text-carbon/55">
                            Llegamos a puntos cerca del local.
                          </p>
                          <div className="mt-2 grid gap-2">
                            {pedidoConfig.puntosEntrega.map((p) => (
                              <button
                                key={p}
                                onClick={() => setPuntoEntrega(p)}
                                className={`rounded-xl border-2 px-4 py-3 text-left font-display text-sm font-600 transition-colors ${
                                  puntoEntrega === p
                                    ? 'border-marigold bg-marigold/15 text-vino'
                                    : 'border-vino/10 bg-white text-vino hover:border-vino/30'
                                }`}
                              >
                                {puntoEntrega === p ? '✓ ' : ''}
                                {p}
                              </button>
                            ))}
                          </div>
                        </div>
                        <Campo
                          label="Detalle para llegar"
                          value={detalle}
                          onChange={setDetalle}
                          placeholder="Aula, piso, oficina…"
                        />
                        <Campo
                          label="Tu nombre"
                          value={nombre}
                          onChange={setNombre}
                          placeholder="¿Cómo te llamas?"
                          requerido
                        />
                        <p className="rounded-xl bg-vino/5 px-4 py-3 text-sm text-carbon/70">
                          La entrega queda sujeta a confirmación 💛
                        </p>
                      </>
                    ) : (
                      <Campo
                        label="Tu nombre"
                        value={nombre}
                        onChange={setNombre}
                        placeholder="¿Cómo te llamas?"
                        requerido
                      />
                    )}
                  </div>

                  {/* Paso 3 · Extras (solo pedidos del local) */}
                  {esLocal && (
                    <div>
                      <p className="font-display font-600 text-vino">¿Le sumamos algo rico?</p>

                      {/* Destacados: cuadrado con foto + nombre */}
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {extrasConFoto.map((p) => {
                          const ok = ultimoExtra === p.id
                          return (
                            <motion.button
                              key={p.id}
                              whileTap={{ scale: 0.94 }}
                              onClick={() => agregarExtra(p)}
                              className={`group relative aspect-square overflow-hidden rounded-2xl border-2 shadow-card transition-colors ${
                                ok ? 'border-marigold' : 'border-transparent hover:border-marigold'
                              }`}
                              aria-label={`Añadir ${p.nombre}`}
                            >
                              <img
                                src={p.img}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                              <span className="absolute inset-0 bg-gradient-to-t from-vino-900/85 via-vino-900/20 to-transparent" />
                              {ok ? (
                                <span className="absolute inset-0 grid place-items-center bg-marigold/90 font-display text-xs font-700 leading-tight text-vino-900">
                                  ✓ Añadido
                                </span>
                              ) : (
                                <span className="absolute inset-x-1 bottom-1.5 font-display text-[11px] font-700 leading-tight text-crema drop-shadow">
                                  {p.nombre}
                                </span>
                              )}
                            </motion.button>
                          )
                        })}
                      </div>

                      {/* Resto: chips de solo texto */}
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {extrasTexto.map((p) => {
                          const ok = ultimoExtra === p.id
                          return (
                            <motion.button
                              key={p.id}
                              whileTap={{ scale: 0.94 }}
                              onClick={() => agregarExtra(p)}
                              className={`inline-flex items-center gap-1.5 rounded-full border-2 px-4 py-2 font-display text-sm font-600 transition-colors ${
                                ok
                                  ? 'border-marigold bg-marigold text-vino-900'
                                  : 'border-vino/15 bg-white text-vino hover:border-marigold'
                              }`}
                            >
                              {ok ? '✓ Añadido' : `＋ ${p.nombre}`}
                            </motion.button>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Aviso cálido: lo del menú del local no va en pedidos de negocio */}
                  {tipo === 'productos' && itemsSoloLocal.length > 0 && (
                    <p className="rounded-xl bg-vino/5 px-4 py-3 text-sm leading-relaxed text-carbon/75">
                      {itemsSoloLocal.map((i) => i.nombre).join(', ')}{' '}
                      {itemsSoloLocal.length === 1 ? 'se prepara' : 'se preparan'} al momento
                      en el local, así que {itemsSoloLocal.length === 1 ? 'va' : 'van'} por un
                      pedido normal 💛 Aquí solo enviamos los productos SaBïa.
                    </p>
                  )}

                  {/* Resumen del pedido */}
                  <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-vino/5">
                    <p className="font-display font-600 text-vino">Tu pedido</p>
                    {itemsEnviables.length === 0 ? (
                      <p className="mt-2 text-sm text-carbon/60">
                        Agrega productos SaBïa (barras, granola, untables o bebidas) para
                        enviar este pedido.
                      </p>
                    ) : (
                      <>
                        <ul className="mt-2 space-y-1.5 text-sm text-carbon/75">
                          {itemsEnviables.map((it) => (
                            <li key={it.key} className="flex justify-between gap-2">
                              <span>
                                {it.cantidad} × {it.nombre}
                                {it.tamano && !cart.sinPrecios && ` (${it.tamano})`}
                              </span>
                              {!cart.sinPrecios && typeof it.precio === 'number' && (
                                <span className="shrink-0 font-600 text-vino">
                                  ${(it.precio * it.cantidad).toFixed(2)}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                        {!cart.sinPrecios && (
                          <div className="mt-3 flex justify-between border-t border-vino/10 pt-3 font-display">
                            <span className="font-600 text-carbon/70">Total</span>
                            <span className="text-lg font-700 text-vino">
                              ${totalEnviable.toFixed(2)}
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {esLocal && (
                    <p className="text-center text-xs text-carbon/50">
                      Atendemos {pedidoConfig.horarios.texto}
                    </p>
                  )}
                </div>

                {/* Botón final único */}
                <div className="border-t border-vino/10 bg-white/60 p-5">
                  {valido ? (
                    <a
                      href={buildPedidoWA(pedido)}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary w-full justify-center py-4 text-base"
                    >
                      Enviar mi pedido a SaBïa
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full cursor-not-allowed rounded-full bg-marigold/40 py-4 font-display text-base font-700 text-vino-900/50"
                    >
                      Enviar mi pedido a SaBïa
                    </button>
                  )}
                  {!valido && (
                    <p className="mt-2 text-center text-xs text-carbon/50">
                      {tipo === 'productos' && itemsLinea.length === 0
                        ? 'Agrega productos SaBïa para enviar este pedido'
                        : tipo === 'entrega' && !puntoEntrega
                          ? 'Elige un punto y escribe tu nombre para continuar'
                          : tipo === 'productos'
                            ? 'Completa tu nombre y dirección para continuar'
                            : 'Escribe tu nombre para continuar'}
                    </p>
                  )}
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
