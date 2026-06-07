import type { Metadata } from 'next'
import Script from 'next/script'
import ThankYouPage from '@/views/ThankYouPage'

export const metadata: Metadata = {
  title: 'Thank You | A Secure Annapolis Locksmith',
  description: 'Thank you for contacting A Secure Annapolis Locksmith. We have received your message and will get back to you shortly.',
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-16480759104/PhoRCNTilY4cEMDa0bI9', 'value': 1.0, 'currency': 'USD'});`}
      </Script>
      <ThankYouPage />
    </>
  )
}
