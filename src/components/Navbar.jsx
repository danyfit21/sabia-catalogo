import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bag } from './Icons'
import { useCart } from '../context/CartContext'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#catalogo', label: 'Para llevar' },
  { href: '#pruebalo', label: 'Pruébalo todo' },
  { href: '#menu-local', label: 'Menú del local' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#visitanos', label: 'Visítanos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const cart = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-vino/85 shadow-[0_8px_30px_-12px_rgba(59,17,48,0.6)] backdrop-blur-xl'
            : 'bg-vino/30 backdrop-blur-md'
        }`}
      >
        <div className="container-sb flex items-center justify-between py-3">
          <a href="#inicio" className="flex items-center gap-3" aria-label="SaBïa inicio">
            <img
              src="/img/logo.png"
              alt="Logo de SaBïa"
              className="h-11 w-11 rounded-full ring-2 ring-marigold/40"
            />
            <span className="font-display text-2xl font-600 text-crema">
              Sa<span className="text-marigold">B</span>ïa
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-4 py-2 font-display text-[15px] font-500 text-crema/90 transition-colors hover:text-marigold"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-marigold transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={cart.open}
              className="btn-primary hidden px-5 py-2.5 text-[15px] sm:inline-flex"
            >
              <Bag className="h-4 w-4" />
              Tu pedido
              {cart.count > 0 && (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-vino px-1 text-xs font-700 text-crema">
                  {cart.count}
                </span>
              )}
            </button>

            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-full bg-crema/10 text-crema lg:hidden"
              aria-label="Abrir menú"
              aria-expanded={open}
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-6 rounded bg-crema transition-transform ${
                    open ? 'translate-y-2 rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded bg-crema transition-opacity ${
                    open ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 rounded bg-crema transition-transform ${
                    open ? '-translate-y-2 -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="container-sb flex flex-col gap-1 pb-5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 font-display text-lg font-500 text-crema/90 hover:bg-crema/10 hover:text-marigold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      setOpen(false)
                      cart.open()
                    }}
                    className="btn-primary mt-2 w-full"
                  >
                    <Bag className="h-4 w-4" />
                    Tu pedido
                    {cart.count > 0 && (
                      <span className="grid h-5 min-w-5 place-items-center rounded-full bg-vino px-1 text-xs font-700 text-crema">
                        {cart.count}
                      </span>
                    )}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
