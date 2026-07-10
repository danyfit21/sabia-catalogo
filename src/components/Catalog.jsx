import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { Eyebrow, Reveal } from './Decor'
import { useCart } from '../context/CartContext'
import { categorias, productos } from '../data/products'

export default function Catalog() {
  const [activa, setActiva] = useState('todos')
  const cart = useCart()

  // Al armar un pedido para un negocio solo se ofrecen los productos de la
  // línea SaBïa; lo que se prepara en el local queda fuera.
  const modoNegocio = cart.modo === 'productos'

  const visibles = useMemo(() => {
    const base = modoNegocio
      ? productos.filter((p) => p.canal === 'ambos')
      : productos
    return activa === 'todos' ? base : base.filter((p) => p.categoria === activa)
  }, [activa, modoNegocio])

  return (
    <section id="catalogo" className="relative bg-crema-soft py-20 sm:py-28">
      <div className="container-sb">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Para llevar</Eyebrow>
          <h2 className="heading-display mt-5 text-4xl text-vino sm:text-5xl">
            Sabores que nutren,
            <br className="hidden sm:block" /> antojos que se cumplen
          </h2>
          <p className="mt-4 text-carbon/65">
            Productos empacados para llevar a casa. Filtra por categoría y
            arma tu pedido — cada uno es artesanal, natural y hecho con amor
            en Cuenca.
          </p>
        </Reveal>

        {/* Aviso cálido del modo "pedido para tu negocio" */}
        {modoNegocio && (
          <Reveal delay={0.05}>
            <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 rounded-2xl bg-vino px-5 py-4 text-center sm:flex-row sm:text-left">
              <p className="flex-1 text-sm leading-relaxed text-crema/85">
                Estás armando un pedido para tu negocio: aquí ves solo la línea
                SaBïa y el precio lo afinamos juntos por WhatsApp 💛
              </p>
              <button
                onClick={() => cart.setModo('local')}
                className="shrink-0 rounded-full bg-crema/10 px-4 py-2 font-display text-sm font-600 text-crema transition-colors hover:bg-marigold hover:text-vino-900"
              >
                Ver todo con precios
              </button>
            </div>
          </Reveal>
        )}

        {/* Filtros */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {categorias.map((c) => {
              const on = activa === c.id
              return (
                <button
                  key={c.id}
                  onClick={() => setActiva(c.id)}
                  className={`chip border ${
                    on
                      ? 'border-vino bg-vino text-crema shadow-card'
                      : 'border-vino/15 bg-white text-vino hover:border-vino/40 hover:bg-vino/5'
                  }`}
                  aria-pressed={on}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {visibles.map((p) => (
                <ProductCard key={p.id} p={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Gancho de descubrimiento hacia el Kit de Muestra */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <a
              href="#pruebalo"
              className="group inline-flex flex-col items-center gap-1 rounded-2xl px-6 py-3 text-center transition-colors hover:bg-vino/5"
            >
              <span className="font-display text-lg font-600 text-vino">
                ¿Quieres probarlo todo? 👇
              </span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="text-marigold"
                aria-hidden="true"
              >
                ▾
              </motion.span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
