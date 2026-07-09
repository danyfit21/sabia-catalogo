import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from './Decor'
import { ArrowRight, Bag, Sparkle } from './Icons'
import AddToCart from './AddToCart'
import { useCart } from '../context/CartContext'
import {
  armaTuBowl,
  armaTuSmoothie,
  menuBowls,
  menuCafes,
  menuSmoothies,
  menuTostadas,
  preciosSmoothieFijo,
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
            <div className="mt-4">
              <AddToCart
                item={{ id: b.id, nombre: b.nombre, img: b.img }}
                tamanos={[
                  { label: 'Mediano', precio: b.precioMediano },
                  { label: 'Grande', precio: b.precioGrande },
                ]}
              />
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

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuSmoothies.map((s, i) => (
          <motion.article
            key={s.id}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col overflow-hidden rounded-3xl bg-crema shadow-2xl"
          >
            {/* Foto — enfoca la parte superior del vaso (los toppings) */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={`${s.nombre} — ${s.desc}`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vino-900/80 via-vino-900/10 to-transparent" />
              <span className="absolute right-3 top-3 rounded-full bg-marigold px-3 py-1 font-display text-sm font-700 text-vino-900 shadow">
                ${preciosSmoothieFijo.mediano.toFixed(2)}
              </span>
              <h4 className="absolute inset-x-4 bottom-3 font-display text-2xl font-700 leading-tight text-crema drop-shadow-lg">
                {s.nombre}
              </h4>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="flex-1 text-sm leading-relaxed text-carbon/70">{s.desc}</p>
              <div className="mt-5">
                <AddToCart
                  item={{ id: s.id, nombre: s.nombre, img: s.img }}
                  tamanos={[
                    { label: 'Mediano', precio: preciosSmoothieFijo.mediano },
                    { label: 'Grande', precio: preciosSmoothieFijo.grande },
                  ]}
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal delay={0.1}>
        <SmoothieBuilder />
      </Reveal>
    </>
  )
}

// --- Constructor interactivo: arma tu propio smoothie ----------------------
function SmoothieBuilder() {
  const cart = useCart()
  const [sizeKey, setSizeKey] = useState('mediano')
  const [selected, setSelected] = useState([])
  const [agregado, setAgregado] = useState(false)
  const timer = useRef(null)

  const size = armaTuSmoothie[sizeKey]
  const max = size.ingredientes
  const full = selected.length >= max
  const canOrder = selected.length > 0

  const agregarAlPedido = () => {
    cart.add({
      id: 'smoothie-arma-el-tuyo',
      nombre: 'Mi smoothie personalizado',
      img: null,
      tamano: size.label,
      precio: size.precio,
      nota: selected.join(', '),
    })
    setSelected([])
    clearTimeout(timer.current)
    setAgregado(true)
    timer.current = setTimeout(() => setAgregado(false), 1600)
  }

  const grupos = [
    { titulo: 'Frutas', items: armaTuSmoothie.frutas },
    { titulo: 'Verduras', items: armaTuSmoothie.verduras },
    { titulo: 'Otros', items: armaTuSmoothie.otros },
  ]

  const toggle = (item) => {
    setSelected((prev) => {
      if (prev.includes(item)) return prev.filter((x) => x !== item)
      if (prev.length >= max) return prev
      return [...prev, item]
    })
  }

  const changeSize = (key) => {
    setSizeKey(key)
    setSelected((prev) => prev.slice(0, armaTuSmoothie[key].ingredientes))
  }

  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] bg-white/10 ring-1 ring-white/15 backdrop-blur">
      {/* Encabezado del constructor */}
      <div className="border-b border-white/10 bg-white/5 px-6 py-5 sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-marigold/20 px-3 py-1 font-display text-xs font-600 uppercase tracking-wide text-marigold">
          <Sparkle className="h-4 w-4" /> Personalízalo
        </span>
        <h4 className="mt-3 font-display text-2xl font-700 text-crema">Arma tu propio smoothie</h4>
        <p className="mt-1 text-sm text-crema/75">
          Toca los ingredientes que quieras y te preparamos tu mezcla ideal. Al terminar,
          agrégalo a tu pedido.
        </p>
      </div>

      <div className="px-6 py-6 sm:px-8">
        {/* Selección de tamaño */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {['mediano', 'grande'].map((key) => {
            const s = armaTuSmoothie[key]
            const on = sizeKey === key
            return (
              <button
                key={key}
                onClick={() => changeSize(key)}
                aria-pressed={on}
                className={`flex-1 rounded-2xl border-2 px-4 py-3 text-left transition-all duration-200 ${
                  on
                    ? 'border-marigold bg-marigold/15'
                    : 'border-white/15 bg-white/5 hover:border-white/30'
                }`}
              >
                <span className="block font-display text-lg font-700 text-crema">
                  {s.label} <span className="text-marigold">${s.precio.toFixed(2)}</span>
                </span>
                <span className="text-xs text-crema/70">Hasta {s.ingredientes} ingredientes</span>
              </button>
            )
          })}
        </div>

        {/* Contador */}
        <div className="mt-6 flex items-center justify-between">
          <p className="font-display text-sm font-600 text-crema">
            Ingredientes elegidos:{' '}
            <span className={full ? 'text-marigold' : 'text-crema'}>
              {selected.length} / {max}
            </span>
          </p>
          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="text-xs text-crema/60 underline transition-colors hover:text-crema"
            >
              Limpiar
            </button>
          )}
        </div>

        {/* Grupos de ingredientes seleccionables */}
        <div className="mt-4 space-y-5">
          {grupos.map((grupo) => (
            <div key={grupo.titulo}>
              <p className="font-display text-sm font-600 text-marigold">{grupo.titulo}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {grupo.items.map((item) => {
                  const on = selected.includes(item)
                  const disabled = !on && full
                  return (
                    <button
                      key={item}
                      onClick={() => toggle(item)}
                      disabled={disabled}
                      aria-pressed={on}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm transition-all duration-200 ${
                        on
                          ? 'border-marigold bg-marigold font-600 text-vino-900'
                          : disabled
                            ? 'cursor-not-allowed border-white/10 bg-white/5 text-crema/30'
                            : 'border-white/25 bg-white/5 text-crema hover:border-marigold/60 hover:bg-white/10'
                      }`}
                    >
                      <span className="font-display leading-none">{on ? '✓' : '+'}</span>
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Botón (se activa al elegir ingredientes) → agrega al pedido */}
        {agregado ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-marigold py-4 font-display text-base font-700 text-vino-900"
          >
            ✓ ¡Agregado a tu pedido!
          </motion.div>
        ) : canOrder ? (
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={agregarAlPedido}
            className="btn-primary mt-7 w-full justify-center py-4 text-base"
          >
            <Bag className="h-5 w-5" />
            Agregar mi smoothie ({selected.length}) a mi pedido
          </motion.button>
        ) : (
          <div
            className="mt-7 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-crema/30 py-4 text-base font-500 text-crema/50"
            aria-disabled="true"
          >
            <Bag className="h-5 w-5" />
            Selecciona ingredientes para agregar
          </div>
        )}
      </div>
    </div>
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
              <div className="mt-4 flex items-center justify-between gap-2">
                <span className="font-display text-lg font-700 text-vino">${t.precio.toFixed(2)}</span>
                <AddToCart
                  variant="pill"
                  item={{ id: t.id, nombre: t.nombre, img: t.img }}
                  precio={t.precio}
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 grid gap-6 rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur sm:grid-cols-2 sm:p-8">
          {[
            { titulo: 'Cafés calientes', items: menuCafes.calientes },
            { titulo: 'Cafés fríos', items: menuCafes.frios },
          ].map((grupo) => (
            <div key={grupo.titulo}>
              <h4 className="font-display text-lg font-600 text-marigold">{grupo.titulo}</h4>
              <ul className="mt-3 space-y-2">
                {grupo.items.map((c) => (
                  <li
                    key={c.id}
                    className="flex items-center justify-between gap-3 text-sm text-crema/85"
                  >
                    <span>{c.nombre}</span>
                    <span className="flex items-center gap-3">
                      <span className="font-display font-600 text-crema">
                        ${c.precio.toFixed(2)}
                      </span>
                      <AddToCart
                        variant="icon"
                        item={{ id: c.id, nombre: c.nombre, img: null }}
                        precio={c.precio}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
