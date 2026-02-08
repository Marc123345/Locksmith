import type { Metadata } from 'next'
import TermsPage from '@/views/TermsPage'

export const metadata: Metadata = {
  title: 'Terms of Service | A Secure Annapolis Locksmith',
  description: 'Read our terms of service for locksmith services in Annapolis, MD.',
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/terms' },
}

export default function Page() {
  return <TermsPage />
}
