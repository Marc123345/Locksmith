import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import AnnapolisPage from '@/views/locations/AnnapolisPage'

const location = getLocationBySlug('annapolis')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Annapolis, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/annapolis' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/annapolis',
  },
}

export default function Page() {
  return <AnnapolisPage />
}
