import { motion } from 'framer-motion'
import { Reveal, Eyebrow } from './Decor'
import { SeedMark } from './Icons'

const pasos = [
  { n: '01', t: 'Ingredientes frescos', d: 'Elegimos lo natural y local, sin atajos ni aditivos.' },
  { n: '02', t: 'Recetas artesanales', d: 'Hechas en pequeños lotes, con la sabiduría de cuidar cada detalle.' },
  { n: '03', t: 'Hecho con amor', d: 'Para que comer sano se sienta como un gusto, no un sacrificio.' },
]

export default function StorySection() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-crema-soft py-20 sm:py-28">
      <div className="grain absolute inset-0" aria-hidden="true" />
      {/* Semilla gigante decorativa de fondo */}
      <SeedMark className="absolute -right-10 -top-10 h-72 w-72 opacity-10" />

      <div className="container-sb relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Nuestra historia</Eyebrow>
          <h2 className="heading-display italic mt-5 text-4xl text-vino sm:text-5xl">
            La sabiduría de lo natural
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-carbon/70">
            <span className="font-brand-accent text-vino">SaBïa</span> nació en Cuenca con una idea simple y poderosa:{' '}
            <span className="font-600 text-vino">comer sano no tiene que ser aburrido</span>.
            Somos una marca creada para transmitir la importancia de cultivar el alma y el cuerpo
            con nuevas experiencias, nuevos conceptos, que nos genera una riqueza interior
            invaluable. Siempre podemos hacernos el tiempo para alimentarnos sabiamente.
          </p>
          <p className="mt-4 font-script text-4xl text-violeta">
            con ingredientes frescos y mucho amor
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pasos.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="relative rounded-3xl border border-vino/10 bg-white p-7 shadow-card"
            >
              <span className="font-display text-5xl font-700 text-marigold/40">{p.n}</span>
              <h3 className="mt-3 font-display text-xl font-600 text-vino">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-carbon/65">{p.d}</p>
              <span className="absolute right-6 top-7 h-3 w-3 rounded-full bg-marigold" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
