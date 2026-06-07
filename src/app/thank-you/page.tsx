import type { Metadata } from 'next'
import ThankYouPage from '@/views/ThankYouPage'

export const metadata: Metadata = {
  title: 'Thank You | A Secure Annapolis Locksmith',
  description: 'Thank you for contacting A Secure Annapolis Locksmith. We have received your message and will get back to you shortly.',
  robots: { index: false, follow: true },
}

export default function Page() {
  return <ThankYouPage />
}
