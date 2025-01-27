import { NextRequest, NextResponse } from "next/server";

import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-US', 'ar-SA']
let defaultLocale = 'en-US'
 
match(languages, locales, defaultLocale) // -> 'en-US'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // If no language is specified, redirect to en-US
  if (pathname === '/ts_next_s3_providers_comparison' || pathname === '/ts_next_s3_providers_comparison/') {
    return NextResponse.redirect(new URL('/ts_next_s3_providers_comparison/en-US', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|_next/static|_next/image|assets|favicon.ico|site.webmanifest).*)',
  ],
}
