import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import HillsmereShoresPage from '@/views/locations/HillsmereShoresPage'

const location = getLocationBySlug('hillsmere-shores')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Hillsmere Shores, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/hillsmere-shores' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/hillsmere-shores',
  },
}

export default function Page() {
  return <HillsmereShoresPage />
}
