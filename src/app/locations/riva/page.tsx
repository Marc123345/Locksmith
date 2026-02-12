import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import RivaPage from '@/views/locations/RivaPage'

const location = getLocationBySlug('riva')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Riva, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://asecureannapolislocksmith.com/locations/riva' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://asecureannapolislocksmith.com/locations/riva',
  },
}

export default function Page() {
  return <RivaPage />
}
