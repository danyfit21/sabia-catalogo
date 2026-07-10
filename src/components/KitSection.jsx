import { motion } from 'framer-motion'
import { Eyebrow, Reveal } from './Decor'
import { Bag, Sparkle, WhatsApp } from './Icons'
import { useCart } from '../context/CartContext'
import { pedidoConfig, waKitMuestra } from '../data/products'

const kit = pedidoConfig.paqueteMuestra

// Botón principal del kit — única salida directa a WhatsApp fuera del
// carrito y el footer. El mensaje invita a conversar, nunca habla de precio.
function BotonKit({ className = '' }) {
  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      href={waKitMuestra()}
      target="_blank"
      rel="noreferrer"
      className={`btn-primary justify-center py-4 text-base ${className}`}
    >
      <WhatsApp className="h-5 w-5" />
      Quiero probar todo el kit 💛
    </motion.a>
  )
}

export default function KitSection() {
  const cart = useCart()

  return (
    <section id="pruebalo" className="relative bg-crema-soft pb-20 pt-4 sm:pb-28">
      <div className="container-sb">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Pruébalo todo</Eyebrow>
          <h2 className="heading-display mt-5 text-4xl text-vino sm:text-5xl">
            ¿Se te antojó todo?
            <br className="hidden sm:block" />{' '}
            <span className="text-marigold">Pruébalo todo.</span>
          </h2>
          <p className="mt-4 text-carbon/65">
            Pide el {kit.nombre} con toda nuestra línea de productos. Perfecto si
            quieres conocerlos… o si quieres empezar a venderlos en tu negocio.
          </p>
        </Reveal>

        {/* Tarjeta protagonista del kit */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] bg-vino shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                <img
                  src={kit.img}
                  alt={`${kit.nombre}: toda la línea de productos SaBïa`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-vino/70 to-transparent md:bg-gradient-to-r"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-marigold/20 px-3 py-1 font-display text-xs font-600 uppercase tracking-wide text-marigold">
                  <Sparkle className="h-4 w-4" />
                  {kit.nombre}
                </span>
                <h3 className="mt-3 font-display text-2xl font-700 leading-tight text-crema sm:text-3xl">
                  Toda la línea, en una sola caja
                </h3>
                <p className="mt-2 text-sm text-crema/75">
                  Granolas, barras, mantequilla de maní, miel, kombucha y kéfir.
                </p>

                <ul className="mt-5 space-y-2">
                  {kit.detalle.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-crema/85">
                      <span className="mt-0.5 shrink-0 font-display text-marigold">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <BotonKit className="mt-7 w-full" />
                <p className="mt-2 text-center text-xs text-crema/55">
                  Escríbenos y te contamos cómo funciona.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Sub-bloque para futuros aliados */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-8 max-w-4xl rounded-[1.75rem] border-2 border-vino/10 bg-white p-6 shadow-card sm:p-8">
            <h3 className="font-display text-xl font-700 text-vino sm:text-2xl">
              ¿Tienes una tienda, cafetería o negocio?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-carbon/70">
              Nuestros productos se venden solos: quien los prueba, se queda.
              Empieza pidiendo tu kit o arma tu primer pedido — el precio lo
              conversamos juntos 💛
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <BotonKit className="w-full sm:w-auto" />
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => cart.openConTipo('productos')}
                className="btn-ghost w-full justify-center border-vino/30 py-4 text-base text-vino hover:border-vino hover:bg-vino hover:text-crema sm:w-auto"
              >
                <Bag className="h-5 w-5" />
                Armar mi pedido de productos
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
