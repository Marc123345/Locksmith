import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import LockRepairPage from '@/views/services/LockRepairPage'

const service = getServiceBySlug('lock-repair')

export const metadata: Metadata = {
  title: service?.metaTitle ?? 'Lock Repair in Annapolis, MD | A Secure Annapolis Locksmith',
  description: service?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/services/lock-repair' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/services/lock-repair',
  },
}

export default function Page() {
  return <LockRepairPage />
}
