import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import EdgewaterBeachPage from '@/views/locations/EdgewaterBeachPage'

const location = getLocationBySlug('edgewater-beach')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Edgewater Beach, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/edgewater-beach' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/edgewater-beach',
  },
}

export default function Page() {
  return <EdgewaterBeachPage />
}
