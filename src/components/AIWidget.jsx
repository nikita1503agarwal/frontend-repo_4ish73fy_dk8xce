import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AIWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi, I'm your AI guide. Ask me about Meezab's skills, projects, or experience." }
  ])

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const panelRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const send = async () => {
    if (!input.trim()) return
    const userMessage = { role: 'user', content: input }
    setMessages((m) => [...m, userMessage])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch(`${backend}/api/chat`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.content, history: [] })
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Sorry, the AI is unavailable right now.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-600 to-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.5)] animate-pulse text-white text-xl">
        ✨
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-24 right-5 z-40 w-[360px] max-w-[92vw]">
            <div ref={panelRef} className="rounded-2xl backdrop-blur bg-black/60 border border-white/10 overflow-hidden">
              <div className="px-4 py-3 text-sm text-slate-300 border-b border-white/10">AI Assistant</div>
              <div className="max-h-[280px] overflow-y-auto p-3 space-y-2">
                {messages.map((m, i) => (
                  <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`${m.role === 'user' ? 'bg-cyan-500/20 text-cyan-100' : 'bg-white/5 text-slate-200'} inline-block px-3 py-2 rounded-xl border border-white/10`}>{m.content}</div>
                  </div>
                ))}
                {loading && <div className="text-slate-400 text-sm">Thinking…</div>}
              </div>
              <div className="p-3 flex gap-2">
                <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none text-white placeholder:text-slate-500" placeholder="Ask about skills, projects…" />
                <button onClick={send} className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30 border border-white/10 text-white">Send</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
