import { CLINIC, SERVICES } from '../data'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-5 overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg, #f0fdfa 0%, #ecfeff 35%, #eff6ff 70%, #f0fdfa 100%)',
      }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-teal-200/40 to-emerald-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-200/30 to-cyan-100/20 blur-3xl pointer-events-none" />

      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #0d9488 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* ── Left ── */}
        <div>
          <div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-teal-200 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            style={{ animation: 'fadeDown 0.6s ease forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Trusted Since {CLINIC.since} · Malkajgiri, Hyderabad
          </div>

          <h1
            className="font-display text-5xl lg:text-[3.6rem] font-black text-gray-900 leading-[1.1] tracking-tight mb-5"
            style={{ animation: 'fadeUp 0.7s 0.1s ease both' }}
          >
            Trusted{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-teal-600">Healthcare</span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-3"
                viewBox="0 0 200 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M2 7C50 2 110 2 198 7" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
              </svg>
            </span>
            <br />
            for <em className="not-italic font-black text-gray-700">You &amp; Your</em>
            <br />
            <span className="text-gray-900">Family</span>
          </h1>

          <p
            className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md"
            style={{ animation: 'fadeUp 0.7s 0.2s ease both' }}
          >
            {CLINIC.subtitle}
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-3 mb-10"
            style={{ animation: 'fadeUp 0.7s 0.3s ease both' }}
          >
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-2xl shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:-translate-y-1 transition-all text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-teal-700 font-bold rounded-2xl border-2 border-teal-200 hover:border-teal-400 hover:bg-teal-50 hover:-translate-y-1 transition-all text-sm shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Book Appointment
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8"
            style={{ animation: 'fadeUp 0.7s 0.4s ease both' }}
          >
            {[
              ['15+',   'Years Experience'],
              ['5000+', 'Happy Patients'],
              ['4.9★',  'Patient Rating'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-2xl font-black text-gray-900">{num}</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right card ── */}
        <div
          className="relative flex justify-center lg:justify-end"
          style={{ animation: 'fadeUp 0.8s 0.25s ease both' }}
        >
          <div className="relative bg-white rounded-3xl p-7 shadow-2xl shadow-teal-900/10 border border-gray-100 w-full max-w-[360px]">
            {/* Top accent bar */}
            <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-400" />

            {/* Clinic header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth={2} className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 13h-2v-4H7v-2h4V5h2v4h4v2h-4v4z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-900 text-base">{CLINIC.name}</div>
                <div className="text-xs text-gray-400 truncate">Malkajgiri, Hyderabad</div>
              </div>
              <div className="flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-bold px-2.5 py-1 rounded-full border border-green-100">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Open
              </div>
            </div>

            {/* Service grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {SERVICES.map((s) => (
                <div key={s.id} className={`${s.lightBg} ${s.border} border rounded-2xl p-3.5`}>
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-2 text-lg`}
                  >
                    {s.emoji}
                  </div>
                  <div className={`text-xs font-semibold ${s.textColor} leading-tight`}>{s.title}</div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl px-4 py-3">
              <svg className="w-4 h-4 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">Mon–Sat: 9AM–9PM &nbsp;|&nbsp; Sun: 9AM–1PM</span>
            </div>
          </div>

          {/* Float badge 1 */}
          <div className="absolute -left-6 bottom-10 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-teal-900/10 border border-gray-100 flex items-center gap-2.5 animate-float-delayed">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            <div>
              <div className="text-xs font-bold text-gray-800">Clinic Open Today</div>
              <div className="text-[10px] text-gray-400">Walk-ins welcome</div>
            </div>
          </div>

          {/* Float badge 2 */}
          <div className="absolute -right-4 top-6 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-teal-900/10 border border-gray-100 animate-float">
            <div className="flex text-amber-400 gap-0.5 mb-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div className="text-xs font-bold text-gray-800">4.9 / 5 Rating</div>
            <div className="text-[10px] text-gray-400">500+ Reviews</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp   { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeDown { from { opacity:0; transform:translateY(-10px) } to { opacity:1; transform:translateY(0) } }
      `}</style>
    </section>
  )
}
