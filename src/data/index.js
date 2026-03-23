export const CLINIC = {
  name: 'Sri Sai Clinic',
  tagline: 'Trusted Healthcare for You and Your Family',
  subtitle: 'Experienced doctor providing quality, affordable care in the heart of Malkajgiri, Hyderabad.',
  phone: '+91 90000 00000',
  phoneRaw: '+919000000000',
  address: 'Near Main Bus Stop, Malkajgiri,\nHyderabad, Telangana – 500047',
  hours: {
    weekday: 'Mon – Sat: 9:00 AM – 9:00 PM',
    weekend: 'Sunday: 9:00 AM – 1:00 PM',
  },
  since: '2010',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1!2d78.5240!3d17.4531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a5a5b1e0a1d%3A0xa5a5b1e0a1d3b9a5!2sMalkajgiri%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
}

export const SERVICES = [
  {
    id: 'consultation',
    emoji: '🩺',
    title: 'General Consultation',
    desc: 'Professional diagnosis and treatment for common ailments, infections, and general health concerns for all age groups.',
    tag: 'Most Popular',
    gradient: 'from-teal-400 to-emerald-500',
    lightBg: 'bg-teal-50',
    border: 'border-teal-100',
    textColor: 'text-teal-700',
  },
  {
    id: 'fever',
    emoji: '🌡️',
    title: 'Fever & Cold Treatment',
    desc: 'Swift management of viral and bacterial infections, flu, cough, throat infections, and respiratory conditions.',
    tag: null,
    gradient: 'from-orange-400 to-rose-500',
    lightBg: 'bg-orange-50',
    border: 'border-orange-100',
    textColor: 'text-orange-700',
  },
  {
    id: 'diabetes',
    emoji: '❤️',
    title: 'Diabetes & BP Checkup',
    desc: 'Ongoing monitoring, medication guidance, and lifestyle advice for managing diabetes and hypertension long-term.',
    tag: null,
    gradient: 'from-blue-400 to-indigo-500',
    lightBg: 'bg-blue-50',
    border: 'border-blue-100',
    textColor: 'text-blue-700',
  },
  {
    id: 'checkup',
    emoji: '🛡️',
    title: 'Preventive Health Checkups',
    desc: 'Comprehensive full-body assessments to detect early warning signs and keep you proactively healthy.',
    tag: 'Recommended',
    gradient: 'from-violet-400 to-purple-500',
    lightBg: 'bg-violet-50',
    border: 'border-violet-100',
    textColor: 'text-violet-700',
  },
]

export const WHY_CHOOSE_US = [
  {
    emoji: '🎓',
    title: 'Experienced Doctor',
    desc: '15+ years of expertise in general medicine, chronic disease management, and family healthcare.',
    color: 'bg-teal-500',
  },
  {
    emoji: '💰',
    title: 'Affordable Care',
    desc: 'Transparent, fair pricing — quality healthcare should never be out of reach for your family.',
    color: 'bg-blue-500',
  },
  {
    emoji: '🤝',
    title: 'Friendly & Caring',
    desc: 'We treat every patient like family — with warmth, empathy, and the individual attention you deserve.',
    color: 'bg-rose-500',
  },
  {
    emoji: '⚡',
    title: 'Quick Service',
    desc: 'Streamlined processes and minimal wait times so you get care fast and get back to your day.',
    color: 'bg-amber-500',
  },
]

export const TESTIMONIALS = [
  {
    text: 'Doctor garu is extremely experienced and patient. My father has been getting his BP and diabetes checkups here for 5 years. The fees are very reasonable and we never feel rushed. Highly recommend to everyone!',
    name: 'Ramesh Reddy',
    location: 'Malkajgiri, Hyderabad',
    initials: 'RR',
    avatarGradient: 'from-teal-400 to-emerald-500',
  },
  {
    text: 'I brought my son here with a high fever. The doctor diagnosed quickly and the treatment worked within 2 days! Very clean clinic, friendly staff, and easy to reach by phone. Will always come back here.',
    name: 'Priya Sharma',
    location: 'Neredmet, Hyderabad',
    initials: 'PS',
    avatarGradient: 'from-blue-400 to-indigo-500',
  },
  {
    text: 'Best clinic in Malkajgiri without a doubt. Doctor takes time to explain everything clearly and never prescribes unnecessary medicines. Our entire family — from kids to grandparents — consults here regularly.',
    name: 'Sunita Verma',
    location: 'Kushaiguda, Hyderabad',
    initials: 'SV',
    avatarGradient: 'from-amber-400 to-orange-500',
  },
]

export const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us',   href: '#why-us' },
  { label: 'Reviews',  href: '#reviews' },
  { label: 'Contact',  href: '#contact' },
]
