import { motion } from 'framer-motion'
import { Reveal } from './Decor'
import { benefitIcons } from './Icons'
import { beneficiosBarras, saboresBarras, waLink } from '../data/products'

export default function BarsSection() {
  return (
    <section
      id="barras"
      className="grain relative overflow-hidden bg-vino py-20 sm:py-28"
    >
      <div className="seed-pattern absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-marigold/20 blur-3xl" aria-hidden="true" />

      <div className="container-sb relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* Imagen */}
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2.5rem] bg-marigold/20" />
            <img
              src="/img/barras-detalle.jpg"
              alt="Macro de barra de cereal SaBïa mostrando avena, semillas y frutos secos"
              loading="lazy"
              className="w-full rounded-[2.25rem] object-cover shadow-2xl ring-1 ring-white/10"
            />
            <div className="absolute -bottom-5 left-5 right-5 flex flex-wrap gap-2">
              {saboresBarras.map((s) => (
                <span
                  key={s.nombre}
                  className="rounded-full bg-crema/95 px-3 py-1.5 font-display text-xs font-600 text-vino shadow"
                >
                  {s.nombre}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Texto + beneficios */}
        <div>
          <Reveal>
            <span className="font-script text-3xl text-marigold">energía que te acompaña</span>
            <h2 className="heading-display mt-2 text-4xl text-crema sm:text-5xl">
              Barras de cereal
              <br />
              <span className="text-marigold">100% naturales</span>
            </h2>
            <p className="mt-4 max-w-md text-crema/75">
              Cuatro sabores artesanales, cero culpa. Avena, semillas y frutos
              que te dan energía real para cualquier momento del día.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {beneficiosBarras.map((b, i) => {
              const Icon = benefitIcons[b.icon]
              return (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-white/10"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-marigold text-vino-900">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-600 text-crema">{b.titulo}</h3>
                    <p className="mt-1 text-sm leading-snug text-crema/65">{b.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <Reveal delay={0.2}>
            <a
              href={waLink('Barras de cereal SaBïa')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-9"
            >
              Quiero mis barras
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
