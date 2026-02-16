import type { Metadata } from 'next'
import AboutPage from '@/views/AboutPage'

export const metadata: Metadata = {
  title: 'About Us | A Secure Annapolis Locksmith',
  description: 'Learn about A Secure Annapolis Locksmith - your trusted local locksmith since 2010. Licensed, bonded & insured.',
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/about' },
}

export default function Page() {
  return <AboutPage />
}
