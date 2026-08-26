import { NextResponse } from 'next/server'

export async function POST(req) {
  const { message } = await req.json()
  
  const reply = `Hello! This is Abuja Restaurant AI. 
  You said: "${message}"
  I can help you with our menu, reservations, and orders. What do you need?`
  
  return NextResponse.json({ reply })
}