import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('accessToken')?.value

  const { pathname } = request.nextUrl

  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register')
  const isProtectedPage = pathname.startsWith('/userProfile') || pathname.startsWith('/dashboard') 

  if (!token && isProtectedPage) {
    
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (token && isAuthPage) {
    
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Otherwise, allow
  return NextResponse.next()
}

export const config = {
  matcher: ['/login', '/register', '/dashboard'], 
}

