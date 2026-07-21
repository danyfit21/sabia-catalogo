import { forwardRef, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AddToCart from './AddToCart'

// Card con tilt 3D suave + elevación + sombra de marca al hover.
// forwardRef: AnimatePresence (mode="popLayout") necesita un ref al nodo DOM.
const ProductCard = forwardRef(function ProductCard({ p }, forwardedRef) {
  const ref = useRef(null)
  const setRefs = (node) => {
    ref.current = node
    if (typeof forwardedRef === 'function') forwardedRef(node)
    else if (forwardedRef) forwardedRef.current = node
  }
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  // El tilt 3D es un efecto de mouse: en touch (Android incluido) no aporta
  // nada y solo cuesta cómputo en cada toque, así que se omite por completo ahí.
  const canHover = useRef(
    typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  ).current

  const onMove = (e) => {
    if (!canHover) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ rx: py * -6, ry: px * 8 })
  }
  const reset = () => setTilt({ rx: 0, ry: 0 })

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      ref={setRefs}
      onMouseMove={canHover ? onMove : undefined}
      onMouseLeave={canHover ? reset : undefined}
      style={
        canHover
          ? {
              transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transformStyle: 'preserve-3d',
            }
          : undefined
      }
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-vino/5 transition-shadow duration-300 hover:shadow-cardHover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.img}
          alt={`${p.nombre} — ${p.desc}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          style={p.imgPos ? { objectPosition: `center ${p.imgPos}` } : undefined}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vino-900/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {p.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-vino/90 px-3 py-1 font-display text-xs font-500 text-crema backdrop-blur">
            {p.badge}
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-marigold px-3 py-1 font-display text-sm font-700 text-vino-900 shadow">
          ${p.precio.toFixed(2)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-600 leading-tight text-vino">{p.nombre}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-carbon/65">{p.desc}</p>

        <div className="mt-5">
          <AddToCart
            item={{ id: p.id, nombre: p.nombre, img: p.img }}
            precio={p.precio}
          />
        </div>
      </div>
    </motion.article>
  )
})

export default ProductCard
