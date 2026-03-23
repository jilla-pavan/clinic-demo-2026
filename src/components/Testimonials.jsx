import { TESTIMONIALS } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

function StarRating() {
  return (
    <div className="flex gap-1 text-amber-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Patient Reviews"
          title={<>Loved by Families<br /><span className="text-teal-600">Across Malkajgiri</span></>}
          subtitle="Thousands of patients trust us for their healthcare. Here's what a few have to say."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-teal-900/8 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <StarRating />

                {/* Large opening quote mark */}
                <div className="font-display text-6xl text-teal-100 leading-none mb-1 select-none">"</div>

                <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-6 -mt-4">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats row */}
        <Reveal delay={280}>
          <div className="mt-10 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-10 text-center">
            {[
              ['⭐', '4.9 / 5',  'Average Rating'],
              ['💬', '500+',     'Patient Reviews'],
              ['😊', '5,000+',   'Happy Patients'],
            ].map(([emoji, num, label]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-3xl">{emoji}</span>
                <div>
                  <div className="font-display text-2xl font-black text-gray-900">{num}</div>
                  <div className="text-xs text-gray-400 font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
