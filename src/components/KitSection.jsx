import { motion } from 'framer-motion'
import { WhatsApp } from './Icons'
import { useCart } from '../context/CartContext'
import { pedidoConfig, waKitMuestra } from '../data/products'

const kit = pedidoConfig.paqueteMuestra

export default function KitSection() {
  const cart = useCart()

  return (
    <section id="pruebalo" className="relative bg-crema-soft pb-20 pt-4 sm:pb-28">
      <div className="container-sb">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-vino shadow-2xl"
        >
          <div className="grid md:grid-cols-2">
            {/* Foto: arriba en móvil, a un lado en desktop */}
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
              <img
                src={kit.img}
                alt={`${kit.nombre}: toda la línea de productos SaBïa`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-vino/60 to-transparent md:bg-gradient-to-r"
                aria-hidden="true"
              />
            </div>

            {/* Contenido */}
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <span className="font-display text-sm font-600 uppercase tracking-wide text-marigold">
                {kit.nombre}
              </span>

              <h2 className="heading-display mt-3 text-3xl leading-tight text-crema sm:text-4xl">
                ¿Se te antojó todo?{' '}
                <span className="text-marigold">Pruébalo todo.</span>
              </h2>

              <p className="mt-3 text-[15px] leading-relaxed text-crema/75 sm:text-base">
                Toda nuestra línea en una sola caja. Perfecta para conocerla… o
                para empezar a venderla en tu negocio.
              </p>

              <motion.a
                whileTap={{ scale: 0.97 }}
                href={waKitMuestra()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-7 w-full justify-center whitespace-nowrap px-4 py-4 text-[15px] sm:text-base"
              >
                <WhatsApp className="h-5 w-5" />
                Quiero probar todo el kit 💛
              </motion.a>

              <button
                onClick={() => cart.openConTipo('productos')}
                className="mt-4 text-center text-sm text-crema/60 underline decoration-crema/30 underline-offset-4 transition-colors hover:text-marigold hover:decoration-marigold"
              >
                ¿Tienes un negocio? Arma tu pedido de productos aquí
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
