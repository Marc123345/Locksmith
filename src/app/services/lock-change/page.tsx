import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import LockChangePage from '@/views/services/LockChangePage'

const service = getServiceBySlug('lock-change')

export const metadata: Metadata = {
  title: service?.metaTitle ?? 'Lock Change Services in Annapolis, MD | A Secure Annapolis Locksmith',
  description: service?.metaDescription,
  alternates: { canonical: 'https://asecureannapolislocksmith.com/services/lock-change' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: 'https://asecureannapolislocksmith.com/services/lock-change',
  },
}

export default function Page() {
  return <LockChangePage />
}
