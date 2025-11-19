import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrolled = doc.scrollTop
      const height = doc.scrollHeight - doc.clientHeight
      setProgress(height ? (scrolled / height) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" style={{ width: `${progress}%` }} />
    </div>
  )
}
