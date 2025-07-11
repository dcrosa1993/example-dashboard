import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth')?.value

  if (!authCookie &&
      (request.nextUrl.pathname.startsWith('/report') ||
       request.nextUrl.pathname.startsWith('/admin'))
  ) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (authCookie && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/report/sales', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/report/:path*', '/admin/:path*', '/login']
}
