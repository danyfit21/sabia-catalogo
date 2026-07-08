import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { Eyebrow, Reveal } from './Decor'
import { categorias, productos } from '../data/products'

export default function Catalog() {
  const [activa, setActiva] = useState('todos')

  const visibles = useMemo(
    () =>
      activa === 'todos'
        ? productos
        : productos.filter((p) => p.categoria === activa),
    [activa],
  )

  return (
    <section id="catalogo" className="relative bg-crema-soft py-20 sm:py-28">
      <div className="container-sb">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Nuestro catálogo</Eyebrow>
          <h2 className="heading-display mt-5 text-4xl text-vino sm:text-5xl">
            Sabores que nutren,
            <br className="hidden sm:block" /> antojos que se cumplen
          </h2>
          <p className="mt-4 text-carbon/65">
            Filtra por categoría y arma tu pedido. Cada producto es artesanal,
            natural y hecho con amor en Cuenca.
          </p>
        </Reveal>

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
      </div>
    </section>
  )
}
