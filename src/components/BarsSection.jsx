import { Reveal } from './Decor'
import { saboresBarras } from '../data/products'

export default function BarsSection() {
  return (
    <section
      id="barras"
      className="grain relative overflow-hidden bg-vino py-10 sm:py-14"
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

        {/* Texto */}
        <Reveal>
          <span className="font-script text-3xl text-marigold">energía que te acompaña</span>
          <h2 className="heading-display mt-2 text-4xl text-crema sm:text-5xl">
            Barras de cereal
            <br />
            <span className="text-marigold">100% naturales</span>
          </h2>
          <p className="mt-4 max-w-md text-crema/75">
            Tres sabores artesanales, cero culpa. Avena, semillas y frutos
            que te dan energía real para cualquier momento del día.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
