import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import LockRekeyPage from '@/views/services/LockRekeyPage'

const service = getServiceBySlug('lock-rekey')

export const metadata: Metadata = {
  title: service?.metaTitle ?? 'Lock Rekey Services in Annapolis, MD | A Secure Annapolis Locksmith',
  description: service?.metaDescription,
  alternates: { canonical: 'https://asecureannapolislocksmith.com/services/lock-rekey' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: 'https://asecureannapolislocksmith.com/services/lock-rekey',
  },
}

export default function Page() {
  return <LockRekeyPage />
}
