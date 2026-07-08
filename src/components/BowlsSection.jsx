import { motion } from 'framer-motion'
import { Reveal } from './Decor'
import { WhatsApp } from './Icons'
import { productos, waLink } from '../data/products'

const bowls = productos.filter((p) => p.categoria === 'bowls')

export default function BowlsSection() {
  return (
    <section
      id="bowls"
      className="relative overflow-hidden bg-gradient-to-b from-violeta-600 to-violeta py-20 sm:py-28"
    >
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-marigold/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-vino/40 blur-3xl" aria-hidden="true" />

      <div className="container-sb relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-crema/25 bg-white/10 px-4 py-1.5 font-display text-sm font-500 text-crema backdrop-blur">
            <img src="/img/logo.png" alt="" className="h-5 w-5 rounded-full" />
            SaBïa Bowls · experiencia en local
          </span>
          <h2 className="heading-display mt-5 text-4xl text-crema sm:text-5xl">
            Bowls y smoothies
            <br /> que enamoran a primera cucharada
          </h2>
          <p className="mt-4 text-crema/80">
            Fruta fresca, granola crujiente y toppings generosos. Una experiencia
            vibrante dentro de La Esquina de las Artes, en Cuenca.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {bowls.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[2rem] bg-crema shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={b.img}
                  alt={`${b.nombre} — ${b.desc}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vino-900/70 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-marigold px-3 py-1 font-display text-sm font-700 text-vino-900 shadow">
                  ${b.precio.toFixed(2)}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-2xl font-600 text-crema drop-shadow">
                    {b.nombre}
                  </h3>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <p className="text-sm leading-snug text-carbon/70">{b.desc}</p>
                <a
                  href={waLink(b.nombre)}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violeta text-crema transition-transform duration-300 hover:scale-110"
                  aria-label={`Pedir ${b.nombre}`}
                >
                  <WhatsApp className="h-5 w-5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Smoothie destacado */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-col items-center gap-6 rounded-[2rem] bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur sm:flex-row sm:p-8">
            <img
              src="/img/smoothie-verde.jpg"
              alt="Smoothie verde recién hecho con frutas y vegetales"
              loading="lazy"
              className="h-40 w-40 shrink-0 rounded-2xl object-cover shadow-xl"
            />
            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl font-600 text-crema">
                ¿Y un smoothie para llevar?
              </h3>
              <p className="mt-2 max-w-md text-crema/80">
                Licuamos fruta y vegetales frescos al momento. Pura vitalidad en
                un vaso, lista para tu día.
              </p>
            </div>
            <a
              href={waLink('Smoothie verde')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary sm:ml-auto"
            >
              <WhatsApp className="h-5 w-5" />
              Pedir smoothie
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
