import { motion } from 'framer-motion'

// Separador SVG con forma de semilla/hoja del logo entre secciones.
// variant define color de arriba/abajo. flip invierte la curva.
export function SeedDivider({ from = '#EFE6D0', to = '#6E2251', flip = false }) {
  return (
    <div className="relative -my-px leading-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-[60px] w-full sm:h-[90px] ${flip ? 'rotate-180' : ''}`}
      >
        <rect width="1440" height="120" fill={from} />
        <path
          d="M0 120 C 240 40 480 40 720 70 C 960 100 1200 40 1440 60 L1440 120 Z"
          fill={to}
        />
        {/* semillas decorativas sobre la cresta */}
        <g fill={to} opacity="0.9">
          <ellipse cx="360" cy="58" rx="9" ry="16" />
          <ellipse cx="720" cy="66" rx="9" ry="16" />
          <ellipse cx="1080" cy="56" rx="9" ry="16" />
        </g>
      </svg>
    </div>
  )
}

// Blob orgánico flotante con parallax suave.
export function Blob({ className = '', color = '#F4A11E', style, animate = true }) {
  return (
    <div
      className={`pointer-events-none absolute blur-2xl ${animate ? 'animate-floatSlow' : ''} ${className}`}
      style={{ background: color, ...style }}
      aria-hidden="true"
    />
  )
}

// Pequeña etiqueta tipo "eyebrow" con semilla.
export function Eyebrow({ children, className = '', dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-display text-sm font-500 tracking-wide ${
        dark
          ? 'border-crema/30 bg-white/5 text-marigold'
          : 'border-vino/15 bg-vino/5 text-vino'
      } ${className}`}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-marigold" />
      {children}
    </span>
  )
}

// Wrapper de scroll-reveal reutilizable.
export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
