import './globals.css'
export const metadata = { title: 'Abuja Restaurant AI', description: 'AI Chatbot for Restaurant' }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}