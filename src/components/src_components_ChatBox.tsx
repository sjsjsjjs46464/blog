import { useState } from 'react'

export default function ChatBox() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return
    setLoading(true)
    setMessages([...messages, { role: 'user', content: input }])
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    setMessages([...messages, { role: 'user', content: input }, { role: 'ai', content: data.reply }])
    setInput('')
    setLoading(false)
  }

  return (
    <div className="rounded-lg border p-4 shadow-md bg-white dark:bg-gray-900 max-w-md mx-auto">
      <div className="mb-4 space-y-2 h-60 overflow-auto">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <span className="font-bold">{msg.role === 'user' ? '你' : 'AI'}:</span> {msg.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input className="flex-1 border rounded p-2" value={input} onChange={e => setInput(e.target.value)} disabled={loading}/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={sendMessage} disabled={loading}>发送</button>
      </div>
    </div>
  )
}