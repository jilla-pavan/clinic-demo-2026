import { WHY_CHOOSE_US, CLINIC } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 px-5 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f2d3d 0%, #0a3d3a 50%, #0f2d3d 100%)',
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0d9488 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <span className="inline-block bg-white/10 text-teal-300 border border-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
            Healthcare You Can<br />
            <span className="text-teal-400">Always Count On</span>
          </h2>
          <p className="text-teal-200/70 text-base leading-relaxed max-w-xl mx-auto">
            We go beyond treating symptoms — we build lasting trust with every patient and family we serve.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/40 rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center">
                <div className={`w-14 h-14 ${w.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {w.emoji}
                </div>
                <h3 className="font-bold text-white text-base mb-2">{w.title}</h3>
                <p className="text-teal-200/70 text-sm leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA strip */}
        <Reveal delay={320}>
          <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <div className="font-display text-xl font-bold text-white">Ready to visit us?</div>
              <div className="text-teal-300/70 text-sm mt-1">
                Walk in or call ahead — we're always here for you.
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 text-sm transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call Now
              </a>
              <a
                href={`https://wa.me/${CLINIC.phoneRaw.replace('+', '')}?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-2xl shadow-lg shadow-teal-500/30 text-sm hover:-translate-y-0.5 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
