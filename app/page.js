import Chatbot from '../components/Chatbot'

export default function Home() {
  return (
    <main style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', minHeight: '100vh'}}>
      <Chatbot />
    </main>
  )
}