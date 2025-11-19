import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-cyan-300/90 tracking-wide uppercase text-xs mb-4">Full Stack & Application Developer</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-blue-400">
            Meezab Momin
          </h1>
          <p className="mt-6 text-slate-300 text-lg max-w-2xl">
            Building immersive web experiences, powerful AI tools, and modern applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-fuchsia-500/20 text-fuchsia-200 border border-fuchsia-500/30 hover:bg-fuchsia-500/30 transition-colors">Contact Me</a>
            <a href="/resume.pdf" className="px-5 py-2.5 rounded-full bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors">Download Resume</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
