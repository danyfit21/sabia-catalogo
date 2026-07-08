import { Reveal } from './Decor'
import { WhatsApp, Instagram, Facebook } from './Icons'
import { site, waLink } from '../data/products'

export default function FinalContact() {
  return (
    <section
      id="contacto"
      className="grain relative overflow-hidden bg-vino-700 py-20 sm:py-24"
    >
      <div className="seed-pattern absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-marigold/20 blur-3xl" aria-hidden="true" />

      <div className="container-sb relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="heading-display text-4xl text-crema sm:text-5xl">
            ¿List@ para comer rico
            <br /> <span className="text-marigold">y sentirte mejor?</span>
          </h2>
          <p className="mt-5 text-crema/80">
            Haz tu pedido por WhatsApp o escríbenos en redes. Te respondemos con
            la mejor energía.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <WhatsApp className="h-5 w-5" />
              Pedir por WhatsApp
            </a>
            <div className="flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-crema/30 px-5 py-3 font-display font-500 text-crema transition-colors hover:border-marigold hover:text-marigold"
              >
                <Instagram className="h-5 w-5" />
                {site.instagramHandle}
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full border-2 border-crema/30 text-crema transition-colors hover:border-marigold hover:text-marigold"
                aria-label="Facebook de SaBïa"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
