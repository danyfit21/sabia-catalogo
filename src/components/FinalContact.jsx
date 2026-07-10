import { Reveal } from './Decor'
import { WhatsApp } from './Icons'
import { waKitMuestra } from '../data/products'
import { useCart } from '../context/CartContext'

export default function FinalContact() {
  const cart = useCart()
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
            ¿Quieres probar toda la línea SaBïa… o venderla en tu negocio?
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4">
            <a
              href={waKitMuestra()}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              <WhatsApp className="h-5 w-5" />
              Quiero el Kit de Muestra 💛
            </a>
            <button
              onClick={() => cart.openConTipo('productos')}
              className="text-sm text-crema/60 underline decoration-crema/30 underline-offset-4 transition-colors hover:text-marigold hover:decoration-marigold"
            >
              Armar mi pedido de productos
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
