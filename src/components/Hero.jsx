import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Blob } from './Decor'
import { Bag, ArrowRight, Leaf } from './Icons'
import { site } from '../data/products'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax sutil
  const yPattern = useTransform(scrollYProgress, [0, 1], [0, 120])
  const yBlobA = useTransform(scrollYProgress, [0, 1], [0, -90])
  const yBlobB = useTransform(scrollYProgress, [0, 1], [0, 140])
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  }

  return (
    <section
      id="inicio"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-vino-700 pt-24"
    >
      {/* Patrón de semillas tono sobre tono */}
      <motion.div
        style={{ y: yPattern }}
        className="seed-pattern absolute inset-0 opacity-70"
        aria-hidden="true"
      />
      {/* Degradado de profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-vino-900/40 via-transparent to-vino-900/70" />

      {/* Blobs flotantes */}
      <motion.div style={{ y: yBlobA }} className="absolute inset-0" aria-hidden="true">
        <Blob className="clip-blob -left-24 top-24 h-80 w-80 opacity-40" color="#F4A11E" />
      </motion.div>
      <motion.div style={{ y: yBlobB }} className="absolute inset-0" aria-hidden="true">
        <Blob
          className="clip-blob -right-28 bottom-10 h-96 w-96 opacity-40"
          color="#803E8E"
          style={{ animationDelay: '1.5s' }}
        />
      </motion.div>

      <div className="container-sb relative z-10 grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* Columna texto */}
        <motion.div variants={container} initial="hidden" animate="show" style={{ opacity }}>
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-crema/25 bg-white/5 px-4 py-1.5 font-display text-sm font-500 text-marigold backdrop-blur">
              <Leaf className="h-4 w-4" />
              Alimentos naturales · Cuenca, Ecuador
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="heading-display mt-6 text-5xl text-crema sm:text-6xl lg:text-7xl"
          >
            Comer sano{' '}
            <span className="relative whitespace-nowrap text-marigold">
              no es aburrido
              <svg
                className="absolute -bottom-3 left-0 h-4 w-full text-marigold/70"
                viewBox="0 0 300 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 11c40-7 110-9 150-7s90 7 144 2"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 font-script text-4xl leading-none text-crema/90 sm:text-5xl"
          >
            “{site.lemaPrincipal}”
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-md text-lg leading-relaxed text-crema/75"
          >
            Barras, granola, bowls, tostadas y bebidas hechas con amor e
            ingredientes frescos. La sabiduría de lo natural, en cada bocado.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#catalogo" className="btn-primary">
              <Bag className="h-5 w-5" />
              Quiero pedir
            </a>
            <a href="#menu-local" className="btn-ghost">
              Ver el menú del local
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Columna foto de producto */}
        <motion.div
          style={{ y: yPhoto }}
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Marco punteado que abraza la foto */}
          <div className="absolute -inset-3 -z-10 rounded-[2.9rem] border-2 border-dashed border-marigold/30" aria-hidden="true" />
          {/* Resplandor cálido detrás de la foto */}
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-marigold/20 blur-3xl" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, scale: 1.08, filter: 'blur(16px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="relative overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-white/10"
          >
            <img
              src="/img/hero-productos.jpg"
              alt="Línea completa de productos SaBïa: granola, barras de cereal, mantequilla de maní, té de kombucha y miel sobre mesa de madera"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-vino-900/45 via-transparent to-transparent" />
            {/* Destello premium (una sola pasada al cargar) */}
            <motion.div
              initial={{ x: '-140%' }}
              whileInView={{ x: '160%' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 1.0, duration: 1.15, ease: 'easeInOut' }}
              className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          {/* Tarjeta flotante de precio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-crema px-4 py-3 shadow-card sm:-left-8"
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-marigold/20 text-vino">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <p className="font-display font-600 text-vino">100% natural</p>
              <p className="text-xs text-carbon/60">Energía que te acompaña</p>
            </div>
          </motion.div>

          {/* Badge flotante superior */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="absolute -right-3 top-6 rotate-6 rounded-2xl bg-violeta px-4 py-2 font-display font-600 text-crema shadow-lg sm:-right-6"
          >
            Hecho con amor ♥
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-crema/40 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-marigold"
          />
        </div>
      </motion.div>
    </section>
  )
}
