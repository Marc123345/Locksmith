import type { Metadata } from 'next'
import ContactPage from '@/views/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us | A Secure Annapolis Locksmith',
  description: 'Contact A Secure Annapolis Locksmith for professional locksmith services. Call (410) 849-6069 for 24/7 emergency service.',
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/contact' },
}

export default function Page() {
  return <ContactPage />
}
