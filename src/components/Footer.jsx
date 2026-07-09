import { Instagram, Facebook, WhatsApp } from './Icons'
import { site } from '../data/products'

const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#catalogo', label: 'Para llevar' },
  { href: '#menu-local', label: 'Menú del local' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#visitanos', label: 'Visítanos' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-vino-900 text-crema">
      <div className="seed-pattern absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="container-sb relative z-10 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src="/img/logo.png"
                alt="Logo de SaBïa"
                className="h-12 w-12 rounded-full ring-2 ring-marigold/40"
              />
              <span className="font-display text-3xl font-600">
                Sa<span className="text-marigold">B</span>ïa
              </span>
            </a>
            <p className="mt-4 font-script text-3xl text-marigold">
              “{site.lemaPrincipal}”
            </p>
            <p className="mt-1 font-display text-lg text-crema/80">
              {site.lemaSecundario}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-wider text-marigold">
              Explora
            </h3>
            <ul className="mt-4 space-y-2">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-crema/75 transition-colors hover:text-marigold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-sm font-600 uppercase tracking-wider text-marigold">
              Encuéntranos
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-crema/75">
              {site.direccion}
              <br />
              {site.lugar}
              <br />
              {site.ciudad}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full bg-crema/10 transition-colors hover:bg-marigold hover:text-vino-900"
                aria-label="WhatsApp"
              >
                <WhatsApp className="h-5 w-5" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full bg-crema/10 transition-colors hover:bg-marigold hover:text-vino-900"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full bg-crema/10 transition-colors hover:bg-marigold hover:text-vino-900"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-crema/15 pt-6 text-sm text-crema/60 sm:flex-row">
          <p>© {new Date().getFullYear()} SaBïa · Cuenca, Ecuador. Todos los derechos reservados.</p>
          <p>Hecho con ♥ y la sabiduría de lo natural.</p>
        </div>
      </div>
    </footer>
  )
}
