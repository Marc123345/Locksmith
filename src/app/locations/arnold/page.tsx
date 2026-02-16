import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import ArnoldPage from '@/views/locations/ArnoldPage'

const location = getLocationBySlug('arnold')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Arnold, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/arnold' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/arnold',
  },
}

export default function Page() {
  return <ArnoldPage />
}
