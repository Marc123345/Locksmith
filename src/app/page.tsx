import type { Metadata } from 'next'
import HomePage from '@/views/HomePage'

export const metadata: Metadata = {
  title: 'Professional Locksmith Services Annapolis MD - 24/7 Emergency Lockout & Lock Repair - Call (410) 849-6069',
  description: 'Licensed & insured locksmith in Annapolis, MD. Residential, commercial & automotive locksmith services. Emergency lockouts, rekeying, smart locks & more. Call (410) 849-6069.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Professional Locksmith Services Annapolis MD - 24/7 Emergency Lockout & Lock Repair',
    description: 'Licensed & insured locksmith in Annapolis, MD. Residential, commercial & automotive locksmith services. Emergency lockouts, rekeying, smart locks & more. Call (410) 849-6069.',
    url: '/',
    type: 'website',
  },
}

export default function Page() {
  return <HomePage />
}
