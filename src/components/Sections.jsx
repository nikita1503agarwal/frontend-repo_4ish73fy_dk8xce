import { motion } from 'framer-motion'

export function About() {
  const items = [
    '50+ global client projects',
    'Web, mobile, and game development',
    'Expertise in React, Next.js, Node.js, MongoDB, and AI tools',
    'Strong UI/UX understanding',
    'Experience building portfolio sites, resume builders, and full-stack apps',
    'Built AI assistants, chat apps, and custom tools',
    'Fast learner with deep technical research skills',
    'Active collaborator on GitHub'
  ]
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">About Me</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-4 rounded-xl border border-white/10 bg-white/5 text-slate-200">
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  const groups = [
    {
      title: 'Frontend',
      items: ['React','Next.js','TailwindCSS','TypeScript','JavaScript','HTML5','CSS3','Styled Components','Sass / Less','CSS Modules']
    },
    {
      title: 'Backend',
      items: ['Node.js','Express.js','REST APIs','SSR','Full Stack Architecture']
    },
    {
      title: 'AI Tools & IDEs',
      items: ['ChatGPT','Claude','Deepseek','Gemini','Kimi','Workik','Cody','Firebase Studio AI','Cursor IDE','Windsurf IDE','Trae IDE','Void IDE','Google AI Studio','Google Labs','Stitch','Lovable','Builder.io','OpenRouter','Vercel-V0']
    },
    {
      title: 'Database',
      items: ['MongoDB','Firebase','Firestore','LocalStorage']
    },
    {
      title: 'Others',
      items: ['Git','GitHub','Vercel','Netlify','Postman','Figma','VS Code','IntelliJ','PWA','Android Studio','Unity','Unreal Engine']
    }
  ]

  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">Skills</motion.h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g, gi) => (
            <motion.div key={gi} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.06 }} className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-300">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full text-sm text-slate-200 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors cursor-hover">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  const projects = [
    {
      name: 'UniToolBox', period: '2024/2–2024/10',
      bullets: [
        'Full-stack toolkit with 30+ free tools',
        'Next.js + React + TypeScript + Tailwind',
        'AI features (summarizer, translator)',
        'SSR for SEO',
        'Deployed on Vercel',
        'Focus on privacy & accessibility',
        'Ad-supported monetization',
      ]
    },
    {
      name: 'Anonymous Messenger', period: '2022/9–2023/6',
      bullets: [
        'Android chat app', 'Java + XML', 'Firebase Realtime DB', 'Live messaging', 'Clean responsive UI'
      ]
    },
    {
      name: 'Hustle Finder', period: '2023/5–2023/11',
      bullets: [
        '600+ side hustles', 'Search + pagination', 'Next.js, React, TailwindCSS', 'Adsterra integration', 'Bookmarks + theme system'
      ]
    },
    {
      name: 'Matty AI', period: '2024/5–2024/8',
      bullets: [
        'Chat-based AI companion', 'Node.js + Express backend', 'No login', 'Voice input, file share, emoji support', 'Anonymous, private experience'
      ]
    }
  ]

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">Projects</motion.h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30, rotateX: -8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} whileHover={{ y: -6, rotateX: 2 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 110, damping: 18 }} className="group perspective">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                  <span className="text-xs text-slate-400">{p.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                  {p.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2 items-start"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">Education</motion.h2>
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white">NIMS University — BCA (GPA: 8)</h3>
              <p className="text-slate-400">2022–2025</p>
            </div>
          </div>
          <ul className="mt-4 grid md:grid-cols-2 gap-2 text-slate-300 text-sm">
            <li>Data Structures, Algorithms, OS, CN, Web & App Dev</li>
            <li>Guided final-year projects for 20+ batchmates</li>
            <li>Presented in Ideathon</li>
            <li>Top 5% of class</li>
            <li>Dean’s List (3 years)</li>
            <li>Active open-source contributor</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">Contact</motion.h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-6 text-slate-300">
            <p className="mb-2"><span className="text-slate-400">Name:</span> Meezab Momin</p>
            <p className="mb-2"><span className="text-slate-400">Email:</span> <a href="mailto:mmm045762s@gmail.com" className="text-cyan-300 hover:underline">mmm045762s@gmail.com</a></p>
            <p className="mb-2"><span className="text-slate-400">Phone:</span> +91 8983135250</p>
            <p className="mb-6"><span className="text-slate-400">Location:</span> Maharashtra, IN</p>
            <div className="flex gap-3">
              <a className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:bg-white/10" href="#" target="_blank" rel="noreferrer">GitHub</a>
              <a className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:bg-white/10" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:bg-white/10" href="#" target="_blank" rel="noreferrer">Portfolio</a>
            </div>
          </div>
          <form className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/60 outline-none text-white placeholder:text-slate-400" placeholder="Your name" />
              <input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/60 outline-none text-white placeholder:text-slate-400" placeholder="Email" type="email" />
            </div>
            <input className="mt-4 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/60 outline-none text-white placeholder:text-slate-400" placeholder="Subject" />
            <textarea rows={5} className="mt-4 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-400/60 outline-none text-white placeholder:text-slate-400" placeholder="Message" />
            <button type="button" className="mt-4 px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 border border-white/10 text-white hover:from-fuchsia-500/40 hover:to-cyan-500/40">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
