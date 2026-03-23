import { SERVICES } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Our Services"
          title={<>Comprehensive Care<br /><span className="text-teal-600">Under One Roof</span></>}
          subtitle="From everyday ailments to chronic health management — complete medical services for patients of all ages."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <div className="group relative bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/8 hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">

                {/* Hover glow bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

                {/* Tag */}
                {s.tag && (
                  <span className="absolute top-4 right-4 bg-teal-100 text-teal-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {s.tag}
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 text-2xl shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {s.emoji}
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{s.desc}</p>

                {/* Bottom slide-in line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
