import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const trail = useRef([])
  const DPR = Math.min(window.devicePixelRatio || 1, 2)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      dot.style.transform = `translate(${x - 2}px, ${y - 2}px)`
      ring.style.transform = `translate(${x - 12}px, ${y - 12}px)`

      trail.current.push({ x, y, t: Date.now() })
      if (trail.current.length > 20) trail.current.shift()
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .cursor-hover')) {
        ring.style.transform += ' scale(1.6)'
        ring.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.6), 0 0 60px rgba(217, 70, 239, 0.4)'
      } else {
        ring.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.3)'
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="fixed z-50 w-1.5 h-1.5 rounded-full bg-cyan-300 pointer-events-none mix-blend-screen" />
      <div ref={ringRef} className="fixed z-50 w-6 h-6 rounded-full border border-cyan-300/70 pointer-events-none mix-blend-screen" style={{ boxShadow: '0 0 12px rgba(56, 189, 248, 0.3)' }} />
    </>
  )
}
