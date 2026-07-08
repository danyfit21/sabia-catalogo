import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ValuesStrip from './components/ValuesStrip'
import Catalog from './components/Catalog'
import BarsSection from './components/BarsSection'
import MenuSection from './components/MenuSection'
import StorySection from './components/StorySection'
import VisitSection from './components/VisitSection'
import FinalContact from './components/FinalContact'
import Footer from './components/Footer'
import { SeedDivider } from './components/Decor'
import { WhatsApp } from './components/Icons'
import { waLink } from './data/products'

// Botón flotante de WhatsApp (aparece tras el hero).
function FloatingWhatsApp() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.08 }}
          className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]"
          aria-label="Pedir por WhatsApp"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
          <WhatsApp className="relative h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValuesStrip />
        <Catalog />
        <SeedDivider from="#F7F1E3" to="#6E2251" />
        <BarsSection />
        <MenuSection />
        <SeedDivider from="#803E8E" to="#F7F1E3" />
        <StorySection />
        <VisitSection />
        <FinalContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
