import type { Metadata } from 'next'
import PrivacyPage from '@/views/PrivacyPage'

export const metadata: Metadata = {
  title: 'Privacy Policy | A Secure Annapolis Locksmith',
  description: 'Read our privacy policy to understand how A Secure Annapolis Locksmith protects and handles your personal information and data.',
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/privacy' },
}

export default function Page() {
  return <PrivacyPage />
}
