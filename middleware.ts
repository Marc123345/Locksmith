import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Define the canonical domain (non-www, HTTPS)
  const canonicalDomain = 'asecureannapolislocksmith.com';

  // Check if we need to redirect
  let shouldRedirect = false;

  // Force HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  // Remove www subdomain if present
  if (hostname.startsWith('www.')) {
    url.host = hostname.replace('www.', '');
    shouldRedirect = true;
  }

  // Ensure we're on the canonical domain
  if (hostname !== canonicalDomain && !hostname.includes('localhost') && !hostname.includes('vercel.app')) {
    url.host = canonicalDomain;
    shouldRedirect = true;
  }

  // Perform 301 redirect if needed
  if (shouldRedirect) {
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
