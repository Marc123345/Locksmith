import type { Metadata } from 'next'
import { getServiceBySlug } from '@/data/services'
import CarKeyProgrammingPage from '@/views/services/CarKeyProgrammingPage'

const service = getServiceBySlug('car-key-programming')

export const metadata: Metadata = {
  title: service?.metaTitle ?? 'Car Key Programming in Annapolis, MD | A Secure Annapolis Locksmith',
  description: service?.metaDescription,
  alternates: { canonical: 'https://www.asecureannapolislocksmith.com/services/car-key-programming' },
  openGraph: {
    title: service?.metaTitle,
    description: service?.metaDescription,
    url: 'https://www.asecureannapolislocksmith.com/services/car-key-programming',
  },
}

export default function Page() {
  return <CarKeyProgrammingPage />
}
