import { galleryImages } from '../../data/gallery'

function Gallery() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-lime-400 font-black uppercase tracking-[0.3em] text-sm mb-4">
            Galería
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Energía premium
          </h2>

          <p className="mt-5 text-white/70 text-lg leading-8">
            Las imágenes ayudan a que el visitante sienta el ambiente del
            gimnasio antes de ir.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px]">

          {galleryImages.map((item, index) => (
            <article
              key={item.title}
              className={`relative overflow-hidden bg-zinc-900 ${
                index === 0 || index === 2 ? 'md:row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <h3 className="absolute bottom-5 left-5 right-5 text-xl font-black uppercase">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
