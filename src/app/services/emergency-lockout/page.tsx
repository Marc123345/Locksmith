import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import EmergencyLockoutPage from '@/views/services/EmergencyLockoutPage'

const service = getServiceBySlug('emergency-lockout')

export const metadata: Metadata = {
  title: service?.metaTitle ?? 'Emergency Lockout Service in Annapolis, MD | A Secure Annapolis Locksmith',
  description: service?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/services/emergency-lockout' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/services/emergency-lockout',
  },
}

export default function Page() {
  return <EmergencyLockoutPage />
}
