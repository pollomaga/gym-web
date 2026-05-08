import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Planes', href: '#plans' },
    { label: 'Entrenadores', href: '#trainers' },
    { label: 'Clases', href: '#classes' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-black uppercase tracking-wide text-lime-400"
          onClick={() => setIsOpen(false)}
        >
          Gym
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-white/70">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-lime-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/59899000000"
          target="_blank"
          className="hidden md:inline-flex bg-lime-400 text-black px-4 py-2 rounded-sm text-sm font-black uppercase hover:bg-white transition"
        >
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-11 h-11 border border-white/15 flex items-center justify-center text-white text-2xl"
          aria-label="Abrir menú"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/80 font-black uppercase tracking-wide py-2 hover:text-lime-400 transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/59899000000"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-lime-400 text-black px-5 py-4 font-black uppercase text-center hover:bg-white transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
