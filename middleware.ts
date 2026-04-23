import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if accessing dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const authCookie = request.cookies.get('mpi_auth')
    
    // If not authenticated, redirect to login
    if (!authCookie || authCookie.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  // If authenticated and on login page, redirect to dashboard
  if (request.nextUrl.pathname === '/') {
    const authCookie = request.cookies.get('mpi_auth')
    
    if (authCookie?.value === 'authenticated') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
}
