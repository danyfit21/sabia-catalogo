import { motion } from 'framer-motion'
import { Reveal } from './Decor'
import { ArrowRight, WhatsApp } from './Icons'
import {
  armaTuBowl,
  armaTuSmoothie,
  menuBowls,
  menuCafes,
  menuSmoothies,
  menuTostadas,
  preciosSmoothieFijo,
  waLink,
} from '../data/products'

// Navegación rápida: salta a cada bloque del menú (útil sobre todo en móvil).
const jumps = [
  { href: '#menu-bowls', label: 'Bowls' },
  { href: '#menu-smoothies', label: 'Smoothies' },
  { href: '#menu-tostadas', label: 'Tostadas & Café' },
]

// Encabezado decorado de cada sub-bloque del menú.
function BlockHeader({ eyebrow, titulo, children }) {
  return (
    <Reveal className="text-center">
      <span className="font-script text-3xl text-marigold">{eyebrow}</span>
      <h3 className="heading-display mt-1 text-3xl text-crema sm:text-4xl">{titulo}</h3>
      {children && <p className="mx-auto mt-3 max-w-xl text-crema/80">{children}</p>}
    </Reveal>
  )
}

// Botón que lleva al siguiente bloque (o al final, a otra sección).
function NextButton({ href, label }) {
  return (
    <div className="mt-10 flex justify-center">
      <a
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-crema/30 bg-white/5 px-6 py-3 font-display font-500 text-crema transition-all duration-300 hover:bg-white/15"
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  )
}

function PricePill({ label, price }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-crema/90">
      {label} <b className="font-display text-marigold">${price.toFixed(2)}</b>
    </span>
  )
}

