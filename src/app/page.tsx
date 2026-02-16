import type { Metadata } from 'next'
import HomePage from '@/views/HomePage'

export const metadata: Metadata = {
  title: 'A Secure Annapolis Locksmith | Same Day Locksmith Services in Annapolis, MD',
  description: 'Licensed & insured locksmith in Annapolis, MD. Residential, commercial & automotive locksmith services. Emergency lockouts, rekeying, smart locks & more. Call (410) 849-6069.',
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/' },
  openGraph: {
    title: 'A Secure Annapolis Locksmith | Same Day Locksmith Services in Annapolis, MD',
    description: 'Licensed & insured locksmith in Annapolis, MD. Emergency lockouts, rekeying, smart locks & more. Call (410) 849-6069.',
    url: 'https://www.asecureannapolislocksmith.com/',
    type: 'website',
  },
}

export default function Page() {
  return <HomePage />
}
