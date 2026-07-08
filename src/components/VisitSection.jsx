import { Reveal, Eyebrow } from './Decor'
import { Pin, ArrowRight } from './Icons'
import { site } from '../data/products'

export default function VisitSection() {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'La Esquina de las Artes, Av. 12 de Abril y Agustín Cueva, Cuenca, Ecuador',
  )}`

  return (
    <section id="visitanos" className="relative bg-crema py-20 sm:py-28">
      <div className="container-sb">
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          {/* Info */}
          <Reveal>
            <Eyebrow>Visítanos</Eyebrow>
            <h2 className="heading-display mt-5 text-4xl text-vino sm:text-5xl">
              Te esperamos en
              <br /> La Esquina de las Artes
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-carbon/70">
              Un rincón cultural y artístico de Cuenca donde el arte y lo natural
              se encuentran. Pasa por un bowl, llévate tus barras y vive la buena
              energía del lugar.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-vino text-marigold">
                  <Pin className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display font-600 text-vino">{site.direccion}</p>
                  <p className="text-sm text-carbon/65">
                    {site.lugar} · {site.ciudad}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violeta text-crema">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 19V8l8-4 8 4v11M4 19h16M9 19v-5h6v5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-display font-600 text-vino">Ambiente cultural</p>
                  <p className="text-sm text-carbon/65">{site.referencia}</p>
                </div>
              </li>
            </ul>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
              className="btn-vino mt-8"
            >
              Cómo llegar
              <ArrowRight className="h-5 w-5" />
            </a>
          </Reveal>

          {/* Mapa */}
          <Reveal delay={0.1}>
            <div className="h-full min-h-[340px] overflow-hidden rounded-[2rem] shadow-card ring-1 ring-vino/10">
              <iframe
                title="Ubicación de SaBïa en Cuenca"
                src={site.mapaEmbed}
                className="h-full min-h-[340px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
