function Contact() {
  return (
    <section id="contact" className="bg-lime-400 text-black py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="font-black uppercase tracking-[0.3em] text-sm mb-3">
            Prueba gratis
          </p>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
            Entrená hoy
          </h2>

          <p className="mt-5 max-w-xl text-black/70 text-lg leading-8">
            Reservá tu lugar para una clase inicial y conocé el gimnasio sin
            compromiso.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/59899000000"
            target="_blank"
            className="bg-black text-white px-7 py-4 font-black uppercase text-sm text-center hover:bg-zinc-900 transition"
          >
            Hablar por WhatsApp
          </a>

          <a
            href="#plans"
            className="border border-black px-7 py-4 font-black uppercase text-sm text-center hover:bg-black hover:text-white transition"
          >
            Ver planes
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
