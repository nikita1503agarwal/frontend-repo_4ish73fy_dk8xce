import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handler = () => {
      let current = 'home'
      sections.forEach((s) => {
        const el = document.getElementById(s.id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.33 && rect.bottom >= window.innerHeight * 0.33) {
          current = s.id
        }
      })
      setActive(current)
    }
    handler()
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const onNav = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md/30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-blue-400 text-xl">
          Meezab Momin
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => onNav(s.id)}
              className="relative py-1 hover:text-white transition-colors"
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 rounded-full"
                />
              )}
            </button>
          ))}
        </nav>
        <div className="md:hidden text-slate-300 text-sm">Menu</div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
    </div>
  )
}
