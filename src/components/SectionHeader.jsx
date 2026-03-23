import Reveal from './Reveal'

export default function SectionHeader({ tag, title, subtitle, center = true }) {
  return (
    <Reveal className={center ? 'text-center mb-14' : 'mb-10'}>
      <span className="inline-block bg-teal-50 text-teal-700 border border-teal-200 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
        {tag}
      </span>
      <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 text-base leading-relaxed ${center ? 'max-w-xl mx-auto' : 'max-w-lg'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
