'use client'
import { useState } from 'react'

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {role: 'ai', text: 'Welcome to Abuja Restaurant! How can I help you today?'}
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if(!input.trim()) return
    const newMessages = [...messages, {role: 'user', text: input}]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message: input})
    })
    const data = await res.json()
    setMessages([...newMessages, {role: 'ai', text: data.reply}])
    setLoading(false)
  }

  return (
    <div style={{width: '100%', maxWidth: 600, border: '1px solid #334155', borderRadius: 12, padding: 20, background: '#1e293b'}}>
      <h2 style={{marginTop: 0}}>Abuja Restaurant AI</h2>
      <div style={{height: 400, overflowY: 'auto', border: '1px solid #334155', borderRadius: 8, padding: 10, marginBottom: 10, background: '#0f172a'}}>
        {messages.map((m, i) => (
          <div key={i} style={{textAlign: m.role === 'user' ? 'right' : 'left', margin: '8px 0'}}>
            <span style={{background: m.role === 'user' ? '#2563eb' : '#334155', padding: '8px 12px', borderRadius: 8, display: 'inline-block', maxWidth: '80%'}}>
              {m.text}
            </span>
          </div>
        ))}
        {loading && <p style={{opacity: 0.7}}>AI is typing...</p>}
      </div>
      <div style={{display: 'flex', gap: 10}}>
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about menu, reservations..." 
          style={{flex: 1, padding: 10, borderRadius: 8, border: '1px solid #334155', background: '#0f172a', color: '#fff', outline: 'none'}}
        />
        <button onClick={sendMessage} style={{padding: '10px 20px', borderRadius: 8, border: 'none', background: '#2563eb', color: '#fff', cursor: 'pointer'}}>
          Send
        </button>
      </div>
    </div>
  )
}