import type { Metadata } from 'next'
import Script from 'next/script'
import ContactPage from '@/views/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us | A Secure Annapolis Locksmith',
  description: 'Contact A Secure Annapolis Locksmith for professional locksmith services. Call (410) 849-6069 for 24/7 emergency service.',
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/contact' },
}

export default function Page() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-16480759104/PhoRCNTilY4cEMDa0bI9', 'value': 1.0, 'currency': 'USD'});`}
      </Script>
      <ContactPage />
    </>
  )
}
