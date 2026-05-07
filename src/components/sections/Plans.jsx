import { plans } from '../../data/plans'
import Button from '../ui/Button'

function Plans() {
  return (
    <section id="plans" className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-lime-400 font-black uppercase tracking-[0.3em] text-sm mb-4">
            Planes
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Elegí tu nivel
          </h2>

          <p className="mt-5 text-white/70 text-lg leading-8">
            Tres opciones simples para que el visitante compare rápido y se
            inscriba sin vueltas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`border p-6 bg-black ${
                plan.featured
                  ? 'border-lime-400 shadow-[0_0_35px_rgba(163,230,53,0.25)]'
                  : 'border-white/10'
              }`}
            >
              {plan.featured && (
                <span className="inline-flex mb-6 bg-lime-400 text-black px-3 py-1 text-xs font-black uppercase">
                  Más elegido
                </span>
              )}

              <h3 className="text-3xl font-black uppercase">{plan.name}</h3>

              <p className="mt-3 text-white/60 leading-7">
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-6xl font-black">{plan.price}</span>
                <span className="text-white/50 mb-2 uppercase text-sm">
                  / mes
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-white/70">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 w-2 h-2 bg-lime-400 flex-none" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="#contact">Inscribirme</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
