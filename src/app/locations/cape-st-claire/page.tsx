import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import CapeStClairePage from '@/views/locations/CapeStClairePage'

const location = getLocationBySlug('cape-st-claire')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Cape St. Claire, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/cape-st-claire' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/cape-st-claire',
  },
}

export default function Page() {
  return <CapeStClairePage />
}
