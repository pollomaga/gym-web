function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-2xl font-black uppercase tracking-wide">
          Iron<span className="text-lime-400">Gym</span>
        </a>

        <p className="text-white/50 text-sm text-center">
          © {currentYear} IronGym. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-5 text-sm font-semibold uppercase text-white/60">
          <a href="#plans" className="hover:text-lime-400 transition">
            Planes
          </a>
          <a href="#classes" className="hover:text-lime-400 transition">
            Clases
          </a>
          <a href="#contact" className="hover:text-lime-400 transition">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
