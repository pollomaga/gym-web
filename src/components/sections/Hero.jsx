import { motion } from 'framer-motion'
import Button from '../ui/Button'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-black text-white pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 w-full"
      >
        <p className="text-lime-400 font-black uppercase tracking-[0.3em] text-sm mb-4">
          Gimnasio premium
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase max-w-4xl leading-tight md:leading-none">

          Transformá tu cuerpo. Superá tus límites.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70 leading-8">
          Entrenamiento intenso, planes claros y una comunidad que te empuja a
          conseguir resultados reales.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button href="#contact">Comenzar ahora</Button>
          <Button href="#plans" variant="secondary">
            Ver planes
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
