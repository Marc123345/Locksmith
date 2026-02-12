import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import CrownsvillePage from '@/views/locations/CrownsvillePage'

const location = getLocationBySlug('crownsville')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Crownsville, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://asecureannapolislocksmith.com/locations/crownsville' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://asecureannapolislocksmith.com/locations/crownsville',
  },
}

export default function Page() {
  return <CrownsvillePage />
}
