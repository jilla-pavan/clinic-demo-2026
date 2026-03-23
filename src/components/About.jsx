import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const CARDS = [
  { emoji: '✅', bg: 'bg-emerald-50 border-emerald-100', title: 'NABH-Aligned Standards',   desc: 'Adhering to national quality benchmarks for patient care and safety.' },
  { emoji: '👨‍⚕️', bg: 'bg-blue-50 border-blue-100',    title: 'Compassionate Physician',   desc: 'Known for truly listening, accurate diagnosis, and clear explanations.' },
  { emoji: '⏱️',  bg: 'bg-amber-50 border-amber-100',   title: 'Minimal Wait Times',        desc: 'Efficient clinic flow so youre seen promptly every single visit.' },
  { emoji: '💊',  bg: 'bg-violet-50 border-violet-100', title: 'Rational Prescriptions',    desc: 'Only what you need — no unnecessary tests, referrals, or medicines.' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left – feature cards */}
        <div className="space-y-4">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <div className={`flex items-start gap-4 p-4 rounded-2xl border ${c.bg} bg-white shadow-sm hover:shadow-md transition-shadow cursor-default`}>
                <div className="text-2xl leading-none mt-0.5">{c.emoji}</div>
                <div>
                  <div className="font-bold text-gray-800 text-sm">{c.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{c.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Right – text */}
        <Reveal delay={100}>
          <SectionHeader
            tag="About Us"
            title={<>Your Trusted Health<br />Partner in <span className="text-teal-600">Malkajgiri</span></>}
            center={false}
          />
          <p className="text-gray-500 leading-relaxed mb-4">
            Sri Sai Clinic has been serving the families of Malkajgiri, Hyderabad for over{' '}
            <strong className="text-gray-700 font-semibold">15 years</strong>. Founded with a simple
            mission — to provide honest, affordable, and accessible healthcare to every patient who
            walks through our door.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Our experienced doctor brings deep expertise in general medicine, chronic disease
            management, and preventive healthcare. We believe every patient deserves to be heard
            and treated with dignity.
          </p>
          <p className="text-gray-500 leading-relaxed mb-6">
            Whether it's a routine checkup, a sudden fever, or managing diabetes or blood pressure —
            we're here for you and your family every step of the way.
          </p>
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-l-4 border-teal-500 px-5 py-4 rounded-r-2xl">
            <p className="text-teal-800 font-medium text-sm italic">
              🌿 "We don't just treat illnesses — we build lasting relationships and guide your
              journey to better health."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
