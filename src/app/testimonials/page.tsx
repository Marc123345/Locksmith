import type { Metadata } from 'next'
import TestimonialsPage from '@/views/TestimonialsPage'

export const metadata: Metadata = {
  title: 'Customer Testimonials & Reviews | A Secure Annapolis Locksmith',
  description: 'Read reviews from our satisfied customers in Annapolis, MD. See why we\'re the trusted locksmith with 4.9 stars and 1000+ happy customers since 2010.',
  alternates: { canonical: 'https://asecureannapolislocksmith.com/testimonials' },
}

export default function Page() {
  return <TestimonialsPage />
}
