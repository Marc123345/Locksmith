import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import BroadneckPage from '@/views/locations/BroadneckPage'

const location = getLocationBySlug('broadneck')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Broadneck, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/broadneck' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/broadneck',
  },
}

export default function Page() {
  return <BroadneckPage />
}
