import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import EdgewaterPage from '@/views/locations/EdgewaterPage'

const location = getLocationBySlug('edgewater')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Edgewater, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/edgewater' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/edgewater',
  },
}

export default function Page() {
  return <EdgewaterPage />
}
