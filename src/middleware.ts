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

    // 2. Redirect legacy URLs to new lavage-voiture structure (SEO Migration)
    if (pathname.includes('nettoyage-voiture-')) {
        const newPathname = pathname.replace('nettoyage-voiture-', 'lavage-voiture-')
        return NextResponse.redirect(
            new URL(`${newPathname}${search}`, request.url),
            301
        )
    }

    const serviceRedirects: Record<string, string> = {
        '/nettoyage-interieur-voiture': '/lavage-interieur-voiture',
        '/nettoyage-exterieur-voiture': '/lavage-exterieur-voiture',
        '/nettoyage-complet-voiture': '/lavage-complet-voiture',
        '/prix-nettoyage-voiture-domicile': '/prix-lavage-voiture-domicile',
    }

    if (serviceRedirects[pathname]) {
        return NextResponse.redirect(
            new URL(`${serviceRedirects[pathname]}${search}`, request.url),
            301
        )
    }

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
