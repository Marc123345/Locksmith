import type { Metadata } from 'next'
import Script from 'next/script'
import { ClientLayout } from './client-layout'
import '../index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.asecureannapolislocksmith.com'),
  title: 'A Secure Annapolis Locksmith - Professional 24/7 Emergency Locksmith Services in Annapolis, MD',
  description: 'Licensed & insured locksmith services in Annapolis. Residential, commercial & automotive locksmith solutions. Emergency lockouts, rekeying, security systems & more.',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  authors: [{ name: 'A Secure Annapolis Locksmith' }],
  openGraph: {
    type: 'website',
    url: 'https://www.asecureannapolislocksmith.com/',
    title: 'A Secure Annapolis Locksmith - Professional 24/7 Emergency Locksmith Services in Annapolis, MD',
    description: 'Licensed & insured locksmith services in Annapolis. Residential, commercial & automotive locksmith solutions. Emergency lockouts, rekeying, security systems & more.',
    images: ['https://res.cloudinary.com/dadgglcaq/image/upload/v1746542096/ArewVfi_mxo9i0.jpg'],
    siteName: 'A Secure Annapolis Locksmith',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Secure Annapolis Locksmith - Professional 24/7 Emergency Locksmith Services in Annapolis, MD',
    description: 'Licensed & insured locksmith services in Annapolis. Residential, commercial & automotive locksmith solutions. Emergency lockouts, rekeying, security systems & more.',
    images: ['https://res.cloudinary.com/dadgglcaq/image/upload/v1746542096/ArewVfi_mxo9i0.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://i.imgur.com/VfpMzbE.png',
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
