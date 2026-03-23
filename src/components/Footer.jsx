import { CLINIC, NAV_LINKS } from '../data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-md shadow-teal-500/30">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 13h-2v-4H7v-2h4V5h2v4h4v2h-4v4z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Sri Sai <span className="text-teal-400">Clinic</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-500">
              Providing compassionate, affordable healthcare to families in Malkajgiri and surrounding
              areas since {CLINIC.since}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-teal-400 font-bold text-xs uppercase tracking-widest mb-5">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href={`tel:${CLINIC.phoneRaw}`} className="hover:text-teal-400 transition-colors">
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Malkajgiri, Hyderabad – 500047</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕒</span>
                <span>{CLINIC.hours.weekday}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕒</span>
                <span>{CLINIC.hours.weekend}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-600">
          <span>© {year} Sri Sai Clinic, Malkajgiri, Hyderabad. All rights reserved.</span>
          <span>Designed with ❤️ for your health</span>
        </div>
      </div>
    </footer>
  )
}
