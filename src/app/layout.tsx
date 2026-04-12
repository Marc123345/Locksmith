import type { Metadata } from 'next'
import Script from 'next/script'
import { ClientLayout } from './client-layout'
import '../index.css'

export const metadata: Metadata = {
  title: 'A Secure Annapolis Locksmith - Professional Locksmith Services in Annapolis, MD',
  description: 'Licensed & insured locksmith services in Annapolis. Residential, commercial & automotive locksmith solutions. Emergency lockouts, rekeying, security systems & more.',
  keywords: 'locksmith, Annapolis locksmith, residential locksmith, commercial locksmith, automotive locksmith, car lockout, house lockout, lock repair, lock installation, key cutting, key programming',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  authors: [{ name: 'A Secure Annapolis Locksmith' }],
  openGraph: {
    type: 'website',
    url: 'https://www.asecureannapolislocksmith.com/',
    title: 'A Secure Annapolis Locksmith - Professional Locksmith Services in Annapolis, MD',
    description: 'Licensed & insured locksmith services in Annapolis. Residential, commercial & automotive locksmith solutions. Emergency lockouts, rekeying, security systems & more.',
    images: ['https://res.cloudinary.com/dadgglcaq/image/upload/v1746542096/ArewVfi_mxo9i0.jpg'],
    siteName: 'A Secure Annapolis Locksmith',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Secure Annapolis Locksmith - Professional Locksmith Services in Annapolis, MD',
    description: 'Licensed & insured locksmith services in Annapolis. Residential, commercial & automotive locksmith solutions. Emergency lockouts, rekeying, security systems & more.',
    images: ['https://res.cloudinary.com/dadgglcaq/image/upload/v1746542096/ArewVfi_mxo9i0.jpg'],
  },
  alternates: {
    canonical: 'https://www.asecureannapolislocksmith.com/',
  },
  icons: {
    icon: 'https://i.imgur.com/VfpMzbE.png',
  },
  other: {
    'revisit-after': '7 days',
    'ai-content-type': 'business-information',
    'ai-business-type': 'locksmith-service',
    'ai-business-name': 'A Secure Annapolis Locksmith',
    'ai-business-location': 'Annapolis, Maryland, United States',
    'ai-business-services': 'residential-locksmith, commercial-locksmith, automotive-locksmith, emergency-lockout',
    'ai-content-topics': 'locksmith, security, locks, keys, emergency-service',
    'ai-content-purpose': 'business-information, service-description, contact-information',
    'ai-last-updated': '2025-03-24',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://plausible.io" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5FYP20WLRN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5FYP20WLRN');
            gtag('config', 'AW-16480759104');
          `}
        </Script>
        <Script
          src="https://plausible.io/js/pa-WxFh8_UBx64N5Mczv8jH0.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`
            window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
            plausible.init()
          `}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
