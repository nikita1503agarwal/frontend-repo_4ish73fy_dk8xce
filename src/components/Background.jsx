import { useEffect, useRef } from 'react'

export default function Background() {
  const canvasRef = useRef(null)
  const dots = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = window.innerWidth * DPR
      canvas.height = window.innerHeight * DPR
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }
    resize()
    window.addEventListener('resize', resize)

    const createDots = () => {
      const count = 80
      dots.current = new Array(count).fill(0).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        r: Math.random() * 1.8 + 0.3,
      }))
    }
    createDots()

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 }
    const onMove = (e) => {
      mouse.x = (e.clientX || window.innerWidth / 2) * DPR
      mouse.y = (e.clientY || window.innerHeight / 2) * DPR
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Soft nebula gradient
      const grad = ctx.createRadialGradient(
        mouse.x, mouse.y, 10 * DPR,
        mouse.x, mouse.y, Math.max(canvas.width, canvas.height) * 0.6
      )
      grad.addColorStop(0, 'rgba(137, 207, 240, 0.12)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Stars
      for (const d of dots.current) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(173,216,230,0.6)'
        ctx.fill()
      }

      raf = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-0" />
}
