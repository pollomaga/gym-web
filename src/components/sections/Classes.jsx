import { classTags, schedule } from '../../data/classes'

function Classes() {
  return (
    <section id="classes" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-lime-400 font-black uppercase tracking-[0.3em] text-sm mb-4">
            Horarios
          </p>

          <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
            Clases toda la semana
          </h2>

          <p className="mt-5 text-white/70 text-lg leading-8">
            Un visitante tiene que poder entender rápido qué actividades hay y
            en qué horarios puede sumarse.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-zinc-950 border border-white/10 p-6">
            <h3 className="text-3xl font-black uppercase">
              Disciplinas
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {classTags.map((item) => (
                <span
                  key={item}
                  className="border border-white/15 px-4 py-3 text-sm font-black uppercase text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-lime-400 text-black">
                <tr>
                  <th className="p-4">Clase</th>
                  <th className="p-4">Días</th>
                  <th className="p-4">Horario</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 bg-zinc-950 text-white/75">
                {schedule.map((item) => (
                  <tr key={item.className}>
                    <td className="p-4 font-semibold">
                      {item.className}
                    </td>
                    <td className="p-4">{item.days}</td>
                    <td className="p-4">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Classes
