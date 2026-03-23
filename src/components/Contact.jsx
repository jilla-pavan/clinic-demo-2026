import { CLINIC } from '../data'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

const INFO_ITEMS = [
  {
    label: 'Phone',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    value: CLINIC.phone,
    href: `tel:${CLINIC.phoneRaw}`,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    label: 'Address',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    value: CLINIC.address,
    href: null,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    label: 'Clinic Hours',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: `${CLINIC.hours.weekday}\n${CLINIC.hours.weekend}`,
    href: null,
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          tag="Get In Touch"
          title={<>Visit Us or Book<br /><span className="text-teal-600">an Appointment</span></>}
          subtitle="Conveniently located in Malkajgiri. Walk in any time or call ahead — we're always here for you."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Left — contact info */}
          <Reveal>
            <div className="space-y-4">
              {INFO_ITEMS.map((item) => {
                const inner = (
                  <div className={`flex items-start gap-4 p-4 bg-gray-50 hover:bg-white border border-gray-100 hover:border-teal-100 rounded-2xl group hover:shadow-md transition-all`}>
                    <div className={`w-11 h-11 ${item.iconBg} ${item.iconColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-800 font-medium whitespace-pre-line leading-relaxed">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href}>{inner}</a>
                ) : (
                  <div key={item.label}>{inner}</div>
                )
              })}

              {/* WhatsApp button */}
              <a
                href={`https://wa.me/${CLINIC.phoneRaw.replace('+', '')}?text=Hello%20Doctor%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-base rounded-2xl shadow-xl shadow-green-500/25 hover:shadow-green-500/45 hover:-translate-y-1 transition-all"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp — Book Appointment
              </a>
            </div>
          </Reveal>

          {/* Right — map */}
          <Reveal delay={150}>
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl" style={{ height: 420 }}>
              <iframe
                src={CLINIC.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Sai Clinic Location"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
