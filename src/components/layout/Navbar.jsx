function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-black uppercase tracking-wide">
          Iron<span className="text-lime-400">Gym</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white/70">
          <a href="#plans" className="hover:text-lime-400 transition">
            Planes
          </a>
          <a href="#trainers" className="hover:text-lime-400 transition">
            Entrenadores
          </a>
          <a href="#classes" className="hover:text-lime-400 transition">
            Clases
          </a>
          <a href="#contact" className="hover:text-lime-400 transition">
            Contacto
          </a>
        </div>

        <a
          href="https://wa.me/59899000000"
          target="_blank"
          className="bg-lime-400 text-black px-4 py-2 rounded-sm text-sm font-black uppercase hover:bg-white transition"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  )
}

export default Navbar
