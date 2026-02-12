import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import EastportPage from '@/views/locations/EastportPage'

const location = getLocationBySlug('eastport')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Eastport, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://asecureannapolislocksmith.com/locations/eastport' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://asecureannapolislocksmith.com/locations/eastport',
  },
}

export default function Page() {
  return <EastportPage />
}
