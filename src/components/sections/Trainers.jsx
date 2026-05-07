import { trainers } from '../../data/trainers'

function Trainers() {
  return (
    <section id="trainers" className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-lime-500 font-black uppercase tracking-[0.3em] text-sm mb-4">
            Entrenadores
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Coaches que empujan
          </h2>

          <p className="mt-5 text-black/60 text-lg leading-8">
            Mostrar caras, especialidad y experiencia aumenta la confianza antes
            del primer contacto.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="bg-black text-white">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-black uppercase">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-lime-400 font-semibold">
                  {trainer.specialty}
                </p>

                <p className="mt-1 text-white/50">
                  {trainer.experience}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
