import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import LostCarKeysPage from '@/views/services/LostCarKeysPage'

const service = getServiceBySlug('lost-car-keys')

export const metadata: Metadata = {
  title: service?.metaTitle ?? 'Lost Car Key Replacement in Annapolis, MD | A Secure Annapolis Locksmith',
  description: service?.metaDescription,
  alternates: { canonical: 'https://asecureannapolislocksmith.com/services/lost-car-keys' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: 'https://asecureannapolislocksmith.com/services/lost-car-keys',
  },
}

export default function Page() {
  return <LostCarKeysPage />
}
