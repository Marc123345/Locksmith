import type { Metadata } from 'next'
import { getLocationBySlug } from '@/data/locations'
import MayoPage from '@/views/locations/MayoPage'

const location = getLocationBySlug('mayo')

export const metadata: Metadata = {
  title: location?.metaTitle ?? 'Locksmith in Mayo, MD | A Secure Annapolis Locksmith',
  description: location?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations/mayo' },
  openGraph: {
    title: location?.metaTitle,
    description: location?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/locations/mayo',
  },
}

export default function Page() {
  return <MayoPage />
}
