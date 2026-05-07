import { transformations } from '../../data/transformations'

function Transformations() {
  return (
    <section className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-lime-400 font-black uppercase tracking-[0.3em] text-sm mb-4">
            Transformaciones
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Resultados que venden
          </h2>

          <p className="mt-5 text-white/70 text-lg leading-8">
            El antes y después es una de las pruebas más fuertes para una web de
            fitness.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {transformations.map((item) => (
            <article
              key={item.name}
              className="bg-black border border-white/10 overflow-hidden"
            >
              <div className="grid grid-cols-2 min-h-80">
                <div className="bg-zinc-900 p-6 flex items-end">
                  <span className="text-white/50 font-black uppercase tracking-[0.2em] text-sm">
                    {item.beforeLabel}
                  </span>
                </div>

                <div className="bg-[url('https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center p-6 flex items-end">
                  <span className="text-lime-400 font-black uppercase tracking-[0.2em] text-sm">
                    {item.afterLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 border-t border-white/10">
                <p className="text-lime-400 font-black uppercase">
                  {item.name} · {item.time}
                </p>

                <h3 className="mt-3 text-5xl font-black uppercase">
                  {item.result}
                </h3>

                <p className="mt-4 text-white/65 leading-7">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Transformations
