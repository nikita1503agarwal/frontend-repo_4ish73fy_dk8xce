import { useEffect, useRef } from 'react'

const techLabels = [
  // Frontend
  'React','Next.js','HTML5','CSS3','TypeScript','JavaScript','TailwindCSS','Sass','Less','CSS Modules','Styled-components',
  // Backend
  'NodeJS','Express.js','REST APIs','SSR','Full Stack Architecture',
  // AI & IDEs
  'ChatGPT','Claude','Deepseek','Gemini','Kimi','Workik','Cody','Firebase Studio AI','Cursor IDE','Windsurf IDE','Trae IDE','Void IDE','Google AI Studio','Google Labs','Stitch','Lovable','Builder.io','OpenRouter','Vercel-V0',
  // DB
  'MongoDB','Firebase','Firestore','LocalStorage',
  // Version control / tools
  'Git','GitHub','Vercel','Netlify','Postman','Figma','VS Code','IntelliJ IDEA',
  // Mobile / Game
  'PWA','Android Studio (Java)','Unity (Visual Scripting)','Unreal Engine (Blueprints)'
]

export default function TechGlobe() {
  const canvasRef = useRef(null)
  const DPR = Math.min(window.devicePixelRatio || 1, 2)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = canvas.clientWidth * DPR
      canvas.height = canvas.clientHeight * DPR
    }
    resize()
    window.addEventListener('resize', resize)

    const radius = () => Math.min(canvas.width, canvas.height) * 0.35

    const points = techLabels.map((label, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / techLabels.length) // fibonacci-like distribution
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5)
      return { label, phi, theta, size: 10 }
    })

    let t = 0
    const loop = () => {
      t += 0.002
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // globe core
      ctx.beginPath()
      ctx.arc(canvas.width/2, canvas.height/2, radius(), 0, Math.PI*2)
      ctx.strokeStyle = 'rgba(56,189,248,0.15)'
      ctx.lineWidth = 1
      ctx.stroke()

      points.forEach((p) => {
        const tilt = 0.35
        const rot = t
        const x3d = Math.sin(p.phi) * Math.cos(p.theta + rot)
        const y3d = Math.cos(p.phi + tilt)
        const z3d = Math.sin(p.phi) * Math.sin(p.theta + rot)
        const scale = 0.5 + (z3d + 1) / 2 // 0..1 depth

        const x = canvas.width/2 + x3d * radius()
        const y = canvas.height/2 + y3d * radius()

        const fontSize = 10 * DPR + scale * 8 * DPR
        ctx.font = `${fontSize}px Inter, system-ui, -apple-system, sans-serif`
        ctx.fillStyle = `rgba(${150 + 80*scale}, ${220 - 40*scale}, 255, ${0.55 + 0.25*scale})`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'

        ctx.save()
        ctx.translate(x, y)
        ctx.scale(1 + scale * 0.05, 1 + scale * 0.05)
        ctx.fillText(p.label, 0, 0)
        ctx.restore()
      })

      raf = requestAnimationFrame(loop)
    }

    loop()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(34,211,238,0.12),transparent_35%)]" />
    </div>
  )
}
