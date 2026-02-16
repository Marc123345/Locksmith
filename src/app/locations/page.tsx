import type { Metadata } from 'next'
import LocationsPage from '@/views/LocationsPage'

export const metadata: Metadata = {
  title: 'Service Areas | A Secure Annapolis Locksmith',
  description: 'Find professional locksmith services in your area. We serve Annapolis, Severna Park, Arnold, Edgewater, and surrounding Anne Arundel County communities.',
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/locations' },
}

export default function Page() {
  return <LocationsPage />
}
