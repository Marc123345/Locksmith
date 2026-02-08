import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import BayRidgePage from '@/views/locations/BayRidgePage'

const location = getLocationBySlug('bay-ridge')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Bay Ridge, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/bay-ridge' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/bay-ridge',
  },
}

export default function Page() {
  return <BayRidgePage />
}
