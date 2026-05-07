import { testimonials } from '../../data/testimonials'

function Testimonials() {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-lime-500 font-black uppercase tracking-[0.3em] text-sm mb-4">
            Testimonios
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            La prueba social
          </h2>

          <p className="mt-5 text-black/60 text-lg leading-8">
            En fitness, la gente quiere saber si otros ya lograron resultados
            reales antes de anotarse.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="bg-zinc-100 border border-black/10 p-6"
            >
              <p className="text-xl font-bold leading-8">
                “{testimonial.text}”
              </p>

              <footer className="mt-6 text-lime-600 font-black uppercase tracking-[0.2em] text-sm">
                {testimonial.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
