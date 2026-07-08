import { motion } from 'framer-motion'
import { Leaf, Sparkle, Heart } from './Icons'

const valores = [
  { icon: Leaf, label: 'Ingredientes frescos' },
  { icon: Sparkle, label: 'Natural y saludable' },
  { icon: Heart, label: 'Hecho con amor' },
]

export default function ValuesStrip() {
  return (
    <section className="relative z-10 bg-marigold">
      <div className="container-sb">
        <ul className="flex flex-col items-stretch divide-y divide-vino/15 py-2 sm:flex-row sm:items-center sm:justify-between sm:divide-x sm:divide-y-0">
          {valores.map(({ icon: Icon, label }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-1 items-center justify-center gap-3 px-4 py-4"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-vino text-marigold">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-600 text-vino-900">{label}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
