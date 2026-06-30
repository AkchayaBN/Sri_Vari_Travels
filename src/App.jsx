import { Navbar } from './components/Navbar'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { VehicleShowcaseSection } from './components/sections/VehicleShowcaseSection'
import { PricingSection } from './components/sections/PricingSection'
import { PackagesSection } from './components/sections/PackagesSection'
import { DriverSection } from './components/sections/DriverSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-transparent text-slate-800">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <VehicleShowcaseSection />
        <PricingSection />
        <PackagesSection />
        <DriverSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
