import type { Metadata } from 'next'
import ServicesPage from '@/views/ServicesPage'

export const metadata: Metadata = {
  title: 'Locksmith Services | A Secure Annapolis Locksmith',
  description: 'Professional locksmith services in Annapolis, MD. Residential, commercial & automotive solutions. Lock changes, rekeying, car key programming & emergency lockouts.',
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/services' },
}

export default function Page() {
  return <ServicesPage />
}
