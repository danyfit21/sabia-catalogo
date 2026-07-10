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
import { CartProvider } from './context/CartContext'
import { CartBubble, CartDrawer } from './components/CartUI'

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <ValuesStrip />
        <Catalog />
        <SeedDivider from="#F7F1E3" to="#6B2F78" />
        <MenuSection />
        <SeedDivider from="#803E8E" to="#6E2251" />
        <BarsSection />
        <SeedDivider from="#6E2251" to="#F7F1E3" />
        <StorySection />
        <VisitSection />
        <FinalContact />
      </main>
      <Footer />
      <CartBubble />
      <CartDrawer />
    </CartProvider>
  )
}
