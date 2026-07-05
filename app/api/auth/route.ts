import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Simple password gate authentication
// Password is set to the original "mpihub2024"
const VALID_PASSWORD = 'mpihub2024'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    if (password === VALID_PASSWORD) {
      // Set auth cookie
      const cookieStore = await cookies()
      cookieStore.set('mpi_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}

export async function DELETE() {
  // Logout - clear auth cookie
  const cookieStore = await cookies()
  cookieStore.delete('mpi_auth')
  
  return NextResponse.json({ success: true })
}

export async function GET() {
  // Check auth status
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('mpi_auth')
  
  if (authCookie?.value === 'authenticated') {
    return NextResponse.json({ authenticated: true })
  }
  
  return NextResponse.json({ authenticated: false }, { status: 401 })
}
