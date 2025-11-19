import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import TechGlobe from './components/TechGlobe'
import { About, Skills, Projects, Education, Contact } from './components/Sections'
import AIWidget from './components/AIWidget'
import ScrollProgress from './components/ScrollProgress'

function App() {
  useEffect(() => {
    document.body.classList.add('bg-black')
    return () => document.body.classList.remove('bg-black')
  }, [])

  return (
    <div className="relative text-white">
      <ScrollProgress />
      <CustomCursor />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <section className="relative z-10 py-24">
          <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">3D Tech Stack Globe</h2>
              <p className="mt-3 text-slate-300">A living map of the tools used across web, backend, databases, AI and more. Hover and explore.</p>
            </div>
            <TechGlobe />
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="relative z-10 py-10 text-center text-slate-400">© {new Date().getFullYear()} Meezab Momin — Built with ❤️</footer>
      <AIWidget />
    </div>
  )
}

export default App
