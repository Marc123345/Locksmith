import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import SevernaParkPage from '@/views/locations/SevernaParkPage'

const location = getLocationBySlug('severna-park')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Severna Park, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/severna-park' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/severna-park',
  },
}

export default function Page() {
  return <SevernaParkPage />
}
