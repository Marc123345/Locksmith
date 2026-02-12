import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import ParolePage from '@/views/locations/ParolePage'

const location = getLocationBySlug('parole')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Parole, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://asecureannapolislocksmith.com/locations/parole' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://asecureannapolislocksmith.com/locations/parole',
  },
}

export default function Page() {
  return <ParolePage />
}
