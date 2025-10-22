import { kv } from '@vercel/kv'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const views = await kv.get('views')
    return NextResponse.json({ views: views || 0 })
  } catch (error) {
    return new Response('Error fetching views', { status: 500 })
  }
}

export async function POST() {
  try {
    const views = await kv.incr('views')
    return NextResponse.json({ views })
  } catch (error) {
    return new Response('Error incrementing views', { status: 500 })
  }
}
