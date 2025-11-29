import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    const { pathname, search } = url
    const hostname = request.headers.get('host') || ''

    // 1. Force non-www
    if (hostname.startsWith('www.')) {
        const newHostname = hostname.replace('www.', '')
        return NextResponse.redirect(
            new URL(`https://${newHostname}${pathname}${search}`, request.url),
            301
        )
    }

    // 2. Force HTTPS (Optional: usually handled by Vercel/Netlify/Host, but good as fallback)
    // Note: request.url in middleware might be http even on https in some environments due to proxies.
    // We rely on x-forwarded-proto usually, but Next.js middleware runs on edge.
    // For Vercel/Netlify, this is automatic. We'll focus on the www redirect.

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
