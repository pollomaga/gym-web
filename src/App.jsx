import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Plans from './components/sections/Plans'
import Trainers from './components/sections/Trainers'
import Transformations from './components/sections/Transformations'
import Classes from './components/sections/Classes'
import Testimonials from './components/sections/Testimonials'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/layout/WhatsAppButton'





function App() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <Hero />
        <Plans />
        <Trainers />
        <Transformations />
        <Classes />
        <Testimonials />
        <Gallery />
        <Contact />
        

      </main>
      <Footer />
      <WhatsAppButton />

    </>
  )
}

export default App