function BowlsBlock() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {menuBowls.map((b, i) => (
        <motion.article
          key={b.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="group overflow-hidden rounded-3xl bg-crema shadow-2xl"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={b.img}
              alt={`${b.nombre} — ${b.desc}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {b.fotoPendiente && (
              <span className="absolute left-3 top-3 rounded-full bg-carbon/70 px-2.5 py-1 text-[11px] text-crema">
                Foto próximamente
              </span>
            )}
          </div>
          <div className="p-5">
            <h4 className="font-display text-lg font-600 text-vino">{b.nombre}</h4>
            <p className="mt-1.5 text-sm leading-snug text-carbon/65">{b.desc}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-vino/5 px-3 py-1 text-xs font-600 text-vino">
                Mediano ${b.precioMediano.toFixed(2)}
              </span>
              <span className="rounded-full bg-vino/5 px-3 py-1 text-xs font-600 text-vino">
                Grande ${b.precioGrande.toFixed(2)}
              </span>
              <a
                href={waLink(b.nombre)}
                target="_blank"
                rel="noreferrer"
                className="ml-auto grid h-9 w-9 place-items-center rounded-full bg-vino text-crema transition-transform hover:scale-110"
                aria-label={`Pedir ${b.nombre}`}
              >
                <WhatsApp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

function ArmaBowl() {
  return (
    <Reveal delay={0.1}>
      <div className="mt-6 rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur sm:p-8">
        <h4 className="font-display text-xl font-600 text-crema">Arma tu propio bowl</h4>
        <div className="mt-3 flex flex-wrap gap-3">
          <span className="rounded-full bg-marigold px-4 py-1.5 font-display text-sm font-700 text-vino-900">
            {armaTuBowl.mediano.label}: {armaTuBowl.mediano.desc}
          </span>
          <span className="rounded-full bg-marigold px-4 py-1.5 font-display text-sm font-700 text-vino-900">
            {armaTuBowl.grande.label}: {armaTuBowl.grande.desc}
          </span>
        </div>
        <p className="mt-4 text-sm text-crema/80">
          Bases: {armaTuBowl.basesDesc}{' '}
          <b className="text-marigold">+${armaTuBowl.precioExtra.toFixed(2)}</b>
        </p>
      </div>
    </Reveal>
  )
}

function SmoothiesBlock() {
  return (
    <>
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/10 px-5 py-3 ring-1 ring-white/15">
          <p className="text-sm text-crema/85">Todos nuestros smoothies de receta fija:</p>
          <div className="flex gap-2">
            <PricePill label="Mediano" price={preciosSmoothieFijo.mediano} />
            <PricePill label="Grande" price={preciosSmoothieFijo.grande} />
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {menuSmoothies.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="flex items-start justify-between gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur"
          >
            <div>
              <h4 className="font-display font-600 text-crema">{s.nombre}</h4>
              <p className="mt-1 text-sm leading-snug text-crema/65">{s.desc}</p>
            </div>
            <a
              href={waLink(s.nombre)}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-marigold text-vino-900 transition-transform hover:scale-110"
              aria-label={`Pedir ${s.nombre}`}
            >
              <WhatsApp className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur sm:p-8">
          <h4 className="font-display text-xl font-600 text-crema">Arma tu propio smoothie</h4>
          <div className="mt-3 flex flex-wrap gap-3">
            <span className="rounded-full bg-marigold px-4 py-1.5 font-display text-sm font-700 text-vino-900">
              {armaTuSmoothie.mediano.label}: {armaTuSmoothie.mediano.ingredientes} ingredientes · $
              {armaTuSmoothie.mediano.precio.toFixed(2)}
            </span>
            <span className="rounded-full bg-marigold px-4 py-1.5 font-display text-sm font-700 text-vino-900">
              {armaTuSmoothie.grande.label}: {armaTuSmoothie.grande.ingredientes} ingredientes · $
              {armaTuSmoothie.grande.precio.toFixed(2)}
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {[
              { titulo: 'Frutas', items: armaTuSmoothie.frutas },
              { titulo: 'Verduras', items: armaTuSmoothie.verduras },
              { titulo: 'Otros', items: armaTuSmoothie.otros },
            ].map((grupo) => (
              <div key={grupo.titulo}>
                <p className="font-display text-sm font-600 text-marigold">{grupo.titulo}</p>
                <ul className="mt-2 space-y-1 text-sm text-crema/75">
                  {grupo.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  )
}

function TostadasBlock() {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {menuTostadas.map((t, i) => (
          <motion.article
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group flex overflow-hidden rounded-3xl bg-crema shadow-2xl"
          >
            <div className="relative aspect-square w-32 shrink-0 overflow-hidden sm:w-40">
              <img
                src={t.img}
                alt={`${t.nombre} — ${t.desc}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {t.fotoPendiente && (
                <span className="absolute left-2 top-2 rounded-full bg-carbon/70 px-2 py-0.5 text-[10px] text-crema">
                  Foto próx.
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                <h4 className="font-display text-lg font-600 text-vino">{t.nombre}</h4>
                <p className="mt-1.5 text-sm leading-snug text-carbon/65">{t.desc}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-lg font-700 text-vino">${t.precio.toFixed(2)}</span>
                <a
                  href={waLink(t.nombre)}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full bg-vino text-crema transition-transform hover:scale-110"
                  aria-label={`Pedir ${t.nombre}`}
                >
                  <WhatsApp className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 grid gap-6 rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur sm:grid-cols-2 sm:p-8">
          <div>
            <h4 className="font-display text-lg font-600 text-marigold">Cafés calientes</h4>
            <ul className="mt-3 space-y-2">
              {menuCafes.calientes.map((c) => (
                <li key={c.nombre} className="flex items-center justify-between text-sm text-crema/85">
                  <span>{c.nombre}</span>
                  <span className="font-display font-600 text-crema">${c.precio.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-600 text-marigold">Cafés fríos</h4>
            <ul className="mt-3 space-y-2">
              {menuCafes.frios.map((c) => (
                <li key={c.nombre} className="flex items-center justify-between text-sm text-crema/85">
                  <span>{c.nombre}</span>
                  <span className="font-display font-600 text-crema">${c.precio.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </>
  )
}

export default function MenuSection() {
  return (
    <section
      id="menu-local"
      className="relative overflow-hidden bg-gradient-to-b from-violeta-600 to-violeta py-20 sm:py-28"
    >
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-marigold/25 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-vino/40 blur-3xl" aria-hidden="true" />

      <div className="container-sb relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-crema/25 bg-white/10 px-4 py-1.5 font-display text-sm font-500 text-crema backdrop-blur">
            <img src="/img/logo.png" alt="" className="h-5 w-5 rounded-full" />
            Menú del local · solo en SaBïa Bowls
          </span>
          <h2 className="heading-display mt-5 text-4xl text-crema sm:text-5xl">
            Se prepara y se sirve
            <br /> aquí, fresco al momento
          </h2>
          <p className="mt-4 text-crema/80">
            Bowls, smoothies, tostadas y café — todo hecho al pedido dentro de
            La Esquina de las Artes, en Cuenca. No disponible para llevar
            empacado.
          </p>
        </Reveal>

        {/* Navegación rápida por el menú */}
        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {jumps.map((j) => (
              <a
                key={j.href}
                href={j.href}
                className="chip border border-crema/25 bg-white/5 text-crema transition-colors hover:bg-white/15"
              >
                {j.label}
              </a>
            ))}
          </div>
        </Reveal>

        {/* BLOQUE 1 · BOWLS */}
        <div id="menu-bowls" className="scroll-mt-24 pt-16">
          <BlockHeader eyebrow="cucharada tras cucharada" titulo="Smoothie Bowls">
            Una base de frutas sin añadidos donde combinas nutrientes y sabores.
          </BlockHeader>
          <div className="mt-10">
            <BowlsBlock />
            <ArmaBowl />
          </div>
          <NextButton href="#menu-smoothies" label="Ver smoothies" />
        </div>

        {/* BLOQUE 2 · SMOOTHIES */}
        <div id="menu-smoothies" className="scroll-mt-24 pt-20">
          <BlockHeader eyebrow="pura vitalidad en un vaso" titulo="Smoothies">
            Frutas y vegetales frescos licuados al momento. Elige tu receta o
            arma la tuya.
          </BlockHeader>
          <div className="mt-10">
            <SmoothiesBlock />
          </div>
          <NextButton href="#menu-tostadas" label="Ver tostadas & café" />
        </div>

        {/* BLOQUE 3 · TOSTADAS & CAFÉ */}
        <div id="menu-tostadas" className="scroll-mt-24 pt-20">
          <BlockHeader eyebrow="antojitos para acompañar" titulo="Tostadas & Café">
            Pan de masa madre recién tostado y café de especialidad, caliente o
            frío.
          </BlockHeader>
          <div className="mt-10">
            <TostadasBlock />
          </div>
          <NextButton href="#menu-local" label="Volver al inicio del menú" />
        </div>
      </div>
    </section>
  )
}
